let accessToken = null;
const clientID = "3ba2149eb2634989ab3a29a69c94bc48";
const redirectUrl = "http://localhost:3000";

const Spotify = {
	getAccessToken() {
        // console.log("in method");
		if (accessToken !== null) {
            // console.log("not null");
			return accessToken;
		} else {
            // console.log("null");
			// check for access token match
			const accessTokenMatch =
				window.location.href.match(/access_token=([^&]*)/);
			const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

			if (accessTokenMatch && expiresInMatch) {
                console.log("true");
				accessToken = accessTokenMatch[1];
				const expiresIn = Number(expiresInMatch[1]);

				window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
				window.history.pushState("Access Token", null, "/");
                return accessToken;
			} else {
                console.log("false");
                const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
                console.log(`Access Url: ${accessUrl}`);
                window.location.href = accessUrl;
                // console.log(window.location.href.match(/access_token=([^&]*)/));
                return window.location.href.match(/access_token=([^&]*)/);
            }
		}
	},

    search(term) {
        const access_token = Spotify.getAccessToken();

        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(!jsonResponse.tracks) {
                return [];
            } else {
                console.log("Json Response:")
                console.log(jsonResponse);
                return jsonResponse.tracks.items.map(track =>
                ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri,
                    preview: track.preview_url
                }));
            }
        });
    },

    savePlaylist(name, trackUris) {
        console.log(name);
        console.log(trackUris);

        if(!name || !trackUris.length) {
            return;
        }

        const accessToken = Spotify.getAccessToken();
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };
        let userId;

        return fetch('https://api.spotify.com/v1/me', {headers: headers})
            .then(response => response.json())
            .then((jsonResponse) => {
                userId = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    headers: headers,
                    method: "POST",
                    body: JSON.stringify({ name: name })
                }).then(response => response.json())
                .then(jsonResponse => {
                    const playlistID = jsonResponse.id;
                    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, 
                    {
                        headers: headers,
                        method: "POST",
                        body: JSON.stringify({ uris: trackUris })
                    });
                });
            }
        )
    },

};

export default Spotify;

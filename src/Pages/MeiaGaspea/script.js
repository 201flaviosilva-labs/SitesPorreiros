const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCUqmAAgOoVVMpxykzPNCSUw&order=date&type=video&key=AIzaSyBPJKXNylu_U1Ab0N8fSzC30rFCQt2Vu_A";
fetch(url)
	.then(resp => resp.json())
	.then(data => {
		data.items.map(v => {
			console.log(v.id.videoId);
			const iframe = document.createElement("iframe");
			const videoUrl = "https://www.youtube.com/embed/" + v.id.videoId;
			iframe.src = videoUrl;
			document.body.appendChild(iframe);
		});
	})

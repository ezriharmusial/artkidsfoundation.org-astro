// Get Youtube video id
export	function getYouTubeID(source_url){
    if (!source_url)
    return
    let ID;
    let url = source_url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

    if(url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i);
        ID = ID[0];
    } else {
        ID = url
    }

    return ID;
};

// https://www.mixcloud.com/DJBasBijleveld/dj-bas-bijleveld-djs-choice-new-jams-2022-week-45/
// <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?autoplay=1&feed=%2FMonkeyShoulder%2Fdj-jazzy-jeff-monkey-shoulder-mix%2F" frameborder="0" allow="autoplay"></iframe>
// Get MixCloud video id
export	function getMixcloudID(source_url){
    if (!source_url)
    return
    let feed:string

    let url = source_url.match(/^.*mixcloud\.com(.*)$/);

    // If filter is
    if(url[1] !== undefined) {
        feed = encodeURIComponent(url[1])
        return feed;
    }

    return false;
};

// get the Linkcast Type
export function getLinkcastType(url:string) {
	// Youtube rexExp
	let youtubeRE = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	let mixcloudRE = /^.*\mixcloud\.com(.*)$/;
	let spotifyRE = /^.*\spotify\.com(.*)$/;
	let deezerRE = /^.*\deezer\.com(.*)$/;
	let soundcloudRE = /^.*\soundcloud\.com(.*)$/;
	let whatsappRE = /^.*\whatsapp\.com(.*)$/;
	let bandcampRE = /^.*\bandcamp\.com(.*)$/;

	if (url?.match(youtubeRE)) {
		return 'youtube'
	} else if (url?.match(deezerRE)) {
		return 'deezer'
	} else if (url?.match(spotifyRE)) {
		return 'spotify'
	} else if (url?.match(soundcloudRE)) {
		return 'soundcloud'
	} else if (url?.match(mixcloudRE)) {
		return 'mixcloud'
	} else if (url?.match(bandcampRE)) {
		return 'bandcamp'
	} else if (url?.match(whatsappRE)) {
		return 'whatsapp'
	} else {
		return 'image'
	}
}

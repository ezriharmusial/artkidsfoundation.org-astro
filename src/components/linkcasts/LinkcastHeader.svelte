<script lang="ts">
	import { getMixcloudID, getYouTubeID, getLinkcastType } from "@lib/embeds";

	export let linkcast

	export let type = getLinkcastType(linkcast.data?.url) || "image"

	let youtubeUrl = (type == 'youtube') ? getYouTubeID(linkcast.data?.url) : ""
</script>

{#if type == "image"}

<div class="relative">

	<figure class={"aspect-square dark:bg-black/50 light:bg-white/50 flex items-center justify-center overflow-hidden"}>

<img loading="lazy" src={linkcast.data?.image} class={"bg-purple-400 w-full object-fill " + linkcast.data?.imageRatio == 'aspect-square' ? 'aspect-square'
	: linkcast.data?.imageRatio == 'aspect-[9/16]' ? 'aspect-[9/16]'
	: linkcast.data?.imageRatio == 'aspect-[16/9]' ? 'aspect-[16/9]'
	: linkcast.data?.imageRatio == 'aspect-[9/21]' ? 'aspect-[9/21]'
	: linkcast.data?.imageRatio == 'aspect-[21/9]' ? 'aspect-[21/9]'
	: linkcast.data?.imageRatio == 'aspect-[4/3]' ? 'aspect-[4/3]'
	: linkcast.data?.imageRatio == 'aspect-[3/4]' ? 'aspect-[3/4]'
	: linkcast.data?.imageRatio == 'aspect-square' ? 'aspect-square'
	: 'aspect-square'} alt="Post" />

</figure>
{#if getLinkcastType(linkcast?.data?.url) == 'youtube' }
<div class="image-container absolute top-0 h-full w-full flex justify-center items-center">
	<div class="yt-button z-[999]">
		<div class="tri"></div>
	</div>
</div>
{/if}
</div>

{:else if type == 'whatsapp'}
<figure class="relative">
	<img loading="lazy" src={linkcast.data?.image} class={"bg-black/50 w-full object-cover " +

	linkcast.data?.imageRatio == 'aspect-square' ? 'aspect-square'
	: linkcast.data?.imageRatio == 'aspect-[9/16]' ? 'aspect-[9/16]'
	: linkcast.data?.imageRatio == 'aspect-[16/9]' ? 'aspect-[16/9]'
	: linkcast.data?.imageRatio == 'aspect-[9/21]' ? 'aspect-[9/21]'
	: linkcast.data?.imageRatio == 'aspect-[21/9]' ? 'aspect-[21/9]'
	: linkcast.data?.imageRatio == 'aspect-[4/3]' ? 'aspect-[4/3]'
	: linkcast.data?.imageRatio == 'aspect-[3/4]' ? 'aspect-[3/4]'
	: linkcast.data?.imageRatio == 'aspect-square' ? 'aspect-square'
	: 'aspect-square'
}
alt="Post" />
<img src="/images/embeds/join-whatsapp-group.png" class="absolute w-full px-10 top-0 left-0 translate-y-1/2 backdrop-blur-3xl" alt="Join Whatsapp Group" />
</figure>
<!-- <a href={linkcast.data?.url} class="btn btn-primary" title="Open url to join Whatsapp group" target="_blank" rel="noopener noreferrer"> -->
	<!-- Join our Whatsapp group -->
	<!-- </a> -->
	{:else if type == 'youtube'}
	<img loading="lazy" src={linkcast.data?.image} class="bg-black/50" alt="Join our Whatsapp Group" />

	<iframe width="100%" height="100%" class="aspect-[16/9] w-full object-cover" src="https://www.youtube-nocookie.com/embed/{getYouTubeID(youtubeUrl)}?controls=0&autoplay=1" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


	{:else if type == 'bandcamp'}
	<iframe title="bandcamp player" style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=3641460325/size=large/bgcol=333333/linkcol=9a64ff/tracklist=false/transparent=true/" seamless><a href={linkcast.data?.url}>Africa4Africa - Unity Album 2022 by Artkids Foundation</a></iframe>
	{:else if type == 'soundcloud'}
		<img loading="lazy" src={linkcast.data?.image} class={"bg-black/50 w-full " +
			linkcast.data?.imageRatio == 'aspect-square' ? 'aspect-square'
			: linkcast.data?.imageRatio == 'aspect-[9/16]' ? 'aspect-[9/16]'
			: linkcast.data?.imageRatio == 'aspect-[16/9]' ? 'aspect-[16/9]'
			: linkcast.data?.imageRatio == 'aspect-[9/21]' ? 'aspect-[9/21]'
			: linkcast.data?.imageRatio == 'aspect-[21/9]' ? 'aspect-[21/9]'
			: linkcast.data?.imageRatio == 'aspect-[4/3]' ? 'aspect-[4/3]'
			: linkcast.data?.imageRatio == 'aspect-[3/4]' ? 'aspect-[3/4]'
			: 'aspect-square'
		}
		alt="Post" />
		<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/{getYouTubeID(youtubeUrl)}?controls=0" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

		{:else if type == 'spotify'}
		<img loading="lazy" src={linkcast.data?.image} class={"bg-black/50 w-full object-cover " +

		linkcast.data?.imageRatio == 'aspect-square' ? 'aspect-square'
		: linkcast.data?.imageRatio == 'aspect-[9/16]' ? 'aspect-[9/16]'
		: linkcast.data?.imageRatio == 'aspect-[16/9]' ? 'aspect-[16/9]'
		: linkcast.data?.imageRatio == 'aspect-[9/21]' ? 'aspect-[9/21]'
		: linkcast.data?.imageRatio == 'aspect-[21/9]' ? 'aspect-[21/9]'
		: linkcast.data?.imageRatio == 'aspect-[4/3]' ? 'aspect-[4/3]'
		: linkcast.data?.imageRatio == 'aspect-[3/4]' ? 'aspect-[3/4]'
		: 'aspect-square'
	}
	alt="Post" />
	<iframe style="border-radius:12px" src={linkcast.data?.url} width="100%" height="380" frameBorder="0" allowfullscreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Spotify Player"></iframe>


{:else if type == 'mixcloud'}
<div class="aspect-square">
	<iframe width="100%" height="100%"src={"https://www.mixcloud.com/widget/iframe/?autoplay=" + (linkcast.data?.autoplay || 0 ) + "&feed=" + getMixcloudID(linkcast.data?.url)} title="Mixcloud Player" frameborder="0" allow="autoplay"></iframe>
</div>
{/if}

<style>
	.yt-button {
		background: rgba(0,0,0,0.55);
		width: 50px;
		height: 33px;
		border-radius: 5px;
		padding-top: 10px;
	}
	.image-container:hover .yt-button {
		background: #cd201f;
	}
	.tri {
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 7px 0 7px 14px;
		border-color: transparent transparent transparent #ffffff;
		margin: 0 auto;
	}
</style>
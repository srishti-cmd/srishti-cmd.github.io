// const getData=()=>{
//     const pr=fetch("https://youtube138.p.rapidapi.com/auto-complete/?q=desp&hl=en&gl=US",{
//         method:"GET", //optional 
//         headers:{
//             "x-rapidapi-host": "youtube138.p.rapidapi.com",
//             "x-rapidapi-key": "32bfc75422mshc667e53f23428b9p1876f9jsn627282757234",
//         }
//     });
//     pr.then(()=>{
//         const pr2=resp.json();
//         pr2.then((data)=>{
//             console.log(data);
//         })
//     }).catch((err)=>{
//         alert(err.message);
//     })
// }

// getData();

const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
    sidebar.classList.toggle("collapsed");
}


const dummyData=[
    {
        "type": "video",
        "title": "Beyoncé - Chapter 02 \"POOL HALL\" LEVIIS JEANS",
        "videoId": "tqi42wWQ_po",
        "author": "Beyoncé",
        "authorId": "UCuHzBCaKmtaLcRAOoazhCPA",
        "authorUrl": "/channel/UCuHzBCaKmtaLcRAOoazhCPA",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/tqi42wWQ_po/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/tqi42wWQ_po/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/tqi42wWQ_po/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/tqi42wWQ_po/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/tqi42wWQ_po/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/tqi42wWQ_po/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/tqi42wWQ_po/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/tqi42wWQ_po/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "REIIMAGINED @LEVIS",
        "descriptionHtml": "REIIMAGINED @LEVIS",
        "viewCount": 166741,
        "viewCountText": "166K views",
        "published": 1740407719,
        "publishedText": "19 hours ago",
        "lengthSeconds": 16,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "Trump reportedly plans to take control of USPS, dismiss board",
        "videoId": "OpxlOuihWV8",
        "author": "WTVR CBS 6",
        "authorId": "UC9ha3sh4YTCSK83dH6OlWTw",
        "authorUrl": "/channel/UC9ha3sh4YTCSK83dH6OlWTw",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/OpxlOuihWV8/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/OpxlOuihWV8/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/OpxlOuihWV8/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/OpxlOuihWV8/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/OpxlOuihWV8/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/OpxlOuihWV8/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/OpxlOuihWV8/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/OpxlOuihWV8/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "The plan as reported would dissolve the USPS board of directors by executive order and move control of the service under the Department of Commerce.",
        "descriptionHtml": "The plan as reported would dissolve the USPS board of directors by executive order and move control of the service under the Department of Commerce.",
        "viewCount": 159303,
        "viewCountText": "159K views",
        "published": 1740303319,
        "publishedText": "2 days ago",
        "lengthSeconds": 19,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "IS THIS THE BEST BRAWLER EVER?!",
        "videoId": "SD2UiX1jpd8",
        "author": "Brawl Stars",
        "authorId": "UCooVYzDxdwTtGYAkcPmOgOw",
        "authorUrl": "/channel/UCooVYzDxdwTtGYAkcPmOgOw",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/SD2UiX1jpd8/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/SD2UiX1jpd8/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/SD2UiX1jpd8/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/SD2UiX1jpd8/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/SD2UiX1jpd8/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/SD2UiX1jpd8/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/SD2UiX1jpd8/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/SD2UiX1jpd8/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "IMPROVED REWARDS FOR F2P, A FULL RANKED REWORK, TWO NEW BRAWLERS, GADGET CHANGES, AND MORE!\nYOUTOOZ PRE-ORDER: https://youtooz.com/collections/brawl-stars\nFREE SPRAY: https://link.brawlstars.com/?a...",
        "descriptionHtml": "IMPROVED REWARDS FOR F2P, A FULL RANKED REWORK, TWO NEW BRAWLERS, GADGET CHANGES, AND MORE!<br>YOUTOOZ PRE-ORDER: https://youtooz.com/collections/brawl-stars<br>FREE SPRAY: https://link.brawlstars.com/?a...",
        "viewCount": 12913711,
        "viewCountText": "12M views",
        "published": 1740303319,
        "publishedText": "2 days ago",
        "lengthSeconds": 609,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "HIT 3 Teaser : Sarkaar's Laathi | Nani | Sailesh Kolanu | Srinidhi Shetty | in Cinemas May 1st",
        "videoId": "XhW3i2f54BQ",
        "author": "Wall Poster Cinema",
        "authorId": "UC-seBZmnGCMWm9aCHL2WcNQ",
        "authorUrl": "/channel/UC-seBZmnGCMWm9aCHL2WcNQ",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/XhW3i2f54BQ/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/XhW3i2f54BQ/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/XhW3i2f54BQ/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/XhW3i2f54BQ/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/XhW3i2f54BQ/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/XhW3i2f54BQ/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/XhW3i2f54BQ/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/XhW3i2f54BQ/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "Watch #HIT3Teaser : Sarkaar's Laathi on Wall Poster Cinema \n\nTaking charge worldwide from 01-May-2025.\n\nCast & Crew Details\n\nStarring 'Natural Star' as 'Arjun Sarkaar'.\nWriter & Director :...",
        "descriptionHtml": "Watch #HIT3Teaser : Sarkaar&#39;s Laathi on Wall Poster Cinema <br><br>Taking charge worldwide from 01-May-2025.<br><br>Cast &amp; Crew Details<br><br>Starring &#39;Natural Star&#39; as &#39;Arjun Sarkaar&#39;.<br>Writer &amp; Director :...",
        "viewCount": 17508513,
        "viewCountText": "17M views",
        "published": 1740389719,
        "publishedText": "1 day ago",
        "lengthSeconds": 105,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "Hearts2Hearts 하츠투하츠 'The Chase' MV",
        "videoId": "kxUA2wwYiME",
        "author": "SMTOWN",
        "authorId": "UCEf_Bc-KVd7onSeifS3py9g",
        "authorUrl": "/channel/UCEf_Bc-KVd7onSeifS3py9g",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/kxUA2wwYiME/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/kxUA2wwYiME/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/kxUA2wwYiME/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/kxUA2wwYiME/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/kxUA2wwYiME/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/kxUA2wwYiME/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/kxUA2wwYiME/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/kxUA2wwYiME/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "Hearts2Hearts' debut single \"The Chase\" is out!\nListen and download on your favorite plarform: https://Hearts2Hearts.lnk.to/TheChase\n\n[Tracklist] \n01 The Chase\n02 Butterflies\n\nSubscribe to...",
        "descriptionHtml": "Hearts2Hearts&#39; debut single &quot;The Chase&quot; is out!<br>Listen and download on your favorite plarform: https://Hearts2Hearts.lnk.to/TheChase<br><br>[Tracklist] <br>01 The Chase<br>02 Butterflies<br><br>Subscribe to...",
        "viewCount": 6741314,
        "viewCountText": "6.7M views",
        "published": 1740389719,
        "publishedText": "1 day ago",
        "lengthSeconds": 194,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "Minecraft but I discover the AXES of PVP CIVILIZATION",
        "videoId": "inSv48lf4E0",
        "author": "Evbo",
        "authorId": "UC1HL3TABt6QGd_P857BH_CA",
        "authorUrl": "/channel/UC1HL3TABt6QGd_P857BH_CA",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/inSv48lf4E0/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/inSv48lf4E0/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/inSv48lf4E0/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/inSv48lf4E0/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/inSv48lf4E0/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/inSv48lf4E0/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/inSv48lf4E0/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/inSv48lf4E0/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "Minecraft but I discover the AXES of PVP CIVILIZATION...the second CRAZY episode of PVP CIVLIZATION CHAPTER 2.....\n\nVoice Actors: Evbo, Teddy, @seawattgaming , @PrinceZam , @wemmbumc , @TabiMC...",
        "descriptionHtml": "Minecraft but I discover the AXES of PVP CIVILIZATION...the second CRAZY episode of PVP CIVLIZATION CHAPTER 2.....<br><br>Voice Actors: Evbo, Teddy, @seawattgaming , @PrinceZam , @wemmbumc , @TabiMC...",
        "viewCount": 659847,
        "viewCountText": "659K views",
        "published": 1740389719,
        "publishedText": "1 day ago",
        "lengthSeconds": 1174,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "Squid Games, But I Feel REAL Pain!",
        "videoId": "ZB5lkA8s_Pc",
        "author": "Drew Dirksen",
        "authorId": "UCZevH_tgMbrm6r-_OiU6Ubg",
        "authorUrl": "/channel/UCZevH_tgMbrm6r-_OiU6Ubg",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/ZB5lkA8s_Pc/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/ZB5lkA8s_Pc/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/ZB5lkA8s_Pc/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/ZB5lkA8s_Pc/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/ZB5lkA8s_Pc/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/ZB5lkA8s_Pc/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/ZB5lkA8s_Pc/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/ZB5lkA8s_Pc/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "Watch More Drew Dirksen:\nMost Popular: https://www.youtube.com/watch?v=6MbAlUUO2Ek&list=PLotc2XcImsZOPtVQjHLA-kZ88Kh3aeRG7\n\nSubscribe: https://tinyurl.com/2hx9y473 | Make sure to enable ALL...",
        "descriptionHtml": "Watch More Drew Dirksen:<br>Most Popular: https://www.youtube.com/watch?v=6MbAlUUO2Ek&amp;list=PLotc2XcImsZOPtVQjHLA-kZ88Kh3aeRG7<br><br>Subscribe: https://tinyurl.com/2hx9y473 | Make sure to enable ALL...",
        "viewCount": 684919,
        "viewCountText": "684K views",
        "published": 1740389719,
        "publishedText": "1 day ago",
        "lengthSeconds": 827,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "Trinidad Killa — ESKIMO (Feat. Nicki Minaj) [Official Audio]",
        "videoId": "TMer1kmK1Bg",
        "author": "Trinidad Killa",
        "authorId": "UChjQI_NimfUxlLTDSz4vpMg",
        "authorUrl": "/channel/UChjQI_NimfUxlLTDSz4vpMg",
        "authorVerified": false,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/TMer1kmK1Bg/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/TMer1kmK1Bg/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/TMer1kmK1Bg/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/TMer1kmK1Bg/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/TMer1kmK1Bg/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/TMer1kmK1Bg/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/TMer1kmK1Bg/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/TMer1kmK1Bg/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "Official Lyrics\n\nTrini Where?\nTrini Trini Trini where?\nTrini eyes Trini nose\nTrini hair\nI'z the only muddacunt\nTrini here\n\nAyo he want his name in the snow\nSo I write it down\nI make these bitches...",
        "descriptionHtml": "Official Lyrics<br><br>Trini Where?<br>Trini Trini Trini where?<br>Trini eyes Trini nose<br>Trini hair<br>I&#39;z the only muddacunt<br>Trini here<br><br>Ayo he want his name in the snow<br>So I write it down<br>I make these bitches...",
        "viewCount": 308842,
        "viewCountText": "308K views",
        "published": 1740389719,
        "publishedText": "1 day ago",
        "lengthSeconds": 182,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "LA Galaxy vs. San Diego FC | Full Match Highlights | History! San Diego Debut",
        "videoId": "8xX2TJB-h-U",
        "author": "Major League Soccer",
        "authorId": "UCSZbXT5TLLW_i-5W8FZpFsg",
        "authorUrl": "/channel/UCSZbXT5TLLW_i-5W8FZpFsg",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/8xX2TJB-h-U/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/8xX2TJB-h-U/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/8xX2TJB-h-U/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/8xX2TJB-h-U/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/8xX2TJB-h-U/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/8xX2TJB-h-U/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/8xX2TJB-h-U/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/8xX2TJB-h-U/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "📺 Watch every match with MLS Season Pass on Apple TV: http://apple.co/MLS\n\nThe 🐐 plays here: https://www.mlssoccer.com/messi/\n\n➡️ Subscribe Now: https://www.youtube.com/c/mls\n\n➡️...",
        "descriptionHtml": "📺 Watch every match with MLS Season Pass on Apple TV: http://apple.co/MLS<br><br>The 🐐 plays here: https://www.mlssoccer.com/messi/<br><br>➡️ Subscribe Now: https://www.youtube.com/c/mls<br><br>➡️...",
        "viewCount": 112382,
        "viewCountText": "112K views",
        "published": 1740389719,
        "publishedText": "1 day ago",
        "lengthSeconds": 424,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "Valley high school coach arrested in trafficking investigation",
        "videoId": "RRPMgqCElPw",
        "author": "12 News",
        "authorId": "UCu7G08TrwPx_0WH4M7OxjIQ",
        "authorUrl": "/channel/UCu7G08TrwPx_0WH4M7OxjIQ",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/RRPMgqCElPw/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/RRPMgqCElPw/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/RRPMgqCElPw/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/RRPMgqCElPw/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/RRPMgqCElPw/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/RRPMgqCElPw/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/RRPMgqCElPw/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/RRPMgqCElPw/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "Scottsdale police say Dobson High School Football coach Richard Godsil was one of 202 people arrested in a human trafficking investigation.",
        "descriptionHtml": "Scottsdale police say Dobson High School Football coach Richard Godsil was one of 202 people arrested in a human trafficking investigation.",
        "viewCount": 193030,
        "viewCountText": "193K views",
        "published": 1740130519,
        "publishedText": "4 days ago",
        "lengthSeconds": 20,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "Dave Chappelle Delivers Unforgettable Speech & Stands Strong for the People | NAACP Image Awards '25",
        "videoId": "fgP_uEwLlZM",
        "author": "BETNetworks",
        "authorId": "UCcVqCJ_9owb1zM43vqswMNQ",
        "authorUrl": "/channel/UCcVqCJ_9owb1zM43vqswMNQ",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/fgP_uEwLlZM/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/fgP_uEwLlZM/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/fgP_uEwLlZM/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/fgP_uEwLlZM/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/fgP_uEwLlZM/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/fgP_uEwLlZM/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/fgP_uEwLlZM/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/fgP_uEwLlZM/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "Dave Chappelle is recognized as one of the greatest comedians of all time. He is the 2019 recipient of the prestigious Mark Twain Prize for American Humor. Chappelle’s work has earned him...",
        "descriptionHtml": "Dave Chappelle is recognized as one of the greatest comedians of all time. He is the 2019 recipient of the prestigious Mark Twain Prize for American Humor. Chappelle’s work has earned him...",
        "viewCount": 1525098,
        "viewCountText": "1.5M views",
        "published": 1740303319,
        "publishedText": "2 days ago",
        "lengthSeconds": 233,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "come with me to infamous 90210",
        "videoId": "ArpXopO4Rfk",
        "author": "PresLee Faith",
        "authorId": "UC2hXOg5FxL_eHNm8041TyPQ",
        "authorUrl": "/channel/UC2hXOg5FxL_eHNm8041TyPQ",
        "authorVerified": false,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/ArpXopO4Rfk/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/ArpXopO4Rfk/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/ArpXopO4Rfk/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/ArpXopO4Rfk/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/ArpXopO4Rfk/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/ArpXopO4Rfk/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/ArpXopO4Rfk/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/ArpXopO4Rfk/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "congrats to Kenzie for hitting 1 million subscribers and also to lily for having such a successful launch with her pink palm puff pjs. I am so glad I got to experience this and can't wait to...",
        "descriptionHtml": "congrats to Kenzie for hitting 1 million subscribers and also to lily for having such a successful launch with her pink palm puff pjs. I am so glad I got to experience this and can&#39;t wait to...",
        "viewCount": 67408,
        "viewCountText": "67K views",
        "published": 1740389719,
        "publishedText": "1 day ago",
        "lengthSeconds": 1051,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "NRL Match Highlights 2025 | Broncos v Bulldogs | Pre-Season, Week 3",
        "videoId": "DfdvO_Vr8n0",
        "author": "NRL - National Rugby League",
        "authorId": "UC33-OkQ6VCYk8xtml8Pk4-g",
        "authorUrl": "/channel/UC33-OkQ6VCYk8xtml8Pk4-g",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/DfdvO_Vr8n0/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/DfdvO_Vr8n0/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/DfdvO_Vr8n0/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/DfdvO_Vr8n0/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/DfdvO_Vr8n0/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/DfdvO_Vr8n0/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/DfdvO_Vr8n0/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/DfdvO_Vr8n0/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "The Brisbane Broncos and the Canterbury-Bankstown Bulldogs face off in Week 3 of the 2025 Witzer Pre-Season Challenge\n\n🏉 SUBSCRIBE FOR MORE NRL ACTION 🏉\nhttps://www.youtube.com/channel/UC33-O...",
        "descriptionHtml": "The Brisbane Broncos and the Canterbury-Bankstown Bulldogs face off in Week 3 of the 2025 Witzer Pre-Season Challenge<br><br>🏉 SUBSCRIBE FOR MORE NRL ACTION 🏉<br>https://www.youtube.com/channel/UC33-O...",
        "viewCount": 174864,
        "viewCountText": "174K views",
        "published": 1740216919,
        "publishedText": "3 days ago",
        "lengthSeconds": 290,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "every dorm room is a different OCCULT in the sims 4 | Part 2",
        "videoId": "AlDzGFrvx3Y",
        "author": "CarynandConnieGaming",
        "authorId": "UCiGnwS3OVEuqbc78ELEFDeQ",
        "authorUrl": "/channel/UCiGnwS3OVEuqbc78ELEFDeQ",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/AlDzGFrvx3Y/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/AlDzGFrvx3Y/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/AlDzGFrvx3Y/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/AlDzGFrvx3Y/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/AlDzGFrvx3Y/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/AlDzGFrvx3Y/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/AlDzGFrvx3Y/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/AlDzGFrvx3Y/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "head to https://squarespace.com/carynandconnie to save 10% off your first purchase of a website or domain using CARYNANDCONNIE\n\nwe tried to build a sorority house with a twist! every room has...",
        "descriptionHtml": "head to https://squarespace.com/carynandconnie to save 10% off your first purchase of a website or domain using CARYNANDCONNIE<br><br>we tried to build a sorority house with a twist! every room has...",
        "viewCount": 396087,
        "viewCountText": "396K views",
        "published": 1740389719,
        "publishedText": "1 day ago",
        "lengthSeconds": 2099,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "Damon & Marlon Wayans Share Loving, Hilarious Speech at NAACP Image Awards '25 Hall of Fame",
        "videoId": "zOenfGWodjc",
        "author": "BETNetworks",
        "authorId": "UCcVqCJ_9owb1zM43vqswMNQ",
        "authorUrl": "/channel/UCcVqCJ_9owb1zM43vqswMNQ",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/zOenfGWodjc/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/zOenfGWodjc/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/zOenfGWodjc/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/zOenfGWodjc/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/zOenfGWodjc/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/zOenfGWodjc/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/zOenfGWodjc/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/zOenfGWodjc/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "The Wayans family has redefined comedy and entertainment for decades. Led by Keenen Ivory Wayans, creator of In Living Color, they broke barriers in film, TV, and stand-up comedy, launching...",
        "descriptionHtml": "The Wayans family has redefined comedy and entertainment for decades. Led by Keenen Ivory Wayans, creator of In Living Color, they broke barriers in film, TV, and stand-up comedy, launching...",
        "viewCount": 930557,
        "viewCountText": "930K views",
        "published": 1740303319,
        "publishedText": "2 days ago",
        "lengthSeconds": 390,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "Sleeping in the Most Dangerous Beds in the World",
        "videoId": "YtMgIDxGHnk",
        "author": "Socks",
        "authorId": "UCv6RbK5kLN0hXKk8b8q62bA",
        "authorUrl": "/channel/UCv6RbK5kLN0hXKk8b8q62bA",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/YtMgIDxGHnk/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/YtMgIDxGHnk/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/YtMgIDxGHnk/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/YtMgIDxGHnk/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/YtMgIDxGHnk/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/YtMgIDxGHnk/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/YtMgIDxGHnk/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/YtMgIDxGHnk/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "I got a little bit bored so I decided to sleep in some of the most extreme beds around the world. One is a capsule hotel on the side of a cliff, another is the deepest bed in the world, and...",
        "descriptionHtml": "I got a little bit bored so I decided to sleep in some of the most extreme beds around the world. One is a capsule hotel on the side of a cliff, another is the deepest bed in the world, and...",
        "viewCount": 400763,
        "viewCountText": "400K views",
        "published": 1740389719,
        "publishedText": "1 day ago",
        "lengthSeconds": 1248,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "I Hid In iShowSpeed's Live Stream",
        "videoId": "qoC_jsAIxlQ",
        "author": "Airrack",
        "authorId": "UCyps-v4WNjWDnYRKmZ4BUGw",
        "authorUrl": "/channel/UCyps-v4WNjWDnYRKmZ4BUGw",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/qoC_jsAIxlQ/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/qoC_jsAIxlQ/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/qoC_jsAIxlQ/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/qoC_jsAIxlQ/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/qoC_jsAIxlQ/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/qoC_jsAIxlQ/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/qoC_jsAIxlQ/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/qoC_jsAIxlQ/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "I will run it back at 20M subs, SUBSCRIBE 😈\n\nFollow me on Instagram!\nINSTAGRAM ▶️ https://urlgeni.us/instagram/jBHg\n\nI’m hiring! Apply for jobs here https://apply.workable.com/airrack...",
        "descriptionHtml": "I will run it back at 20M subs, SUBSCRIBE 😈<br><br>Follow me on Instagram!<br>INSTAGRAM ▶️ https://urlgeni.us/instagram/jBHg<br><br>I’m hiring! Apply for jobs here https://apply.workable.com/airrack...",
        "viewCount": 4049266,
        "viewCountText": "4M views",
        "published": 1740303319,
        "publishedText": "2 days ago",
        "lengthSeconds": 808,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "I Stayed in The World's Tiniest Airbnbs",
        "videoId": "P2HzVlAwQ3g",
        "author": "Alexa Rivera",
        "authorId": "UCPpATKqmMV-CNRNWYaDUwiA",
        "authorUrl": "/channel/UCPpATKqmMV-CNRNWYaDUwiA",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/P2HzVlAwQ3g/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/P2HzVlAwQ3g/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/P2HzVlAwQ3g/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/P2HzVlAwQ3g/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/P2HzVlAwQ3g/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/P2HzVlAwQ3g/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/P2HzVlAwQ3g/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/P2HzVlAwQ3g/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "These tiny homes are crazy small! Thank you guys for watching and don't forget to LIKE the video and SUBSCRIBE!!\n\n@brentrivera \n@pierson \n@JeremyHutchins \n@BenAzelart \n@andrewdavila6696 \n@DominicBr...",
        "descriptionHtml": "These tiny homes are crazy small! Thank you guys for watching and don&#39;t forget to LIKE the video and SUBSCRIBE!!<br><br>@brentrivera <br>@pierson <br>@JeremyHutchins <br>@BenAzelart <br>@andrewdavila6696 <br>@DominicBr...",
        "viewCount": 830681,
        "viewCountText": "830K views",
        "published": 1740303319,
        "publishedText": "2 days ago",
        "lengthSeconds": 1151,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "cLOUDs",
        "videoId": "eUsQzDa7qyU",
        "author": "J. Cole",
        "authorId": "UCnc6db-y3IU7CkT_yeVXdVg",
        "authorUrl": "/channel/UCnc6db-y3IU7CkT_yeVXdVg",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/eUsQzDa7qyU/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/eUsQzDa7qyU/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/eUsQzDa7qyU/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/eUsQzDa7qyU/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/eUsQzDa7qyU/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/eUsQzDa7qyU/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/eUsQzDa7qyU/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/eUsQzDa7qyU/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "Provided to YouTube by Universal Music Group\n\ncLOUDs · J. Cole\n\ncLOUDs\n\n℗ 2025 Cole World, Inc., under exclusive license to Interscope Records\n\nReleased on: 2025-02-21\n\nProducer: DZL\nProducer:...",
        "descriptionHtml": "Provided to YouTube by Universal Music Group<br><br>cLOUDs · J. Cole<br><br>cLOUDs<br><br>℗ 2025 Cole World, Inc., under exclusive license to Interscope Records<br><br>Released on: 2025-02-21<br><br>Producer: DZL<br>Producer:...",
        "viewCount": 1153775,
        "viewCountText": "1.1M views",
        "published": 1740216919,
        "publishedText": "3 days ago",
        "lengthSeconds": 243,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "love",
        "videoId": "TRxb1AvrwX4",
        "author": "SocksStudios",
        "authorId": "UCXMwCQVey4PhdWFJ6WhAVhA",
        "authorUrl": "/channel/UCXMwCQVey4PhdWFJ6WhAVhA",
        "authorVerified": false,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/TRxb1AvrwX4/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/TRxb1AvrwX4/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/TRxb1AvrwX4/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/TRxb1AvrwX4/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/TRxb1AvrwX4/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/TRxb1AvrwX4/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/TRxb1AvrwX4/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/TRxb1AvrwX4/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "We got a little bit bored so we talked about our totally real love stories!\n\nNew Merch https://socks.store/\n\nSUBSCRIBE \n\n\n@Joocie \n@allievtuber \n@tuxy \n@oofistooshortt \n@BlazaPlays \n@Nadweyt...",
        "descriptionHtml": "We got a little bit bored so we talked about our totally real love stories!<br><br>New Merch https://socks.store/<br><br>SUBSCRIBE <br><br><br>@Joocie <br>@allievtuber <br>@tuxy <br>@oofistooshortt <br>@BlazaPlays <br>@Nadweyt...",
        "viewCount": 808880,
        "viewCountText": "808K views",
        "published": 1740303319,
        "publishedText": "2 days ago",
        "lengthSeconds": 1020,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "MY DAUGHTER SKIPPED SCHOOL!",
        "videoId": "XGiv1gPrBtA",
        "author": "Jordan Matter",
        "authorId": "UCKaCalz5N5ienIbfPzEbYuA",
        "authorUrl": "/channel/UCKaCalz5N5ienIbfPzEbYuA",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/XGiv1gPrBtA/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/XGiv1gPrBtA/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/XGiv1gPrBtA/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/XGiv1gPrBtA/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/XGiv1gPrBtA/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/XGiv1gPrBtA/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/XGiv1gPrBtA/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/XGiv1gPrBtA/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "Are you Team Salish or Team Jordan? If you want BTS photos and videos nobody else gets to see, send us a message on our texting platform (it's free): https://joinsubtext.com/teamsalish. \n\nThanks...",
        "descriptionHtml": "Are you Team Salish or Team Jordan? If you want BTS photos and videos nobody else gets to see, send us a message on our texting platform (it&#39;s free): https://joinsubtext.com/teamsalish. <br><br>Thanks...",
        "viewCount": 5214007,
        "viewCountText": "5.2M views",
        "published": 1740303319,
        "publishedText": "2 days ago",
        "lengthSeconds": 1639,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "Initiating Eamon & Bec into my rainforest commune",
        "videoId": "jgBBoPdq8qc",
        "author": "Max & Occy",
        "authorId": "UCsphzld6v6ghCl_RyvihNgA",
        "authorUrl": "/channel/UCsphzld6v6ghCl_RyvihNgA",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/jgBBoPdq8qc/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/jgBBoPdq8qc/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/jgBBoPdq8qc/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/jgBBoPdq8qc/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/jgBBoPdq8qc/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/jgBBoPdq8qc/1.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "middle",
                "url": "https://i.ytimg.com/vi/jgBBoPdq8qc/2.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "end",
                "url": "https://i.ytimg.com/vi/jgBBoPdq8qc/3.jpg",
                "width": 120,
                "height": 90
            }
        ],
        "description": "This one hits hard. If you’re struggling, consider therapy with our paid partner. Click https://betterhelp.com/maxandoccy for a discount on your first month of therapy..\n\nIn this episode...",
        "descriptionHtml": "This one hits hard. If you’re struggling, consider therapy with our paid partner. Click https://betterhelp.com/maxandoccy for a discount on your first month of therapy..<br><br>In this episode...",
        "viewCount": 169530,
        "viewCountText": "169K views",
        "published": 1740389719,
        "publishedText": "1 day ago",
        "lengthSeconds": 1880,
        "liveNow": false,
        "premium": false,
        "isUpcoming": false,
        "isNew": false,
        "is4k": false,
        "is8k": false,
        "isVr180": false,
        "isVr360": false,
        "is3d": false,
        "hasCaptions": false
    },
    {
        "type": "video",
        "title": "FULL GUIDE To MARIANAS VEIL UPDATE In FISCH Roblox!",
        "videoId": "9_VBn-XzpWg",
        "author": "Carbon Meister Plays",
        "authorId": "UCM2IZ0oXZRTFr5Dnw8IIy9g",
        "authorUrl": "/channel/UCM2IZ0oXZRTFr5Dnw8IIy9g",
        "authorVerified": true,
        "videoThumbnails": [
            {
                "quality": "maxresdefault",
                "url": "https://i.ytimg.com/vi/9_VBn-XzpWg/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            },
            {
                "quality": "sddefault",
                "url": "https://i.ytimg.com/vi/9_VBn-XzpWg/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            {
                "quality": "high",
                "url": "https://i.ytimg.com/vi/9_VBn-XzpWg/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            {
                "quality": "medium",
                "url": "https://i.ytimg.com/vi/9_VBn-XzpWg/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            {
                "quality": "default",
                "url": "https://i.ytimg.com/vi/9_VBn-XzpWg/default.jpg",
                "width": 120,
                "height": 90
            },
            {
                "quality": "start",
                "url": "https://i.ytimg.com/vi/9_VBn-XzpWg/1.jpg",
                "width": 120,
                "height": 90
            }
        ]
        }
    ]

    const root=document.querySelector('main');

const showUI=(list)=>{
    list.forEach((obj)=>{
        const newCard=document.createElement('div');
        newCard.addEventListener('click',()=>{
            window.open(`./video.html?id=${obj.videoId}`,'_top');
        });
        newCard.className='card';
        newCard.innerHTML=`
            <img src='${obj.videoThumbnails[0].url}' alt='${obj.title}' width="100%" onmouseover='handleHover(event,${list.indexOf(obj)})'/>
            <h6>${obj.author}</h6>
            <h4>${obj.title}</h4>
        `;
        root.appendChild(newCard);
    });
};

const handleHover=(e,idx)=>{
    e.target.setAttribute('src',dummyData[idx].videoThumbnails[0].url);
};

const handleSearch=()=>{
    window.open("")
}
showUI(dummyData);
/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f8662e71ab8b4109b8ef5f88240c73e3"
  },
  {
    "url": "assets/css/0.styles.07f039d5.css",
    "revision": "ff7eb67ceb9d8704e8225646d2e656fb"
  },
  {
    "url": "assets/fonts/fa-brands-400.099a9556.woff",
    "revision": "099a9556e1a63ece24f8a99859c94c7d"
  },
  {
    "url": "assets/fonts/fa-brands-400.30cc681d.eot",
    "revision": "30cc681d4487d2f561035ba24a68c629"
  },
  {
    "url": "assets/fonts/fa-brands-400.3b89dd10.ttf",
    "revision": "3b89dd103490708d19a95adcae52210e"
  },
  {
    "url": "assets/fonts/fa-brands-400.f7307680.woff2",
    "revision": "f7307680c7fe85959f3ecf122493ea7d"
  },
  {
    "url": "assets/fonts/fa-regular-400.1f77739c.ttf",
    "revision": "1f77739ca9ff2188b539c36f30ffa2be"
  },
  {
    "url": "assets/fonts/fa-regular-400.7124eb50.woff",
    "revision": "7124eb50fc8227c78269f2d995637ff5"
  },
  {
    "url": "assets/fonts/fa-regular-400.7630483d.eot",
    "revision": "7630483dd4b0c48639d2ac54a894b450"
  },
  {
    "url": "assets/fonts/fa-regular-400.f0f82301.woff2",
    "revision": "f0f8230116992e521526097a28f54066"
  },
  {
    "url": "assets/fonts/fa-solid-900.1042e8ca.eot",
    "revision": "1042e8ca1ce821518a2d3e7055410839"
  },
  {
    "url": "assets/fonts/fa-solid-900.605ed792.ttf",
    "revision": "605ed7926cf39a2ad5ec2d1f9d391d3d"
  },
  {
    "url": "assets/fonts/fa-solid-900.9fe5a17c.woff",
    "revision": "9fe5a17c8ab036d20e6c5ba3fd2ac511"
  },
  {
    "url": "assets/fonts/fa-solid-900.e8a427e1.woff2",
    "revision": "e8a427e15cc502bef99cfd722b37ea98"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/android-chrome-192x192.png",
    "revision": "9dc784a560d2f0756dfd483bb7f74d7e"
  },
  {
    "url": "assets/img/android-chrome-512x512.png",
    "revision": "4336a8bbda285df76c6df998d09c21f9"
  },
  {
    "url": "assets/img/apple-touch-icon.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/avatar.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/by-nc-sa.svg",
    "revision": "03dda63e80b9508d421e792236239ef1"
  },
  {
    "url": "assets/img/fa-brands-400.ba7ed552.svg",
    "revision": "ba7ed552362f64d30f6d844974d89114"
  },
  {
    "url": "assets/img/fa-regular-400.0bb42845.svg",
    "revision": "0bb428459c8ecfa61b22a03def1706e6"
  },
  {
    "url": "assets/img/fa-solid-900.376c1f97.svg",
    "revision": "376c1f97f6553dea1ca9b3f9081889bd"
  },
  {
    "url": "assets/img/mustom-next-icons.4ab3f7a3.svg",
    "revision": "4ab3f7a3677c49c5fe02381631d40486"
  },
  {
    "url": "assets/js/10.1afd71b5.js",
    "revision": "93a38ae21ac61d4e7d0eeb39bb978cd7"
  },
  {
    "url": "assets/js/11.92884cb8.js",
    "revision": "6ffafcea2475eb9cb718dfc240e11745"
  },
  {
    "url": "assets/js/12.e7b06eb1.js",
    "revision": "1e152d678b93a3e6c1fc46d4a7e450e6"
  },
  {
    "url": "assets/js/13.69a861bd.js",
    "revision": "04d5b1db6e48a296f6ae71053ebb7833"
  },
  {
    "url": "assets/js/14.511333a6.js",
    "revision": "c942f76f397e5425b105f043b37d117e"
  },
  {
    "url": "assets/js/15.9465ac2d.js",
    "revision": "e0b9714453bcb151cf0397f158341731"
  },
  {
    "url": "assets/js/16.c8b0d2c4.js",
    "revision": "bc0ddb3c744f6cb93d793134a76a615d"
  },
  {
    "url": "assets/js/17.3b9f76c2.js",
    "revision": "4be67a0eb21b5937cbe68c8a83b24e6e"
  },
  {
    "url": "assets/js/18.055f44f7.js",
    "revision": "09e9a368207e6e1edd9ad3a82fe11d25"
  },
  {
    "url": "assets/js/19.0ada2bb2.js",
    "revision": "a7a05d944592d9065bd2d977883c9a85"
  },
  {
    "url": "assets/js/2.f5951f83.js",
    "revision": "927d25f24f967f3ec9a045655a4001d1"
  },
  {
    "url": "assets/js/20.27b2704e.js",
    "revision": "262271632cac71c819603f343a038258"
  },
  {
    "url": "assets/js/21.18e1a6b8.js",
    "revision": "d310a843bb608de9870e763343a747b0"
  },
  {
    "url": "assets/js/22.6691bdbe.js",
    "revision": "729568ea77d782b10504f9a06d72525e"
  },
  {
    "url": "assets/js/23.a79e2958.js",
    "revision": "867f2dc152765a7bda123f4c97301033"
  },
  {
    "url": "assets/js/24.07a613bb.js",
    "revision": "aff6342caa835ff14b297efce7a484e0"
  },
  {
    "url": "assets/js/25.e3446299.js",
    "revision": "84e0c2d1cf879f5ad6a29d6bc46aab34"
  },
  {
    "url": "assets/js/26.6bfd0fa2.js",
    "revision": "e6de916a815b42357a93dfd5d975fe6d"
  },
  {
    "url": "assets/js/27.a9f40bb9.js",
    "revision": "db6a28664691735ede1d2a91f4f9e910"
  },
  {
    "url": "assets/js/28.93e2a92e.js",
    "revision": "01b2a7a866305f6ed649759c0635d9c5"
  },
  {
    "url": "assets/js/29.01891835.js",
    "revision": "73be3d80aacf0568b4168ff005377638"
  },
  {
    "url": "assets/js/3.69d4c397.js",
    "revision": "512e8183bca7fe957ced302cff0930f7"
  },
  {
    "url": "assets/js/30.e7d1b557.js",
    "revision": "011b9889f449552d1f8ece642b09be17"
  },
  {
    "url": "assets/js/31.63e3bbce.js",
    "revision": "8ef6bff9717bee8edcc63c2dab99eb48"
  },
  {
    "url": "assets/js/32.445728c2.js",
    "revision": "d52ba2a7d3ecd3bff6de250f7f7a9c52"
  },
  {
    "url": "assets/js/33.8790e400.js",
    "revision": "a7248d6ae51fd118afe8acfc9cf31111"
  },
  {
    "url": "assets/js/34.76e0580c.js",
    "revision": "5d144eb94f08569955b5f17f87327ed8"
  },
  {
    "url": "assets/js/35.4fba9f9c.js",
    "revision": "3b76c098ded61836b5fce03882f71736"
  },
  {
    "url": "assets/js/36.ffaf9810.js",
    "revision": "95c70615e356cb3057d6a470b59dc560"
  },
  {
    "url": "assets/js/37.f435e3c3.js",
    "revision": "29996b2c68f3c5432d29a9dbd644fa4a"
  },
  {
    "url": "assets/js/38.151f70bd.js",
    "revision": "1d6709b27c164efbdf10dcd69169d387"
  },
  {
    "url": "assets/js/39.52402fa4.js",
    "revision": "96e42c3038bfa50a9f86c83a935cb8c4"
  },
  {
    "url": "assets/js/4.e7f09b77.js",
    "revision": "8e75024c95ea138cad3b6be81df27a6b"
  },
  {
    "url": "assets/js/40.89b0f2a4.js",
    "revision": "0370acf2b9de67a00ddb8327bbcf156f"
  },
  {
    "url": "assets/js/5.cf5ee322.js",
    "revision": "29a80aecb26d2b10656fb534a739425f"
  },
  {
    "url": "assets/js/6.668e0f8b.js",
    "revision": "24b5aa8a4489445b56b2c75acb13569e"
  },
  {
    "url": "assets/js/7.051d2e4c.js",
    "revision": "44e8b031427f6f4bbba7c8ec1c7ae8b0"
  },
  {
    "url": "assets/js/8.31ff7b2b.js",
    "revision": "1c3466f879cce0068687952621635c54"
  },
  {
    "url": "assets/js/9.0bd6be1e.js",
    "revision": "8bbfae2e368bd54d6d752778a9503280"
  },
  {
    "url": "assets/js/app.aa23d5cb.js",
    "revision": "ad0bd1ecc00baec9be5c32beb9202b46"
  },
  {
    "url": "b.tech/index.html",
    "revision": "6a507cb5e1d03718597677cbebc79d7a"
  },
  {
    "url": "b.tech/test1.html",
    "revision": "dbbf0a0d731bad584141b87c5c677c5c"
  },
  {
    "url": "b.tech/test2/index.html",
    "revision": "0bd152955a5a6e7c60e16ed35bcd28b3"
  },
  {
    "url": "b.tech/test2/test4/index.html",
    "revision": "7e188fd324ac4cbb9b9e9344f1fa76c8"
  },
  {
    "url": "b.tech/test2/test4/test5.html",
    "revision": "5a913660715d3807d1a8994ccd46c50e"
  },
  {
    "url": "b.tech/test2/test4/test6/index.html",
    "revision": "18346423919332d36aa0ac5e98486972"
  },
  {
    "url": "b.tech/test3/index.html",
    "revision": "21fa1769d2505fd5628f95f56907e4c4"
  },
  {
    "url": "categories/Hexo/index.html",
    "revision": "f935d0298ac7c94784502f91b420a4c3"
  },
  {
    "url": "categories/index.html",
    "revision": "ae0bc0246b37653a78dd6ff6f46695c2"
  },
  {
    "url": "categories/Note/index.html",
    "revision": "ca83cfd2e8c1afe5d6ed84aa5abdda90"
  },
  {
    "url": "categories/Plugin,Test/index.html",
    "revision": "81e55f0916c180a82fb8eddaf2a58f57"
  },
  {
    "url": "categories/Plugin/index.html",
    "revision": "63e9d3f0ebc5f44f3b53c16b88402016"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "6dd9dca65954d72fe6ad7c6bb3bfbfd3"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "10adadcd06706fde97d3ac98e7838c09"
  },
  {
    "url": "categories/网络/index.html",
    "revision": "0a9eb75e687850849bd72f1b58595c7a"
  },
  {
    "url": "en/categories/Blog/index.html",
    "revision": "d446baced11478329ec8914678707e66"
  },
  {
    "url": "en/categories/Hexo/index.html",
    "revision": "d0fb414e6e442d8b3745330cfe8c12dc"
  },
  {
    "url": "en/categories/index.html",
    "revision": "8282491b6c6fa9c430f5e9c09bdaec95"
  },
  {
    "url": "en/categories/Markdown/index.html",
    "revision": "9edcbca59fb4e3deeda315c7e5df7c5e"
  },
  {
    "url": "en/categories/Note/index.html",
    "revision": "fe7756b0fe517cc19aef26d5d24c2f71"
  },
  {
    "url": "en/index.html",
    "revision": "9a39fa6efe857ea703ab5e5e8bdc310f"
  },
  {
    "url": "en/posts/26e57128/index.html",
    "revision": "bd2ef9df269d508402c406c80cda0130"
  },
  {
    "url": "en/posts/33721a64/index.html",
    "revision": "50520010f0878cf83d4b76913dc2f18d"
  },
  {
    "url": "en/posts/cba4525c/index.html",
    "revision": "0cd6d580a825a1b35b338b42a7689429"
  },
  {
    "url": "en/posts/e6bce264/index.html",
    "revision": "a360620ce137addd6ee5b451409b92f7"
  },
  {
    "url": "en/posts/index.html",
    "revision": "8bdecd64b4204eef02c1f6039829ac7b"
  },
  {
    "url": "en/tags/Command/index.html",
    "revision": "40dce6109b11cc11f02b52b3ac2d1862"
  },
  {
    "url": "en/tags/index.html",
    "revision": "d7e528cebacc8bcaa11359fa0a0957e8"
  },
  {
    "url": "en/tags/Links/index.html",
    "revision": "aded680db0d7064ad52ae67f81816dff"
  },
  {
    "url": "en/tags/Test/index.html",
    "revision": "14d27bd0b134f33f3f1c411f9e189a02"
  },
  {
    "url": "gallery/data-structure-linked-list-normal.png",
    "revision": "1db30e017d3e0009ddf12311d31b2ae5"
  },
  {
    "url": "gallery/data-structure-linked-list-static-to-normal.png",
    "revision": "4643d5dd42eebf640134ab8d9df2e137"
  },
  {
    "url": "gallery/data-structure-queue.png",
    "revision": "db91100f07f4d68b2ae73b73baa34614"
  },
  {
    "url": "gallery/data-structure-random-linked-ram.png",
    "revision": "89bfac4f6ce9c3abb572dfff77a78a34"
  },
  {
    "url": "gallery/data-structure-stack.png",
    "revision": "7067ca734d65393dcd3fc3340310f787"
  },
  {
    "url": "gallery/FaceQ1583444636773.png",
    "revision": "a25a8ffa90c5b10c42e4e6992e1bc2f0"
  },
  {
    "url": "gallery/http-request-example.jpg",
    "revision": "3ad3cb077e4d852be159c0ce7d1a7e92"
  },
  {
    "url": "gallery/http-request-format.png",
    "revision": "3aeef0f8d0b869a5c3f4d47ee41d3c90"
  },
  {
    "url": "gallery/http-response-example.jpg",
    "revision": "c3cf8d2890449b9138527011ae403b49"
  },
  {
    "url": "gallery/http-response-format.png",
    "revision": "ea246cd67c5878fdb5f440e4657bd7a1"
  },
  {
    "url": "gallery/tcp-ip-ipv6-prefix.jpg",
    "revision": "527c1e33dd1752265990fdaf101e224e"
  },
  {
    "url": "gallery/tcp-ip-router-network.jpg",
    "revision": "6d35c987bd9240b925d8e80f60331396"
  },
  {
    "url": "gallery/tcp-ip-router-subnet.jpg",
    "revision": "ac9c9b39b390465be42f7f946243b459"
  },
  {
    "url": "gallery/yao2048-0.jpg",
    "revision": "b68678816508660ea9c32a813d1d769e"
  },
  {
    "url": "gallery/yaoplayer-0.jpg",
    "revision": "acb68980b34d9666841b8939d78ee967"
  },
  {
    "url": "index.html",
    "revision": "4d4295db7f82e9e596279332bb1c0170"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "posts/31463f1b/index.html",
    "revision": "9560102983f75f6a89c928305d0c9d15"
  },
  {
    "url": "posts/3842e124/index.html",
    "revision": "3c849fb2bdbed98b98ef53fd2c175edd"
  },
  {
    "url": "posts/5e854c4a/index.html",
    "revision": "7e78bf5344351e4992ba6efb6e01e319"
  },
  {
    "url": "posts/644bc384/index.html",
    "revision": "7d52a188ab8ea3833c67452e40b96411"
  },
  {
    "url": "posts/655b785e/index.html",
    "revision": "31f8595f8f56cb472b9d7dbceb32c233"
  },
  {
    "url": "posts/73ad59c9/index.html",
    "revision": "9a5170fb73524593e36fe38a63a35db5"
  },
  {
    "url": "posts/8a1ac7d2/index.html",
    "revision": "4aea9460891abeea79ad0497e03570e3"
  },
  {
    "url": "posts/a2a9fe5a/index.html",
    "revision": "0a1c682385d5cbc3129903a55734720f"
  },
  {
    "url": "posts/a89bb0f4/index.html",
    "revision": "6c9c041c7989f83b58bdc28d95bb656d"
  },
  {
    "url": "posts/b252718a/index.html",
    "revision": "5cb8a29d6118f1c64a9d924c83c90cce"
  },
  {
    "url": "posts/df2370d2/index.html",
    "revision": "2deda30077d8f7d192363f357ea093ea"
  },
  {
    "url": "posts/e79987e4/index.html",
    "revision": "cc6386ea847755abff7c1ddd8122c5f5"
  },
  {
    "url": "posts/index.html",
    "revision": "b82f70941f7b5986614eaa44595bedb6"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "b1d39feb9579c905ee13963c3618d858"
  },
  {
    "url": "tags/2048/index.html",
    "revision": "9eafd8553612b227389200d63c04fca9"
  },
  {
    "url": "tags/Big O/index.html",
    "revision": "7ca32fb26737359c10fbbd48d4e28dfe"
  },
  {
    "url": "tags/diary/index.html",
    "revision": "2ab5de4c8b73a917753a39e4f7fa9d75"
  },
  {
    "url": "tags/HTTP/index.html",
    "revision": "31af27e0180b203c18ed8eb579ec8753"
  },
  {
    "url": "tags/HTTPS/index.html",
    "revision": "b0c3742ca3d479e7a92ba035bac434be"
  },
  {
    "url": "tags/index.html",
    "revision": "610ce9ff4489cb05cdc4e5a354afd154"
  },
  {
    "url": "tags/IPv4/index.html",
    "revision": "5bb2ff18b70b6159c98daf4b0687eaa0"
  },
  {
    "url": "tags/IPv6/index.html",
    "revision": "6714248da38c9415c1fee9e548e87dfd"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "7eda177e82e916860fc6d85de8d8e461"
  },
  {
    "url": "tags/List/index.html",
    "revision": "43ce61f73e34cd6d3ef83633ff9ae8dd"
  },
  {
    "url": "tags/MAC/index.html",
    "revision": "3d55071018cbda81a9e787ec007637cb"
  },
  {
    "url": "tags/Mustom/index.html",
    "revision": "408a93aa827bbab27465e8905f5e90d1"
  },
  {
    "url": "tags/old blog/index.html",
    "revision": "de2ab7313b34842cd3da559e3273f951"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "238699dbefd1532e8fc94dac5430bc82"
  },
  {
    "url": "tags/Queue/index.html",
    "revision": "8b4656b44b6ea592d6cb94a245ce93d1"
  },
  {
    "url": "tags/SQL/index.html",
    "revision": "316fadc32fc593c7a511d008b93c2081"
  },
  {
    "url": "tags/Stack/index.html",
    "revision": "85b9e21b741cfa2f8dd89f37d06eecf3"
  },
  {
    "url": "tags/TCP/IP/index.html",
    "revision": "93c67957b243594f46e05ce31e9a3cf7"
  },
  {
    "url": "tags/基础/index.html",
    "revision": "5a0df7cb9ebf427111fe97a7db5d9b1f"
  },
  {
    "url": "tags/抽象数据类/index.html",
    "revision": "71de61b244880ee6c13b15c4161a3d95"
  },
  {
    "url": "tags/线性表/index.html",
    "revision": "d2dc0c0c58f0e295207f61b7b324db9b"
  },
  {
    "url": "tags/音乐播放器/index.html",
    "revision": "0a5d1f6c482c489b00584c3c6ca5e153"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

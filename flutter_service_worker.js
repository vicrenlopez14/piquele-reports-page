'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1cfa68cfe190e21b49e1ba7c65ec00f0",
".git/config": "954be74dbd1ba267afda49c94aade14c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "94af86d6e7339fcb5af5999301ae6f7d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d9c97cac2e378c2d48bad71b2e9e3845",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4841784b7e82e7585d69a3c1b647b1c7",
".git/logs/refs/heads/main": "122faa97ec1c3675904d1dc346148496",
".git/logs/refs/remotes/origin/main": "dfc4e1dc1bcd698c542edf097907f2bc",
".git/objects/02/540623eef69dcda12f7035af0a95bf00660876": "b4f4511ce86004f0d6dbbc4f53eb6cd7",
".git/objects/02/8320c99ac04348e7c6cd62041a851f266a89c0": "975af2a2d954ad278236dc694e695627",
".git/objects/02/b26ee993b3c4e8da9d017f999119131a6c8134": "2ee8394d21f280c49e7967ec66b715db",
".git/objects/05/ae9427be43d4459f815b2bafb62a8004a0a2af": "b3fc62ec4b4d4926f473a03bdd7ef492",
".git/objects/06/74c8a925a83e39b118aa085f4f7bd6f4580315": "25110835a8561d69e080a7df8f3ac966",
".git/objects/06/ce1347918e8384e8a38d62832024575202e618": "c781b5579f61a844b0d7cff4f2f53c54",
".git/objects/07/49cf7dcff38734d89fd49cc45abec586d7b585": "35d4b71e32fa502f3f97c649296d0810",
".git/objects/08/5866662bd4fb019cb61103b02e39826ad1bdcc": "209e373bbdb9ec9d0930754a759b8185",
".git/objects/08/7b9c4d60ac63f4f32ae4565cf34bc7e8072a95": "f3580fb7648c32fcb526b5cab0d78602",
".git/objects/09/c447d46cccfa2700409ff34991028fdb9616a3": "288b5f792be8195f4fc220e2a8ad993a",
".git/objects/0d/2fdbb5c1755121b5cbf38860fe85028f06793c": "ea07393893e6cbc6fa5a2964156da434",
".git/objects/0d/4967f629ea6f42b9dcbc87b07349afdee44c12": "b5139570949315f2db58b1ea4652db61",
".git/objects/0e/65f9b5aeb854710f87fa1c1a0d0dfc0cc0b632": "98b09b5ae2398f4154904129b17dfff7",
".git/objects/15/0bb2f577a564c5d152926b483910ae935f0c57": "848012740989bb71cb97a4d764a059dc",
".git/objects/15/8058dbb65c882e0bcf520c61d30d334a74108e": "8ace03ad8f2932115874273b9f945a41",
".git/objects/18/14cea25acf8f2d95238dffde2520fdf72a0f16": "31c5146b2a178d71f76fcce37731115a",
".git/objects/18/d720996fc253e8953dd78d3fdab6708d2d7fd1": "82fa641bd530ecf64a545d04b7f49430",
".git/objects/19/20af1e526a255ee2c70c5c4fe6eca54e768f0e": "eba684fae2f6d88d01f1c37af7c7d306",
".git/objects/19/2f52b058c19aeda84dc909a8efc2fd41dec9f7": "8f4b6fad3fc777fb7db5d0e8e4b18c51",
".git/objects/1a/1b7d2bf484f46e4e909a826a83e5f0e85a58a6": "549364164f568744542823e08fad9a76",
".git/objects/1c/f419b70d0d04e429172dd5c9aee88ab1a806fa": "06d274e2c5319e0fc78d2f3212c1aac3",
".git/objects/20/1cc58b85387a7c15ca41662393dbd53e9c600f": "0250a4f0eb6d058379358ed628505414",
".git/objects/21/289a3191a147f488ac2e0965c267b017e29548": "0fe057e264435e30d73bb20a12f1337a",
".git/objects/26/c3571b70946b3a406897c4d1919c3ed0e18cba": "62ca8efe6585c24658f1e0d580054f7b",
".git/objects/2a/0168881df83a2dbcea5d163d8a4b44f2c0d909": "70b03e038bdfec6a976452e146ef0fc9",
".git/objects/2b/80ff661bfd6cc5fb8734c1bbb79e140993de92": "f2b9eec18a0bd2e1181961059091d726",
".git/objects/30/9138d8d43918603c8a1bc2eaab5c3ddf26983d": "d6e2729ae4e757fdd1749e3f9fcb101f",
".git/objects/31/38fa9142622ed3ce8f978b24c582eef17a9ac0": "3a6a57fd905c30a12acde71c0c6d8634",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/fe028d766986cda13b63c1413f7bbf8dff548d": "317e256ad4f921c763161bcf6f3c5b55",
".git/objects/3b/eef536658a43a5d8dbd5a9acb38d14b1f68317": "40da12dae9135d873413fc9d248ca1d1",
".git/objects/3c/3443dd2100b0738ba46ef7b5fea6e0b41d68c5": "7c873c9e6c53caa8bc708bc1e4d38092",
".git/objects/3d/4a03120ebb41f3ba0e372eb949a51acd8790c2": "3da2c3d14de2339fc9a0368933d486d6",
".git/objects/40/5918b10a118fa54d834d4c3fadea3a6bcf9c1c": "bc38be73e50892810165cb3257e9c654",
".git/objects/43/07b715b000032192fa4851c93e6a1aa9043e64": "39e2c40e0df8b3319ed0aad210b9eed4",
".git/objects/45/441036c576caa0474019f3c11c10a8c829df1f": "4bb07804f08bb48b04284822aa5741b8",
".git/objects/45/fad828ca18e9275de9cdea22a40fb8a167d6c4": "e0b090aa63d3865ea86775f35baf178d",
".git/objects/46/d51e175a249875cc034ac3c37ab25f7d83e31f": "ddc48b80906cb71f6ecc4e67ef58d442",
".git/objects/46/fb8a4851ae1df6a311ff7c5379bfd6dee977d0": "8325424d954d4a0df98d75f8dedd94b4",
".git/objects/47/a79e94ce5658bbbfbb3d2c8e5ed9d74aec27b7": "d9c3581ed3e3bf280d1014724d56f6f6",
".git/objects/49/028701439ef6154284729e7dd1948c8d403d85": "cff1aa16e83ae44c2223db07f4e7bb14",
".git/objects/4a/35953f31d46cf74af49593f5e3319ceb9b106c": "b29e39504a96193542f1df4d557c53e9",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/cf7e73d8b740be4f871c3ad66c13464565af44": "4c3dd70214b92ff20b2b4f68829b2ad8",
".git/objects/4f/681b0239f935d7d917a957b425889a6e74c653": "c980cc6e5b89a45dfa88ff7ca7dcd69c",
".git/objects/4f/82004a48470f80bb32ef17adc9d236a5f10f79": "96c61fee257bea04ee65d7b96e5e95f1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/099e822b86c848fc2f9ebf038e88c37f240fc5": "db88dba498015f73b9b3d2f99f769667",
".git/objects/55/1a4c79c307c853d575774f4b5460d973ad798b": "6df9e9ec8ec063eb0c9e51d9af8f9b7e",
".git/objects/55/ca5b4c5bdefe5f57f7636cefcb605ccc06303f": "9f35734cc0b88848ca8e7425178ef83b",
".git/objects/59/0f3e44a48dc70b5eb67d1bc1b428f27f9c7492": "4fddfc2bc36e16ed96850f1c2b7ce84d",
".git/objects/5a/81746a15ec2353aecd44be54198ff1dfd4dee4": "effce27a15c6401f061ae7bd44058177",
".git/objects/5d/dbe0c382f24d9b049f06145a602834ca98bd25": "760768a679ef3f51dc0edfaa26a08135",
".git/objects/5e/873a77e090928390faf72d39b97f96f75a7c15": "1ba07f97b9b08cdaefb1a2799890b8ab",
".git/objects/60/8783b0af40dbccc9f7c2f52e9e6c87f5618b89": "12afaec7596ce959db4d639136b714f4",
".git/objects/68/565a4a899248e7c8c0c248b072960536668e89": "5e68b8ed3ecc06ed2793fd750d2328e3",
".git/objects/69/d508e8cf03294fa3067e40c7c9d47c04c7e4f4": "992137c03ca3866011ab1efba2051378",
".git/objects/6d/b97e5842e1d92b5fab80676f5741c115089076": "75a5121b44a421f92a30a346038af8cf",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/6f/8592a7b3dbd5fa2b4aff76f33e7608c1f8c165": "5ed1c095f94026370219ba615f457149",
".git/objects/6f/ab2e1c7804ea976a366109b6dfefc23d288e23": "ea7b791665d60e061879db129b49f131",
".git/objects/78/aa63416fe4c4c64274119de97bc9ef79f25408": "6b683aba3ef7a7a5845899a533ec1133",
".git/objects/7b/1aa2a57a1ccdd7b21d219874fcd3d01b94373d": "63f6909a16d9d2376c8b27dc81db2231",
".git/objects/7f/a630d15f786825a443e1d00148497d6cdf7a78": "eb043606ffd1394f7a626e8a0684f74b",
".git/objects/81/d4485e14b71075938c635c50654c598b3fcf7c": "5c17b7e1ee7f550d144776a9a7631793",
".git/objects/82/e5986de98eca2c8f89ea971d192578bebed2db": "2c9871f3442fff2749a59db70cd6380a",
".git/objects/84/7a5c08bc507b76ee94f241d2e9c6f70deb48cf": "676cbeed4c553757ca0381390f86be5b",
".git/objects/86/644b7dc982840e5f59001281d56deff0e66728": "e904bb83db64db0b98f6855cee1c26dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/objects/90/939bc2676c577760532cda801413b57e916a55": "86cc853fa1a76e414728a3b861514f4d",
".git/objects/93/ef48a01a3112f05b281a0d8b3373436abfc4bf": "226ca250efdb83e10194a8b04dca2adb",
".git/objects/96/07b49e8ee9ce86513b56d51870ee041eb60556": "829b205b4f730b3c7ec1bc415b3ad709",
".git/objects/96/563ef639fb9000f8d237b61933723339e12eed": "6a9c28edd78d942e30ab7e02acd8ebb0",
".git/objects/97/696635849b54fdf1a689d09d6d7b931890f846": "043d2e1dbe2b260421d014128ce88447",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/98/9f323b1e32b3522c404c91818fb9b67a5e76c0": "40621651a2d95c3406fd94d623dfce09",
".git/objects/99/3458758978591faeccb5757b5835d8a982e07f": "65e4da815cb6359930ed9729980f8520",
".git/objects/9b/6f8103bedf7da09151dbe60733f657dff468a2": "9dd2f3834874e1d64ee90cd3d9df02a1",
".git/objects/9c/6b5eaf9237dccb68967b0efd8e379d242369a8": "6b8a409645bdd5c48e0bc0c74e76a65f",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9f/6d12e6657497435bb49fc539d081155d392c79": "e2bcb1f1142c5f01704d7f0b03044e51",
".git/objects/9f/fbf0ba81700030d64467105abb79431c0f523b": "467df5247aee412b896db1e9163e868b",
".git/objects/a0/428c6fe354b31d384e6d646975efadc2bcfd9e": "1c92d6985a36288dbd5996583b6c97ff",
".git/objects/a1/14ef8b3615c59eea122683ae417972faf3d3f5": "dd105d62bb3597f1c7ab788140b60332",
".git/objects/a2/a7bc87eb05ca83c4e8606a461a534bcf37182b": "bb2ad07fbdf7c37eb56a03a19e38badd",
".git/objects/a3/57526eed1b9e8306160e6162653f0a99883b9e": "4b0cf1a2c9c002be6f65b761304372a6",
".git/objects/a6/f4a0e419c44418ce5a9e5fd6a260863d4a44d1": "9ca46a0a1ffdbf6305579208384136a7",
".git/objects/a7/bcf0c3b121f7e562579b85ca4b76cebbcb0e55": "9a91f1101d1b42e8e7971d88bf5e453f",
".git/objects/a9/b38ed8b7523a885bcf5923b1f9d5fd1f3028fb": "438fc7e138f7c2d02661b6b4841127bf",
".git/objects/ad/1f85f4ccfe3d3b83275112b60a2054eb6e9b54": "43d04f034d29b8695fe26b653950fac1",
".git/objects/af/df4c2dacdcc65f6e0213da186334a94edbc3f6": "a8bb5ff5dbda74eeee0d93f9824bc147",
".git/objects/b3/73d836281ac477e9fcccba90590854b76c2c44": "1d68a30a6eae79540e12e34628564c52",
".git/objects/b4/34ab030c60d4c3b41805a60e5a999aad03c374": "7f7a50060cca48352db11eb26a6ac5d3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/42fad17ed2f58a6941bd776ab5dacaa127208b": "c49e760473065dff0e9e5c3e183a1679",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/51f7deeda468257dfdb45ae308726dcbc28042": "19890c75a8ba27275c57431bd95e370e",
".git/objects/c5/ff7caca966940bc188ad52428c82fbbff16192": "6e63495861b624deb215d5e79f1bb176",
".git/objects/cb/7a9cb839c9f9afb8ff9e53a710c2f3bfb35f2e": "fa74761370e04571aaf464e22c02492c",
".git/objects/d1/8d1fc0a6ad28b5677aa7a37e74516543a43726": "00a11b75f55b81f848bb00228f046363",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d2/b22e27f54cf9322a9f2a89ced7cc934a1f6409": "64d604beff95bed7d90fc59e846c143d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b89516aec1684e24f3b51443d90cdd365b84f0": "4f845864c732546e8e9abac14473af16",
".git/objects/d6/f22182cc48e4d4ae3f52739b4e85e49fe9d75e": "2564bd9f0d550b0267600941a1d0208a",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/e33d0171a9fccd534d2c3b1c19541f35487fe6": "e4da1837ca621d4538078c16d4836b7a",
".git/objects/dc/2b757b7f09b56ff75cd2051fd7f6be9ed45f96": "ea78a0db854ae6ca6a1eeca602bead0f",
".git/objects/dc/96e0cab581ee2ae46d1a1d295ced18f4b684d3": "9a33e43c132846940eba0537639e63b5",
".git/objects/de/476dd5e409fa7f29fbe3c0abf556d031beb6b4": "46688e58787dd335c8490aa8f26246fc",
".git/objects/e0/2de5c6da3931befd43efc650bd491dd45b6ad3": "160eb1884014a4b01aafc05c0ea05a74",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/90ad18e66d1960ec910284dca0de1a2946afb6": "119f1f803649ea31f159343612825472",
".git/objects/e1/9ca670c4ec45f090a7bec8f5412a9d6fe626c3": "6533b35fe9fec1139fd93e84f2c1d715",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e4/7d8cffcb574a3ead9864124267b62468746d48": "a8001656cb562eb82de2ad052adb16ee",
".git/objects/e5/217fa51b0aa0811122a1813b116e37eed86ff6": "b24bd17ad46396f68e6f418d8c27dc79",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/68a5d90eb63cab55ce49ff6b3875d4534c3c39": "b967c28f116660afd2442e5268608592",
".git/objects/e9/dacd29ff8b507ae0224d4777a0894e4f69d97f": "7822248ad725e313b77f08ab44f258ca",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/36c0e31aee78187f90d5b8c949e2ff95f72879": "ac7d18732b412dfd2a82d4bacf29abc5",
".git/objects/ee/27c0acfa1d8c94b6556dff43fed8f872710302": "fc3d4f673a6cd21d19f174b30a6002bb",
".git/objects/ee/7523adb72b9fdaf30a3aadacd21762d8b0800b": "11fc41cbcb21ebc6eb3bb2ca4c3871e8",
".git/objects/ef/8c0004decf687e1bf1e165939209c4e7857bce": "b46885abe235ae6cefa612690bac133a",
".git/objects/ef/f76bbf5aa5db998875e7ca81bac38ff9527bb5": "d6efbaa1415ef0c01a59275131389d0e",
".git/objects/f1/131b241907f6ea07b386d75ba9f433720da66b": "0085f39cabcafde9c48d14eefee978a6",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/f9/35046f63f6febad07c6970d4f22f856af21848": "9b8ec56ad841df6a2f79219f5a0a9485",
".git/objects/fb/70ee564042de4c7146f4dc075be299caf35995": "156e835825237f2b46b9b42202e50569",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/fc/3571a0c0c578140b9aec7b767bf9cc900dd3f8": "b0f0d4dba8d478a2b17a5688dd066588",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/1e0242f86acada00bb6e986acaa483d4dcd5b6": "cdee4664fd0e0544d66f7897236819c6",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/main": "550e497f259e2c2db87674afbe7f66e0",
".git/refs/remotes/origin/main": "550e497f259e2c2db87674afbe7f66e0",
"assets/AssetManifest.bin": "51a338658a0ad2368b284cae6ad55b7c",
"assets/AssetManifest.json": "bd9a3173f20d7d7ca880f480161e22c7",
"assets/assets/fonts/reem/ReemKufiInk-Regular.ttf": "6701897574bdd92835841fa5be04295d",
"assets/assets/fonts/rubik/Rubik-Black.ttf": "a454459ef6f005383832c5aa33f22ebc",
"assets/assets/fonts/rubik/Rubik-BlackItalic.ttf": "347d040ac267266eab7ac5b3a4168a35",
"assets/assets/fonts/rubik/Rubik-Bold.ttf": "3e84b9e91636be0299ae44f99135b6d2",
"assets/assets/fonts/rubik/Rubik-BoldItalic.ttf": "235b2d876c4b9f3f12a7c439c74e5729",
"assets/assets/fonts/rubik/Rubik-ExtraBold.ttf": "74419db6af12e95b035beb3a2f2ddaee",
"assets/assets/fonts/rubik/Rubik-ExtraBoldItalic.ttf": "31e8a641be3b2de534cba8f023481544",
"assets/assets/fonts/rubik/Rubik-Italic.ttf": "4ac4d8c3ca41d91fe0224e04e6657995",
"assets/assets/fonts/rubik/Rubik-Light.ttf": "5f5803d6512478bbd7abbe8eb0d3891a",
"assets/assets/fonts/rubik/Rubik-LightItalic.ttf": "214e6aabb7a28d8cee7215f734790498",
"assets/assets/fonts/rubik/Rubik-Medium.ttf": "149ba9762e7abdc233e6917fafb8a651",
"assets/assets/fonts/rubik/Rubik-MediumItalic.ttf": "1baf188046a8716970f39834eca16eac",
"assets/assets/fonts/rubik/Rubik-Regular.ttf": "7dad6ed352aa899d584ce33989a5ddab",
"assets/assets/fonts/rubik/Rubik-SemiBold.ttf": "67a1f1242b6467e905b32ba521228454",
"assets/assets/fonts/rubik/Rubik-SemiBoldItalic.ttf": "500548c19634d9ce3cf959f1915c866a",
"assets/assets/images/accepted-request.png": "0ed3d52207dfb6cbcb2f05e6b89eae50",
"assets/assets/images/complete.png": "9d8e1e71cc94c3b3a387ff1b9f643df1",
"assets/assets/images/default_profile_picture.png": "22d55e3395a4159c17d6420a591dec6a",
"assets/assets/images/denied-request.png": "d8b7363781a70f36efb2937e03c5bff7",
"assets/assets/images/driver.png": "72f67677683389890531a99a2a50a4ae",
"assets/assets/images/fast-food.png": "ae79ee1914ad738d5871d9bd8b0c03ae",
"assets/assets/images/gradient_background.jpg": "3e5823a4f1e75b69fd3d3169a7a47bf6",
"assets/assets/images/header_image.png": "545ffbfb3c3fc4725e834637c9c281f1",
"assets/assets/images/icon1.png": "afe5d361e1cf79b2e758f99fee5b43a6",
"assets/assets/images/icon2.png": "66384068713ab405925f8dab1dd0f249",
"assets/assets/images/icon3.png": "a556e20a1fb894eab5a663693c5c7285",
"assets/assets/images/icon4.png": "ba0261ddc496ded71e1795891ec4bb24",
"assets/assets/images/Location.png": "ac8f460951bff8709de8521e4c6a137e",
"assets/assets/images/logo.png": "c30ff34e6477fc0736b6a7d01cdb188f",
"assets/assets/images/map.png": "97f79f018dbe10b6b709e7b1199f29e7",
"assets/assets/images/ok.png": "3e2d61dfb9f453beceae3ec65764b7f1",
"assets/assets/images/Piquele%2520Reports.png": "0459fe7e34eea4ce91ee806fe88b499b",
"assets/assets/images/piquele_logo.png": "eb16ef0afda1be7cbfd284f8d97054df",
"assets/assets/images/piquele_orange.png": "e76b1dd51917351d8f38ded80177bac2",
"assets/assets/images/piquele_reports_logo.png": "ff0ddd33b40b90e869114e81cd039494",
"assets/assets/images/product.jpg": "41b7626a92c74cb05f89d9e2e41afda7",
"assets/assets/images/restaurant.png": "baf4a3a4ab91b573dd824279f133f794",
"assets/assets/images/Start_Screen_Image_1.png": "189c19bc48212bd79f52e796b3e30fda",
"assets/assets/images/Start_Screen_Image_2.png": "90f3cb03c1dd7bb710821b9acc9b1ed7",
"assets/assets/images/Start_Screen_Image_3.png": "a1741cabfd5549da690c62ffa21d2bba",
"assets/assets/images/store.png": "bcad2c4652c885eedf6a529ed40a7bfc",
"assets/assets/images/succesful.png": "cc8ee302779b1531e9c638068d11db06",
"assets/assets/images/user.png": "ee2b8cfc02750dbf1a193dc1d0e2f28f",
"assets/assets/images/wait-request.png": "163d66c685d82d9d4509e9338edb2eb7",
"assets/assets/images/wallpaper.jpg": "bed8140df001faa753aaee8feb6416ba",
"assets/assets/images/warning.png": "fa659ce915c2e186b558969178e4c0f5",
"assets/assets/images/wrong.png": "489de08428a19381fce7f109792e22f1",
"assets/assets/vectors/cancel.svg": "d3dc7392aa2e7f35860e7208ad8fa269",
"assets/assets/vectors/codeRecovery_vector_1.svg": "a364d3b3fadd22c5a7549fe2dc75384f",
"assets/assets/vectors/codeRecovery_vector_2.svg": "4a02d14ff46b09e7f7cf0e9e42355005",
"assets/assets/vectors/email_check.svg": "146b5c8d5fa9d3e990a982965422123e",
"assets/assets/vectors/home_vector_1.svg": "6f421c308c8d0454ba5698e77431575b",
"assets/assets/vectors/home_vector_2.svg": "ae6278e8360d64bb94633a65fa149a1c",
"assets/assets/vectors/orderAdded_vector_1.svg": "62c5eb920cdcc8ecbec0354f426c7cbb",
"assets/assets/vectors/orderAdded_vector_2.svg": "6929b236a0147a0a976d7eb7b90e332d",
"assets/assets/vectors/passwordRecovery_vector_1.svg": "a9e2088fb256fa23259b785470979e6c",
"assets/assets/vectors/passwordRecovery_vector_2.svg": "2ce25cc187b0c8d7fba3f86fe994e447",
"assets/assets/vectors/Piquele%2520Reports.svg": "17935aa46391e738c1806416fd5d8580",
"assets/assets/vectors/piquele_orange.svg": "ffe9e7a18d59aa952fabf62fb0bb5911",
"assets/assets/vectors/piquele_reports_logo.svg": "63cb68a221d8953f3e59766d36a17386",
"assets/assets/vectors/registerDriver_vector.svg": "b3548de55b383d571a95aceae9a4646f",
"assets/assets/vectors/register_business_intro_illustration.svg": "481bbf4572efc25651f9140eb9121373",
"assets/assets/vectors/register_vector_1.svg": "5ff40e6c26a381e526994944487ad61d",
"assets/assets/vectors/register_vector_2.svg": "bcd80db610be6ecbeadac9d7adff46ec",
"assets/assets/vectors/splash_vector_1.svg": "da877da1afecdf6557958d4823299f59",
"assets/assets/vectors/splash_vector_2.svg": "bbb203a962f880498a7fef8a0a6e91ab",
"assets/assets/vectors/start_screen_vector_1.svg": "eacde39bcc186f3fe3522780e96338d7",
"assets/assets/vectors/start_screen_vector_2.svg": "1f6b21038ad761b1098167d797309183",
"assets/assets/vectors/start_screen_vector_3.svg": "7f6a54e2356d099b483f5e68b81f0ac3",
"assets/assets/vectors/success.svg": "80fabfe129291f8181d996daff7f059b",
"assets/assets/vectors/wait.svg": "bcf642081fa2f0a8f6d14ce1dc4bdc55",
"assets/assets/videos/cooking.mp4": "b795f8aef62b9ba42624d601b513bea8",
"assets/FontManifest.json": "74f6751dcaa6e876bb7a8ce779b36b2f",
"assets/fonts/MaterialIcons-Regular.otf": "c7159198b86466c990539eab6896349a",
"assets/NOTICES": "e6112ec414828d994de43e5813dc5ae8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"CNAME": "7622f511356b8f6c6d7cf377618ed2c1",
"favicon.png": "9fc0005453e5274f9483b69dd10017b7",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7817af6c37c02993246fcf1191960534",
"/": "7817af6c37c02993246fcf1191960534",
"main.dart.js": "908b87f3e732d70b175dcad0b09dda35",
"manifest.json": "fc6a5ee790923d7e0f70ced83a6277e7",
"pdfGenerator.js": "81051bcc2cf1bedf378224b0a93e2877",
"version.json": "da6616fad85644be45b8b3d9894e3e8c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

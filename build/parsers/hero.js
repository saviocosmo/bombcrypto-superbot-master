'use strict';const _0x2c8eec=_0x59fa;(function(_0x2921f5,_0x35021e){const _0x580c74=_0x59fa,_0x266464=_0x2921f5();while(!![]){try{const _0x248827=-parseInt(_0x580c74(0x132))/0x1+parseInt(_0x580c74(0x121))/0x2+parseInt(_0x580c74(0x124))/0x3*(parseInt(_0x580c74(0x11d))/0x4)+parseInt(_0x580c74(0x13a))/0x5+-parseInt(_0x580c74(0x12c))/0x6+parseInt(_0x580c74(0x136))/0x7+parseInt(_0x580c74(0x138))/0x8;if(_0x248827===_0x35021e)break;else _0x266464['push'](_0x266464['shift']());}catch(_0x33632e){_0x266464['push'](_0x266464['shift']());}}}(_0x50ae,0xaa468));function _0x50ae(){const _0x25073f=['assign','parseRevBin','7928046pXKyTk','slice','toRevBin','map','HERO_RARITY_SIMBOL','stage','213983pLjQoY','join','HERO_RARITY_ARRAY','active','1592143hxNWJv','__esModule','8307744fppZZm','parseHeroStats','984430nFwKSb','shields','../err','makeException','parseHeroRaritySimbol','parseHeroRarity','InvalidGenId','164144lvUBJY','match','heroType','restore_hp','473002unNHGo','energy','Unknown','39FzUcyq','../model','HERO_SKIN_MAP','defineProperty','HERO_SKILL_MAP','parseGetActiveBomberPayload'];_0x50ae=function(){return _0x25073f;};return _0x50ae();}Object[_0x2c8eec(0x127)](exports,_0x2c8eec(0x137),{'value':!![]}),exports[_0x2c8eec(0x129)]=exports['parseHeroStats']=exports[_0x2c8eec(0x11a)]=exports[_0x2c8eec(0x11b)]=void 0x0;const _1=require('.'),err_1=require(_0x2c8eec(0x118)),model_1=require(_0x2c8eec(0x125));function _0x59fa(_0x4a74eb,_0x50c984){const _0x50aea4=_0x50ae();return _0x59fa=function(_0x59faea,_0x51d8ac){_0x59faea=_0x59faea-0x118;let _0x28ef31=_0x50aea4[_0x59faea];return _0x28ef31;},_0x59fa(_0x4a74eb,_0x50c984);}function parseHeroState(_0x38b61e){return model_1['STATE_ARRAY'][_0x38b61e]||'Unknown';}function parseHeroRarity(_0x29834e){const _0x2cd2b1=_0x2c8eec;return model_1[_0x2cd2b1(0x134)][_0x29834e]||_0x2cd2b1(0x123);}exports[_0x2c8eec(0x11b)]=parseHeroRarity;function parseHeroRaritySimbol(_0x1cc6ba){const _0x11931a=_0x2c8eec;return model_1[_0x11931a(0x130)][_0x1cc6ba]||_0x11931a(0x123);}exports[_0x2c8eec(0x11a)]=parseHeroRaritySimbol;function parseHeroSkin(_0x55d611){const _0x13e53e=_0x2c8eec;function _0x4266aa(_0x1b8e99){const _0x2d257d=_0x59fa;return _0x1b8e99 in model_1[_0x2d257d(0x126)];}return _0x4266aa(_0x55d611)?model_1[_0x13e53e(0x126)][_0x55d611]:'Unknown';}function parseHeroSkill(_0x38b787){const _0x1d045d=_0x2c8eec;function _0x4a7629(_0x7fbebf){return _0x7fbebf in model_1['HERO_SKILL_MAP'];}return _0x4a7629(_0x38b787)?model_1[_0x1d045d(0x128)][_0x38b787]:_0x1d045d(0x123);}function parseHeroStats(_0x197540){const _0x314b37=_0x2c8eec,_0x4d4fa8=0x1e,_0x5a2c54=0x28,_0x184a74=0x2d,_0x563eb3=0x32,_0x14f5db=0x37,_0x108f5e=0x3c,_0x1053d7=0x41,_0x857bac=0x46,_0x4527cb=0x4b,_0x5b5c93=0x50,_0x3ce711=0x55,_0x30c83f=0x5a,_0x4d4040=0x5f,_0x196412=(0x0,_1[_0x314b37(0x12e)])(_0x197540);if(_0x196412['length']<_0x4d4040)throw(0x0,err_1[_0x314b37(0x119)])(_0x314b37(0x11c),'gen_id\x20\x27'+_0x197540+'\x27\x20is\x20invalid.');const _0x15639e=_0x196412[_0x314b37(0x12d)](_0x4d4040),_0x487eb9=_0x15639e[_0x314b37(0x11e)](/.{1,5}/g)||[],_0x308d43=_0x487eb9['map'](_0x39403a=>parseInt(_0x39403a['split']('')['reverse']()[_0x314b37(0x133)](''),0x2));return{'index':(0x0,_1['parseRevBin'])(_0x196412,_0x4d4fa8,_0x5a2c54),'rarity':parseHeroRarity((0x0,_1[_0x314b37(0x12b)])(_0x196412,_0x5a2c54,_0x184a74)),'raritySimbol':parseHeroRaritySimbol((0x0,_1[_0x314b37(0x12b)])(_0x196412,_0x5a2c54,_0x184a74)),'rarityIndex':(0x0,_1[_0x314b37(0x12b)])(_0x196412,_0x5a2c54,_0x184a74),'level':(0x0,_1[_0x314b37(0x12b)])(_0x196412,_0x184a74,_0x563eb3),'variant':(0x0,_1[_0x314b37(0x12b)])(_0x196412,_0x563eb3,_0x14f5db),'skin':parseHeroSkin((0x0,_1['parseRevBin'])(_0x196412,_0x14f5db,_0x108f5e)),'stamina':(0x0,_1[_0x314b37(0x12b)])(_0x196412,_0x108f5e,_0x1053d7),'speed':(0x0,_1[_0x314b37(0x12b)])(_0x196412,_0x1053d7,_0x857bac),'bombSkin':(0x0,_1[_0x314b37(0x12b)])(_0x196412,_0x857bac,_0x4527cb),'skillCount':(0x0,_1['parseRevBin'])(_0x196412,_0x4527cb,_0x5b5c93),'strength':(0x0,_1[_0x314b37(0x12b)])(_0x196412,_0x5b5c93,_0x3ce711),'range':(0x0,_1[_0x314b37(0x12b)])(_0x196412,_0x3ce711,_0x30c83f),'capacity':(0x0,_1['parseRevBin'])(_0x196412,_0x30c83f,_0x4d4040),'skills':_0x308d43[_0x314b37(0x12f)](parseHeroSkill)};}exports[_0x2c8eec(0x139)]=parseHeroStats;function parseGetActiveBomberPayload(_0x148207){const _0x397d3a=_0x2c8eec;return Object[_0x397d3a(0x12a)]({'id':_0x148207['id'],'state':parseHeroState(_0x148207[_0x397d3a(0x131)]),'energy':_0x148207[_0x397d3a(0x122)]+_0x148207[_0x397d3a(0x120)],'shields':_0x148207===null||_0x148207===void 0x0?void 0x0:_0x148207[_0x397d3a(0x13b)],'heroType':_0x148207[_0x397d3a(0x11f)],'active':Boolean(_0x148207[_0x397d3a(0x135)])},parseHeroStats(_0x148207['gen_id']));}exports[_0x2c8eec(0x129)]=parseGetActiveBomberPayload;
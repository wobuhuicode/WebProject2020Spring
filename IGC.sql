DROP TABLE IF EXISTS `game`;

CREATE TABLE `GAME`(
  `GAME_ID` varchar(20) NOT NULL ,
  `NAME` VARCHAR(50) NOT NULL ,
    `link` varchar(255) NOT NULL,
  `type` varchar(50) not null,
  `image` varchar(60) not null,
  `STAR` varchar(20) NOT NULL DEFAULT '5',
  `INTRODUCTION` TEXT NOT NULL COMMENT '游戏介绍',
  PRIMARY KEY (`GAME_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

INSERT INTO `GAME` VALUES ('1' , '星际争霸' ,'https://sc2.blizzard.cn/landing','策略','/image/xinji.jpg', '5','《星际争霸》（英语：StarCraft）是暴雪娱乐制作发行的一款即时战略游戏。这是星际争霸系列游戏的第一部作品，于1998年3月31日正式发行。游戏拥有3部资料片，但是正式发行的只有《星际争霸：母巢之战》。其续作《星际争霸II：自由之翼》已于2010年7月27日发行。《星际争霸》使用《魔兽争霸Ⅱ》引擎，但不同的是融合了三个截然不同的种族：Protoss，Zerg和Terran，他们各自有着迥然不同的战斗单位与科技树。');
INSERT INTO `GAME` VALUES ('2' , '彩虹六号：围攻' ,'https://baike.baidu.com/item/%E5%BD%A9%E8%99%B9%E5%85%AD%E5%8F%B7/24852?fromtitle=%E5%BD%A9%E8%99%B96%E5%8F%B7&fromid=1307688&fr=aladdin','射击','/image/R6.jpg', '4','《彩虹六号》（港台译作《虹彩六号》）（Rainbow Six）是育碧（Ubi）旗下的知名系列射击模拟游戏，拥有数代相应作品。其所属平台包括主机和手机客户端。同时游戏支持多人联机进行协作任务（Co-Op）或对抗。于1998年8月发行第一部作品。《彩虹六号》游戏故事题材改编自已故著名军事小说家汤姆·克兰西（Tom Clancy）的同名小说，发行商育碧公司同时也获得了汤姆·克兰西对旗下所有军事游戏的独家冠名权。游戏描述和扮演的是一支名为“彩虹”的多国合作反恐特种部队，随着他们的视角执行各种相应的作战任务，打击恐怖主义对世界的危害。“彩虹六号”这个名字本身根据原著小说的描述是“彩虹”小队的创立者约翰·克拉克（John Clark）的代号。');
INSERT INTO `GAME` VALUES ('3' , '只狼' , 'https://www.gamersky.com/z/sekiro/','动作','/image/sekiro.jpg','5','《只狼：影逝二度(Sekiro：Shadows Die Twice)》是一款由From Software制作的第三人称视角的动作冒险沙盒类游戏，玩家将操控一位忍者，拯救他的主人---拥有日本贵族血统的大能的皇子，并向他的天敌复仇。该游戏已于2019年3月22日全球同步上市，并支持中文版。2019年12月13日，《只狼：影逝二度》获得TGA 2019最佳年度游戏');
INSERT INTO `GAME` VALUES ('4' , 'PUBG' , 'https://pubg.qq.com/','射击','/image/pubg.jpg','4','《《绝地求生》(PUBG) 是由蓝洞开发的一款战术竞技型射击类沙盒游戏。在该游戏中，玩家需要在游戏地图上收集各种资源，并在不断缩小的安全区域内对抗其他玩家，让自己生存到最后。游戏《绝地求生》除获得G-STAR最高奖项总统奖以及其他五项大奖，还打破了7项吉尼斯纪录。');
INSERT INTO `GAME` VALUES ('5' , '魔兽世界' ,'https://wow.blizzard.cn/landing','扮演','/image/warcraft.jpg','4', '《魔兽世界》（World of Warcraft）是由著名游戏公司暴雪娱乐所制作的第一款网络游戏，属于大型多人在线角色扮演游戏。游戏以该公司出品的即时战略游戏《魔兽争霸》的剧情为历史背景，依托魔兽争霸的历史事件和英雄人物，魔兽世界有着完整的历史背景时间线。玩家在魔兽世界中冒险、完成任务、新的历险、探索未知的世界、征服怪物等。');
INSERT INTO `GAME` VALUES ('6' , '荒野大镖客' ,'https://www.gamersky.com/z/rdr2/','射击','/image/red.jpg','5', '《Red Dead Redemption 2》，简称RDR2，是Rockstar San Diego工作室制作，Rockstar公司发行的一款以美国西部拓荒史为题材的动作冒险类开放世界游戏，为2010年该公司发行的《Red Dead Redemption》的正统续作。游戏中述说亚瑟·摩根和声名狼藉的范德林德帮派的传奇故事，让玩家体验在 19 世纪的最后岁月里横跨美国的亡命之旅。');
INSERT INTO `GAME` VALUES ('7' , '传送门2' ,'https://www.3dmgame.com/games/Portal2/','智力','/image/portal2.jpg','5', '《传送门2》是由Valve Software研发的独具风格的第一人称射击游戏和益智解谜游戏的结合体，发行于2011年。玩家手中的武器（传送枪）并非为射杀敌人而存在，而是用于在墙壁、地板上发射打开传送门，在蓝门与橙门之间穿梭。 通过这种方式来解开各种机关和谜题，对于玩家将是一次全新挑战。');
INSERT INTO `GAME` VALUES ('8' , '星露谷物语' ,'http://xinglugu.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5','休闲','/image/star.jpg','4', '你继承了你爷爷在星露谷留下的老旧农场。带着爷爷留下的残旧工具和几枚硬币开始了你的新生活。你能适应这小镇上的生活并且将这个杂草丛生的老旧农场变成一个繁荣的家吗？这不是一件容易的事情。尤其是当Joja企业进驻镇上，导致以前旧的生活方式都消失了。交流中心这个以前举办过众多活动并充满活力的地方现在变成再也无人愿意踏进的一片废墟。但这山谷似乎充满机会，只要做出一点奉献你就可能是会成为让星露谷重回繁荣的人之一！');
INSERT INTO `GAME` VALUES ('9' , '怪物猎人世界' ,'https://www.3dmgame.com/games/monsterhunterworld/','RPG','/image/monster.jpg','5', '新的生命之地。狩猎, 就是本能! 在系列最新作品「Monster Hunter: World」里, 地形和环境生物, 甚至魔物的生态系统都能被利用, 用一切手段挑战巨大的魔物。在新建构的「Monster Hunter: World」中, 可以体验到你一直期盼的极致猎人生活。');
INSERT INTO `GAME` VALUES ('10' , '2k20' ,'','体育','/image/2k20.jpg','2', '经过长时间发展进化，《NBA 2K》系列俨然已成为超越篮球模拟游戏的存在。《NBA 2K20》不但拥有顶级的图像画面与游戏性、还拥有创新的游戏模式和无与伦比的球员操纵及自定义，重新定义了体育游戏的全新可能。此外，本作还拥有巨大的开放世界街区，如同全新上线的社交平台。玩家和球友们齐聚于此，帮助篮球文化再下一程。');
INSERT INTO `GAME` VALUES ('11' , '胡闹厨房' ,'','休闲','/image/kitchen.jpg','3', 'overcook2是一款在线合作做菜游戏，当然你也可以一人独当一面。对比起前作的孤身一人，二的出现带来了大量新内容的同时，还增加了多人在线联机功能，并有更多的模式和挑战的等待玩家去探索。对比起前作，2的挑战更需要至少两人的同心协力才可以玩耍的欢乐，若是独自一人又或是网络不好无法联机，那么本作的欢乐将少掉一大半。');


DROP TABLE IF EXISTS `COMMENTS`;

CREATE TABLE `COMMENTS`(
  `GAME_ID` varchar(20) NOT NULL,
   `GAME_NAME` varchar(20) NOT NULL,
  `USER_ID` varchar(20) NOT NULL ,
  `COMMENT` text NOT NULL COMMENT '用户评论',
  `STAR` varchar(20) NOT NULL DEFAULT '5' ,
  `CREATE_TIME` datetime NOT NULL,
  PRIMARY KEY (`GAME_ID`,`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;




DROP TABLE IF EXISTS `USER`;

CREATE TABLE `user` (
  `USER_ID` varchar(20) NOT NULL ,
  `USERNAME` varchar(255) NOT NULL COMMENT '用户名',
  `EMAIL` varchar(255) NOT NULL COMMENT '邮箱',
  `PASSWORD` varchar(255) NOT NULL COMMENT '密码',
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

INSERT INTO `user` VALUES ('1','ricky','12345@163.com','1234');
INSERT INTO `user` VALUES ('2','wo','123456@163.com','1234');

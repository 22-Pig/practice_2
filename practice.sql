/*
 Navicat Premium Data Transfer

 Source Server         : practice
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : practice

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 18/01/2021 17:56:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for alidevice
-- ----------------------------
DROP TABLE IF EXISTS `alidevice`;
CREATE TABLE `alidevice`  (
  `id` int NOT NULL,
  `ProductKey` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `DeviceName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of alidevice
-- ----------------------------
INSERT INTO `alidevice` VALUES (1, 'a1fQ0wC2wIM', 'sprinkler_A_1_w1');
INSERT INTO `alidevice` VALUES (2, 'a1fQ0wC2wIM', 'sprinkler_A_1_m1');
INSERT INTO `alidevice` VALUES (3, 'a1fQ0wC2wIM', 'sprinkler_A_1_w2');
INSERT INTO `alidevice` VALUES (4, 'a1fQ0wC2wIM', 'sprinkler_A_1_m2');
INSERT INTO `alidevice` VALUES (5, 'a1bBAM1kAGT', 'warininglight_A_1_m2');
INSERT INTO `alidevice` VALUES (6, 'a1bBAM1kAGT', 'warininglight_A_1_m1');
INSERT INTO `alidevice` VALUES (7, 'a1bBAM1kAGT', 'warininglight_A_1_w2');
INSERT INTO `alidevice` VALUES (8, 'a1bBAM1kAGT', 'warininglight_A_1_w1');
INSERT INTO `alidevice` VALUES (9, 'a1MGI8qhIzA', 'flush_A_1_m2');
INSERT INTO `alidevice` VALUES (10, 'a1MGI8qhIzA', 'flush_A_1_m1');
INSERT INTO `alidevice` VALUES (11, 'a1eJByEFTqa', 'infrared_A_1_m2');
INSERT INTO `alidevice` VALUES (12, 'a1eJByEFTqa', 'infrared_A_1_m1');
INSERT INTO `alidevice` VALUES (13, 'a1lI6UPYTuT', 'door_A_1_m2');
INSERT INTO `alidevice` VALUES (14, 'a1lI6UPYTuT', 'door_A_1_m1');
INSERT INTO `alidevice` VALUES (15, 'a1lI6UPYTuT', 'door_A_1_w2');
INSERT INTO `alidevice` VALUES (16, 'a1lI6UPYTuT', 'door_A_1_w1');
INSERT INTO `alidevice` VALUES (17, 'a1FEtVq9sc6', 'window_A_1_m');
INSERT INTO `alidevice` VALUES (18, 'a1FEtVq9sc6', 'window_A_1_w');
INSERT INTO `alidevice` VALUES (19, 'a1gslYSxdVh', 'fan_A_1_m');
INSERT INTO `alidevice` VALUES (20, 'a1gslYSxdVh', 'fan_A_1_w');
INSERT INTO `alidevice` VALUES (21, 'a1nZJ6Oxg9s', 'tem_A_1_m');
INSERT INTO `alidevice` VALUES (22, 'a1nZJ6Oxg9s', 'tem_A_1_w');
INSERT INTO `alidevice` VALUES (23, 'a1Z79V5BhUM', 'H2S_A_1_m');
INSERT INTO `alidevice` VALUES (24, 'a1Z79V5BhUM', 'H2S_A_1_w');
INSERT INTO `alidevice` VALUES (25, 'a1jFqI01AFf', 'NH3_A_1_m');
INSERT INTO `alidevice` VALUES (26, 'a1jFqI01AFf', 'NH3_A_1_w');
INSERT INTO `alidevice` VALUES (27, 'a1gToHWISmS', 'smoke_A_1_m');
INSERT INTO `alidevice` VALUES (28, 'a1gToHWISmS', 'smoke_A_1_w');
INSERT INTO `alidevice` VALUES (29, 'a1tSRxwFLjh', 'hum_A_1_m');
INSERT INTO `alidevice` VALUES (30, 'a1tSRxwFLjh', 'hum_A_1_w');
INSERT INTO `alidevice` VALUES (31, 'a1TRlvyC59i', 'testled1');

-- ----------------------------
-- Table structure for aliproduct
-- ----------------------------
DROP TABLE IF EXISTS `aliproduct`;
CREATE TABLE `aliproduct`  (
  `id` int NULL DEFAULT NULL,
  `ProductName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ProductKey` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of aliproduct
-- ----------------------------
INSERT INTO `aliproduct` VALUES (1, '厕所蹲位杀菌喷雾', 'a1fQ0wC2wIM', 'sprinkler');
INSERT INTO `aliproduct` VALUES (2, '厕所尿池冲水', 'a1MGI8qhIzA', 'flush');
INSERT INTO `aliproduct` VALUES (3, '厕所窗户', 'a1FEtVq9sc6', 'window');
INSERT INTO `aliproduct` VALUES (4, '厕所氨气检测', 'a1jFqI01AFf', 'NH3');
INSERT INTO `aliproduct` VALUES (5, '厕所湿度计', 'a1tSRxwFLjh', 'Humd');
INSERT INTO `aliproduct` VALUES (6, '厕所烟雾检测', 'a1gToHWISmS', 'Smoke');
INSERT INTO `aliproduct` VALUES (7, '厕所硫化氢检测', 'a1Z79V5BhUM', 'H2S');
INSERT INTO `aliproduct` VALUES (8, '厕所温度计', 'a1nZJ6Oxg9s', 'Temp');
INSERT INTO `aliproduct` VALUES (9, '厕所排风扇', 'a1gslYSxdVh', 'fan');
INSERT INTO `aliproduct` VALUES (10, '厕所门', 'a1lI6UPYTuT', 'door');
INSERT INTO `aliproduct` VALUES (11, '厕所尿池红外', 'a1eJByEFTqa', 'mot');
INSERT INTO `aliproduct` VALUES (12, '厕所蹲位提示灯', 'a1bBAM1kAGT', 'led');
INSERT INTO `aliproduct` VALUES (23, '厕所试验灯1', 'a1sX3ei42YJ', 'first test');
INSERT INTO `aliproduct` VALUES (24, '厕所试验灯2', 'a1l8Y1v6aEg', 'second test');
INSERT INTO `aliproduct` VALUES (25, '厕所试验灯3', 'a1pmWEoyo6I', 'third test');
INSERT INTO `aliproduct` VALUES (26, '厕所试验灯4', 'a1TRlvyC59i', 'third test123123');

-- ----------------------------
-- Table structure for alipt
-- ----------------------------
DROP TABLE IF EXISTS `alipt`;
CREATE TABLE `alipt`  (
  `ProductKey` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `DeviceName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `DeviceSecret` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `postPropsName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `build` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `floor` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `option` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of alipt
-- ----------------------------
INSERT INTO `alipt` VALUES ('a1nZJ6Oxg9s', 'tem_A_1_m', '5516b206520194b6e56ef4a822777ae3', 'CurrentTemperature', 'A', '01', 'm', 'Temp', 'Temp_101', '2.734375', NULL);
INSERT INTO `alipt` VALUES ('a1nZJ6Oxg9s', 'tem_A_1_w', 'c028bb4d387bd6eecc96f9dfddb24704', 'CurrentTemperature', 'A', '01', 'f', 'Temp', 'Temp_001', '4.296875', NULL);
INSERT INTO `alipt` VALUES ('a1tSRxwFLjh', 'hum_A_1_m', '523a9e39c535c1aaa7cf3f2260196ede', 'CurrentHumidity', 'A', '01', 'm', 'Humd', 'Humd_101', '76.3671875', NULL);
INSERT INTO `alipt` VALUES ('a1tSRxwFLjh', 'hum_A_1_w', '266dbb85643d3682256f650467105c71', 'CurrentHumidity', 'A', '01', 'f', 'Humd', 'Humd_001', '75.5859375', NULL);
INSERT INTO `alipt` VALUES ('a1gToHWISmS', 'smoke_A_1_w', '74a134a32af870fa9eed1ff982cca238', '	\r\nCO2Value', 'A', '01', 'f', 'Smoke', 'Smoke_001', '10.15625', NULL);
INSERT INTO `alipt` VALUES ('a1gToHWISmS', 'smoke_A_1_m', 'c701d92761b70f530ce948b21120542b', '	\r\nCO2Value', 'A', '01', 'm', 'Smoke', 'Smoke_101', '10.15625', NULL);
INSERT INTO `alipt` VALUES ('a1jFqI01AFf', 'NH3_A_1_w', '8f367083c963a28004d99f0be5e3f06a', '	\r\nNH3', 'A', '01', 'f', 'NH3', 'NH3_001', '60', NULL);
INSERT INTO `alipt` VALUES ('a1jFqI01AFf', 'NH3_A_1_m', '5c34d71a60e9826717521bbbe146437d', '	\r\nNH3', 'A', '01', 'm', 'NH3', 'NH3_101', '67', NULL);
INSERT INTO `alipt` VALUES ('a1Z79V5BhUM', 'H2S_A_1_m', '2ac657018f5c6b40d5ff7235403a5587', 'SO2', 'A', '01', 'm', 'H2S', 'H2S_101', '59', NULL);
INSERT INTO `alipt` VALUES ('a1Z79V5BhUM', 'H2S_A_1_w', 'fa949ab76ed398aae9ef911be26aa4c3', 'SO2', 'A', '01', 'f', 'H2S', 'H2S_001', '29', NULL);
INSERT INTO `alipt` VALUES ('a1gslYSxdVh', 'fan_A_1_m', '80fb5b10681430a91ea6dd2ec9e85e45', 'PowerSwitch', 'A', '01', 'm', 'fan', 'fan_101', '1', NULL);
INSERT INTO `alipt` VALUES ('a1gslYSxdVh', 'fan_A_1_w', 'd25371fe44f5cfcc1117950080907298', 'PowerSwitch', 'A', '01', 'f', 'fan', 'fan_001', '1', NULL);
INSERT INTO `alipt` VALUES ('a1FEtVq9sc6', 'window_A_1_w', '4831fabb3fa89f415aae2be45576e3b0', '	\r\nWorkSwitch', 'A', '01', 'f', 'window', 'window_001', '0', NULL);
INSERT INTO `alipt` VALUES ('a1FEtVq9sc6', 'window_A_1_m', 'd61fc0bb1864b466a35894736d3a2a93', '	\r\nWorkSwitch', 'A', '01', 'm', 'window', 'window_101', '0', NULL);
INSERT INTO `alipt` VALUES ('a1MGI8qhIzA', 'flush_A_1_m1', '142a984220dead4db872cc0f90e739ba', '	\r\nWorkSwitch', 'A', '01', 'm', 'flush', 'flush_101', '1', NULL);
INSERT INTO `alipt` VALUES ('a1MGI8qhIzA', 'flush_A_1_m2', 'c301a5305f892b1b8cf3e1251e1c1b41', '	\r\nWorkSwitch', 'A', '01', 'm', 'flush', 'flush_102', '0', NULL);
INSERT INTO `alipt` VALUES ('a1eJByEFTqa', 'infrared_A_1_m1', '7ee0a8e8d4cfbd1a2a5e75eb2ae4ea14', 'MotionAlarmState', 'A', '01', 'm', 'mot', 'mot_101', '0', NULL);
INSERT INTO `alipt` VALUES ('a1eJByEFTqa', 'infrared_A_1_m2', '4907e95ff5160b8afb21e3aa4790cf59', 'MotionAlarmState', 'A', '01', 'm', 'mot', 'mot_102', '0', NULL);
INSERT INTO `alipt` VALUES ('a1lI6UPYTuT', 'door_A_1_m1', '6c14942be0998d6056988a1841a1ee4d', 'Lock_control', 'A', '01', 'm', 'door', 'door_101', '0', NULL);
INSERT INTO `alipt` VALUES ('a1lI6UPYTuT', 'door_A_1_m2', '40cf7f813128d641b9546fc5378701d0', 'Lock_control', 'A', '01', 'm', 'door', 'door_102', '0', NULL);
INSERT INTO `alipt` VALUES ('a1lI6UPYTuT', 'door_A_1_w1', '375c4c4f5318eebec26f000085d8f463', 'Lock_control', 'A', '01', 'f', 'door', 'door_001', '1', NULL);
INSERT INTO `alipt` VALUES ('a1lI6UPYTuT', 'door_A_1_w2', '7ebb5dbc4bf7be8b3b3c5a9e8349a627', 'Lock_control', 'A', '01', 'f', 'door', 'door_002', '0', NULL);
INSERT INTO `alipt` VALUES ('a1bBAM1kAGT', 'warininglight_A_1_m1', '27c34e265a2221eac715831b1373b19d', 'LightSwitch', 'A', '01', 'm', 'led', 'led_101', '1', NULL);
INSERT INTO `alipt` VALUES ('a1bBAM1kAGT', 'warininglight_A_1_m2', '6479abebc0558514c13fe3e079e03bf1', 'LightSwitch', 'A', '01', 'm', 'led', 'led_102', '1', NULL);
INSERT INTO `alipt` VALUES ('a1bBAM1kAGT', 'warininglight_A_1_w1', '94d0886e74a2354da795258a79623f07', 'LightSwitch', 'A', '01', 'f', 'led', 'led_001', '0', NULL);
INSERT INTO `alipt` VALUES ('a1bBAM1kAGT', 'warininglight_A_1_w2', '4df3a7f1bb29908bd17935dc80cd0473', 'LightSwitch', 'A', '01', 'f', 'led', 'led_002', '0', NULL);
INSERT INTO `alipt` VALUES ('a1fQ0wC2wIM', 'sprinkler_A_1_m1', 'aa3ee9757a77f70f5bf51248b48d562b', 'WorkSwitch', 'A', '01', 'm', 'sprinkler', 'sprinkler_101', '0', NULL);
INSERT INTO `alipt` VALUES ('a1fQ0wC2wIM', 'sprinkler_A_1_m2', 'ff29bad6f88e9a9888bc694dc2011751', 'WorkSwitch', 'A', '01', 'm', 'sprinkler', 'sprinkler_102', '0', NULL);
INSERT INTO `alipt` VALUES ('a1fQ0wC2wIM', 'sprinkler_A_1_w1', '97e49c8feb51706b58c1f7500797d40b', 'WorkSwitch', 'A', '01', 'f', 'sprinkler', 'sprinkler_001', '1', NULL);
INSERT INTO `alipt` VALUES ('a1fQ0wC2wIM', 'sprinkler_A_1_w2', 'b554db9833b43b1e8853bba74a9dc66b', 'WorkSwitch', 'A', '01', 'f', 'sprinkler', 'sprinkler_002', '0', NULL);

-- ----------------------------
-- Table structure for device
-- ----------------------------
DROP TABLE IF EXISTS `device`;
CREATE TABLE `device`  (
  `id` int NOT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `descr` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of device
-- ----------------------------
INSERT INTO `device` VALUES (1, 'humd', '湿度传感器1', '43.4', '男厕');
INSERT INTO `device` VALUES (2, 'temp', '温度传感器1', '23.2', '男厕');
INSERT INTO `device` VALUES (3, 'led', '灯2', '1', '男厕');
INSERT INTO `device` VALUES (4, 'CO', 'CO传感器1', '2.3', '男厕');
INSERT INTO `device` VALUES (5, 'door', '门1', '1', '女厕');
INSERT INTO `device` VALUES (6, 'temp', '温度传感器2', '19.2', '女厕');
INSERT INTO `device` VALUES (7, 'humd', '湿度传感器2', '42.1', '女厕');
INSERT INTO `device` VALUES (8, 'CO', 'CO传感器2', '2.4', '女厕');
INSERT INTO `device` VALUES (9, 'led', '灯1', '1', '女厕');
INSERT INTO `device` VALUES (10, 'door', '门2', '0', '男厕');
INSERT INTO `device` VALUES (11, 'infrared', '红外1', '1', '男厕');
INSERT INTO `device` VALUES (12, 'infrared', '红外2', '0', '男厕');
INSERT INTO `device` VALUES (13, 'fan', '风扇1', '0', '男厕');
INSERT INTO `device` VALUES (14, 'fan', '123456', '0', '654321');
INSERT INTO `device` VALUES (15, 'led', '123', '0', '321');
INSERT INTO `device` VALUES (16, '123', '321', '0', '12');
INSERT INTO `device` VALUES (17, 'temp', '1233', '0', '3213');
INSERT INTO `device` VALUES (18, 'fan', '1231', '0', '3123');
INSERT INTO `device` VALUES (19, '234', '324', '0', '324');
INSERT INTO `device` VALUES (20, 'qwf', 'adsf', '0', 'fasd');
INSERT INTO `device` VALUES (21, 'hghjkg', 'fan', '0', 'hjk');
INSERT INTO `device` VALUES (22, '123', '412423', '0', '423');
INSERT INTO `device` VALUES (24, 'fan', 'fan', '0', 'fan');
INSERT INTO `device` VALUES (25, 'aabb', 'asdasd', '0', 'ghjghsd');

-- ----------------------------
-- Table structure for distance
-- ----------------------------
DROP TABLE IF EXISTS `distance`;
CREATE TABLE `distance`  (
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `distance` double(10, 0) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of distance
-- ----------------------------

-- ----------------------------
-- Table structure for h2s
-- ----------------------------
DROP TABLE IF EXISTS `h2s`;
CREATE TABLE `h2s`  (
  `id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` bigint(20) UNSIGNED ZEROFILL NOT NULL,
  `h2s` float NOT NULL,
  PRIMARY KEY (`id`, `time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of h2s
-- ----------------------------

-- ----------------------------
-- Table structure for humd
-- ----------------------------
DROP TABLE IF EXISTS `humd`;
CREATE TABLE `humd`  (
  `id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` bigint(20) UNSIGNED ZEROFILL NOT NULL,
  `humd` float NOT NULL,
  PRIMARY KEY (`id`, `time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of humd
-- ----------------------------

-- ----------------------------
-- Table structure for luminance
-- ----------------------------
DROP TABLE IF EXISTS `luminance`;
CREATE TABLE `luminance`  (
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `illumination` double(10, 0) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of luminance
-- ----------------------------

-- ----------------------------
-- Table structure for nh3
-- ----------------------------
DROP TABLE IF EXISTS `nh3`;
CREATE TABLE `nh3`  (
  `id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` bigint(20) UNSIGNED ZEROFILL NOT NULL,
  `nh3` float NOT NULL,
  PRIMARY KEY (`id`, `time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of nh3
-- ----------------------------

-- ----------------------------
-- Table structure for screen
-- ----------------------------
DROP TABLE IF EXISTS `screen`;
CREATE TABLE `screen`  (
  `id` int NOT NULL,
  `ProductKey` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `DeviceName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `postPropsName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of screen
-- ----------------------------
INSERT INTO `screen` VALUES (1, 'a1fQ0wC2wIM', 'sprinkler_A_1_w1', 'WorkSwitch', 'sprinkler', '1');
INSERT INTO `screen` VALUES (2, 'a1fQ0wC2wIM', 'sprinkler_A_1_m1', 'WorkSwitch', 'sprinkler', '0');
INSERT INTO `screen` VALUES (3, 'a1fQ0wC2wIM', 'sprinkler_A_1_w2', 'WorkSwitch', 'sprinkler', '0');
INSERT INTO `screen` VALUES (4, 'a1fQ0wC2wIM', 'sprinkler_A_1_m2', 'WorkSwitch', 'sprinkler', '0');
INSERT INTO `screen` VALUES (5, 'a1bBAM1kAGT', 'warininglight_A_1_m2', 'LightSwitch', 'led', '1');
INSERT INTO `screen` VALUES (6, 'a1bBAM1kAGT', 'warininglight_A_1_m1', 'LightSwitch', 'led', '1');
INSERT INTO `screen` VALUES (7, 'a1bBAM1kAGT', 'warininglight_A_1_w2', 'LightSwitch', 'led', '0');
INSERT INTO `screen` VALUES (8, 'a1bBAM1kAGT', 'warininglight_A_1_w1', 'LightSwitch', 'led', '0');
INSERT INTO `screen` VALUES (9, 'a1MGI8qhIzA', 'flush_A_1_m2', 'WorkSwitch', 'flush', '0');
INSERT INTO `screen` VALUES (10, 'a1MGI8qhIzA', 'flush_A_1_m1', 'WorkSwitch', 'flush', '0');
INSERT INTO `screen` VALUES (11, 'a1eJByEFTqa', 'infrared_A_1_m2', 'MotionAlarmState', 'mot', '0');
INSERT INTO `screen` VALUES (12, 'a1eJByEFTqa', 'infrared_A_1_m1', 'MotionAlarmState', 'mot', '0');
INSERT INTO `screen` VALUES (13, 'a1lI6UPYTuT', 'door_A_1_m2', 'Lock_control', 'door', '0');
INSERT INTO `screen` VALUES (14, 'a1lI6UPYTuT', 'door_A_1_m1', 'Lock_control', 'door', '0');
INSERT INTO `screen` VALUES (15, 'a1lI6UPYTuT', 'door_A_1_w2', 'Lock_control', 'door', '0');
INSERT INTO `screen` VALUES (16, 'a1lI6UPYTuT', 'door_A_1_w1', 'Lock_control', 'door', '1');
INSERT INTO `screen` VALUES (17, 'a1FEtVq9sc6', 'window_A_1_m', 'WorkSwitch', 'window', '0');
INSERT INTO `screen` VALUES (18, 'a1FEtVq9sc6', 'window_A_1_w', 'WorkSwitch', 'window', '0');
INSERT INTO `screen` VALUES (19, 'a1gslYSxdVh', 'fan_A_1_m', 'PowerSwitch', 'fan', '1');
INSERT INTO `screen` VALUES (20, 'a1gslYSxdVh', 'fan_A_1_w', 'PowerSwitch', 'fan', '1');
INSERT INTO `screen` VALUES (21, 'a1nZJ6Oxg9s', 'tem_A_1_m', 'CurrentTemperature', 'Temp', '1.171875');
INSERT INTO `screen` VALUES (22, 'a1nZJ6Oxg9s', 'tem_A_1_w', 'CurrentTemperature', 'Temp', '1.171875');
INSERT INTO `screen` VALUES (23, 'a1Z79V5BhUM', 'H2S_A_1_m', 'SO2', 'H2S', '41');
INSERT INTO `screen` VALUES (24, 'a1Z79V5BhUM', 'H2S_A_1_w', 'SO2', 'H2S', '19');
INSERT INTO `screen` VALUES (25, 'a1jFqI01AFf', 'NH3_A_1_m', 'NH3', 'NH3', '64');
INSERT INTO `screen` VALUES (26, 'a1jFqI01AFf', 'NH3_A_1_w', 'NH3', 'NH3', '81');
INSERT INTO `screen` VALUES (27, 'a1gToHWISmS', 'smoke_A_1_m', 'CO2Value', 'Smoke', '10.15625');
INSERT INTO `screen` VALUES (28, 'a1gToHWISmS', 'smoke_A_1_w', 'CO2Value', 'Smoke', '10.15625');
INSERT INTO `screen` VALUES (29, 'a1tSRxwFLjh', 'hum_A_1_m', 'CurrentHumidity', 'Humd', '82.6171875');
INSERT INTO `screen` VALUES (30, 'a1tSRxwFLjh', 'hum_A_1_w', 'CurrentHumidity', 'Humd', '82.6171875');

-- ----------------------------
-- Table structure for smoke
-- ----------------------------
DROP TABLE IF EXISTS `smoke`;
CREATE TABLE `smoke`  (
  `id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` bigint(20) UNSIGNED ZEROFILL NOT NULL,
  `smoke` float NOT NULL,
  PRIMARY KEY (`id`, `time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of smoke
-- ----------------------------

-- ----------------------------
-- Table structure for temp
-- ----------------------------
DROP TABLE IF EXISTS `temp`;
CREATE TABLE `temp`  (
  `id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` bigint(20) UNSIGNED ZEROFILL NOT NULL,
  `temp` float NOT NULL,
  PRIMARY KEY (`id`, `time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of temp
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `message` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `username`) USING BTREE,
  UNIQUE INDEX `uname`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8 COLLATE = utf8_esperanto_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', '123123', '管理员');
INSERT INTO `user` VALUES (2, 'ashaun', '123123', '沈轶东');
INSERT INTO `user` VALUES (3, 'aMurphy', '123123', '矿老板');
INSERT INTO `user` VALUES (4, 'asmg', '123123', '我是卷王');
INSERT INTO `user` VALUES (5, 'asfdfsadf', '123123', 'sadasd');
INSERT INTO `user` VALUES (6, 'ajinglanfan', '123123', '大卷王');
INSERT INTO `user` VALUES (7, 'awang', '123123', 'wyh');
INSERT INTO `user` VALUES (8, 'aaa', '123123', '我是卷王');
INSERT INTO `user` VALUES (9, 'aaa12312', '123123', '我是卷王');
INSERT INTO `user` VALUES (10, 'abao', '321312', '123123');

SET FOREIGN_KEY_CHECKS = 1;

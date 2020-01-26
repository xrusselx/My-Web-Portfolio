-- SELECT * FROM devotionrecord.`Daily Record`;
-- INSERT INTO `Daily Record` SET
-- devotiontoday = 1,
-- devotionsummarize = "For by grace you have been saved.",
-- devotiondate = "2020-01-25";
-- INSERT INTO `Daily Record` SET
-- devotiontoday = 1,
-- devotionsummarize = "For by grace you have been saved.",
-- devotiondate = "2020-01-25";
SELECT `id` FROM `Daily Record` WHERE `devotiondate` >= "2020-01-25" AND `devotionsummarize` LIKE "%grace%";
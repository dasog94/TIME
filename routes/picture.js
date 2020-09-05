var express = require("express");
var router = express.Router();

const image_list = [
    "2018-2 고려대 교환칼럼 뒷풀이(2019.01.15.)",
    "2019 창립기념제(2019.11.16.)",
    "2019-1 동아리방(2019-1학기)",
    "2019-1 정기세션(2019.04.30.)",
    "2019-1 홍보부스 활동(2019.03.13.)",
    "2019-1학기 MT(2019.05.03.)",
    "2019-1학기 MT(2019.05.04.)",
    "2019-1학기 고려대 교환칼럼 이후(2019.05.09.)",
    "2019-1학기 고려대 교환칼럼(2019.05.09.)",
    "2019-1학기 오리엔테이션, 뒷풀이 후(2019.03.13.)",
    "2019-1학기 오리엔테이션, 첫 세션(2019.03.13.)",
    "2019-1학기 종강파티(2019.06.22.)",
    "2019-1학기 친목활동(2019.05.10.)",
    "2019-1학기 홍보부스(2019.03.13.)",
    "2019-1학기동방에서 플스(2019.04.11.)",
    "2019-2학기 광운대 교환칼럼(2019.11.07.)",
    "2019-2학기 광운대 교환칼럼2(2019.11.07.)",
    "2019-2학기 오리엔테이션 뒷풀이(2019.09.19.)",
    "2019-2학기 오리엔테이션 뒷풀이2(2019.09.19.)",
    "2019-2학기 오리엔테이션(2019.09.19.)",
    "2019-2학기 오리엔테이션2(2019.09.19.)",
    "2019-2학기 정기세션 뒷풀이(2019.09.26.)",
    "2019-2학기 종강파티(2019.12.23.)",
];

/* GET introduction page. */
router.get("/:pic_no", function(req, res) {
    const pic_no = req.params.pic_no;
    if (pic_no > 22) {
        res.redirect("/picture/1");
    } else if (pic_no < 1) {
        res.redirect("/picture/22");
    } else {
        const img_name = image_list[pic_no];
        res.render("pictures.ejs", { img_name: img_name, pic_no: pic_no });
    }
});

export const pictureRouter = router;
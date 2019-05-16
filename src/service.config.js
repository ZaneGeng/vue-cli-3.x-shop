/*========路由=========*/

/*mock地址*/
const MOCKURL='http://192.168.4.10:8080/mock/';

/*实际服务端地址*/
const SERVERURL ='http://localhost';

/*会员服务url*/
const MEMBER_SERVICE_URL = SERVERURL+'/api-member/'


/*调用地址*/
const URL= {

    /*=================【mock测试地址】======================*/

    /*mock首页地址*/
    getIndexInfo: MOCKURL + 'index.json',

    /*mock产品分类地址*/
    getCategoryInfo: MOCKURL + 'category.json',


    /*=================【会员服务】======================*/

    /*通过手机号获取会员信息:http://localhost:5300/getMemberByPhone/13488847550*/
    getMemberByPhone: MEMBER_SERVICE_URL + 'getMemberByPhone/'

    /*=================【会员服务】end======================*/
};

export default URL;
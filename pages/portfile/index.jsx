import React from "react";
import Image from "next/image";
import Link from "next/link";


import { useRouter } from "next/router";

import { AboutContainer } from "../../styles/about.styles";
import { Row, Col, Tabs } from "antd";
const { TabPane } = Tabs;

const category = [
  {
        tabName: 'عرض الكل ',
        images: [
          {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjanetsainaagraphic%2Fjanetsainaa.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fb7rstoregraphic%2Fb7rstore.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fsedratravelgraphic%2Fsedratravel.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fmrwolfgraphic%2Fmrwolf.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fglowgraphic%2Fglow.jpg&w=384&q=75", alt: "pg"},
          {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Feishtany%2Feishtany.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Ftalacare%2Ftalacare.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fb7rstoreecommerce%2Fb7rstoreecommerce.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fma7foul%2Fma7foul.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjozorforcapabilities%2Fjozorforcapabilities.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fb7rstore%2Fb7rstore.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjanetsainaa%2Fjanetsainaa.jpg&w=384&q=75", alt: "pg"}, 
        ]
    },
    {
        tabName: 'المواقع الالكترونية ',
        images: [
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fb7rstore%2Fb7rstore.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjanetsainaa%2Fjanetsainaa.jpg&w=384&q=75", alt: "pg"}, 
        ]
    },
    {
        tabName: 'تطبيقات الهاتف ',
        images: [
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Feishtany%2Feishtany.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Ftalacare%2Ftalacare.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fb7rstoreecommerce%2Fb7rstoreecommerce.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fma7foul%2Fma7foul.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjozorforcapabilities%2Fjozorforcapabilities.jpg&w=384&q=75", alt: "pg"}, 
        ]
    },
    {
        tabName: 'جرافيك ديزاين ',
        images: [
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjanetsainaagraphic%2Fjanetsainaa.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fb7rstoregraphic%2Fb7rstore.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fsedratravelgraphic%2Fsedratravel.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fmrwolfgraphic%2Fmrwolf.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fglowgraphic%2Fglow.jpg&w=384&q=75", alt: "pg"}, 
        ]
    }
];

export const Projects = [{
    UrlPath: 1,
    proName: 'ايش تانى ',
    proDescription: 'تطبيق إيش تاني هو أسهل طريقة للتسوق عبر الإنترنت لشراء البقالة ومئات الضروريات اليومية الأخرى. وتوصيلها في اليوم والوقت الذي يناسبك تطبيق إيش تاني هو منصة إلكترونية توفّر لك خدمة توصيل كل المقاضي واحتياجاتك اليومية من الهايبر ماركت أو البقالة من خضار وفواكه ، لحوم ، خبز ، بخيارات توصيل مرنة سريعة أو مجدولة تناسب وقتك، و بطرق دفع متعددة. من خلال البحث عن المنتج الذي تريده بإستخدام الباركود الخاص فيه بدون تضييع الوقت والجهد ',
    images: [
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Feishtany%2Feishtany1.jpg&w=1920&q=75" , alt: 'pro'},
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Feishtany%2Feishtany3.jpg&w=1920&q=75" , alt: 'pro'},
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Feishtany%2Feishtany2.jpg&w=1920&q=75" , alt: 'pro'},
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Feishtany%2Feishtany4.jpg&w=1920&q=75" , alt: 'pro'},
    ]
},
{
    UrlPath: 2,
    proName: 'تالا كير  ',
    proDescription: 'تطبيق تالا كير هو أفضل منصة للبحث عن جليسة أو حاضنة أو مربية لطفلك أو حضانة منزلية ، حيث أن الجليسة لدينا معتمدة ومدربة ومتوفرة في كل وقت وفي كل مكان. لذا فلن تجد مشكلة في العثور على جليسة أو حاضنة أو حضانة بالقرب من منزلك. - تطبيق تالا كير هو تطبيق مجاني وسهل الاستعمال ، تحتاج فقط لتحميله و تثبيته على هاتفك و استعماله فورا. - تطبيق تالا كير هو تطبيق يمكنك من التعرف على معلومات حول الجليسة أو الحاضنة كمكان تواجدها ، صور الحاضنة. - تطبيق يمكنك من التعرف على تقييمات واراء الأمهات حول الجليسات وذلك لمساعدتك على العثور على أفضل جليسة أو مربية أو حاضنة أو حضانة لطفلك',
    images: [
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Ftalacare%2Ftalacare1.jpg&w=1920&q=75" , alt: 'pro'},
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Ftalacare%2Ftalacare2.jpg&w=1920&q=75" , alt: 'pro'},
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Ftalacare%2Ftalacare3.jpg&w=1920&q=75" , alt: 'pro'},
    ]
},
{
    UrlPath: 3,
    proName: 'بحر ستور  ',
    proDescription: 'يمكنك الان بكل سهولة ان تجعل موقع التجارة الإلكترونية الخاص بك تطبيق جوال مع جيزة أبس من خلال تطبيق بحر للتجارة الالكترونية يمكنك ادخال قائمة المنتجات من المتجر الى تطبيق الجوال كما يمكنك ان تبيع وتتابع سير المبيعات من داخل التطبيق. ايضا يمكنك التعامل مع الزبائن من خلال التطبيق عن طريق الإشعارات وتنبههم للعروض والمنتجات الجديدة .',
    images: [
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fb7rstoreecommerce%2Fb7rstoreecommerce1.jpg&w=1920&q=75" , alt: 'pro'},
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fb7rstoreecommerce%2Fb7rstoreecommerce2.jpg&w=1920&q=75" , alt: 'pro'},
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fb7rstoreecommerce%2Fb7rstoreecommerce3.jpg&w=1920&q=75" , alt: 'pro'},
    ]
},
{
    proName: 'محفول ',
    proDescription: 'محفول هي منصة إلكترونية تهدف لربط المسافرين ومالكي السيارات بأصحاب البضائع، في جميع مدن المملكة العربية السعودية، وعلى مدار ساعات اليوم عبر عدد من مركبات النقل المختلفة “يمكنك من خلاله الحصول على خدمات النقل والشحن لمختلف أنواع البضائع والسلع وتتبع مسارها في أي مدينة داخل المملكة العربية السعودية أو خارجها بسهولة وأمان وبأفضل الاسعار”. ويُعد أبرز مزايا تطبيق “محفول هي سهولة الحجز، حيث يتيح لمستخدمه اختيار موقع شحن الحمولة والمكان المُراد توصيلها إليه، ويحدد المركبة والخدمة التي يرغب بها، ويتكفل هو بباقي الأشياء ويضمن له نقلاً آمناً وخالٍيا من المخاطر. بالاضافة الي تولى الطرف الاخر الموثوق فيه أمر نقل بضائع العملاء إلى وجهتها المقصودة بأمان، مع توفر نظام نقل سريع بتكلفة منخفضة، وتعقب مباشر لسير المركبة عن طريق التطبيق. ',
    images: [
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fma7foul%2Fma7foul1.jpg&w=1920&q=75" , alt: 'pro'},
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fma7foul%2Fma7foul2.jpg&w=1920&q=75" , alt: 'pro'},
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fma7foul%2Fma7foul3.jpg&w=1920&q=75" , alt: 'pro'},
    ]
},
{
    UrlPath: 4,
    proName: 'جذور للقدرات',
    proDescription: 'منصة هدفها تمكين الطلاب من التدريب المكثف علي اختبارات القدرات والقبول من خلال محاكاه دقيقه لنظام الاختبارات ومجموعه متنوعه من النماذج . تهدف المنصة الي تسهيل العملية التعليمية علي طلاب المملكة العربية السعودية من خلال وضعهم قيد التجربة العملية لاختبارات القبول بامتحانات القدرات وتأهيلهم الي تجاوز امتحانات القدرات. ',
    images: [
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjozorforcapabilities%2Fjozorforcapabilities1.jpg&w=1920&q=75" , alt: 'pro'},
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjozorforcapabilities%2Fjozorforcapabilities2.jpg&w=1920&q=75" , alt: 'pro'},
        {src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjozorforcapabilities%2Fjozorforcapabilities3.jpg&w=1920&q=75" , alt: 'pro'},
    ]
},
];

const ROUTE_POST_ID = "portfile/[id]";


const Portfile = () => {

    const router = useRouter();

  return (
    <AboutContainer>
      <div className="row-container">
        <div style={{margin:"100px 0px 290px 0px"}}>
        <h1 className="portHeader">سابقة اعمالنا</h1>
        <p className="port-desc">
          سعدنا بتحويل العديد من أفكار عملاءنا الي مشاريع مميزة ...ويسعدنا
          اطلاعكم عليها
        </p>

        <Tabs defaultActiveKey="1" centered direction="rtl">
            {category.map((target) => (

          <TabPane tab={target.tabName} key={target.tabName}>
            <div className="portfiles">
              <Row >
                {target.images.map((image, i) => (
                  <Col key={i} lg={6} md={8} sm={12} xs={24}>
                      <Link href="/portfile/[id]" as={Projects}>
                    <div className="port-img">
                        <img src={image.src} alt={image.alt} width={270} height={270} />
                      </div>
                      </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </TabPane>
            ))}
          
        </Tabs>
        </div>
      </div>
    </AboutContainer>
  );
};

export default Portfile;

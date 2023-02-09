import "./App.css";
import { useState, useEffect } from "react";
import NavbarCom from "./components/NavbarCom";
import { Route, Routes } from "react-router-dom";
import NewsComponents from "./components/NewsComponents";
import MainPage from "./components/MainPage";
import FooterCom from "./components/FooterCom";
import OneNews from "./components/OneNews";
import AboutUsTeam from "./components/AboutUsTeam";
import MediaPage from "./components/MediaPage";
import OneMedia from "./components/OneMedia";
import ConnectPage from "./components/ConnectPage";
import ProjectsCom from "./components/ProjectsCom";
import OneProject from "./components/OneProject";


function App() {

  const [projects, setProjects] = useState([
    {
      key: 0,
      head: "AVO MUN",
      text: "AVO MUN (ASAN Volunteers Organization s Model of United Nations) gənclərin diplomatiya, beynəlxalq əlaqələr və Birləşmiş Millətlər Təşkilatının fəaliyyət sferaları üzrə maariflənməsi məqsədilə həyata keçirilən simulyasiya oyunudur. Layihə gənclərə diplomatiya və əməkdaşlıq dünyasını təsvir edən BMT Baş Məclisi, BMT Təhlükəsizlik Şurası və bu təşkilatın digər qurumlarının işinin real həyatda simulyasiyasıdır. Bu modeldə gənclər təşkilatın gündəliyindəki cari məsələlər üzrə müzakirələr aparır və seçilən mövzu üzrə mövcud problemləri həll etmək üçün tərəfdaşlar və rəqiblərlə danışıqlar aparır, qətnamə qəbul etməyə çalışırlar. BMT modeli iştirakçılara öz şəxsi və iş bacarıqlarını artırmağa imkan verən bir vasitədir. 2017 və 2018-ci illərdə icra edilmiş layihənin digər MUN lardan fərqi 3 dildə azərbaycan, rus, ingilis dillərində həyata keçirilməsidir.",
      image: "https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1673222400&Signature=I~M8QEe5kEm0NJybHjkeSMUin-NADjIIkKjN0FkkHkso~75bbTofOe9hSd6P2LUIEYtaUDsBaIb0tlSXNgV7VfH-qnQUAbTJGXe02cDVMI~iuqDxqobiDQ1ZnGyaesg1SCrTFrS0YXQdSPlyzxYAV8oXmSBppKAbjmZyzGt9NHMVjmL0HGEeznIUmxm-OnTBJcvYReHefYRIKn6O7MWNgVd8zWwEGKp11bOk324MiuqtLEWxZKiCs8kUcikTDZL6~as-sgKTaC5bBxVtr59rah7kzOfUGcVkKzSfwYeymIkgd-0CIuP-Oo7fAWVdhD2wNNSchLOtjS7I0sfuX7clsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      key: 1,
      head: "BMT'nin dövlət xidmətləri forumu",
      text: "BMT gənclərin diplomatiya, beynəlxalq əlaqələr və Birləşmiş Millətlər Təşkilatının fəaliyyət sferalarıAVO MUN (ASAN Volunteers Organization s Model of United Nations) gənclərin diplomatiya, beynəlxalq əlaqələr və Birləşmiş Millətlər Təşkilatının fəaliyyət sferaları üzrə maariflənməsi məqsədilə həyata keçirilən simulyasiya oyunudur. Layihə gənclərə diplomatiya və əməkdaşlıq dünyasını təsvir edən BMT Baş Məclisi, BMT Təhlükəsizlik Şurası və bu təşkilatın digər qurumlarının işinin real həyatda simulyasiyasıdır. Bu modeldə gənclər təşkilatın gündəliyindəki cari məsələlər üzrə müzakirələr aparır və seçilən mövzu üzrə mövcud problemləri həll etmək üçün tərəfdaşlar və rəqiblərlə danışıqlar aparır, qətnamə qəbul etməyə çalışırlar. BMT modeli iştirakçılara öz şəxsi və iş bacarıqlarını artırmağa imkan verən bir vasitədir. 2017 və 2018-ci illərdə icra edilmiş layihənin digər MUN lardan fərqi 3 dildə azərbaycan, rus, ingilis dillərində həyata keçirilməsidir.",
      image: "https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1673222400&Signature=I~M8QEe5kEm0NJybHjkeSMUin-NADjIIkKjN0FkkHkso~75bbTofOe9hSd6P2LUIEYtaUDsBaIb0tlSXNgV7VfH-qnQUAbTJGXe02cDVMI~iuqDxqobiDQ1ZnGyaesg1SCrTFrS0YXQdSPlyzxYAV8oXmSBppKAbjmZyzGt9NHMVjmL0HGEeznIUmxm-OnTBJcvYReHefYRIKn6O7MWNgVd8zWwEGKp11bOk324MiuqtLEWxZKiCs8kUcikTDZL6~as-sgKTaC5bBxVtr59rah7kzOfUGcVkKzSfwYeymIkgd-0CIuP-Oo7fAWVdhD2wNNSchLOtjS7I0sfuX7clsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      key: 2,
      head: "Asan Könüllüləri",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1673222400&Signature=I~M8QEe5kEm0NJybHjkeSMUin-NADjIIkKjN0FkkHkso~75bbTofOe9hSd6P2LUIEYtaUDsBaIb0tlSXNgV7VfH-qnQUAbTJGXe02cDVMI~iuqDxqobiDQ1ZnGyaesg1SCrTFrS0YXQdSPlyzxYAV8oXmSBppKAbjmZyzGt9NHMVjmL0HGEeznIUmxm-OnTBJcvYReHefYRIKn6O7MWNgVd8zWwEGKp11bOk324MiuqtLEWxZKiCs8kUcikTDZL6~as-sgKTaC5bBxVtr59rah7kzOfUGcVkKzSfwYeymIkgd-0CIuP-Oo7fAWVdhD2wNNSchLOtjS7I0sfuX7clsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },

    {
      key: 3,
      head: "AVO MUN",
      text: "AVO MUN (ASAN Volunteers Organization s Model of United Nations) gənclərin diplomatiya, beynəlxalq əlaqələr və Birləşmiş Millətlər Təşkilatının fəaliyyət sferaları üzrə maariflənməsi məqsədilə həyata keçirilən simulyasiya oyunudur. Layihə gənclərə diplomatiya və əməkdaşlıq dünyasını təsvir edən BMT Baş Məclisi, BMT Təhlükəsizlik Şurası və bu təşkilatın digər qurumlarının işinin real həyatda simulyasiyasıdır. Bu modeldə gənclər təşkilatın gündəliyindəki cari məsələlər üzrə müzakirələr aparır və seçilən mövzu üzrə mövcud problemləri həll etmək üçün tərəfdaşlar və rəqiblərlə danışıqlar aparır, qətnamə qəbul etməyə çalışırlar. BMT modeli iştirakçılara öz şəxsi və iş bacarıqlarını artırmağa imkan verən bir vasitədir. 2017 və 2018-ci illərdə icra edilmiş layihənin digər MUN lardan fərqi 3 dildə azərbaycan, rus, ingilis dillərində həyata keçirilməsidir.",
      image: "https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1673222400&Signature=I~M8QEe5kEm0NJybHjkeSMUin-NADjIIkKjN0FkkHkso~75bbTofOe9hSd6P2LUIEYtaUDsBaIb0tlSXNgV7VfH-qnQUAbTJGXe02cDVMI~iuqDxqobiDQ1ZnGyaesg1SCrTFrS0YXQdSPlyzxYAV8oXmSBppKAbjmZyzGt9NHMVjmL0HGEeznIUmxm-OnTBJcvYReHefYRIKn6O7MWNgVd8zWwEGKp11bOk324MiuqtLEWxZKiCs8kUcikTDZL6~as-sgKTaC5bBxVtr59rah7kzOfUGcVkKzSfwYeymIkgd-0CIuP-Oo7fAWVdhD2wNNSchLOtjS7I0sfuX7clsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      key: 4,
      head: "BMT'nin dövlət xidmətləri forumu",
      text: "BMT gənclərin diplomatiya, beynəlxalq əlaqələr və Birləşmiş Millətlər Təşkilatının fəaliyyət sferalarıAVO MUN (ASAN Volunteers Organization s Model of United Nations) gənclərin diplomatiya, beynəlxalq əlaqələr və Birləşmiş Millətlər Təşkilatının fəaliyyət sferaları üzrə maariflənməsi məqsədilə həyata keçirilən simulyasiya oyunudur. Layihə gənclərə diplomatiya və əməkdaşlıq dünyasını təsvir edən BMT Baş Məclisi, BMT Təhlükəsizlik Şurası və bu təşkilatın digər qurumlarının işinin real həyatda simulyasiyasıdır. Bu modeldə gənclər təşkilatın gündəliyindəki cari məsələlər üzrə müzakirələr aparır və seçilən mövzu üzrə mövcud problemləri həll etmək üçün tərəfdaşlar və rəqiblərlə danışıqlar aparır, qətnamə qəbul etməyə çalışırlar. BMT modeli iştirakçılara öz şəxsi və iş bacarıqlarını artırmağa imkan verən bir vasitədir. 2017 və 2018-ci illərdə icra edilmiş layihənin digər MUN lardan fərqi 3 dildə azərbaycan, rus, ingilis dillərində həyata keçirilməsidir.",
      image: "https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1673222400&Signature=I~M8QEe5kEm0NJybHjkeSMUin-NADjIIkKjN0FkkHkso~75bbTofOe9hSd6P2LUIEYtaUDsBaIb0tlSXNgV7VfH-qnQUAbTJGXe02cDVMI~iuqDxqobiDQ1ZnGyaesg1SCrTFrS0YXQdSPlyzxYAV8oXmSBppKAbjmZyzGt9NHMVjmL0HGEeznIUmxm-OnTBJcvYReHefYRIKn6O7MWNgVd8zWwEGKp11bOk324MiuqtLEWxZKiCs8kUcikTDZL6~as-sgKTaC5bBxVtr59rah7kzOfUGcVkKzSfwYeymIkgd-0CIuP-Oo7fAWVdhD2wNNSchLOtjS7I0sfuX7clsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      key: 5,
      head: "Asan Könüllüləri",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1673222400&Signature=I~M8QEe5kEm0NJybHjkeSMUin-NADjIIkKjN0FkkHkso~75bbTofOe9hSd6P2LUIEYtaUDsBaIb0tlSXNgV7VfH-qnQUAbTJGXe02cDVMI~iuqDxqobiDQ1ZnGyaesg1SCrTFrS0YXQdSPlyzxYAV8oXmSBppKAbjmZyzGt9NHMVjmL0HGEeznIUmxm-OnTBJcvYReHefYRIKn6O7MWNgVd8zWwEGKp11bOk324MiuqtLEWxZKiCs8kUcikTDZL6~as-sgKTaC5bBxVtr59rah7kzOfUGcVkKzSfwYeymIkgd-0CIuP-Oo7fAWVdhD2wNNSchLOtjS7I0sfuX7clsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ]);

  const news = [
    {
      key: 0,
      date: "29 Mart 2021, 17:15",
      head: "First Dövlət Agentliyinin sədri “500 Startups” şirkətinin nümayəndəsi ilə görüşüb",
      text: "Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyinin sədri Ülvi Mehdiyev “500 Startups” şirkətinin regional direktoru Arianne Dilts ilə görüşüb. Görüşdə Dövlət Agentliyi tərəfindən ölkəmizdə  innovasiya ekosisteminin və infrastrukturun formalaşdırılması istiqamətində görülən tədbirlərdən danışılıb, eyni zamanda “Azərbaycan 500 ASAN Startap Proqramı”nın gedişatı və növbəti mərhələləri ilə bağlı məsələlər müzakirə olunub. Həmçinin innovativ tətbiqlərin genişləndirilməsi, startap mühitinin inkişafı ilə bağlı əməkdaşlıq perspektivləri barədə fikir mübadiləsi aparılıb. Xatırladaq ki, Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyi ilə “500 Startups” şirkəti arasında əməkdaşlığa dair memorandum və Azərbaycanda startapların inkişafı, vençur maliyyələşməsinin təşəkkülü üzrə proqramların həyata  keçirilməsi ilə bağlı müqavilə imzalanıb. Müqavilənin əsas məqsədi ölkəmizdə startap və innovasiya ekosisteminin inkişafını sürətləndirmək, yerli startapların qlobal bazara və xarici investorlara çıxışına imkan yaratmaqdır. Dünyada startaplarla bağlı əsas təşkilatlardan biri olan “500 Startups” şirkəti dünyada 8 qlobal mərkəz olmaqla, ümumilikdə 75-dən çox ölkədə layihələr həyata keçirib. Şirkətin əsas fəaliyyət istiqamətləri ölkələrdə innovasiya ekosisteminin qurulması, akselerasiya proqramlarınn həyata keçirilməsi və startaplara investisiya yatırılmasıdır.",
      image:
        "https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1675641600&Signature=Mbp4e5k7BscJXM~iTN~DVIXxaRtptpNKxJy20MbLKhDJHrjZZj9zLSTOGXtm27pHfybNsnyAAcdQ9dOYrKSqOnUwDJlPuJxFnsLkbZzxJvSPZaqNEZKZjS9wtPeZY5cdzFmvgFMLR8Przd5VBD~SkNqTbopUuh340yHI1Uu-rpTa8z9m8K0FyGBAiXlSZGOqxzX6HxrSGJthQ9PJiTzc3EA3Wi5leBUXYXCJobk9tKh8xBSNg5E6A0-8nkjR5nPig9kOeJkYycl9OPCQmPIWxCZpHj-nc-vazOrnpqDX4izvjICemz6~qb3Oe2DFCgplI9NsEPaQR5Kuz2n9Z0HrAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      key: 1,
      date: "29 Mart 2021, 17:15",
      head: "Second Dövlət Agentliyinin sədri “500 Startups” şirkətinin nümayəndəsi ilə görüşüb",
      text: "Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyinin sədri Ülvi Mehdiyev “500 Startups” şirkətinin regional direktoru Arianne Dilts ilə görüşüb. Görüşdə Dövlət Agentliyi tərəfindən ölkəmizdə  innovasiya ekosisteminin və infrastrukturun formalaşdırılması istiqamətində görülən tədbirlərdən danışılıb, eyni zamanda “Azərbaycan 500 ASAN Startap Proqramı”nın gedişatı və növbəti mərhələləri ilə bağlı məsələlər müzakirə olunub. Həmçinin innovativ tətbiqlərin genişləndirilməsi, startap mühitinin inkişafı ilə bağlı əməkdaşlıq perspektivləri barədə fikir mübadiləsi aparılıb. Xatırladaq ki, Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyi ilə “500 Startups” şirkəti arasında əməkdaşlığa dair memorandum və Azərbaycanda startapların inkişafı, vençur maliyyələşməsinin təşəkkülü üzrə proqramların həyata  keçirilməsi ilə bağlı müqavilə imzalanıb. Müqavilənin əsas məqsədi ölkəmizdə startap və innovasiya ekosisteminin inkişafını sürətləndirmək, yerli startapların qlobal bazara və xarici investorlara çıxışına imkan yaratmaqdır. Dünyada startaplarla bağlı əsas təşkilatlardan biri olan “500 Startups” şirkəti dünyada 8 qlobal mərkəz olmaqla, ümumilikdə 75-dən çox ölkədə layihələr həyata keçirib. Şirkətin əsas fəaliyyət istiqamətləri ölkələrdə innovasiya ekosisteminin qurulması, akselerasiya proqramlarınn həyata keçirilməsi və startaplara investisiya yatırılmasıdır.",
      image:
        "https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1675641600&Signature=Mbp4e5k7BscJXM~iTN~DVIXxaRtptpNKxJy20MbLKhDJHrjZZj9zLSTOGXtm27pHfybNsnyAAcdQ9dOYrKSqOnUwDJlPuJxFnsLkbZzxJvSPZaqNEZKZjS9wtPeZY5cdzFmvgFMLR8Przd5VBD~SkNqTbopUuh340yHI1Uu-rpTa8z9m8K0FyGBAiXlSZGOqxzX6HxrSGJthQ9PJiTzc3EA3Wi5leBUXYXCJobk9tKh8xBSNg5E6A0-8nkjR5nPig9kOeJkYycl9OPCQmPIWxCZpHj-nc-vazOrnpqDX4izvjICemz6~qb3Oe2DFCgplI9NsEPaQR5Kuz2n9Z0HrAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      key: 2,
      date: "29 Mart 2021, 17:15",
      head: "Thirty Dövlət Agentliyinin sədri “500 Startups” şirkətinin nümayəndəsi ilə görüşüb",
      text: "Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyinin sədri Ülvi Mehdiyev “500 Startups” şirkətinin regional direktoru Arianne Dilts ilə görüşüb. Görüşdə Dövlət Agentliyi tərəfindən ölkəmizdə  innovasiya ekosisteminin və infrastrukturun formalaşdırılması istiqamətində görülən tədbirlərdən danışılıb, eyni zamanda “Azərbaycan 500 ASAN Startap Proqramı”nın gedişatı və növbəti mərhələləri ilə bağlı məsələlər müzakirə olunub. Həmçinin innovativ tətbiqlərin genişləndirilməsi, startap mühitinin inkişafı ilə bağlı əməkdaşlıq perspektivləri barədə fikir mübadiləsi aparılıb. Xatırladaq ki, Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyi ilə “500 Startups” şirkəti arasında əməkdaşlığa dair memorandum və Azərbaycanda startapların inkişafı, vençur maliyyələşməsinin təşəkkülü üzrə proqramların həyata  keçirilməsi ilə bağlı müqavilə imzalanıb. Müqavilənin əsas məqsədi ölkəmizdə startap və innovasiya ekosisteminin inkişafını sürətləndirmək, yerli startapların qlobal bazara və xarici investorlara çıxışına imkan yaratmaqdır. Dünyada startaplarla bağlı əsas təşkilatlardan biri olan “500 Startups” şirkəti dünyada 8 qlobal mərkəz olmaqla, ümumilikdə 75-dən çox ölkədə layihələr həyata keçirib. Şirkətin əsas fəaliyyət istiqamətləri ölkələrdə innovasiya ekosisteminin qurulması, akselerasiya proqramlarınn həyata keçirilməsi və startaplara investisiya yatırılmasıdır.",
      image:
        "https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1675641600&Signature=Mbp4e5k7BscJXM~iTN~DVIXxaRtptpNKxJy20MbLKhDJHrjZZj9zLSTOGXtm27pHfybNsnyAAcdQ9dOYrKSqOnUwDJlPuJxFnsLkbZzxJvSPZaqNEZKZjS9wtPeZY5cdzFmvgFMLR8Przd5VBD~SkNqTbopUuh340yHI1Uu-rpTa8z9m8K0FyGBAiXlSZGOqxzX6HxrSGJthQ9PJiTzc3EA3Wi5leBUXYXCJobk9tKh8xBSNg5E6A0-8nkjR5nPig9kOeJkYycl9OPCQmPIWxCZpHj-nc-vazOrnpqDX4izvjICemz6~qb3Oe2DFCgplI9NsEPaQR5Kuz2n9Z0HrAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];

  const media = [

    {
      id: 0,
      date: '29 Mart 2021, 17:15',
      head: '1 Dövlət Agentliyinin sədri “500 Startups” şirkətinin nümayəndəsi ilə görüşüb',
      image: 'https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1675036800&Signature=cAsCn68ADUGEQSFAwiqSAOQr4bcoRVsNy3qveKARx~sC4elMX7Q2w0IbK7l~JcYA~9a9t5Ch0nFtqOThTbVVzsZqs4WUQ8AcsFZ1GUMilWSLAdJCgnNafp~0jVsg02sNdruM355wZD5dyLTR5B9k6Qc-CbE2QYv1eN582ruvCtY1JfAyxW6Q62FYUy-C2mnsPZZR4u6iBJe5LBEkXP2ZPNJ11lQhgtLfetvqadhpz4kyz7cQ3Pxb7h7JJrzAocdCTLjJ4CvOiNZp0VEFRY80BlwweybK4mM2atuYlIiBs4QPxGpsLbcPkYzb2T1Bzw8kdhGuFjbWuygSVrvKoXgyNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      text: 'Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyinin sədri Ülvi Mehdiyev “500 Startups” şirkətinin regional direktoru Arianne Dilts ilə görüşüb. Görüşdə Dövlət Agentliyi tərəfindən ölkəmizdə  innovasiya ekosisteminin və infrastrukturun formalaşdırılması istiqamətində görülən tədbirlərdən danışılıb, eyni zamanda “Azərbaycan 500 ASAN Startap Proqramı”nın gedişatı və növbəti mərhələləri ilə bağlı məsələlər müzakirə olunub. Həmçinin innovativ tətbiqlərin genişləndirilməsi, startap mühitinin inkişafı ilə bağlı əməkdaşlıq perspektivləri barədə fikir mübadiləsi aparılıb. Xatırladaq ki, Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyi ilə “500 Startups” şirkəti arasında əməkdaşlığa dair memorandum və Azərbaycanda startapların inkişafı, vençur maliyyələşməsinin təşəkkülü üzrə proqramların həyata  keçirilməsi ilə bağlı müqavilə imzalanıb. Müqavilənin əsas məqsədi ölkəmizdə startap və innovasiya ekosisteminin inkişafını sürətləndirmək, yerli startapların qlobal bazara və xarici investorlara çıxışına imkan yaratmaqdır. Dünyada startaplarla bağlı əsas təşkilatlardan biri olan “500 Startups” şirkəti dünyada 8 qlobal mərkəz olmaqla, ümumilikdə 75-dən çox ölkədə layihələr həyata keçirib. Şirkətin əsas fəaliyyət istiqamətləri ölkələrdə innovasiya ekosisteminin qurulması, akselerasiya proqramlarınn həyata keçirilməsi və startaplara investisiya yatırılmasıdır.'
    },
    {
      id: 1,
      date: '29 Mart 2021, 17:15',
      head: '2 Dövlət Agentliyinin sədri “500 Startups” şirkətinin nümayəndəsi ilə görüşüb',
      image: 'https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1675036800&Signature=cAsCn68ADUGEQSFAwiqSAOQr4bcoRVsNy3qveKARx~sC4elMX7Q2w0IbK7l~JcYA~9a9t5Ch0nFtqOThTbVVzsZqs4WUQ8AcsFZ1GUMilWSLAdJCgnNafp~0jVsg02sNdruM355wZD5dyLTR5B9k6Qc-CbE2QYv1eN582ruvCtY1JfAyxW6Q62FYUy-C2mnsPZZR4u6iBJe5LBEkXP2ZPNJ11lQhgtLfetvqadhpz4kyz7cQ3Pxb7h7JJrzAocdCTLjJ4CvOiNZp0VEFRY80BlwweybK4mM2atuYlIiBs4QPxGpsLbcPkYzb2T1Bzw8kdhGuFjbWuygSVrvKoXgyNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      text: 'Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyinin sədri Ülvi Mehdiyev “500 Startups” şirkətinin regional direktoru Arianne Dilts ilə görüşüb. Görüşdə Dövlət Agentliyi tərəfindən ölkəmizdə  innovasiya ekosisteminin və infrastrukturun formalaşdırılması istiqamətində görülən tədbirlərdən danışılıb, eyni zamanda “Azərbaycan 500 ASAN Startap Proqramı”nın gedişatı və növbəti mərhələləri ilə bağlı məsələlər müzakirə olunub. Həmçinin innovativ tətbiqlərin genişləndirilməsi, startap mühitinin inkişafı ilə bağlı əməkdaşlıq perspektivləri barədə fikir mübadiləsi aparılıb. Xatırladaq ki, Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyi ilə “500 Startups” şirkəti arasında əməkdaşlığa dair memorandum və Azərbaycanda startapların inkişafı, vençur maliyyələşməsinin təşəkkülü üzrə proqramların həyata  keçirilməsi ilə bağlı müqavilə imzalanıb. Müqavilənin əsas məqsədi ölkəmizdə startap və innovasiya ekosisteminin inkişafını sürətləndirmək, yerli startapların qlobal bazara və xarici investorlara çıxışına imkan yaratmaqdır. Dünyada startaplarla bağlı əsas təşkilatlardan biri olan “500 Startups” şirkəti dünyada 8 qlobal mərkəz olmaqla, ümumilikdə 75-dən çox ölkədə layihələr həyata keçirib. Şirkətin əsas fəaliyyət istiqamətləri ölkələrdə innovasiya ekosisteminin qurulması, akselerasiya proqramlarınn həyata keçirilməsi və startaplara investisiya yatırılmasıdır.'
    },
    {
      id: 2,
      date: '29 Mart 2021, 17:15',
      head: '3 Dövlət Agentliyinin sədri “500 Startups” şirkətinin nümayəndəsi ilə görüşüb',
      image: 'https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1675036800&Signature=cAsCn68ADUGEQSFAwiqSAOQr4bcoRVsNy3qveKARx~sC4elMX7Q2w0IbK7l~JcYA~9a9t5Ch0nFtqOThTbVVzsZqs4WUQ8AcsFZ1GUMilWSLAdJCgnNafp~0jVsg02sNdruM355wZD5dyLTR5B9k6Qc-CbE2QYv1eN582ruvCtY1JfAyxW6Q62FYUy-C2mnsPZZR4u6iBJe5LBEkXP2ZPNJ11lQhgtLfetvqadhpz4kyz7cQ3Pxb7h7JJrzAocdCTLjJ4CvOiNZp0VEFRY80BlwweybK4mM2atuYlIiBs4QPxGpsLbcPkYzb2T1Bzw8kdhGuFjbWuygSVrvKoXgyNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      text: 'Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyinin sədri Ülvi Mehdiyev “500 Startups” şirkətinin regional direktoru Arianne Dilts ilə görüşüb. Görüşdə Dövlət Agentliyi tərəfindən ölkəmizdə  innovasiya ekosisteminin və infrastrukturun formalaşdırılması istiqamətində görülən tədbirlərdən danışılıb, eyni zamanda “Azərbaycan 500 ASAN Startap Proqramı”nın gedişatı və növbəti mərhələləri ilə bağlı məsələlər müzakirə olunub. Həmçinin innovativ tətbiqlərin genişləndirilməsi, startap mühitinin inkişafı ilə bağlı əməkdaşlıq perspektivləri barədə fikir mübadiləsi aparılıb. Xatırladaq ki, Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyi ilə “500 Startups” şirkəti arasında əməkdaşlığa dair memorandum və Azərbaycanda startapların inkişafı, vençur maliyyələşməsinin təşəkkülü üzrə proqramların həyata  keçirilməsi ilə bağlı müqavilə imzalanıb. Müqavilənin əsas məqsədi ölkəmizdə startap və innovasiya ekosisteminin inkişafını sürətləndirmək, yerli startapların qlobal bazara və xarici investorlara çıxışına imkan yaratmaqdır. Dünyada startaplarla bağlı əsas təşkilatlardan biri olan “500 Startups” şirkəti dünyada 8 qlobal mərkəz olmaqla, ümumilikdə 75-dən çox ölkədə layihələr həyata keçirib. Şirkətin əsas fəaliyyət istiqamətləri ölkələrdə innovasiya ekosisteminin qurulması, akselerasiya proqramlarınn həyata keçirilməsi və startaplara investisiya yatırılmasıdır.'
    },
    {
      id: 3,
      date: '29 Mart 2021, 17:15',
      head: '4 Dövlət Agentliyinin sədri “500 Startups” şirkətinin nümayəndəsi ilə görüşüb',
      image: 'https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1675036800&Signature=cAsCn68ADUGEQSFAwiqSAOQr4bcoRVsNy3qveKARx~sC4elMX7Q2w0IbK7l~JcYA~9a9t5Ch0nFtqOThTbVVzsZqs4WUQ8AcsFZ1GUMilWSLAdJCgnNafp~0jVsg02sNdruM355wZD5dyLTR5B9k6Qc-CbE2QYv1eN582ruvCtY1JfAyxW6Q62FYUy-C2mnsPZZR4u6iBJe5LBEkXP2ZPNJ11lQhgtLfetvqadhpz4kyz7cQ3Pxb7h7JJrzAocdCTLjJ4CvOiNZp0VEFRY80BlwweybK4mM2atuYlIiBs4QPxGpsLbcPkYzb2T1Bzw8kdhGuFjbWuygSVrvKoXgyNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      text: 'Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyinin sədri Ülvi Mehdiyev “500 Startups” şirkətinin regional direktoru Arianne Dilts ilə görüşüb. Görüşdə Dövlət Agentliyi tərəfindən ölkəmizdə  innovasiya ekosisteminin və infrastrukturun formalaşdırılması istiqamətində görülən tədbirlərdən danışılıb, eyni zamanda “Azərbaycan 500 ASAN Startap Proqramı”nın gedişatı və növbəti mərhələləri ilə bağlı məsələlər müzakirə olunub. Həmçinin innovativ tətbiqlərin genişləndirilməsi, startap mühitinin inkişafı ilə bağlı əməkdaşlıq perspektivləri barədə fikir mübadiləsi aparılıb. Xatırladaq ki, Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyi ilə “500 Startups” şirkəti arasında əməkdaşlığa dair memorandum və Azərbaycanda startapların inkişafı, vençur maliyyələşməsinin təşəkkülü üzrə proqramların həyata  keçirilməsi ilə bağlı müqavilə imzalanıb. Müqavilənin əsas məqsədi ölkəmizdə startap və innovasiya ekosisteminin inkişafını sürətləndirmək, yerli startapların qlobal bazara və xarici investorlara çıxışına imkan yaratmaqdır. Dünyada startaplarla bağlı əsas təşkilatlardan biri olan “500 Startups” şirkəti dünyada 8 qlobal mərkəz olmaqla, ümumilikdə 75-dən çox ölkədə layihələr həyata keçirib. Şirkətin əsas fəaliyyət istiqamətləri ölkələrdə innovasiya ekosisteminin qurulması, akselerasiya proqramlarınn həyata keçirilməsi və startaplara investisiya yatırılmasıdır.'
    },
    {
      id: 4,
      date: '29 Mart 2021, 17:15',
      head: '5 Dövlət Agentliyinin sədri “500 Startups” şirkətinin nümayəndəsi ilə görüşüb',
      image: 'https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1675036800&Signature=cAsCn68ADUGEQSFAwiqSAOQr4bcoRVsNy3qveKARx~sC4elMX7Q2w0IbK7l~JcYA~9a9t5Ch0nFtqOThTbVVzsZqs4WUQ8AcsFZ1GUMilWSLAdJCgnNafp~0jVsg02sNdruM355wZD5dyLTR5B9k6Qc-CbE2QYv1eN582ruvCtY1JfAyxW6Q62FYUy-C2mnsPZZR4u6iBJe5LBEkXP2ZPNJ11lQhgtLfetvqadhpz4kyz7cQ3Pxb7h7JJrzAocdCTLjJ4CvOiNZp0VEFRY80BlwweybK4mM2atuYlIiBs4QPxGpsLbcPkYzb2T1Bzw8kdhGuFjbWuygSVrvKoXgyNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      text: 'Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyinin sədri Ülvi Mehdiyev “500 Startups” şirkətinin regional direktoru Arianne Dilts ilə görüşüb. Görüşdə Dövlət Agentliyi tərəfindən ölkəmizdə  innovasiya ekosisteminin və infrastrukturun formalaşdırılması istiqamətində görülən tədbirlərdən danışılıb, eyni zamanda “Azərbaycan 500 ASAN Startap Proqramı”nın gedişatı və növbəti mərhələləri ilə bağlı məsələlər müzakirə olunub. Həmçinin innovativ tətbiqlərin genişləndirilməsi, startap mühitinin inkişafı ilə bağlı əməkdaşlıq perspektivləri barədə fikir mübadiləsi aparılıb. Xatırladaq ki, Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyi ilə “500 Startups” şirkəti arasında əməkdaşlığa dair memorandum və Azərbaycanda startapların inkişafı, vençur maliyyələşməsinin təşəkkülü üzrə proqramların həyata  keçirilməsi ilə bağlı müqavilə imzalanıb. Müqavilənin əsas məqsədi ölkəmizdə startap və innovasiya ekosisteminin inkişafını sürətləndirmək, yerli startapların qlobal bazara və xarici investorlara çıxışına imkan yaratmaqdır. Dünyada startaplarla bağlı əsas təşkilatlardan biri olan “500 Startups” şirkəti dünyada 8 qlobal mərkəz olmaqla, ümumilikdə 75-dən çox ölkədə layihələr həyata keçirib. Şirkətin əsas fəaliyyət istiqamətləri ölkələrdə innovasiya ekosisteminin qurulması, akselerasiya proqramlarınn həyata keçirilməsi və startaplara investisiya yatırılmasıdır.'
    },
  ]


return (
  <div className="App">
    <NavbarCom />
    <div className="main">
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/news" element={<NewsComponents news={news} />} />
        <Route path="/news/:key" element={<OneNews news={news} />} />
        <Route path="/media" element={<MediaPage media={media} />} />
        <Route path="/media/:id" element={<OneMedia media={media} />} />
        <Route path="/projects" element={<ProjectsCom projects={projects} />} />
        <Route path="/projects/:key" element={<OneProject projects={projects} />} />
        <Route path="/info" element={<ConnectPage />} />
        <Route path="/ourteam" element={<AboutUsTeam />} />
      </Routes>
    </div>
    <FooterCom />
  </div>
);
}

export default App;
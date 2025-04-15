const cafes = [
  {
    name: "Neko coffee 貓珈",
    address: "台北市中正區信陽街9號2樓",
    mrt: "板南線",
    hours: "每天10:00-20:00"
  },
  {
    name: "Toast Chat",
    address: "台北市大安區光復南路290巷58號",
    mrt: "板南線",
    hours: "12:00–22:00"
  },
  {
    name: "Take Out Burger",
    address: "台北市中山區撫順街11號1樓",
    mrt: "淡水信義線",
    hours: "11:00–22:00"
  },
  {
    name: "紅玥緬因貓咖啡藝廊",
    address: "台北市大同區赤峰街71巷4號",
    mrt: "淡水信義線",
    hours: "13:00–21:00"
  },
  {
    name: "貓食光",
    address: "台北市中正區羅斯福路四段",
    mrt: "新店線",
    hours: "11:00–21:00"
  },
  {
    name: "曬貓咖啡",
    address: "台北市大安區和平東路二段107巷23弄17號1樓",
    mrt: "文湖線",
    hours: "07:30–14:00（平日）"
  },
  {
    name: "貓谷",
    address: "新北市新店區雙城路175-3號",
    mrt: "新店線",
    hours: "週五至週日11:00–20:30"
  },
  {
    name: "貓樂貓咖啡（信義遠百店）",
    address: "台北市信義區松仁路58號7樓",
    mrt: "淡水信義線",
    hours: "11:00–21:30"
  },
  {
    name: "貓欸 Camulet",
    address: "新北市板橋區文化路一段270巷2弄2號",
    mrt: "板南線",
    hours: "12:00–21:00"
  },
  {
    name: "短短 DuanDuan",
    address: "新北市板橋區仁化街64巷16號",
    mrt: "板南線",
    hours: "12:00–20:00"
  },
  {
    name: "NUKUNUKU Cat Café",
    address: "台北市信義區松壽路12號4樓",
    mrt: "淡水信義線",
    hours: "11:00–22:00"
  },
  {
    name: "和貓咪有約",
    address: "台北市松山區三民路3巷21號",
    mrt: "松山新店線",
    hours: "11:00–21:00"
  },
  {
    name: "Moon Sugar 月亮糖糖喵樂園",
    address: "新北市淡水區中山北路一段212巷36號1樓",
    mrt: "淡水信義線",
    hours: "週二至週日11:00–21:00"
  },
  {
    name: "FunLife 中途貓餐廳",
    address: "台北市大同區天水路2-3號",
    mrt: "淡水信義線",
    hours: "12:00–20:00"
  },
  {
    name: "貓那邊",
    address: "台北市中山區民生東路一段70號",
    mrt: "淡水信義線",
    hours: "12:00–21:00"
  }
  // ...你可以自行擴充更多至30筆
];

document.getElementById("lottery-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const selectedMrt = document.getElementById("mrt").value;

  const filtered = selectedMrt
    ? cafes.filter(cafe => cafe.mrt === selectedMrt)
    : cafes;

  if (filtered.length === 0) {
    document.getElementById("result").innerHTML = "找不到符合條件的咖啡廳喔！";
    return;
  }

  const pick = filtered[Math.floor(Math.random() * filtered.length)];
  document.getElementById("result").innerHTML = `
    🎉 今天可以去：<strong>${pick.name}</strong><br>
    📍 地址：${pick.address}<br>
    🚇 捷運線：${pick.mrt}<br>
    🕒 營業時間：${pick.hours}
  `;
});

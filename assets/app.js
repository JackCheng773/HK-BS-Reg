const libraries = [
  {
    key: "ac",
    title: "空調（AC）",
    focus: "空調及通風系統設計、安裝、能效與維修要求",
    agency: "機電工程署（EMSD）",
    page: "ac.html",
    site: "https://www.emsd.gov.hk/",
    regulations: [
      { name: "《建築物能源效益條例》（第610章）", url: "https://www.elegislation.gov.hk/hk/cap610", note: "涵蓋屋宇裝備能效法定框架" },
      { name: "《建築物能源效益（註冊能源效益評核人）規例》", url: "https://www.elegislation.gov.hk/hk/cap610A", note: "評核與合規安排" },
      { name: "《建築物能源效益守則》（BEC）", url: "https://www.emsd.gov.hk/en/energy_efficiency/beeo/building_energy_code/", note: "空調系統主要技術要求" }
    ]
  },
  {
    key: "emsd",
    title: "機電工程署（EMSD）",
    focus: "電力、機械、氣體與升降機相關法規及守則入口",
    agency: "EMSD",
    page: "emsd.html",
    site: "https://www.emsd.gov.hk/",
    regulations: [
      { name: "《電力條例》（第406章）", url: "https://www.elegislation.gov.hk/hk/cap406", note: "供電與電力安全主體法例" },
      { name: "《氣體安全條例》（第51章）", url: "https://www.elegislation.gov.hk/hk/cap51", note: "燃氣裝置與承辦商管理" },
      { name: "EMSD 法例及守則總覽", url: "https://www.emsd.gov.hk/tc/legislation_regulations/", note: "各專題法規官方入口" }
    ]
  },
  {
    key: "fsd",
    title: "消防（FSD）",
    focus: "消防裝置、消防安全及驗收要求",
    agency: "消防處（FSD）",
    page: "fsd.html",
    site: "https://www.hkfsd.gov.hk/",
    regulations: [
      { name: "《消防安全（建築物）條例》（第572章）", url: "https://www.elegislation.gov.hk/hk/cap572", note: "舊式建築消防提升要求" },
      { name: "《消防（裝置及設備）規例》（第95B章）", url: "https://www.elegislation.gov.hk/hk/cap95B", note: "消防裝置保養與認證規定" },
      { name: "消防處通函及技術指引", url: "https://www.hkfsd.gov.hk/chi/source/licensing/fire_protection.html", note: "工程審批及作業要求" }
    ]
  },
  {
    key: "wsd",
    title: "水務（WSD）",
    focus: "供水裝置、喉管工程及節水規範",
    agency: "水務署（WSD）",
    page: "wsd.html",
    site: "https://www.wsd.gov.hk/",
    regulations: [
      { name: "《水務設施條例》（第102章）", url: "https://www.elegislation.gov.hk/hk/cap102", note: "供水系統及設備法例" },
      { name: "《水務設施規例》（第102A章）", url: "https://www.elegislation.gov.hk/hk/cap102A", note: "安裝、用水及承辦商要求" },
      { name: "《香港供水規例》及技術要求", url: "https://www.wsd.gov.hk/tc/plumbing-engineering/inside-service/index.html", note: "供水裝置設計與驗收" }
    ]
  },
  {
    key: "lifts",
    title: "升降機及自動梯",
    focus: "升降機、自動梯工程與保養安全",
    agency: "EMSD",
    page: "lifts.html",
    site: "https://www.emsd.gov.hk/tc/lifts_and_escalators_safety/",
    regulations: [
      { name: "《升降機及自動梯條例》（第618章）", url: "https://www.elegislation.gov.hk/hk/cap618", note: "註冊承建商及工程要求" },
      { name: "《升降機及自動梯（費用）規例》", url: "https://www.elegislation.gov.hk/hk/cap618A", note: "審批及服務費用條文" },
      { name: "EMSD 升降機及自動梯安全指引", url: "https://www.emsd.gov.hk/tc/lifts_and_escalators_safety/publications/", note: "使用與維修最佳實務" }
    ]
  },
  {
    key: "security",
    title: "保安系統",
    focus: "保安裝置、監察系統及私隱合規",
    agency: "保安及私隱相關部門",
    page: "security.html",
    site: "https://www.pcpd.org.hk/",
    regulations: [
      { name: "《保安及護衛服務條例》（第460章）", url: "https://www.elegislation.gov.hk/hk/cap460", note: "保安服務及牌照制度" },
      { name: "《個人資料（私隱）條例》（第486章）", url: "https://www.elegislation.gov.hk/hk/cap486", note: "閉路電視及資料處理要求" },
      { name: "私隱專員公署 - 閉路電視監察指引", url: "https://www.pcpd.org.hk/chinese/resources_centre/publications/files/CCTV_c.pdf", note: "CCTV 實務指引" }
    ]
  },
  {
    key: "beam",
    title: "BEAM Plus 綠建環評",
    focus: "綠色建築評級及可持續設計要求",
    agency: "香港綠色建築議會（HKGBC）",
    page: "beam.html",
    site: "https://www.hkgbc.org.hk/",
    regulations: [
      { name: "BEAM Plus 官方評估準則", url: "https://www.hkgbc.org.hk/eng/beam-plus/introduction/", note: "新建築及既有建築評級框架" },
      { name: "建築物能源效益守則（配合 BEAM）", url: "https://www.emsd.gov.hk/en/energy_efficiency/beeo/building_energy_code/", note: "能源效益關鍵參考" },
      { name: "可持續建築設計指引（政府資料）", url: "https://www.devb.gov.hk/", note: "規劃與可持續設計政策參考" }
    ]
  },
  {
    key: "datacentre",
    title: "數據中心（Data Centre）",
    focus: "數據中心電力、冷卻、消防與運維要求",
    agency: "EMSD / FSD / BD",
    page: "datacentre.html",
    site: "https://www.datacentre.gov.hk/",
    regulations: [
      { name: "香港數據中心專題網站", url: "https://www.datacentre.gov.hk/", note: "行業指南與政策資訊" },
      { name: "《電力（線路）規例》（第406E章）", url: "https://www.elegislation.gov.hk/hk/cap406E", note: "關鍵設備配電安全" },
      { name: "消防裝置及機房防火要求（FSD）", url: "https://www.hkfsd.gov.hk/", note: "機房消防系統審批及保養" }
    ]
  },
  {
    key: "epd",
    title: "環保（EPD）",
    focus: "噪音、廢氣、廢物及污染管制要求",
    agency: "環境保護署（EPD）",
    page: "epd.html",
    site: "https://www.epd.gov.hk/",
    regulations: [
      { name: "《空氣污染管制條例》（第311章）", url: "https://www.elegislation.gov.hk/hk/cap311", note: "排放及空氣質素管制" },
      { name: "《噪音管制條例》（第400章）", url: "https://www.elegislation.gov.hk/hk/cap400", note: "工程噪音與設備噪音要求" },
      { name: "《廢物處置條例》（第354章）", url: "https://www.elegislation.gov.hk/hk/cap354", note: "建築及營運廢物管理" }
    ]
  },
  {
    key: "towngas",
    title: "煤氣（Towngas）",
    focus: "煤氣供應、氣體裝置與安全規範",
    agency: "機電工程署 / 香港中華煤氣",
    page: "towngas.html",
    site: "https://www.towngas.com/",
    regulations: [
      { name: "《氣體安全條例》（第51章）", url: "https://www.elegislation.gov.hk/hk/cap51", note: "燃氣供應與承辦商法定要求" },
      { name: "氣體安全守則與指引（EMSD）", url: "https://www.emsd.gov.hk/tc/gas_safety/", note: "安裝、檢查及維修標準" },
      { name: "香港中華煤氣工程資料", url: "https://www.towngas.com/tc/Home", note: "申請、接駁與技術資訊" }
    ]
  },
  {
    key: "kitchen",
    title: "廚房工程",
    focus: "商用廚房排煙、消防、燃氣與衛生規範",
    agency: "FSD / FEHD / EMSD",
    page: "kitchen.html",
    site: "https://www.fehd.gov.hk/",
    regulations: [
      { name: "食肆牌照及廚房通風要求（FEHD）", url: "https://www.fehd.gov.hk/tc_chi/howtoseries/forms/new/FSA_Application_for_General_Restaurant_Licence.html", note: "食肆發牌核心要求" },
      { name: "《消防（裝置及設備）規例》（第95B章）", url: "https://www.elegislation.gov.hk/hk/cap95B", note: "滅火及警報系統規範" },
      { name: "《氣體安全條例》（第51章）", url: "https://www.elegislation.gov.hk/hk/cap51", note: "廚房燃氣裝置合規" }
    ]
  },
  {
    key: "coldroom",
    title: "冷房（Cold Room）",
    focus: "冷庫製冷系統、保溫及電力安全要求",
    agency: "EMSD / EPD / FEHD",
    page: "coldroom.html",
    site: "https://www.emsd.gov.hk/",
    regulations: [
      { name: "《電力（線路）規例》（第406E章）", url: "https://www.elegislation.gov.hk/hk/cap406E", note: "冷房配電與保護裝置" },
      { name: "《空氣污染管制條例》（第311章）", url: "https://www.elegislation.gov.hk/hk/cap311", note: "製冷劑與排放管理" },
      { name: "食品冷藏相關指引（FEHD）", url: "https://www.fehd.gov.hk/tc_chi/pleasant_environment/food_hygiene.html", note: "食物安全冷鏈要求" }
    ]
  },
  {
    key: "boilerroom",
    title: "鍋爐房（Boiler Room）",
    focus: "鍋爐及壓力容器設計、操作與檢驗",
    agency: "勞工處（LD）",
    page: "boilerroom.html",
    site: "https://www.labour.gov.hk/",
    regulations: [
      { name: "《鍋爐及壓力容器條例》（第56章）", url: "https://www.elegislation.gov.hk/hk/cap56", note: "鍋爐房法定核心法例" },
      { name: "《鍋爐及壓力容器規例》", url: "https://www.elegislation.gov.hk/hk/cap56A", note: "檢驗與操作細節要求" },
      { name: "勞工處鍋爐及壓力容器安全資訊", url: "https://www.labour.gov.hk/eng/public/os/BPCO.htm", note: "安全操作及培訓資訊" }
    ]
  },
  {
    key: "housing-minor-works",
    title: "房屋小型工程",
    focus: "小型工程監管制度及家居改動合規",
    agency: "屋宇署（BD）",
    page: "housing-minor-works.html",
    site: "https://www.bd.gov.hk/",
    regulations: [
      { name: "《建築物條例》（第123章）", url: "https://www.elegislation.gov.hk/hk/cap123", note: "建築工程法定基礎" },
      { name: "《建築物（小型工程）規例》（第123N章）", url: "https://www.elegislation.gov.hk/hk/cap123N", note: "小型工程分級與程序" },
      { name: "小型工程監管制度（MWCS）", url: "https://www.bd.gov.hk/tc/building-works/minor-works/index.html", note: "申報流程與承建商名冊" }
    ]
  },
  {
    key: "asd-gs",
    title: "ASD GS 政府工程規格",
    focus: "建築署一般規格與政府工程要求",
    agency: "建築署（ASD）",
    page: "asd-gs.html",
    site: "https://www.archsd.gov.hk/",
    regulations: [
      { name: "ASD General Specification for Building", url: "https://www.archsd.gov.hk/en/publications-and-press-releases/publications/general-specification/index.html", note: "政府工程技術規格基準" },
      { name: "工務技術通告（發展局）", url: "https://www.devb.gov.hk/tc/publications_and_press_releases/publications/index.html", note: "政府工程管理要求" },
      { name: "相關法例（建築物及安全）", url: "https://www.elegislation.gov.hk/", note: "配套法例查詢入口" }
    ]
  },
  {
    key: "construction",
    title: "建造工程",
    focus: "建築地盤管理、施工許可與法定責任",
    agency: "發展局 / 屋宇署 / 勞工處",
    page: "construction.html",
    site: "https://www.devb.gov.hk/",
    regulations: [
      { name: "《建築物條例》（第123章）", url: "https://www.elegislation.gov.hk/hk/cap123", note: "建造工程法定框架" },
      { name: "《工廠及工業經營條例》（第59章）", url: "https://www.elegislation.gov.hk/hk/cap59", note: "地盤作業安全管理" },
      { name: "建造業議會（CIC）標準與指引", url: "https://www.cic.hk/", note: "建造業作業標準與培訓" }
    ]
  },
  {
    key: "safety",
    title: "安全管理",
    focus: "職安健制度、風險評估及法定合規",
    agency: "勞工處 / 職安局",
    page: "safety.html",
    site: "https://www.labour.gov.hk/",
    regulations: [
      { name: "《職業安全及健康條例》（第509章）", url: "https://www.elegislation.gov.hk/hk/cap509", note: "僱主及僱員職安責任" },
      { name: "《工廠及工業經營（安全管理）規例》（第59AF章）", url: "https://www.elegislation.gov.hk/hk/cap59AF", note: "安全管理制度要求" },
      { name: "職安健局（OSHC）實務指引", url: "https://www.oshc.org.hk/", note: "培訓、守則及評估工具" }
    ]
  }
];

function renderHome() {
  const grid = document.getElementById("library-grid");
  const tableBody = document.getElementById("overview-table-body");
  if (!grid || !tableBody) return;

  libraries.forEach((item) => {
    const card = document.createElement("a");
    card.className = "library-link";
    card.href = item.page;
    card.innerHTML = `<strong>${item.title}</strong><span>${item.focus}</span>`;
    grid.appendChild(card);

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.title}</td>
      <td>${item.focus}</td>
      <td><a href="${item.site}" target="_blank" rel="noopener noreferrer">${item.agency}</a></td>
      <td><a href="${item.page}">打開資料庫</a></td>
    `;
    tableBody.appendChild(row);
  });
}

function renderLibraryPage(pageKey) {
  const item = libraries.find((entry) => entry.key === pageKey);
  if (!item) return;

  const titleEl = document.getElementById("page-title");
  const subtitleEl = document.getElementById("page-subtitle");
  const agencyEl = document.getElementById("page-agency");
  const dbIdEl = document.getElementById("db-id");
  const dbScopeEl = document.getElementById("db-scope");
  const bodyEl = document.getElementById("regulation-table-body");

  if (titleEl) titleEl.textContent = `${item.title} 法規資料庫`;
  if (subtitleEl) subtitleEl.textContent = item.focus;
  if (agencyEl) {
    agencyEl.innerHTML = `<a href="${item.site}" target="_blank" rel="noopener noreferrer">${item.agency} 官方網站</a>`;
  }
  if (dbIdEl) dbIdEl.textContent = `SYN-${item.key.toUpperCase()}-HK`;
  if (dbScopeEl) dbScopeEl.textContent = `資料庫範圍：${item.title}（香港）`;

  if (bodyEl) {
    item.regulations.forEach((reg, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${reg.name}</td>
        <td>${reg.note}</td>
        <td><a href="${reg.url}" target="_blank" rel="noopener noreferrer">查看連結</a></td>
      `;
      bodyEl.appendChild(row);
    });
  }
}

const currentPage = document.body.dataset.page;
if (currentPage === "home") {
  renderHome();
} else {
  renderLibraryPage(currentPage);
}

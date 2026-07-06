// Shared Product Database
const productData = [
    { 
        model: "A-1012", 
        image: "Html_Data/assets/A-1012.png", 
        desc: "高可靠度的工業控制 I/O 解決方案，適用於多種自動化場景。",
        desc_en: "High-reliability industrial control I/O solution, suitable for various automation scenarios.",
        di: "2 ch", do: "2 ch (Relay)", ai: "4 ch", ao: "2 ch", comm: "RS-485",
        features: ["內建看門狗計時器 (Watchdog Timer)", "支援標準 Modbus RTU 協定", "寬電壓輸入範圍 10~30VDC", "雙重隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["Built-in Watchdog Timer", "Supports standard Modbus RTU", "Wide voltage input 10~30VDC", "Dual isolation protection", "DIN Rail mounting"],
        applications: [
            { name: "廠務自動化(FA)", name_en: "Factory Automation (FA)", link: "Html_Data/solutions/shared/fa.html" },
            { name: "水質監測系統", name_en: "Water Monitoring", link: "Html_Data/solutions/shared/water.html" },
            { name: "智慧農業溫室控制", name_en: "Smart Greenhouse", link: "Html_Data/solutions/shared/agri.html" }
        ],
        wiringImage: "Html_Data/assets/A-1012.png",
        manualLink: "#",
        tabs: [
            {
                id: "tab-docs",
                title: "技術文件",
                title_en: "Tech Docs",
                content: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">技術文件下載</h3>
                          <p style="color: var(--text-light); margin-bottom: 20px;">取得 A-1012 最新的產品規格書與使用手冊，以協助您快速設定與操作。</p>
                          <div style="display: flex; gap: 15px;">
                              <a href="#" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.9rem;"><span style="font-size: 1.2rem; margin-right: 5px;">📄</span> 下載規格書</a>
                              <a href="#" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.9rem;"><span style="font-size: 1.2rem; margin-right: 5px;">📘</span> 下載使用手冊</a>
                          </div>`,
                content_en: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">Technical Documents</h3>
                             <p style="color: var(--text-light); margin-bottom: 20px;">Get the latest spec sheets and user manuals for A-1012.</p>
                             <div style="display: flex; gap: 15px;">
                                 <a href="#" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.9rem;"><span style="font-size: 1.2rem; margin-right: 5px;">📄</span> Spec Sheet</a>
                                 <a href="#" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.9rem;"><span style="font-size: 1.2rem; margin-right: 5px;">📘</span> User Manual</a>
                             </div>`
            },
            {
                id: "tab-faq",
                title: "常見問題",
                title_en: "FAQ",
                content: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">常見問題 (FAQ)</h3>
                          <ul style="color: var(--text-light); padding-left: 20px; line-height: 1.8;">
                              <li><strong>Q: A-1012 如何設定 Modbus ID?</strong><br>A: 請使用 Yotta Utility 軟體透過 RS-485 介面進行設定。預設 ID 為 1。</li>
                              <li style="margin-top: 10px;"><strong>Q: 支援的波特率有哪些?</strong><br>A: 支援 1200 bps 至 115200 bps，出廠預設為 9600 bps。</li>
                          </ul>`,
                content_en: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">FAQ</h3>
                             <ul style="color: var(--text-light); padding-left: 20px; line-height: 1.8;">
                                 <li><strong>Q: How to set Modbus ID?</strong><br>A: Use Yotta Utility software via RS-485. Default ID is 1.</li>
                                 <li style="margin-top: 10px;"><strong>Q: Supported baud rates?</strong><br>A: 1200 to 115200 bps, default is 9600 bps.</li>
                             </ul>`
            },
            {
                id: "tab-wiring",
                title: "接線圖",
                title_en: "Wiring",
                content: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">產品接線圖</h3>
                          <div class="wiring-container">
                              <img src="Html_Data/assets/A-1012.png" alt="A-1012 接線圖" class="wiring-img" style="max-width: 100%; height: auto;">
                          </div>`,
                content_en: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">Wiring Diagram</h3>
                             <div class="wiring-container">
                                 <img src="Html_Data/assets/A-1012.png" alt="A-1012 Wiring" class="wiring-img" style="max-width: 100%; height: auto;">
                             </div>`
            },
            {
                id: "tab-apps",
                title: "產品應用",
                title_en: "Applications",
                content: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">產品應用</h3>
                          <div class="application-tags" id="detailApplications"></div>`,
                content_en: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">Applications</h3>
                             <div class="application-tags" id="detailApplications"></div>`
            }
        ]
    },
    { 
        model: "A-1019", 
        image: "Html_Data/assets/A-1019.png", 
        di: "8 ch", do: "-", ai: "8 ch", ao: "-", comm: "RS-485",
        features: ["高密度輸入通道設計", "支援標準 Modbus RTU 協定", "寬電壓輸入 10~30VDC", "雙重隔離保護設計"],
        features_en: ["High-density input channels", "Supports standard Modbus RTU", "Wide voltage input 10~30VDC", "Dual isolation protection"],
        applications: [
            { name: "環境數據紀錄", name_en: "Environmental Data Logging", link: "#" },
            { name: "機台狀態監測", name_en: "Machine Status Monitoring", link: "#" },
            { name: "電力監控系統", name_en: "Power Monitoring System", link: "#" }
        ],
        wiringImage: "Html_Data/assets/product.png",
        manualLink: "#"
    },
    { 
        model: "A-1051", 
        image: "Html_Data/assets/A-1051.png", 
        di: "16 ch", do: "-", ai: "-", ao: "-", comm: "RS-485",
        features: ["16通道數位輸入", "支援乾/濕接點輸入", "光隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["16-channel digital input", "Supports dry/wet contacts", "Optical isolation protection", "DIN Rail mounting"],
        applications: [
            { name: "按鈕開關監控", name_en: "Button Switch Monitoring", link: "#" },
            { name: "機台警報信號收集", name_en: "Machine Alarm Collection", link: "#" },
            { name: "生產線計數系統", name_en: "Production Line Counting", link: "#" }
        ],
        wiringImage: "Html_Data/assets/product.png",
        manualLink: "#"
    },
    { 
        model: "A-1060", 
        image: "Html_Data/assets/A-1060.png", 
        di: "-", do: "16 ch (Relay)", ai: "-", ao: "-", comm: "RS-485",
        features: ["16通道繼電器輸出", "大電流負載能力", "通電狀態 LED 指示燈", "支援 Modbus RTU"],
        features_en: ["16-channel relay output", "High current load capacity", "Power LED indicator", "Supports Modbus RTU"],
        applications: [
            { name: "燈光控制系統", name_en: "Lighting Control", link: "#" },
            { name: "馬達啟停控制", name_en: "Motor Start/Stop Control", link: "#" },
            { name: "電磁閥驅動", name_en: "Solenoid Valve Drive", link: "#" }
        ],
        wiringImage: "Html_Data/assets/product.png",
        manualLink: "#"
    },
    { 
        model: "A-1055", 
        image: "Html_Data/assets/A-1055.png", 
        di: "8 ch", do: "8 ch (Isolated)", ai: "-", ao: "-", comm: "RS-485",
        features: ["數位輸入/輸出混合模組", "高防護隔離設計", "支援標準 Modbus RTU 協定", "寬溫工作範圍 (-20~75°C)"],
        features_en: ["Mixed DI/DO module", "High isolation protection", "Supports standard Modbus RTU", "Wide operating temp (-20~75°C)"],
        applications: [
            { name: "機台連鎖控制", name_en: "Machine Interlock Control", link: "#" },
            { name: "無塵室設備監控", name_en: "Cleanroom Equipment Monitoring", link: "#" },
            { name: "輸送帶控制系統", name_en: "Conveyor Belt Control", link: "#" }
        ],
        wiringImage: "Html_Data/assets/product.png",
        manualLink: "#"
    },
    { 
        model: "A-1055S", 
        image: "Html_Data/assets/A-1055S.png", 
        di: "8 ch", do: "8 ch (Solid State)", ai: "-", ao: "-", comm: "RS-485",
        features: ["固態繼電器(SSR)高速輸出", "高防護隔離設計", "無接點磨損壽命長", "支援標準 Modbus RTU 協定"],
        features_en: ["SSR high-speed output", "High isolation protection", "Long lifespan with no contact wear", "Supports standard Modbus RTU"],
        applications: [
            { name: "高速包裝機控制", name_en: "High-speed Packaging Machine", link: "#" },
            { name: "半導體設備控制", name_en: "Semiconductor Equipment Control", link: "#" },
            { name: "精密加熱控制", name_en: "Precision Heating Control", link: "#" }
        ],
        wiringImage: "Html_Data/assets/product.png",
        manualLink: "#"
    },
    { 
        model: "A-1068", 
        image: "Html_Data/assets/A-1068.png", 
        di: "-", do: "8 ch (Relay)", ai: "-", ao: "-", comm: "RS-485",
        features: ["8通道繼電器輸出", "精巧外觀設計", "狀態指示燈", "支援標準 Modbus RTU 協定"],
        features_en: ["8-channel relay output", "Compact design", "Status indicators", "Supports standard Modbus RTU"],
        applications: [
            { name: "小型警報系統", name_en: "Small Alarm System", link: "#" },
            { name: "風扇啟停控制", name_en: "Fan Start/Stop Control", link: "#" }
        ],
        wiringImage: "Html_Data/assets/product.png",
        manualLink: "#"
    },
    { 
        model: "A-1069", 
        image: "Html_Data/assets/A-1069.png", 
        di: "8 ch", do: "8 ch (Relay)", ai: "-", ao: "-", comm: "RS-485",
        features: ["8通道輸入/8通道輸出", "高性價比", "高防護隔離設計", "支援標準 Modbus RTU 協定"],
        features_en: ["8-channel DI / 8-channel DO", "High cost-performance", "High isolation protection", "Supports standard Modbus RTU"],
        applications: [
            { name: "自動化門禁控制", name_en: "Automatic Access Control", link: "#" },
            { name: "機房環境監控", name_en: "Data Center Environmental Monitoring", link: "#" }
        ],
        wiringImage: "Html_Data/assets/product.png",
        manualLink: "#"
    }
];

// 側邊欄分類資料庫
const categoryData = [
    {
        groupId: "scada-ipc",
        title_zh: "SCADA-IPC",
        title_en: "SCADA-IPC",
        icon: "expand_more",
        isOpen: false,
        items: [
            { title_zh: "SCADA-HIPC", title_en: "SCADA-HIPC", link: "#" },
            { title_zh: "SCADA-FIPC", title_en: "SCADA-FIPC", link: "#" }
        ]
    },
    {
        groupId: "ipc",
        title_zh: "工業電腦",
        title_en: "Industrial PC",
        icon: "expand_more",
        isOpen: false,
        items: [
            { title_zh: "A-9N GUI", title_en: "A-9N GUI", link: "#" },
            { title_zh: "A-9H(HMI)", title_en: "A-9H (HMI)", link: "#" }
        ]
    },
    {
        groupId: "io-modules",
        title_zh: "I/O 模組",
        title_en: "I/O Modules",
        icon: "expand_less",
        isOpen: true,
        items: [
            { title_zh: "A-10x系列(RS485)", title_en: "A-10x Series (RS485)", link: "products/products_a10x.html" },
            { title_zh: "A-12x 系列(WIFI)", title_en: "A-12x Series (WIFI)", link: "#" },
            { title_zh: "A-18x 系列(乙太網路)", title_en: "A-18x Series (Ethernet)", link: "#" },
            { title_zh: "A-19x 系列(菊花鏈)", title_en: "A-19x Series (Daisy Chain)", link: "#" },
            { title_zh: "A-80x 系列(RS485,自帶邏輯)", title_en: "A-80x Series (RS485, Contains logic)", link: "#" }
        ]
    },
    {
        groupId: "controllers",
        title_zh: "控制器",
        title_en: "Controllers",
        icon: "expand_more",
        isOpen: false,
        items: [
            { title_zh: "A-51x 系列", title_en: "A-51x Series", link: "#" },
            { title_zh: "A-61x 系列", title_en: "A-61x Series", link: "#" }
        ]
    }
];

// 主選單資料庫
const mainMenuData = [
    { id: "home", title_zh: "首頁", title_en: "Home", link: "index.html" },
    { id: "about", title_zh: "關於我們", title_en: "About Us", link: "about/about.html" },
    { id: "news", title_zh: "最新消息", title_en: "News", link: "news/news.html" },
    { id: "support", title_zh: "技術支援", title_en: "Support", link: "support/support.html" },
    { id: "products", title_zh: "產品介紹", title_en: "Products", link: "products/products_a10x.html" },
    { id: "location", title_zh: "交通位置", title_en: "Location", link: "location/location.html" },
    { id: "contact", title_zh: "聯絡我們", title_en: "Contact", link: "contact/contact.html" }
];

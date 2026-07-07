// Shared Product Database
const productData = [
	// A-9N GUI
	{
	    model: "A-9N GUI", series: "A-9N", type: "ipc",
        image: "Html_Data/assets/A-9N(GUI).png", 
        desc: "A-9N(GUI)邊緣運算器，專為資料採集與視覺化而設計。",
        desc_en: "A-9N(GUI) Edge Controller, designed for data acquisition and visualization.",
        di: "-", do: "-", ai: "-", ao: "-", comm: "Ethernet / Wi-Fi / RS-485",
        ipcSpecs: {
            cpu: "Quad-Core ARM Cortex-A53",
            ram: "2GB DDR4",
            storage: "16GB eMMC",
            display: "HDMI 輸出 (最高支援 1080p)",
            os: "Linux (Debian / Yocto)",
            ports: "2x RJ45 (LAN), 2x USB 2.0, 1x RS485"
        },
        ipcSpecs_en: {
            cpu: "Quad-Core ARM Cortex-A53",
            ram: "2GB DDR4",
            storage: "16GB eMMC",
            display: "HDMI Output (Up to 1080p)",
            os: "Linux (Debian / Yocto)",
            ports: "2x RJ45 (LAN), 2x USB 2.0, 1x RS485"
        },
        features: ["內建看門狗計時器 (Watchdog Timer)", "支援標準 Modbus TCP/RTU", "寬電壓輸入範圍 10~30VDC", "雙重隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["Built-in Watchdog Timer", "Supports standard Modbus TCP/RTU", "Wide voltage input 10~30VDC", "Dual isolation protection", "DIN Rail mounting"],
        applications: [
        ],
        documents: [
            { name: "A-9N GUI 型錄", name_en: "A-9N GUI Catalog", icon: "menu_book", link: "https://drive.google.com/file/d/1rlMkm_9tSAGq-q6bDzf3QS_jLd3q91yz/view?usp=drive_link" },
            { name: "A-9N GUI 說明書", name_en: "A-9N GUI Manual", icon: "book", link: "https://drive.google.com/file/d/16StGJNDjK63S_0CRgXa5I6ecmwMw95zV/view?usp=drive_link" }
        ],
        wiringImage: "",
        manualLink: "#",
		// A-9N GUI 右側 Tab區
        tabs: [
            {
                id: "tab-overview",
                title: "產品總覽",
                title_en: "Overview",
                content: `
                    <h3 style="margin-bottom: 15px; color: var(--primary-color);">A-9N GUI 邊緣運算器</h3>
                    <img src="https://m1.hocom.tw/Uploads/userfiles/images/1000163_eh202vzdkb1w7ad.png" style="width:100%; margin-bottom: 20px; border-radius: 8px;">
                    <img src="https://m1.hocom.tw/Uploads/userfiles/images/1000163_dy3axpbt9x7katq.png" style="width:100%; margin-bottom: 20px; border-radius: 8px;">
                    <img src="https://m1.hocom.tw/Uploads/userfiles/images/1000163_pu58d7fgss4m04k.png" style="width:100%; margin-bottom: 20px; border-radius: 8px;">
                `
            },
            {
                id: "tab-manual",
                title: "手冊下載",
                title_en: "Manual Download",
                content: `
                    <h3 style="margin-bottom: 15px; color: var(--primary-color);">手冊下載 (Manual Download)</h3>
                    <p style="color: var(--text-light); margin-bottom: 20px;">點擊下方項目即可檢視或下載相關手冊與檔案。</p>
                    <div id="dynamicDocsContainer"></div>
                `
            }
        ]
    },
    // A-9H HMI
    {
        model: "A-9H(HMI人機)", series: "A-9H", type: "ipc",
        image: "Html_Data/assets/A-9H.JPG", 
        desc: "A-9H 是一款基於 ARM 的高效能 IoT Box PC，擁有四核心處理器的開放平台設計，4個 RS-485 串列埠，1個 10/100/1000 乙太網路埠、兩個 USB 2.0 連接埠和工作溫度範圍 -10~+55°C。內建 Wi-Fi (2.4G+5G) 模組。",
        desc_en: "A-9H is an ARM based high-performance IoT Box PC, which has an open platform design with Quad Core processor, Four RS-485 serial ports, one 10/100/1000 Ethernet ports, two USB 2.0 port and operating temperature range of -10~+55°C. Built-in Wi-Fi(2.4G+5G) modules.",
        di: "-", do: "-", ai: "-", ao: "-", comm: "-",
        ipcSpecs: {
            cpu: "TI ARM Cortex-A53 Quad Core 1.4GHz",
            ram: "LPDDR4 2GB",
            storage: "32GB eMMC (Onboard)",
            display: "1x HDMI up to 1920 x 1080 at 60Hz",
            os: "Debian 12 + Node-Red",
            ports: "4x RS-485, 2x USB 2.0, 1x GbE, 1x SPE, Wi-Fi(2.4G/5G)"
        },
        ipcSpecs_en: {
            cpu: "TI ARM Cortex-A53 Quad Core 1.4GHz",
            ram: "LPDDR4 2GB",
            storage: "32GB eMMC (Onboard)",
            display: "1x HDMI up to 1920 x 1080 at 60Hz",
            os: "Debian 12 + Node-Red",
            ports: "4x RS-485, 2x USB 2.0, 1x GbE, 1x SPE, Wi-Fi(2.4G/5G)"
        },
        features: [
            "TI ARM Cortex-A53 Quad Core",
            "Onboard RAM LPDDR4 2 GB, 32GB eMMC",
            "4*RS-485, 2*USB 2.0, 1*GbE, 1*SPE, 1*WIFI(2.4G+5G), 1*HDMI(Type-A)",
            "Built-in Node-Red",
            "Operation Temperature -10°C to 55°C"
        ],
        features_en: [
            "TI ARM Cortex-A53 Quad Core",
            "Onboard RAM LPDDR4 2 GB, 32GB eMMC",
            "4*RS-485, 2*USB 2.0, 1*GbE, 1*SPE, 1*WIFI(2.4G+5G), 1*HDMI(Type-A)",
            "Built-in Node-Red",
            "Operation Temperature -10°C to 55°C"
        ],
        applications: [],
        documents: [
            { name: "A-9H 產品規格書 (CHT)", name_en: "A-9H Spec (CHT)", icon: "picture_as_pdf", link: "https://drive.google.com/drive/folders/1OYban5am-cALA_yuYE9z4nGHePNAbPBI" },
            { name: "A-9H 產品規格書 (ENG)", name_en: "A-9H Spec (ENG)", icon: "picture_as_pdf", link: "https://drive.google.com/drive/folders/1OYban5am-cALA_yuYE9z4nGHePNAbPBI" },
            { name: "A-9H 使用手冊 (CHT)", name_en: "A-9H User Manual (CHT)", icon: "menu_book", link: "https://drive.google.com/drive/folders/1OYban5am-cALA_yuYE9z4nGHePNAbPBI" },
            { name: "A-9H 使用手冊 (ENG)", name_en: "A-9H User Manual (ENG)", icon: "menu_book", link: "https://drive.google.com/drive/folders/1OYban5am-cALA_yuYE9z4nGHePNAbPBI" },
            { name: "A9H.zip", name_en: "A9H.zip", icon: "download", link: "https://drive.google.com/drive/folders/1OYban5am-cALA_yuYE9z4nGHePNAbPBI" },
            { name: "還原檔下載", name_en: "Recovery File", icon: "download", link: "https://drive.google.com/drive/folders/1OYban5am-cALA_yuYE9z4nGHePNAbPBI" }
        ],
        wiringImage: "",
        manualLink: "#",
        tabs: [
            {
                id: "tab-overview",
                title: "產品總覽",
                title_en: "Overview",
                content: `
                    <h3 style="margin-bottom: 15px; color: var(--primary-color);">A-9H(HMI人機)</h3>
                    <img src="https://m1.hocom.tw/Uploads/userfiles/images/1000095_vs0d8ws3frbxq2a.jpg" style="width:100%; margin-bottom: 20px; border-radius: 8px;">
                    <img src="https://m1.hocom.tw/Uploads/userfiles/images/1000095_ic6tes5efjwm4gs.jpg" style="width:100%; margin-bottom: 20px; border-radius: 8px;">
                    <img src="https://m1.hocom.tw/Uploads/userfiles/images/1000095_8ch1rfz1jswm3cj.jpg" style="width:100%; margin-bottom: 20px; border-radius: 8px;">
                `
            },
            {
                id: "tab-manual",
                title: "手冊下載",
                title_en: "Manual Download",
                content: `
                    <h3 style="margin-bottom: 15px; color: var(--primary-color);">手冊下載 (Manual Download)</h3>
                    <p style="color: var(--text-light); margin-bottom: 20px;">點擊下方項目即可檢視或下載相關手冊與檔案。</p>
                    <div id="dynamicDocsContainer"></div>
                `
            }
        ]
    },
    { 
        model: "A-8012", series: "A-80x", 
        image: "Html_Data/assets/A-8012.png", 
        desc: "高可靠度的工業控制 I/O 解決方案，適用於多種自動化場景。",
        desc_en: "High-reliability industrial control I/O solution, suitable for various automation scenarios.",
        di: "2 ch", do: "2 ch (Relay)", ai: "4 ch", ao: "2 ch", comm: "RS-485",
        features: ["內建看門狗計時器 (Watchdog Timer)", "支援標準 Modbus RTU 協定", "寬電壓輸入範圍 10~30VDC", "雙重隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["Built-in Watchdog Timer", "Supports standard Modbus RTU", "Wide voltage input 10~30VDC", "Dual isolation protection", "DIN Rail mounting"],
        applications: [
            { name: "A-8012 應用範例-1", name_en: "A-8012 Application Example 1", link: "Html_Data/solutions/A-8012/Application_Example_1.html" },
            { name: "A-8012 應用範例-2", name_en: "A-8012 Application Example 2", link: "Html_Data/solutions/A-8012/Application_Example_2.html" },
            { name: "A-8012 應用範例-3", name_en: "A-8012 Application Example 3", link: "Html_Data/solutions/A-8012/Application_Example_3.html" }
        ],
        documents: [
            // 1. 全模組共用的文件
            { name: "Yotta 產品保固條款", name_en: "Yotta Warranty Policy", icon: "📄", link: "Html_Data/Manuals/shared_all/warranty.pdf" },
            { name: "Yotta Utility 軟體手冊", name_en: "Yotta Utility Manual", icon: "📘", link: "Html_Data/Manuals/shared_all/utility_manual.pdf" },
            // 2. 與 A-8019 共用的文件
            { name: "RS-485 通訊協定手冊", name_en: "RS-485 Protocol Manual", icon: "📄", link: "Html_Data/Manuals/shared_A10x/rs485_protocol.pdf" },
            { name: "模組基礎配線指南", name_en: "Wiring Guide", icon: "📘", link: "Html_Data/Manuals/shared_A10x/wiring_guide.pdf" },
            // 3. A-8012 獨立專屬的文件
            { name: "A-8012 產品規格書", name_en: "A-8012 Datasheet", icon: "📄", link: "Html_Data/Manuals/A-8012/A-8012_Datasheet.pdf" },
            { name: "A-8012 快速入門手冊", name_en: "A-8012 Quick Start", icon: "📘", link: "Html_Data/Manuals/A-8012/A-8012_QuickStart.pdf" }
        ],
        wiringImage: "Html_Data/assets/A-8012.png",
        manualLink: "#",
		// A-8012 右側側邊 Tab的文件
        tabs: [
            {
                id: "tab-docs",
                title: "技術文件",
                title_en: "Tech Docs",
                content: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">技術文件下載</h3>
                          <p style="color: var(--text-light); margin-bottom: 20px;">取得 A-8012 最新的產品規格書與使用手冊，以協助您快速設定與操作。</p>
                          <div id="dynamicDocsContainer"></div>`,
                content_en: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">Technical Documents</h3>
                             <p style="color: var(--text-light); margin-bottom: 20px;">Get the latest spec sheets and user manuals for A-8012.</p>
                             <div id="dynamicDocsContainer"></div>`
            },
            {
                id: "tab-faq",
                title: "常見問題",
                title_en: "FAQ",
                content: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">常見問題 (FAQ)</h3>
                          <ul style="color: var(--text-light); padding-left: 20px; line-height: 1.8;">
                              <li><strong>Q: A-8012 如何設定 Modbus ID?</strong><br>A: 請使用 Yotta Utility 軟體透過 RS-485 介面進行設定。預設 ID 為 1。</li>
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
                              <img src="Html_Data/assets/A-8012.png" alt="A-8012 接線圖" class="wiring-img" style="max-width: 100%; height: auto;">
                          </div>`,
                content_en: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">Wiring Diagram</h3>
                             <div class="wiring-container">
                                 <img src="Html_Data/assets/A-8012.png" alt="A-8012 Wiring" class="wiring-img" style="max-width: 100%; height: auto;">
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
	    model: "A-8019", series: "A-80x", 
        image: "Html_Data/assets/A-8019.png", 
        desc: "高可靠度的工業控制 I/O 解決方案，適用於多種自動化場景。",
        desc_en: "High-reliability industrial control I/O solution, suitable for various automation scenarios.",
        di: "-", do: "-", ai: "8 ch", ao: "-", comm: "RS-485",
        features: ["內建看門狗計時器 (Watchdog Timer)", "支援標準 Modbus RTU 協定", "寬電壓輸入範圍 10~30VDC", "雙重隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["Built-in Watchdog Timer", "Supports standard Modbus RTU", "Wide voltage input 10~30VDC", "Dual isolation protection", "DIN Rail mounting"],
        applications: [
            { name: "A-8019 應用範例-1", name_en: "A-8019 Application Example 1", link: "Html_Data/solutions/A-8019/Application_Example_1.html" },
            { name: "A-8019 應用範例-2", name_en: "A-8019 Application Example 2", link: "Html_Data/solutions/A-8019/Application_Example_2.html" },
            { name: "A-8019 應用範例-3", name_en: "A-8019 Application Example 3", link: "Html_Data/solutions/A-8019/Application_Example_3.html" },
            { name: "A-8019 應用範例-4", name_en: "A-8019 Application Example 4", link: "Html_Data/solutions/A-8012/Application_Example_2.html" }
        ],
        documents: [
            // 1. 全模組共用的文件
            { name: "Yotta 產品保固條款", name_en: "Yotta Warranty Policy", icon: "📄", link: "Html_Data/Manuals/shared_all/warranty.pdf" },
            { name: "Yotta Utility 軟體手冊", name_en: "Yotta Utility Manual", icon: "📘", link: "Html_Data/Manuals/shared_all/utility_manual.pdf" },
            // 2. 與 A-8019 共用的文件
            { name: "RS-485 通訊協定手冊", name_en: "RS-485 Protocol Manual", icon: "📄", link: "Html_Data/Manuals/shared_A10x/rs485_protocol.pdf" },
            { name: "模組基礎配線指南", name_en: "Wiring Guide", icon: "📘", link: "Html_Data/Manuals/shared_A10x/wiring_guide.pdf" },
            // 3. A-8012 獨立專屬的文件
            { name: "A-1012 產品規格書", name_en: "A-1012 Datasheet", icon: "📄", link: "Html_Data/Manuals/A-1012/A-1012_Datasheet.pdf" },
            { name: "A-1012 快速入門手冊", name_en: "A-1012 Quick Start", icon: "📘", link: "Html_Data/Manuals/A-1012/A-1012_QuickStart.pdf" }
        ],
        wiringImage: "Html_Data/assets/A-8012.png",
        manualLink: "#",
		// A-8019 右側側邊 Tab的文件
        tabs: [
            {
                id: "tab-docs",
                title: "技術文件",
                title_en: "Tech Docs",
                content: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">技術文件下載</h3>
                          <p style="color: var(--text-light); margin-bottom: 20px;">取得 A-1012 最新的產品規格書與使用手冊，以協助您快速設定與操作。</p>
                          <div id="dynamicDocsContainer"></div>`,
                content_en: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">Technical Documents</h3>
                             <p style="color: var(--text-light); margin-bottom: 20px;">Get the latest spec sheets and user manuals for A-1012.</p>
                             <div id="dynamicDocsContainer"></div>`
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

	// A-8051
	{
	    model: "A-8051", series: "A-80x", 
        image: "Html_Data/assets/A-8051.png", 
        desc: "高可靠度的工業控制 I/O 解決方案，適用於多種自動化場景。",
        desc_en: "High-reliability industrial control I/O solution, suitable for various automation scenarios.",
        di: "16 ch", do: "-", ai: "-", ao: "-", comm: "RS-485",
        features: ["內建看門狗計時器 (Watchdog Timer)", "支援標準 Modbus RTU 協定", "寬電壓輸入範圍 10~30VDC", "雙重隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["Built-in Watchdog Timer", "Supports standard Modbus RTU", "Wide voltage input 10~30VDC", "Dual isolation protection", "DIN Rail mounting"],
        applications: [
            { name: "A-8051 應用範例-1", name_en: "A-8051 Application Example 1", link: "Html_Data/solutions/A-8051/Application_Example_1.html" }
        ],
        documents: [
            // 1. 全模組共用的文件
            { name: "Yotta 產品保固條款", name_en: "Yotta Warranty Policy", icon: "📄", link: "Html_Data/Manuals/shared_all/warranty.pdf" },
            { name: "Yotta Utility 軟體手冊", name_en: "Yotta Utility Manual", icon: "📘", link: "Html_Data/Manuals/shared_all/utility_manual.pdf" },
            // 2. 與 A-8019 共用的文件
            { name: "RS-485 通訊協定手冊", name_en: "RS-485 Protocol Manual", icon: "📄", link: "Html_Data/Manuals/shared_A10x/rs485_protocol.pdf" },
            { name: "模組基礎配線指南", name_en: "Wiring Guide", icon: "📘", link: "Html_Data/Manuals/shared_A10x/wiring_guide.pdf" },
            // 3. A-8012 獨立專屬的文件
            { name: "A-1012 產品規格書", name_en: "A-1012 Datasheet", icon: "📄", link: "Html_Data/Manuals/A-1012/A-1012_Datasheet.pdf" },
            { name: "A-1012 快速入門手冊", name_en: "A-1012 Quick Start", icon: "📘", link: "Html_Data/Manuals/A-1012/A-1012_QuickStart.pdf" }
        ],
        wiringImage: "Html_Data/assets/A-8051.png",
        manualLink: "#",
		// A-8051 右側側邊 Tab的文件
        tabs: [
            {
                id: "tab-docs",
                title: "技術文件",
                title_en: "Tech Docs",
                content: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">技術文件下載</h3>
                          <p style="color: var(--text-light); margin-bottom: 20px;">取得 A-1012 最新的產品規格書與使用手冊，以協助您快速設定與操作。</p>
                          <div id="dynamicDocsContainer"></div>`,
                content_en: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">Technical Documents</h3>
                             <p style="color: var(--text-light); margin-bottom: 20px;">Get the latest spec sheets and user manuals for A-1012.</p>
                             <div id="dynamicDocsContainer"></div>`
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
		
	// A-8051+
	{
	    model: "A-8051+", series: "A-80x", 
        image: "Html_Data/assets/A-8051.png", 
        desc: "高可靠度的工業控制 I/O 解決方案，適用於多種自動化場景。",
        desc_en: "High-reliability industrial control I/O solution, suitable for various automation scenarios.",
        di: "16 ch", do: "-", ai: "-", ao: "-", comm: "RS-485(isolated)",
        features: ["內建看門狗計時器 (Watchdog Timer)", "支援標準 Modbus RTU 協定", "寬電壓輸入範圍 10~30VDC", "雙重隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["Built-in Watchdog Timer", "Supports standard Modbus RTU", "Wide voltage input 10~30VDC", "Dual isolation protection", "DIN Rail mounting"],
        applications: [
            { name: "A-8051+ 應用範例-1", name_en: "A-8051+ Application Example 1", link: "Html_Data/solutions/A-8051/Application_Example_1.html" }
        ],
        documents: [
        ],
        wiringImage: "Html_Data/assets/A-8051+.png",
        manualLink: "#",
		// A-8051+ 右側側邊 Tab的文件
        tabs: [
        ]
    },
	
	// A-8055
	{
	    model: "A-8055", series: "A-80x", 
        image: "Html_Data/assets/A-8055.png", 
        desc: "高可靠度的工業控制 I/O 解決方案，適用於多種自動化場景。",
        desc_en: "High-reliability industrial control I/O solution, suitable for various automation scenarios.",
        di: "8 ch", do: "8 ch (Sink Transistor)", ai: "-", ao: "-", comm: "RS-485",
        features: ["內建看門狗計時器 (Watchdog Timer)", "支援標準 Modbus RTU 協定", "寬電壓輸入範圍 10~30VDC", "雙重隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["Built-in Watchdog Timer", "Supports standard Modbus RTU", "Wide voltage input 10~30VDC", "Dual isolation protection", "DIN Rail mounting"],
        applications: [
            { name: "A-8055 應用範例-1", name_en: "A-8055 Application Example 1", link: "Html_Data/solutions/A-8055/Application_Example_1.html" }
        ],
        documents: [
            // 1. 全模組共用的文件
            { name: "Yotta 產品保固條款", name_en: "Yotta Warranty Policy", icon: "📄", link: "Html_Data/Manuals/shared_all/warranty.pdf" },
            { name: "Yotta Utility 軟體手冊", name_en: "Yotta Utility Manual", icon: "📘", link: "Html_Data/Manuals/shared_all/utility_manual.pdf" },
            // 2. 與 A-8019 共用的文件
            { name: "RS-485 通訊協定手冊", name_en: "RS-485 Protocol Manual", icon: "📄", link: "Html_Data/Manuals/shared_A10x/rs485_protocol.pdf" },
            { name: "模組基礎配線指南", name_en: "Wiring Guide", icon: "📘", link: "Html_Data/Manuals/shared_A10x/wiring_guide.pdf" },
            // 3. A-8012 獨立專屬的文件
            { name: "A-1012 產品規格書", name_en: "A-1012 Datasheet", icon: "📄", link: "Html_Data/Manuals/A-1012/A-1012_Datasheet.pdf" },
            { name: "A-1012 快速入門手冊", name_en: "A-1012 Quick Start", icon: "📘", link: "Html_Data/Manuals/A-1012/A-1012_QuickStart.pdf" }
        ],
        wiringImage: "Html_Data/assets/A-8055.png",
        manualLink: "#",
		// A-8055 右側側邊 Tab的文件
        tabs: [
        ]
    },
	
	// A-8055S
	{
	    model: "A-8055S", series: "A-80x", 
        image: "Html_Data/assets/A-8055S.png", 
        desc: "高可靠度的工業控制 I/O 解決方案，適用於多種自動化場景。",
        desc_en: "High-reliability industrial control I/O solution, suitable for various automation scenarios.",
        di: "8 ch", do: "8 ch (Souce Transistor)", ai: "-", ao: "-", comm: "RS-485",
        features: ["內建看門狗計時器 (Watchdog Timer)", "支援標準 Modbus RTU 協定", "寬電壓輸入範圍 10~30VDC", "雙重隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["Built-in Watchdog Timer", "Supports standard Modbus RTU", "Wide voltage input 10~30VDC", "Dual isolation protection", "DIN Rail mounting"],
        applications: [
            { name: "A-8055S 應用範例-1", name_en: "A-8055S Application Example 1", link: "Html_Data/solutions/A-8055S/Application_Example_1.html" }
        ],
        documents: [
        ],
        wiringImage: "Html_Data/assets/A-8055S.png",
        manualLink: "#",
		// A-8055S 右側側邊 Tab的文件
        tabs: [
        ]
    },
	
	// A-8057
	{
	    model: "A-8057", series: "A-80x", 
        image: "Html_Data/assets/A-8057.png", 
        desc: "高可靠度的工業控制 I/O 解決方案，適用於多種自動化場景。",
        desc_en: "High-reliability industrial control I/O solution, suitable for various automation scenarios.",
        di: "-", do: "12 ch (Souce Transistor 1A)", ai: "-", ao: "-", comm: "RS-485",
        features: ["內建看門狗計時器 (Watchdog Timer)", "支援標準 Modbus RTU 協定", "寬電壓輸入範圍 10~30VDC", "雙重隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["Built-in Watchdog Timer", "Supports standard Modbus RTU", "Wide voltage input 10~30VDC", "Dual isolation protection", "DIN Rail mounting"],
        applications: [
            { name: "A-8057 應用範例-1", name_en: "A-8057 Application Example 1", link: "Html_Data/solutions/A-8057/Application_Example_1.html" }
        ],
        documents: [
        ],
        wiringImage: "Html_Data/assets/A-8057.png",
        manualLink: "#",
		// A-8057 右側側邊 Tab的文件
        tabs: [
        ]
    },
	
	// A-8058
	{
	    model: "A-8058", series: "A-80x", 
        image: "Html_Data/assets/A-8058.png", 
        desc: "高可靠度的工業控制 I/O 解決方案，適用於多種自動化場景。",
        desc_en: "High-reliability industrial control I/O solution, suitable for various automation scenarios.",
        di: "-", do: "12 ch (Sink Transistor 200mA)", ai: "-", ao: "-", comm: "RS-485",
        features: ["內建看門狗計時器 (Watchdog Timer)", "支援標準 Modbus RTU 協定", "寬電壓輸入範圍 10~30VDC", "雙重隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["Built-in Watchdog Timer", "Supports standard Modbus RTU", "Wide voltage input 10~30VDC", "Dual isolation protection", "DIN Rail mounting"],
        applications: [
            { name: "A-8058 應用範例-1", name_en: "A-8058 Application Example 1", link: "Html_Data/solutions/A-8058/Application_Example_1.html" }
        ],
        documents: [
        ],
        wiringImage: "Html_Data/assets/A-8058.png",
        manualLink: "#",
		// A-8058 右側側邊 Tab的文件
        tabs: [
        ]
    },
	
	// A-8060
	{
	    model: "A-8060", series: "A-80x", 
        image: "Html_Data/assets/A-8060.png", 
        desc: "高可靠度的工業控制 I/O 解決方案，適用於多種自動化場景。",
        desc_en: "High-reliability industrial control I/O solution, suitable for various automation scenarios.",
        di: "8 ch", do: "4 ch (Power Relay)", ai: "-", ao: "-", comm: "RS-485",
        features: ["內建看門狗計時器 (Watchdog Timer)", "支援標準 Modbus RTU 協定", "寬電壓輸入範圍 10~30VDC", "雙重隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["Built-in Watchdog Timer", "Supports standard Modbus RTU", "Wide voltage input 10~30VDC", "Dual isolation protection", "DIN Rail mounting"],
        applications: [
            { name: "A-8060 應用範例-1", name_en: "A-8060 Application Example 1", link: "Html_Data/solutions/A-8060/Application_Example_1.html" }
        ],
        documents: [
        ],
        wiringImage: "Html_Data/assets/A-8055S.png",
        manualLink: "#",
		// A-8060 右側側邊 Tab的文件
        tabs: [
        ]
    },
	
	// A-8068
	{
	    model: "A-8068", series: "A-80x", 
        image: "Html_Data/assets/A-8068.png", 
        desc: "高可靠度的工業控制 I/O 解決方案，適用於多種自動化場景。",
        desc_en: "High-reliability industrial control I/O solution, suitable for various automation scenarios.",
        di: "-", do: "8 ch (Signal Relay)", ai: "-", ao: "-", comm: "RS-485",
        features: ["內建看門狗計時器 (Watchdog Timer)", "支援標準 Modbus RTU 協定", "寬電壓輸入範圍 10~30VDC", "雙重隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["Built-in Watchdog Timer", "Supports standard Modbus RTU", "Wide voltage input 10~30VDC", "Dual isolation protection", "DIN Rail mounting"],
        applications: [
            { name: "A-8068 應用範例-1", name_en: "A-8068 Application Example 1", link: "Html_Data/solutions/A-8068/Application_Example_1.html" }
        ],
        documents: [
        ],
        wiringImage: "Html_Data/assets/A-8068.png",
        manualLink: "#",
		// A-8068 右側側邊 Tab的文件
        tabs: [
        ]
    },
	
	// A-8069
	{
	    model: "A-8069", series: "A-80x", 
        image: "Html_Data/assets/A-8069.png", 
        desc: "高可靠度的工業控制 I/O 解決方案，適用於多種自動化場景。",
        desc_en: "High-reliability industrial control I/O solution, suitable for various automation scenarios.",
        di: "-", do: "8 ch (Power Relay)", ai: "-", ao: "-", comm: "RS-485",
        features: ["內建看門狗計時器 (Watchdog Timer)", "支援標準 Modbus RTU 協定", "寬電壓輸入範圍 10~30VDC", "雙重隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["Built-in Watchdog Timer", "Supports standard Modbus RTU", "Wide voltage input 10~30VDC", "Dual isolation protection", "DIN Rail mounting"],
        applications: [
            { name: "A-8069 應用範例-1", name_en: "A-8069 Application Example 1", link: "Html_Data/solutions/A-8069/Application_Example_1.html" }
        ],
        documents: [
        ],
        wiringImage: "Html_Data/assets/A-8069.png",
        manualLink: "#",
		// A-8069 右側側邊 Tab的文件
        tabs: [
        ]
    },
	
	// A-8080
	{
	    model: "A-8080", series: "A-80x", 
        image: "Html_Data/assets/A-8080.png", 
        desc: "高可靠度的工業控制 I/O 解決方案，適用於多種自動化場景。",
        desc_en: "High-reliability industrial control I/O solution, suitable for various automation scenarios.",
        di: "-", do: "8 ch (HID Relay)", ai: "-", ao: "-", comm: "RS-485",
        features: ["內建看門狗計時器 (Watchdog Timer)", "支援標準 Modbus RTU 協定", "寬電壓輸入範圍 10~30VDC", "雙重隔離保護設計", "DIN Rail 導軌安裝"],
        features_en: ["Built-in Watchdog Timer", "Supports standard Modbus RTU", "Wide voltage input 10~30VDC", "Dual isolation protection", "DIN Rail mounting"],
        applications: [
            { name: "A-8080 應用範例-1", name_en: "A-8080 Application Example 1", link: "Html_Data/solutions/A-8080/Application_Example_1.html" }
        ],
        documents: [
        ],
        wiringImage: "Html_Data/assets/A-8080.png",
        manualLink: "#",
		// A-8080 右側側邊 Tab的文件
        tabs: [
        ]
    },
	
    { 
        model: "A-1012", series: "A-10x", 
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
        documents: [
            // 1. 全模組共用的文件
            { name: "Yotta 產品保固條款", name_en: "Yotta Warranty Policy", icon: "📄", link: "Html_Data/Manuals/shared_all/warranty.pdf" },
            { name: "Yotta Utility 軟體手冊", name_en: "Yotta Utility Manual", icon: "📘", link: "Html_Data/Manuals/shared_all/utility_manual.pdf" },
            // 2. 與 A-1019 共用的文件
            { name: "RS-485 通訊協定手冊", name_en: "RS-485 Protocol Manual", icon: "📄", link: "Html_Data/Manuals/shared_A10x/rs485_protocol.pdf" },
            { name: "模組基礎配線指南", name_en: "Wiring Guide", icon: "📘", link: "Html_Data/Manuals/shared_A10x/wiring_guide.pdf" },
            // 3. A-1012 獨立專屬的文件
            { name: "A-1012 產品規格書", name_en: "A-1012 Datasheet", icon: "📄", link: "Html_Data/Manuals/A-1012/A-1012_Datasheet.pdf" },
            { name: "A-1012 快速入門手冊", name_en: "A-1012 Quick Start", icon: "📘", link: "Html_Data/Manuals/A-1012/A-1012_QuickStart.pdf" }
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
                          <div id="dynamicDocsContainer"></div>`,
                content_en: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">Technical Documents</h3>
                             <p style="color: var(--text-light); margin-bottom: 20px;">Get the latest spec sheets and user manuals for A-1012.</p>
                             <div id="dynamicDocsContainer"></div>`
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
        model: "A-1019", series: "A-10x", 
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
        model: "A-1051", series: "A-10x", 
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
        model: "A-1060", series: "A-10x", 
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
        model: "A-1055", series: "A-10x", 
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
        model: "A-1055S", series: "A-10x", 
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
        model: "A-1068", series: "A-10x", 
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
        model: "A-1069", series: "A-10x", 
        image: "Html_Data/assets/A-1069.png", 
        di: "8 ch", do: "8 ch (Relay)", ai: "-", ao: "-", comm: "RS-485",
        features: ["8通道輸入/8通道輸出", "高性價比", "高防護隔離設計", "支援標準 Modbus RTU 協定"],
        features_en: ["8-channel DI / 8-channel DO", "High cost-performance", "High isolation protection", "Supports standard Modbus RTU"],
        applications: [
            { name: "自動化門禁控制", name_en: "Automatic Access Control", link: "#" },
            { name: "機房環境監控", name_en: "Data Center Environmental Monitoring", link: "#" }
        ],
        wiringImage: "Html_Data/assets/product.png",
    },
    { 
        model: "A-15x", series: "A-15x", 
        image: "https://m1.hocom.tw/ckfinder/connector?command=Proxy&type=Images&currentFolder=%2f&fileName=15(1).jpg", 
        di: "-", do: "-", ai: "-", ao: "-", comm: "RS-232 / RS-485 / RS-422 / USB",
        desc: "A-15x 系列是有線通訊轉換器，提供多種介面轉換選項（如 USB 轉 RS-485），具備 3000VDC 隔離保護與 ESD 保護，支援 DIN Rail 與壁掛安裝。",
        desc_en: "A-15x series are wired communication converters providing multiple interface options (e.g., USB to RS-485) with 3000VDC isolation and ESD protection. Supports DIN Rail and wall mounting.",
        features: ["自動波特率偵測 (300~115200bps)", "3000VDC 隔離保護", "ESD 保護", "無需外部供電 (USB 型號)"],
        features_en: ["Auto Tuner baud rate, 300~115200bps", "3000VDC isolation protection", "ESD protection", "No external power supply (USB type)"],
        applications: [],
        wiringImage: "",
        manualLink: "https://www.yottacontrol.com.tw/h/ServiceDetail?key=z59j7&set=7&cont=7384"
    },
    { 
        model: "A-3450", series: "A-3450", type: "custom",
        image: "https://m1.hocom.tw/ckfinder/connector?command=Proxy&type=Images&currentFolder=%2f&fileName=%e5%9c%96%e7%89%871(2).jpg", 
        desc: "2.4G 無線通訊轉換器",
        desc_en: "2.4G Wireless Communication Converter",
        tabs: [
            {
                id: "tab-overview",
                title: "產品總覽",
                title_en: "Overview",
                content: `
                    <div style="font-size: 16px; line-height: 1.8; color: var(--text-main); margin-bottom: 30px;">
                        <div><span style="color:#000000"><span style="font-family:Tahoma,Geneva,sans-serif">※視距傳輸距離可達100 米</span></span></div>
                        <div><span style="color:#000000"><span style="font-family:Tahoma,Geneva,sans-serif">※提供面向位元組協定數據適應各種用戶協定</span></span></div>
                        <div><span style="color:#000000"><span style="font-family:Tahoma,Geneva,sans-serif">※可以應用於點對點，點對多點和多點對點的通訊組合方法</span></span></div>
                        <div><span style="color:#000000"><span style="font-family:Tahoma,Geneva,sans-serif">※自動過濾傳訊中的雜訊</span></span></div>
                        <div><span style="color:#000000"><span style="font-family:Tahoma,Geneva,sans-serif">※高效糾正編碼技術，抗干擾數據</span></span></div>
                        <div><span style="color:#000000"><span style="font-family:Tahoma,Geneva,sans-serif">※2.4GHz ISM頻率範圍，無需申請頻段</span></span></div>
                        <div><span style="color:#000000"><span style="font-family:Tahoma,Geneva,sans-serif">※配備50 ohm SMA天線基座，提供多種天線選擇</span></span></div>
                        <div><span style="color:#000000"><span style="font-family:Tahoma,Geneva,sans-serif">※同時提供RS-232 / RS-485 / RS-422介面接口</span></span></div>
                        <div><span style="color:#000000"><span style="font-family:Tahoma,Geneva,sans-serif">※有效速度300〜115200bps</span></span></div>
                    </div>

                    <p><span style="font-size:18px"><span style="color:#ffffff"><span style="background-color:#8cc63d; padding: 3px 10px;">Specifications</span></span></span></p>

                    <table class="table table-bordered" style="width:100%; max-width:800px; margin-top: 15px; border-color: #ddd;">
                        <tbody>
                            <tr style="background-color: #f5f5f5;">
                                <td><span style="font-family:Tahoma,Geneva,sans-serif"><span style="font-size:14px"><span style="color:#000000"><strong>A-3450</strong></span></span></span></td>
                            </tr>
                            <tr>
                                <td><span style="font-family:Tahoma,Geneva,sans-serif"><span style="font-size:14px"><span style="color:#000000">
                                <strong>Operation Voltage:</strong> 10~30VDC/24VAC<br />
                                <strong>Supports Max device:</strong> Maximum of 256 devices (Without repeater)<br />
                                <strong>Frequency range:</strong> 2400 &ndash; 2483.5 MHz<br />
                                <strong>Operation temperature:</strong> -20&deg;C to +75 &deg;C<br />
                                <strong>Storage temperature:</strong> -25 &deg;C to +80 &deg;C<br />
                                <strong>Installation:</strong> 35 mm DIN rail or Flush mounting<br />
                                <strong>Connection:</strong> Removable 13-pin Terminal Block ( For RS-422 / 485 / 232 )<br />
                                <strong>RF Module's Groups:</strong> 0~65535<br />
                                <strong>RF Module's ID:</strong> 0~65535<br />
                                <strong>RF Module's TX Power:</strong> 0~6<br />
                                <strong>RF Module's Channel:</strong> 0~200<br />
                                <strong>RF Module's Data Rate:</strong> 250K<br />
                                <strong>Dimension (W x H x D mm):</strong> 76.4*118.2*40.7 mm
                                </span></span></span></td>
                            </tr>
                        </tbody>
                    </table>

                    <p style="margin-top: 30px;">
                        <a href="http://www.yottacontrol.com/download/3450_E.pdf" target="_blank"><img alt="" src="https://web.hocom.tw/ckfinder/connector?command=Proxy&amp;type=Images&amp;currentFolder=%2f&amp;fileName=catalog-icon-7354(2).jpg" style="height:101px; width:120px" /></a>
                        <span style="font-size:16px"><strong>&nbsp; &nbsp;<a href="http://www.yottacontrol.com/new2019/old/3450.html" target="_blank"><u><span style="font-family:Tahoma,Geneva,sans-serif"><img alt="" src="https://m1.hocom.tw/ckfinder/connector?command=Proxy&amp;type=Images&amp;currentFolder=%2f&amp;fileName=More-Info-Button(5).png" style="height:60px; width:150px" /></span></u></a></strong></span>
                    </p>
                `
            }
        ]
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
            { title_zh: "A-9N(GUI)", title_en: "A-9N (GUI)", link: "products/product.html?model=A-9N%20GUI" },
            { title_zh: "A-9H(HMI)", title_en: "A-9H (HMI)", link: "products/product.html?model=A-9H(HMI%E4%BA%BA%E6%A9%9F)" }
        ]
    },
    {
        groupId: "io-modules",
        title_zh: "I/O 模組",
        title_en: "I/O Modules",
        icon: "expand_less",
        isOpen: true,
        items: [
            { title_zh: "A-80x 系列(RS485、自帶邏輯)", title_en: "A-80x Series (RS485, Contains logic)", link: "products/products_a80x.html" },
            { title_zh: "A-10x系列(RS485)", title_en: "A-10x Series (RS485)", link: "products/products_a10x.html" },
            { title_zh: "A-12x 系列(WIFI)", title_en: "A-12x Series (WIFI)", link: "#" },
            { title_zh: "A-18x 系列(乙太網路)", title_en: "A-18x Series (Ethernet)", link: "#" },
            { title_zh: "A-19x 系列(菊花鏈)", title_en: "A-19x Series (Daisy Chain)", link: "#" }
        ]
    },
    {
        groupId: "converters",
        title_zh: "轉換器",
        title_en: "Converters",
        icon: "expand_more",
        isOpen: false,
        items: [
            { title_zh: "A-15x(有線)", title_en: "A-15x (Wired)", link: "products/product.html?model=A-15x" },
            { title_zh: "A-3450(2.4G無線)", title_en: "A-3450 (2.4G Wireless)", link: "products/product.html?model=A-3450" }
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
    { id: "products", title_zh: "產品介紹", title_en: "Products", link: "products/products_a80x.html" },
    { id: "location", title_zh: "交通位置", title_en: "Location", link: "location/location.html" },
    { id: "contact", title_zh: "聯絡我們", title_en: "Contact", link: "contact/contact.html" }
];

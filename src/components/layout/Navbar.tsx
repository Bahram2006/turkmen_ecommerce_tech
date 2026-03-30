"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Biz barada", href: "/about" },
  { name: "Tehniki hyzmat", href: "/service" },
  { name: "Kepillik", href: "/warranty" },
  { name: "Eltip bermek", href: "/delivery" },
  { name: "Teswirler", href: "/reviews" },
  { name: "Nägi̇lelik", href: "/complaint" },
  { name: "Has giňişleýin", href: "/more" },
];

const categories = [
  {
    name: "MONITORLAR",
    icon: "/icons/monitor.png",
    sub: [
      {
        name: "Gaming Monitor",
        icon: "/icons/gaming-monitor.png",
      },
      {
        name: "Monitorlar ucin berkidijiler we goyujylar",
        icon: "/icons/monitor-stand.png",
      },
    ],
  },
  {
    name: "PK DUZUJILERI",
    icon: "/icons/pc.png",
    sub: [
      { name: "PK ucin korpuslar", icon: "/icons/pc.png" },
      { name: "Esasy platalar", icon: "/icons/" },
      { name: "Prosessorlar (CPU)", icon: "/icons/" },
      { name: "Yadyn moduly (RAM)", icon: "/icons/" },
      { name: "Wideo kartalar", icon: "/icons/" },
      { name: "Tizlendirji gaty disk (SSD)", icon: "/icons/" },
      { name: "Icki gaty diskler (HDD)", icon: "/icons/" },
      { name: "Optiki toplayjylar (DWD RW)", icon: "/icons/" },
      { name: "Tok upjuncilik blogy", icon: "/icons/" },
      { name: "Howa we suwly sowadyjylar", icon: "/icons/" },
      { name: "Korpuslar ucin aksessuarlar", icon: "/icons/" },
      { name: "Termo interfeysleri", icon: "/icons/" },
    ],
  },
  {
    name: "PERIFERIYALAR",
    icon: "/icons/",
    sub: [
      { name: "Esbaplar periferiya ucin", icon: "/icons/" },
      { name: "Kompyuter sycanjygy", icon: "/icons/" },
      { name: "Klawiaturalar", icon: "/icons/" },
      { name: "Gulaklyklar", icon: "/icons/" },
      { name: "Kolonkalar we saundbarlar", icon: "/icons/" },
      { name: "Portatiw kolonkalary", icon: "/icons/" },
      { name: "WEB kamera", icon: "/icons/" },
      { name: "Mikrofonlar", icon: "/icons/" },
      { name: "Oyun konsollary we esbaplar", icon: "/icons/" },
      { name: "Oyun ucin kontrollerler", icon: "/icons/" },
      { name: "Wideo oyunlary", icon: "/icons/" },
      { name: "Dok stansiyalar we HUB-lar", icon: "/icons/" },
    ],
  },
  {
    name: "TOPLAYJYLAR",
    icon: "/icons/",
    sub: [
      { name: "Dasky gaty diskler", icon: "/icons/" },
      { name: "Gaty diskler ucin stansiyaalr we korpusalr", icon: "/icons/" },
      { name: "Fles toplayjy (USB)", icon: "/icons/" },
      { name: "Yat karty (SD)", icon: "/icons/" },
      { name: "Kartriderler", icon: "/icons/" },
    ],
  },
  {
    name: "MONOBLOK WE PK",
    icon: "/icons/",
    sub: [
      { name: "Monoblokler", icon: "/icons/" },
      { name: "Brend kompyuterler", icon: "/icons/" },
    ],
  },
  {
    name: "NOUTBUKLAR WE BEYLEKILER",
    icon: "/icons/",
    sub: [
      { name: "Noutbuklar", icon: "/icons/" },
      { name: "Sumkalar we ryuzaklar", icon: "/icons/" },
      { name: "Stendler we esbaplar", icon: "/icons/" },
      { name: "Batareyler", icon: "/icons/" },
      { name: "Zaryad berijiler", icon: "/icons/" },
      { name: "Yadyn moduly", icon: "/icons/" },
      { name: "Optiki toplayjylar DWD RW", icon: "/icons/" },
      { name: "Ekranlar", icon: "/icons/" },
      { name: "Klawiaturalar", icon: "/icons/" },
      { name: "Klawiatura ucin nakleykalar", icon: "/icons/" },
    ],
  },
  {
    name: "MOBIL PERIFERIYALARY",
    icon: "/icons/",
    sub: [
      { name: "Telefon ucin zaryad berijiler", icon: "/icons/" },
      { name: "Telefon ucin kabeller", icon: "/icons/" },
      { name: "Portatiw batareyler", icon: "/icons/" },
      { name: "Podstawkalar we saklayjylar", icon: "/icons/" },
      { name: "Sumkalar we keysler", icon: "/icons/" },
      { name: "Arassalayjy serisdeler", icon: "/icons/" },
      { name: "Durli mobil pereferiyalary", icon: "/icons/" },
    ],
  },
  {
    name: "PRINTERLER WE BEYLEKILER",
    icon: "/icons/",
    sub: [
      { name: "Lazer printerler", icon: "/icons/" },
      { name: "Injekt printerler", icon: "/icons/" },
      { name: "Kopiya aparatlary", icon: "/icons/" },
      { name: "Skanerler", icon: "/icons/" },
      { name: "Oy we ofis ucin telefonlar", icon: "/icons/" },
      { name: "Faks aparatlary", icon: "/icons/" },
      { name: "Proyektorlar we duzujiler", icon: "/icons/" },
      { name: "Kagyz uweyji", icon: "/icons/" },
      { name: "Laminatorlar", icon: "/icons/" },
      { name: "Kanselyariya", icon: "/icons/" },
      { name: "SArp edilyan harytlar", icon: "/icons/" },
    ],
  },
  {
    name: "TOR ENJAMLARY",
    icon: "/icons/",
    sub: [
      { name: "Routerler", icon: "/icons/" },
      { name: "Simsiz guyclendirijiler", icon: "/icons/" },
      { name: "Tor adapteri we patalar", icon: "/icons/" },
      { name: "Swicler, konwerterler we beylekiler", icon: "/icons/" },
      { name: "Tor kabeli", icon: "/icons/" },
      { name: "Testerler we guralalr", icon: "/icons/" },
    ],
  },
  {
    name: "HOWPSUZLYK ULGAMY",
    icon: "/icons/",
    sub: [
      { name: "Gozegcilik kameralary", icon: "/icons/" },
      { name: "Elektron gulplar", icon: "/icons/" },
    ],
  },
  {
    name: "AWTOMATIZASIYA",
    icon: "/icons/",
    sub: [
      { name: "POS kompyuterleri we beylekiler", icon: "/icons/" },
      { name: "Barkod we cek printerler", icon: "/icons/" },
      { name: "Barkod skanerleri", icon: "/icons/" },
      { name: "Pul sanayjylar", icon: "/icons/" },
      { name: "Pul gutusy", icon: "/icons/" },
      { name: "Sarp edilyan harytlar", icon: "/icons/" },
    ],
  },
  {
    name: "TOK SAZLAYJYLAR WE UPS",
    icon: "/icons/",
    sub: [
      { name: "UPS", icon: "/icons/" },
      { name: "Tok sazlayjylar", icon: "/icons/" },
      { name: "UPS ucin batareyler", icon: "/icons/" },
      { name: "UPS ucin beylekiler", icon: "/icons/" },
    ],
  },
  {
    name: "MEBELLER",
    icon: "/icons/",
    sub: [
      { name: "Kompyuter kreslolary", icon: "/icons/" },
      { name: "Kompyuter stollary", icon: "/icons/" },
    ],
  },
  {
    name: "HOJALYK HARYTLARY",
    icon: "/icons/",
    sub: [
      { name: "Oy ucin atributlar", icon: "/icons/" },
      { name: "Telewizorlar", icon: "/icons/" },
      { name: "TW-pristawkalar hem Tyunerler", icon: "/icons/" },
      { name: "Pylesoslar", icon: "/icons/" },
      { name: "Utukler we bugly utukler", icon: "/icons/" },
      { name: "Howa nemlendirijiler we arassalayjylar", icon: "/icons/" },
      { name: "Yyladys enjamlary", icon: "/icons/" },
      { name: "Ashana enjamalry we esbaplary", icon: "/icons/" },
      { name: "Caynekler", icon: "/icons/" },
      { name: "Kofe masynlary", icon: "/icons/" },
      { name: "Tosterler", icon: "/icons/" },
      { name: "Miwe sykyjylar", icon: "/icons/" },
      { name: "Blenderler", icon: "/icons/" },
      { name: "Et uweyji", icon: "/icons/" },
      { name: "Terezi", icon: "/icons/" },
    ],
  },
  {
    name: "GOZELLIK WE SAGLYK",
    icon: "/icons/",
    sub: [
      { name: "Aynek", icon: "/icons/" },
      { name: "Fenlar", icon: "/icons/" },
      { name: "Ploykalar we goneldijiler", icon: "/icons/" },
      { name: "Dis cotgalary we irregatorlar", icon: "/icons/" },
      { name: "Elektrobritwalar", icon: "/icons/" },
      { name: "Sac kesmek we trimmer", icon: "/icons/" },
      { name: "Massajorlar", icon: "/icons/" },
      { name: "Elektrik skuterler", icon: "/icons/" },
      { name: "Gozellik we saglyk ucin", icon: "/icons/" },
    ],
  },
  {
    name: "BASGALAR",
    icon: "/icons/",
    sub: [
      { name: "Lityum batareyler", icon: "/icons/" },
      { name: "Elcyralar", icon: "/icons/" },
      { name: "Kabeller", icon: "/icons/" },
      { name: "Audio kabelelr we gecirijiler", icon: "/icons/" },
      { name: "Wideo kabeller we gecirijiler", icon: "/icons/" },
      { name: "Kabel-tertiplemesi", icon: "/icons/" },
      { name: "Adapterler we konwerterler", icon: "/icons/" },
      { name: "Splitterler we swicler", icon: "/icons/" },
      { name: "Elektrik uzaldyjylar we rozetkalar", icon: "/icons/" },
      { name: "Gurallar", icon: "/icons/" },
      { name: "Basgalar", icon: "/icons/" },
    ],
  },
];

const languages = [
  { code: "TM", label: "Türkmen", flag: "🇹🇲" },
  { code: "RU", label: "Русский", flag: "🇷🇺" },
  { code: "EN", label: "English", flag: "🇺🇸" },
];

const Navbar = () => {
  const placeholders = ["Monitor", "Monoblok", "Case", "Gaming Monitor", "SSD"];

  const [placeholder, setPlaceholder] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["Monitor", "Monoblok", "Game Monitor", "Case"];

  useEffect(() => {
    const currentWord = words[wordIndex];

    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setPlaceholder(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentWord.length) {
          setIsDeleting(true);
          speed = 1000; // biraz garaş
        }
      } else {
        setPlaceholder(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) =>
        prev === placeholders.length - 1 ? 0 : prev + 1,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Gaming Monitor",
      price: 4500,
      image: "/icons/gaming-monitor.png",
    },
    {
      id: 2,
      name: "Office Monitor",
      price: 3200,
      image: "/icons/monitor.png",
    },
    {
      id: 3,
      name: "Monoblok",
      price: 7000,
      image: "/icons/monoblok.png",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 500,
      image: "/icons/keyboard.png",
    },
  ];

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const cartCount = 2;
  const hasNotification = true;

  return (
    <div className="w-full border-b bg-white shadow-sm">
      {/* TOP NAV */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-black rounded-full" />
          <span className="font-semibold text-lg text-gray-900">
            TechMarket
          </span>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative pb-1 transition group ${
                  isActive ? "text-black" : "text-gray-600 hover:text-black"
                }`}
              >
                {link.name}
                <span
                  className={`
                    absolute left-1/2 -translate-x-1/2 -bottom-1
                    h-[4px] bg-black rounded-full
                    transition-all duration-300
                    ${isActive ? "w-6" : "w-0 group-hover:w-6"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">
          {/* LANGUAGE */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 border px-3 py-1 rounded-md text-sm hover:bg-gray-50"
            >
              <span>{selectedLang.flag}</span>
              <span>{selectedLang.code}</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border shadow-lg rounded-lg p-2 z-50">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-red-50 hover:text-red-500 cursor-pointer"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PROFILE */}
          <div className="text-xl cursor-pointer">👤</div>

          {/* CART */}
          <div className="relative flex items-center">
            <span className="text-xl cursor-pointer">🛒</span>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                {cartCount}
              </span>
            )}

            {hasNotification && (
              <span className="absolute -top-1 -left-2 bg-red-500 w-2 h-2 rounded-full"></span>
            )}
          </div>
        </div>
      </div>

      {/* SEARCH SECTION */}
      <div className="w-full flex items-center gap-6 px-6 py-3">
        {/* CATEGORY */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
          >
            Ähli harytlary gör ▼
          </button>

          {open && (
            <div
              className="absolute top-12 left-0 bg-white border shadow-xl rounded-xl z-50"
              onMouseLeave={() => setHovered(null)}
            >
              {/* LEFT */}
              <div className="w-64 p-2">
                {categories.map((cat, index) => (
                  <div
                    key={cat.name}
                    onMouseEnter={() => setHovered(index)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-red-50 transition-all duration-200"
                  >
                    <img src={cat.icon} className="w-6 h-6" />
                    <span className="text-sm font-semibold text-gray-800">
                      {cat.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* RIGHT ONLY WHEN HOVER */}
              {hovered !== null && (
                <div
                  className="
      absolute top-0 left-full ml-2 w-64
      bg-white border border-gray-100
      rounded-2xl
      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      py-2
      transition-all duration-200
    "
                >
                  {categories[hovered].sub.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3
          px-4 py-2.5
          text-sm font-medium text-gray-700
          hover:bg-gray-50 hover:text-black
          cursor-pointer
          transition-all duration-150"
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-5 h-5 object-contain opacity-80"
                      />

                      <span className="flex-1">{item.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* SEARCH */}
        <div className="flex-1 relative">
          <div className="bg-gray-100 rounded-xl px-2 py-1 hover:bg-gray-200 transition">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={placeholder}
              className="w-full bg-gray-100 rounded-xl px-4 py-2 pl-10 
focus:outline-none focus:bg-white focus:ring-2 focus:ring-black/10
text-black placeholder-gray-500 transition-all duration-200 hover:bg-gray-200"
            />
          </div>
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          {search && (
            <div className="absolute top-full left-0 w-full bg-white shadow-2xl rounded-2xl mt-2 z-50 overflow-hidden border">
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 hover:scale-[1.01] cursor-pointer transition duration-200"
                  >
                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-contain"
                    />

                    {/* INFO */}
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-800">
                        {item.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {item.price} TMT
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-4 py-3 text-gray-500 text-sm">
                  Hiç zat tapylmady
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

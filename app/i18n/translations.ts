export type Lang = "en" | "vn";

export const t = {
  en: {
    nav: {
      brand: "John Tran",
      brandAccent: "Code",
      apply: "Apply now",
    },
    hero: {
      tag: "Lifestyle · Mindset · Performance",
      heading1: "Design the life",
      heading2: "you actually want.",
      sub: "John Tran is a certified lifestyle coach helping driven people build sustainable habits, unshakeable confidence, and a life that feels as good as it looks.",
      cta: "Book your free discovery call",
      note: "100% free · No strings attached",
    },
    stats: [
      { value: "1.7M+", label: "Total followers" },
      { value: "750K+", label: "Facebook followers" },
      { value: "600K+", label: "Instagram followers" },
      { value: "311K+", label: "TikTok followers" },
    ],
    about: {
      eyebrow: "About John",
      heading: "Content Creator, Master Coach & Influencer.",
      p1: "Raised in Germany, John is a Content Creator, Master Coach, and Influencer with a combined following of over 1.7 million across major social media platforms. He holds a Master's Degree in Health and Prevention, which deeply informs his holistic approach to wellness.",
      p2: "With a strong professional background in managing health centers and pharmaceutical companies — and experience as a fashion model — John seamlessly blends the worlds of health, \"Quiet Luxury,\" and high-end menswear. He specialises in community building, premium lifestyle content, and strategic brand partnerships.",
      certs: [
        "Master's Degree in Health and Prevention",
        "Certified Master Coach & Personal Coach",
        "Healthcare & Pharmaceutical Management",
        "Fashion Model & Luxury Lifestyle Expert",
      ],
    },
    brands: {
      eyebrow: "Partnerships",
      heading: "Brand Collaborations",
      categories: [
        {
          title: "Fashion & Lifestyle",
          items: [
            { name: "Antonio De Torres (ADT)", desc: "Long-term collaborative campaign in development" },
            { name: "Dominique Saint Paul", desc: "Premium handcrafted leather goods & classic menswear" },
            { name: "Degrey", desc: "Modern apparel and lifestyle content" },
          ],
        },
        {
          title: "Health, Fitness & Beauty",
          items: [
            { name: "Fina Beauty Clinic", desc: "Berlin & Ho Chi Minh City — premium aesthetics & wellness" },
            { name: "Empire Fitness Gym", desc: "High-level fitness, bodybuilding & training" },
            { name: "Vinabeast Fitness Gym", desc: "Strength training & dedicated fitness lifestyle" },
          ],
        },
        {
          title: "Media & Content",
          items: [
            { name: "TV Show with Chef Huy", desc: "Fitness and nutrition TV show concept in development" },
            { name: "The Amazing Race Vietnam", desc: "Adventurous reality show where pairs compete across Vietnam's most iconic landmarks, overcoming physical, mental, and life-skill challenges to race to the finish line." },
            { name: "Who Is Single (Người Ấy Là Ai)", desc: "Reality dating show franchised from Thailand where a female lead finds her perfect match among five male contestants — Single, Taken, or LGBTQ+ — carrying a meaningful message about love and respect." },
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Background",
      heading: "Professional Experience",
      items: [
        {
          role: "Content Creator & Influencer",
          desc: "Producing high-quality lifestyle and luxury fashion content while engaging and growing a 1.7M+ community across Instagram, Facebook, and TikTok.",
        },
        {
          role: "Healthcare Management & Coaching",
          desc: "Successfully managed operations for health centers and pharmaceutical companies. As a Certified Master Coach, provides high-level coaching in fitness, nutrition, and holistic health using advanced prevention methodologies.",
        },
        {
          role: "Fashion Modeling",
          desc: "Professional modeling experience developed a refined eye for aesthetics, styling, and personal branding — now central to the \"Quiet Luxury\" content identity and high-end menswear focus.",
        },
      ],
      competenciesTitle: "Core Competencies",
      competencies: [
        "Health & Wellness: Prevention, fitness coaching, diet strategy",
        "Corporate Leadership: Healthcare and pharmaceutical management",
        "Content & Styling: \"Quiet Luxury\" aesthetic, premium menswear, art direction",
        "Brand Partnerships: Negotiation, proposal development, strategic collaboration",
        "Languages: German (Native), Vietnamese (Native), English (Fluent)",
      ],
    },
    programs: {
      eyebrow: "Programs",
      heading: "Choose your path",
      mostPopular: "Most popular",
      items: [
        {
          icon: "🧠",
          title: "Mindset Reset",
          duration: "4 weeks",
          description:
            "Break limiting beliefs, rewire thought patterns, and build the mental foundation that every lasting change is built on.",
        },
        {
          icon: "⚡",
          title: "Body & Energy",
          duration: "8 weeks",
          description:
            "A holistic approach to nutrition, movement, and recovery designed around your real life — no extreme diets, no 5 AM torture.",
        },
        {
          icon: "🌿",
          title: "Full Lifestyle Transformation",
          duration: "12 weeks",
          description:
            "The complete program: mindset, body, habits, relationships, and purpose — guided 1-on-1 by John every step of the way.",
          highlight: true,
        },
      ],
    },
    testimonials: {
      eyebrow: "Client stories",
      items: [
        {
          quote:
            "Three months with John completely changed how I show up — at work, at home, and in the mirror.",
          name: "Sarah M.",
          role: "Entrepreneur",
        },
        {
          quote:
            "I'd tried everything before. John was the first coach who actually listened and built a plan around my life.",
          name: "Marcus T.",
          role: "Father of two & remote engineer",
        },
        {
          quote:
            "Within 6 weeks I had more energy, less anxiety, and a morning routine I actually stick to.",
          name: "Léa B.",
          role: "Creative director",
        },
      ],
    },
    newsletter: {
      eyebrow: "Newsletter",
      heading: "Stay in the loop.",
      sub: "Get exclusive tips on lifestyle, fitness, and luxury content — straight to your inbox.",
      placeholder: "your@email.com",
      submit: "Subscribe",
      submitting: "Subscribing…",
      successMsg: "You're subscribed! Talk soon.",
      errorMsg: "Something went wrong — please try again.",
    },
    downloads: {
      eyebrow: "Free resources",
      heading: "Exclusive downloads.",
      sub: "Members of John's program get access to the exclusive John Tran Code ebook.",
      cta: "Access the downloads",
      items: [
        { title: "John Tran Code", pages: "PDF" },
      ],
    },
    apply: {
      eyebrow: "Apply",
      heading: "Ready to start?",
      sub: "Tell John about yourself and your goals. He personally reviews every application and will reach out within 48 hours to schedule your free 30-minute call.",
    },
    form: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone",
      program: "Program",
      programPlaceholder: "Select a program…",
      experience: "Have you worked with a coach before?",
      experienceOptions: [
        { value: "", label: "Select…" },
        { value: "none", label: "No — this would be my first time" },
        { value: "some", label: "Yes — once or twice" },
        { value: "regular", label: "Yes — I coach regularly" },
      ],
      goal: "What's your main goal right now?",
      goalPlaceholder: "Tell John what you want to achieve in the next 3 months…",
      commitment: "Commitment level",
      commitmentOptions: [
        { value: "100", label: "100% — All in" },
        { value: "medium", label: "Medium" },
        { value: "low", label: "Low" },
      ],
      investment: "How much can you invest in yourself each month?",
      investmentMin: 50,
      investmentMax: 1000,
      contactMethod: "How should John reach you?",
      contactOptions: [
        { value: "email", label: "Email" },
        { value: "whatsapp", label: "WhatsApp" },
        { value: "telegram", label: "Telegram" },
      ],
      consent: "I agree to receive messages from John Tran Coaching and accept the",
      consentLink: "privacy policy",
      submit: "Apply for a free discovery call",
      submitting: "Sending…",
      note: "No commitment. No spam. John reads every application personally.",
      successTitle: "You're in!",
      successMsg: "Thanks {name} — John will reach out within 48 hours to schedule your free discovery call.",
      errorMsg: "Something went wrong — please try again. You can also reach John directly at johntran.code@gmail.com.",
      programs: [
        { id: "mindset", label: "Mindset Reset (4 weeks)" },
        { id: "body", label: "Body & Energy (8 weeks)" },
        { id: "lifestyle", label: "Full Lifestyle Transformation (12 weeks)" },
      ],
    },
    footer: {
      rights: "All rights reserved.",
      made: "Made with ❤️ by",
      madeAuthor: "Francky",
      madeUrl: "https://tontonfrancky.com",
    },
  },

  vn: {
    nav: {
      brand: "John Tran",
      brandAccent: "Code",
      apply: "Đăng ký ngay",
    },
    hero: {
      tag: "Lối sống · Tư duy · Hiệu suất",
      heading1: "Thiết kế cuộc sống",
      heading2: "bạn thực sự muốn.",
      sub: "John Tran là huấn luyện viên lối sống được chứng nhận, giúp những người có động lực xây dựng thói quen bền vững, sự tự tin vững chắc và cuộc sống đẹp từ bên trong lẫn bên ngoài.",
      cta: "Đặt lịch cuộc gọi khám phá miễn phí",
      note: "100% miễn phí · Không ràng buộc",
    },
    stats: [
      { value: "1.7M+", label: "Tổng người theo dõi" },
      { value: "750K+", label: "Người theo dõi Facebook" },
      { value: "600K+", label: "Người theo dõi Instagram" },
      { value: "311K+", label: "Người theo dõi TikTok" },
    ],
    about: {
      eyebrow: "Về John",
      heading: "Nhà sáng tạo nội dung, Master Coach & Influencer.",
      p1: "Lớn lên tại Đức, John là một Content Creator, Master Coach và Influencer với hơn 1,7 triệu người theo dõi trên các nền tảng mạng xã hội lớn. Anh có bằng Thạc sĩ về Sức khỏe và Phòng bệnh, là nền tảng cho cách tiếp cận toàn diện về sức khỏe của mình.",
      p2: "Với nền tảng chuyên nghiệp vững chắc trong quản lý trung tâm y tế và công ty dược phẩm — cùng kinh nghiệm làm người mẫu thời trang — John kết hợp liền mạch giữa sức khỏe, phong cách \"Quiet Luxury\" và thời trang nam cao cấp.",
      certs: [
        "Thạc sĩ Sức khỏe và Phòng bệnh",
        "Chứng chỉ Master Coach & Personal Coach",
        "Quản lý Y tế & Dược phẩm",
        "Người mẫu thời trang & Chuyên gia phong cách sống cao cấp",
      ],
    },
    brands: {
      eyebrow: "Hợp tác",
      heading: "Thương hiệu & Đối tác",
      categories: [
        {
          title: "Thời trang & Phong cách sống",
          items: [
            { name: "Antonio De Torres (ADT)", desc: "Chiến dịch hợp tác dài hạn đang được phát triển" },
            { name: "Dominique Saint Paul", desc: "Đồ da thủ công cao cấp & phong cách menswear cổ điển" },
            { name: "Degrey", desc: "Nội dung thời trang và phong cách sống hiện đại" },
          ],
        },
        {
          title: "Sức khỏe, Thể hình & Làm đẹp",
          items: [
            { name: "Fina Beauty Clinic", desc: "Berlin & TP.HCM — thẩm mỹ cao cấp & wellness" },
            { name: "Empire Fitness Gym", desc: "Fitness cao cấp, thể hình & môi trường tập luyện chuyên nghiệp" },
            { name: "Vinabeast Fitness Gym", desc: "Luyện sức mạnh & lối sống fitness bền vững" },
          ],
        },
        {
          title: "Truyền thông & Nội dung",
          items: [
            { name: "TV Show cùng Chef Huy", desc: "Concept chương trình truyền hình kết hợp fitness và dinh dưỡng" },
            { name: "The Amazing Race Vietnam", desc: "Show thực tế phiêu lưu nơi các cặp đôi tranh tài qua nhiều chặng tại những địa danh nổi tiếng nhất Việt Nam, vượt qua thử thách thể chất, tinh thần và kỹ năng sống để giành giải thưởng lớn." },
            { name: "Người Ấy Là Ai (Who Is Single)", desc: "Show hẹn hò thực tế nhượng quyền từ Thái Lan, nơi nữ chính tìm kiếm người phù hợp trong số năm nam thí sinh — Độc thân, Đã có người, hoặc LGBTQ+ — mang thông điệp ý nghĩa về tình yêu và sự tôn trọng." },
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Kinh nghiệm",
      heading: "Hành trình chuyên nghiệp",
      items: [
        {
          role: "Content Creator & Influencer",
          desc: "Sản xuất nội dung chất lượng cao về phong cách sống và thời trang xa xỉ, xây dựng cộng đồng 1,7 triệu người trên Instagram, Facebook và TikTok.",
        },
        {
          role: "Quản lý Y tế & Huấn luyện",
          desc: "Quản lý vận hành trung tâm y tế và công ty dược phẩm. Với tư cách Master Coach được chứng nhận, cung cấp huấn luyện chuyên sâu về thể hình, dinh dưỡng và sức khỏe toàn diện.",
        },
        {
          role: "Người mẫu thời trang",
          desc: "Kinh nghiệm làm người mẫu chuyên nghiệp giúp phát triển con mắt thẩm mỹ tinh tế về styling và personal branding — nền tảng của phong cách nội dung \"Quiet Luxury\" ngày nay.",
        },
      ],
      competenciesTitle: "Năng lực cốt lõi",
      competencies: [
        "Sức khỏe & Wellness: Phòng bệnh, coaching thể hình, chiến lược dinh dưỡng",
        "Lãnh đạo doanh nghiệp: Quản lý y tế và dược phẩm",
        "Nội dung & Styling: Phong cách \"Quiet Luxury\", menswear cao cấp, art direction",
        "Hợp tác thương hiệu: Đàm phán, phát triển đề xuất, hợp tác chiến lược",
        "Ngôn ngữ: Tiếng Đức (bản ngữ), Tiếng Việt (bản ngữ), Tiếng Anh (thành thạo)",
      ],
    },
    programs: {
      eyebrow: "Chương trình",
      heading: "Chọn con đường của bạn",
      mostPopular: "Phổ biến nhất",
      items: [
        {
          icon: "🧠",
          title: "Tái thiết Tư duy",
          duration: "4 tuần",
          description:
            "Phá vỡ niềm tin giới hạn, tái lập các mô hình suy nghĩ và xây dựng nền tảng tinh thần cho mọi sự thay đổi lâu dài.",
        },
        {
          icon: "⚡",
          title: "Cơ thể & Năng lượng",
          duration: "8 tuần",
          description:
            "Phương pháp toàn diện về dinh dưỡng, vận động và phục hồi được thiết kế xung quanh cuộc sống thực của bạn — không ăn kiêng cực đoan, không tra tấn lúc 5 giờ sáng.",
        },
        {
          icon: "🌿",
          title: "Chuyển đổi Lối sống Toàn diện",
          duration: "12 tuần",
          description:
            "Chương trình đầy đủ: tư duy, cơ thể, thói quen, các mối quan hệ và mục đích — được John hướng dẫn 1-1 từng bước.",
          highlight: true,
        },
      ],
    },
    testimonials: {
      eyebrow: "Câu chuyện khách hàng",
      items: [
        {
          quote:
            "Ba tháng cùng John đã thay đổi hoàn toàn cách tôi xuất hiện — tại nơi làm việc, ở nhà và trước gương.",
          name: "Sarah M.",
          role: "Doanh nhân",
        },
        {
          quote:
            "Tôi đã thử mọi thứ trước đây. John là huấn luyện viên đầu tiên thực sự lắng nghe và xây dựng kế hoạch xung quanh cuộc sống của tôi.",
          name: "Marcus T.",
          role: "Cha của hai con & kỹ sư từ xa",
        },
        {
          quote:
            "Trong vòng 6 tuần, tôi có nhiều năng lượng hơn, ít lo lắng hơn và một thói quen buổi sáng mà tôi thực sự duy trì được.",
          name: "Léa B.",
          role: "Giám đốc sáng tạo",
        },
      ],
    },
    newsletter: {
      eyebrow: "Bản tin",
      heading: "Cập nhật mới nhất.",
      sub: "Nhận các mẹo độc quyền về lối sống, thể hình và nội dung phong cách cao cấp — ngay trong hộp thư của bạn.",
      placeholder: "email@cua.ban.com",
      submit: "Đăng ký",
      submitting: "Đang gửi…",
      successMsg: "Đăng ký thành công! Hẹn gặp sớm.",
      errorMsg: "Có lỗi xảy ra — vui lòng thử lại.",
    },
    downloads: {
      eyebrow: "Tài nguyên miễn phí",
      heading: "Tài liệu độc quyền.",
      sub: "Thành viên chương trình của John được truy cập ebook độc quyền John Tran Code.",
      cta: "Truy cập tài liệu",
      items: [
        { title: "John Tran Code", pages: "PDF" },
      ],
    },
    apply: {
      eyebrow: "Đăng ký",
      heading: "Sẵn sàng bắt đầu?",
      sub: "Hãy cho John biết về bạn và mục tiêu của bạn. Anh ấy đích thân xem xét từng đơn và sẽ liên hệ trong vòng 48 giờ để sắp xếp cuộc gọi miễn phí 30 phút.",
    },
    form: {
      firstName: "Tên",
      lastName: "Họ",
      email: "Email",
      phone: "Điện thoại",
      program: "Chương trình",
      programPlaceholder: "Chọn một chương trình…",
      experience: "Bạn đã từng làm việc với coach chưa?",
      experienceOptions: [
        { value: "", label: "Chọn…" },
        { value: "none", label: "Chưa — đây sẽ là lần đầu tiên" },
        { value: "some", label: "Rồi — một hoặc hai lần" },
        { value: "regular", label: "Rồi — tôi thường xuyên có coach" },
      ],
      goal: "Mục tiêu chính của bạn hiện tại là gì?",
      goalPlaceholder: "Hãy cho John biết bạn muốn đạt được điều gì trong 3 tháng tới…",
      commitment: "Mức độ cam kết",
      commitmentOptions: [
        { value: "100", label: "100% — Toàn tâm" },
        { value: "medium", label: "Trung bình" },
        { value: "low", label: "Thấp" },
      ],
      investment: "Bạn có thể đầu tư cho bản thân bao nhiêu mỗi tháng?",
      investmentMin: 50,
      investmentMax: 1000,
      contactMethod: "John nên liên hệ bạn qua đâu?",
      contactOptions: [
        { value: "email", label: "Email" },
        { value: "whatsapp", label: "WhatsApp" },
        { value: "telegram", label: "Telegram" },
      ],
      consent: "Tôi đồng ý được John Tran Coaching liên hệ và chấp nhận",
      consentLink: "chính sách bảo mật",
      submit: "Đăng ký cuộc gọi khám phá miễn phí",
      submitting: "Đang gửi…",
      note: "Không ràng buộc. Không spam. John đọc từng đơn đăng ký.",
      successTitle: "Đã nhận!",
      successMsg: "Cảm ơn {name} — John sẽ liên hệ trong vòng 48 giờ để sắp xếp cuộc gọi khám phá miễn phí của bạn.",
      errorMsg: "Có lỗi xảy ra — vui lòng thử lại. Bạn cũng có thể liên hệ John trực tiếp tại johntran.code@gmail.com.",
      programs: [
        { id: "mindset", label: "Tái thiết Tư duy (4 tuần)" },
        { id: "body", label: "Cơ thể & Năng lượng (8 tuần)" },
        { id: "lifestyle", label: "Chuyển đổi Lối sống Toàn diện (12 tuần)" },
      ],
    },
    footer: {
      rights: "Bảo lưu mọi quyền.",
      made: "Được tạo với ❤️ bởi",
      madeAuthor: "Francky",
      madeUrl: "https://tontonfrancky.com",
    },
  },
};

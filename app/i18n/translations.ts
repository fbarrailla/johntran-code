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
      { value: "800k+", label: "Facebook followers" },
      { value: "600k+", label: "Instagram followers" },
      { value: "400k+", label: "TikTok followers" },
      { value: "200+", label: "Clients coached" },
    ],
    about: {
      eyebrow: "About John",
      heading: "Coaching from lived experience, not a textbook.",
      p1: "After burning out at 28, losing 20 kg, and rebuilding his life from the ground up, John became obsessed with one question: what actually makes change stick?",
      p2: "Over the past 6 years he's worked with 200+ clients across four continents — from stressed-out founders to new parents to elite athletes in transition. His approach blends neuroscience-backed habit design, somatic awareness, and radical honesty.",
      certs: [
        "Certified Life & Performance Coach (ICF)",
        "Precision Nutrition Level 2",
        "Mindfulness-Based Stress Reduction (MBSR)",
        "Studying Health & Prevention — Deutsche Hochschule (Germany)",
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
      errorMsg: "Something went wrong — please try again. You can also reach John directly at johntran@tontonfrancky.com.",
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
      { value: "800k+", label: "Người theo dõi Facebook" },
      { value: "600k+", label: "Người theo dõi Instagram" },
      { value: "400k+", label: "Người theo dõi TikTok" },
      { value: "200+", label: "Khách hàng đã huấn luyện" },
    ],
    about: {
      eyebrow: "Về John",
      heading: "Huấn luyện từ trải nghiệm thực tế, không phải sách giáo khoa.",
      p1: "Sau khi kiệt sức ở tuổi 28, giảm 20 kg và xây dựng lại cuộc sống từ đầu, John trở nên ám ảnh với một câu hỏi: điều gì thực sự làm cho sự thay đổi bền vững?",
      p2: "Trong 6 năm qua, anh đã làm việc với hơn 200 khách hàng trên bốn châu lục — từ những nhà sáng lập căng thẳng đến các bậc cha mẹ mới và vận động viên đỉnh cao trong giai đoạn chuyển tiếp. Phương pháp của anh kết hợp thiết kế thói quen dựa trên khoa học thần kinh, nhận thức cơ thể và sự thành thật triệt để.",
      certs: [
        "Huấn luyện viên Cuộc sống & Hiệu suất được chứng nhận (ICF)",
        "Dinh dưỡng Chính xác Cấp độ 2",
        "Giảm căng thẳng dựa trên Chánh niệm (MBSR)",
        "Đang học Sức khỏe & Phòng bệnh — Deutsche Hochschule (Đức)",
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
      errorMsg: "Có lỗi xảy ra — vui lòng thử lại. Bạn cũng có thể liên hệ John trực tiếp tại johntran@tontonfrancky.com.",
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

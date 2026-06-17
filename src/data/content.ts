// Single source of truth for all landing copy. No hardcoded text in components.

export const couple = {
  bride: "Hải Dương",
  groom: "Ngọc Châu",
  separator: "×",
} as const;

// Placeholder date — confirm real wedding date in a future phase (plan Q2).
export const dateEyebrow = {
  label: "Save the date",
  value: "01 · 01 · 2027",
} as const;

export type FunFact = {
  id: string;
  icon: "heart" | "coffee" | "map-pin" | "music";
  label: string;
};

export const content = {
  story: {
    heading: "Câu chuyện của chúng mình",
    body:
      "Đây là đoạn nội dung tạm thời cho phần câu chuyện. Nội dung thật sẽ được " +
      "cập nhật trong một giai đoạn sau. Giữ bố cục để hiệu ứng cuộn hoạt động.",
  },
  funFacts: {
    heading: "Một vài điều thú vị",
    items: [
      { id: "ff1", icon: "heart", label: "Lần đầu gặp" },
      { id: "ff2", icon: "coffee", label: "Quán quen" },
      { id: "ff3", icon: "map-pin", label: "Nơi hẹn hò" },
      { id: "ff4", icon: "music", label: "Bài hát chung" },
    ] satisfies FunFact[],
  },
  details: {
    heading: "Thông tin sự kiện",
    lines: [
      "Ngày: (đang cập nhật)",
      "Giờ: (đang cập nhật)",
      "Địa điểm: (đang cập nhật)",
    ],
  },
  rsvp: {
    heading: "Xác nhận tham dự",
    cta: "Phản hồi",
  },
} as const;

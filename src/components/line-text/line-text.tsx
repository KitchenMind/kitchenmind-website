import React from "react";
import { useSearchParams } from "next/navigation";

export default function LineText() {
  const searchParams = useSearchParams();
  const lang = searchParams?.get('lang') || 'vi';
  const line1 = lang === 'en' ? 'Smart Planning - Reduce Waste - Save Time - Personalized Menus' : 'Lập kế hoạch thông minh - Giảm lãng phí - Tiết kiệm thời gian - Thực đơn cá nhân hóa';
  const line2 = lang === 'en' ? '- Auto Inventory - Expiry Reminders - Budget Tracking' : '- Tồn kho tự động - Nhắc hạn dùng - Theo dõi ngân sách';
  
  return (
    <div className="tp-line-text-area tp-line-text-space black-bg z-index-4 fix">
      <div className="container-fuild">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-line-text-box">
              <h4 className="tp-line-text mb-15">
                {line1}
              </h4>
              <h4 className="tp-line-text tp-line-text-2">
                {line2}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "إطلاق منتجات داخلية",
  "بناء شركة ناشئة",
  "خدمات استشارية",
  "هاكاثونات الابتكار",
  "تحليل المُمَكّنات",
  "أخرى",
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();

  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "يرجى ملء الحقول المطلوبة", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({ title: "تم إرسال طلبك بنجاح ✅", description: "سنتواصل معك قريبًا" });
    }, 1500);
  };

  return (
    <section id="contact" className="pt-14 pb-14 md:pt-20 md:pb-20 relative" ref={ref}>
      <div className="absolute right-1/4 bottom-0 w-[400px] h-[400px] bg-primary glow-orb animate-pulse-soft" />
      <div className="absolute left-1/4 top-1/2 w-[300px] h-[300px] bg-secondary glow-orb animate-pulse-soft" />

      <div className="container relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            🤝 ابدأ رحلتك <span className="text-gradient">معنا</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            أخبرنا عن فكرتك أو مشروعك وسنتواصل معك لنبدأ رحلة الابتكار
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="card-premium p-10 md:p-14 text-center flex flex-col items-center justify-center min-h-[400px]"
              >
                <CheckCircle className="w-16 h-16 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold mb-3 text-foreground">شكرًا لتواصلك!</h3>
                <p className="text-muted-foreground">تم استلام طلبك وسيتواصل معك فريقنا خلال 24 ساعة.</p>
                <Button
                  variant="outline"
                  className="mt-8"
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                >
                  إرسال طلب آخر
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card-premium p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">الاسم <span className="text-destructive">*</span></label>
                    <Input
                      placeholder="اسمك الكامل"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-muted/50 border-border/50 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">البريد الإلكتروني <span className="text-destructive">*</span></label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      dir="ltr"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-muted/50 border-border/50 focus:border-primary/50 text-left"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">رقم الجوال</label>
                    <Input
                      type="tel"
                      placeholder="05XXXXXXXX"
                      dir="ltr"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-muted/50 border-border/50 focus:border-primary/50 text-left"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">الخدمة المطلوبة</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-border/50 bg-muted/50 px-3 py-2 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <option value="">اختر الخدمة</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">رسالتك <span className="text-destructive">*</span></label>
                  <Textarea
                    placeholder="أخبرنا عن فكرتك أو مشروعك..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-muted/50 border-border/50 focus:border-primary/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-gradient-brand text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-4 h-4 ml-2" />
                      إرسال الطلب
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Sidebar info */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-5"
          >
            <a
              href="mailto:business@landscapex.co"
              className="card-premium p-5 flex items-center gap-4 group block"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-500">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">البريد الإلكتروني</p>
                <p className="font-medium text-sm text-foreground" dir="ltr">business@landscapex.co</p>
              </div>
            </a>

            <a
              href="tel:0560656965"
              className="card-premium p-5 flex items-center gap-4 group block"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-500">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">الهاتف</p>
                <p className="font-medium text-sm text-foreground" dir="ltr">0560656965</p>
              </div>
            </a>

            <div className="card-premium p-5">
              <p className="text-sm font-semibold text-foreground mb-2">ساعات العمل</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                الأحد - الخميس<br />
                9:00 صباحًا - 5:00 مساءً
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import { useState } from "react";
// import { z } from "zod";

// const contactSchema = z.object({
//   name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
//   email: z.string().trim().email("Invalid email address").max(255),
//   message: z.string().trim().min(1, "Message is required").max(2000, "Message too long"),
// });

// const ContactForm = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const result = contactSchema.safeParse(form);
//     if (!result.success) {
//       const fieldErrors: Record<string, string> = {};
//       result.error.errors.forEach((err) => {
//         if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
//       });
//       setErrors(fieldErrors);
//       return;
//     }
//     setErrors({});
//     setSubmitted(true);
//   };

//   if (submitted) {
//     return (
//       <div className="bg-brand-green/10 border border-brand-green/30 rounded-xl p-8 text-center">
//         <span className="material-icons-outlined text-brand-green text-5xl mb-4 block">check_circle</span>
//         <h3 className="text-xl font-semibold text-foreground mb-2">Thank you for reaching out!</h3>
//         <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
//         <input
//           id="name"
//           type="text"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
//           placeholder="Your full name"
//         />
//         {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
//       </div>
//       <div>
//         <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
//         <input
//           id="email"
//           type="email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
//           placeholder="you@example.com"
//         />
//         {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
//       </div>
//       <div>
//         <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
//         <textarea
//           id="message"
//           rows={5}
//           value={form.message}
//           onChange={(e) => setForm({ ...form, message: e.target.value })}
//           className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
//           placeholder="Tell us how you'd like to collaborate..."
//         />
//         {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
//       </div>
//       <button
//         type="submit"
//         className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// };

// export default ContactForm;

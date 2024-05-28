'use client';
import { revealFromBottom, revealFromTop } from '@/lib/animations';
import { socialLinks } from '@/lib/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Loader2, Mail, MapPin, Phone, User } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { InputWithIcon } from '../ui/input-with-icon';

const sendMailSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(1, 'Name is required')
    .max(50, 'Too long name')
    .trim(),
  email: z
    .string({ required_error: 'Email is required', invalid_type_error: 'Invalid email' })
    .email()
    .max(50, 'Too long email')
    .trim(),
  phone: z
    .string({ invalid_type_error: 'Invalid phone number' })
    .max(20, 'Invalid phone number')
    .trim()
    .optional()
});
export type SendMailSchema = z.infer<typeof sendMailSchema>;

export default function ContactUs() {
  const [isSending, setIsSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SendMailSchema>({
    resolver: zodResolver(sendMailSchema)
  });

  const onSubmit: SubmitHandler<SendMailSchema> = async (data) => {
    setIsSending(true);
    try {
      const res = await fetch('/api/send-mail', { method: 'POST', body: JSON.stringify(data) });
      if (res.ok) {
        toast.dismiss();
        toast.success('Mail sent successfully');
        reset();
        document.body.focus();
        return;
      }
      res
        .json()
        .then((data) => {
          throw new Error(data.message);
        })
        .catch(() => null);
    } catch (error) {
      let message = 'Unknown error occurred';
      if (error instanceof Error) {
        message = error.message;
      }
      toast.dismiss();
      toast.error(message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="mt-16 bg-gray-800/40 py-20 md:mt-32 md:px-10 lg:mt-40">
      <section className="cont rounded-lg text-gray-300" id="contact-us">
        <motion.h3 {...revealFromTop} className="section-title mb-20">
          <span>Join the</span> <span className="text-emerald-600">finest hands</span>{' '}
          <span>on the </span> <span className="text-emerald-600">market</span>
        </motion.h3>

        <motion.div {...revealFromBottom} className="grid space-y-24 md:grid-cols-2 md:space-y-0">
          <section className="flex flex-col">
            <div className="space-y-5">
              <h3 className="text-2xl font-medium">Contact us</h3>
              <a href="mailto:astogenesis.tech@gmail.com" className="flex items-center space-x-3">
                <Mail className="size-5" />
                <span>astrogenesis.tech@gmail.com</span>
              </a>
              <a href="telto:+9779845673174" className="flex items-center space-x-3">
                <Phone className="size-5" />
                <span>+977 9845673174</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="size-5" />
                <span>Chitwan, Nepal</span>
              </div>
            </div>

            <div className="mt-auto pt-10">
              <h3 className="mb-5 text-2xl font-medium">Social Links</h3>
              <div className="flex items-center space-x-7">
                {socialLinks.map((link) => (
                  <a key={link.title} href={link.url}>
                    <img src={link.image} alt="image" className="size-7" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h3 className="mb-5 text-2xl font-medium">Let us contact you</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-7 md:max-w-96">
              <InputWithIcon
                type="text"
                id="name"
                placeholder="Enter your name..."
                Icon={User}
                {...register('name')}
                error={errors.name?.message}
                label="Name"
              />
              <InputWithIcon
                type="email"
                id="email"
                {...register('email')}
                placeholder="Enter your email..."
                Icon={Mail}
                error={errors.email?.message}
                label="Email"
              />
              <InputWithIcon
                type="text"
                {...register('phone')}
                id="phone"
                placeholder="Enter your phone number..."
                Icon={Phone}
                error={errors.phone?.message}
                label="Phone"
              />
              <button
                type="submit"
                className="relative flex h-10 w-full items-center justify-center space-x-1.5 self-end rounded-md bg-neutral-300 px-5 font-semibold text-black transition hover:brightness-110 active:scale-95"
              >
                <span className={`${isSending ? 'opacity-0' : ''}`}>Submit</span>
                {isSending && (
                  <span className="absolute inset-0 grid place-items-center">
                    <Loader2 className="size-6 animate-rotate" />
                  </span>
                )}
              </button>
            </form>
          </section>
        </motion.div>
      </section>
    </div>
  );
}

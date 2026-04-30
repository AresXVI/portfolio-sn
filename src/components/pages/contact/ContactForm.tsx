'use client'

import TextArea from "antd/es/input/TextArea";
import { Button, Form, FormInstance, Input, message } from "antd";
import { IContactForm } from "@//types/Contact";
import { TrashIcon } from "../../UI/svg/Trash";
import { TelegramIcon } from "../../UI/svg/tg";
import { useTranslations } from "next-intl";

interface IPropsContactForm {
  form: FormInstance<IContactForm>;
  onFinish: (values: IContactForm) => void;
  onReset: () => void;
}

export const ContactForm = ({ form, onFinish, onReset }: IPropsContactForm) => {
  const t = useTranslations('contactPage')
  return (
    <Form form={form} onFinish={onFinish} layout="vertical" onSubmitCapture={(e) => e.preventDefault()}>
      <div className="flex flex-wrap gap-5">
        <Form.Item
          name="name"
          label={t('contactForm.name.title')}
          rules={[{ required: true, message: ('contactForm.rulesMessage') }]}
          className="flex-1"
        >
          <Input placeholder={t('contactForm.name.placeholder')} />
        </Form.Item>

        <Form.Item
          name="email"
          label={t('contactForm.email.title')}
          rules={[
            {
              required: true,
              type: "email",
              message: ('contactForm.rulesMessage'),
            },
          ]}
          className="flex-1"
        >
          <Input placeholder="your@email.com" />
        </Form.Item>
      </div>

      <Form.Item
        name="subject"
        label={t('contactForm.subject.title')}
        rules={[{ required: true, message: ('contactForm.rulesMessage') }]}
      >
        <Input placeholder={t('contactForm.subject.placeholder')} />
      </Form.Item>

      <Form.Item
        name="message"
        label={t('contactForm.message.title')}
        rules={[{ required: true, message: ('contactForm.rulesMessage') }]}
      >
        <TextArea
          placeholder={t('contactForm.message.placeholder')}
          style={{ height: 100 }}
        />
      </Form.Item>

      <div className="flex gap-4 justify-end mt-7">
        <Button
          color="primary"
          variant="outlined"
          size="large"
          className="rounded-2xl! transition-all duration-200 ease-out hover:scale-105 bg-transparent! font-medium!"
          onClick={onReset}
        >
          <TrashIcon size={17} />
          <span>{t('reset')}</span>
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="rounded-2xl! transition-all duration-200 ease-out hover:scale-105"
        >
          <TelegramIcon size={17} />
          <span>{t('send')}</span>
        </Button>
      </div>
    </Form>
  );
};

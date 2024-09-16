"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLocale } from "use-intl";

function Language() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <label>
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
      >
        <option value="en">English</option>
        <option value="mn">Монгол</option>
        <option value="jp">日本語</option>
      </select>
    </label>
  );
}

export default Language;

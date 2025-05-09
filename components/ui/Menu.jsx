import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

export default function Menu({
  title,
  links,
  className,
  innerClassName,
  otherLinkName,
  otherLinks,
}) {
  return (
    <div className={`flex gap-8 ${className}`}>
      <Popover>
        <PopoverButton className="block text-sm/6 font-semibold focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-darkgrey">
          {title}
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom"
          className={` ${innerClassName}  divide-y z-[1000] divide-white/5 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0`}
        >
          <div className="p-3">
            {links.map((link, index) => (
              <Link
                key={index}
                href={`${link.path}`}
                className="block rounded-lg py-2 px-3 transition hover:bg-darkgrey/5"
              >
                {link.title}
              </Link>
            ))}

            {otherLinkName && (
              <span className="flex items-center gap-1 rounded-lg py-2 px-3 transition hover:bg-darkgrey/5">
                <Menu title={otherLinkName} links={otherLinks} />
                <span>
                  <FaAngleDown />{" "}
                </span>
              </span>
            )}
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
}

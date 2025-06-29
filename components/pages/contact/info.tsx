import Container from "@/components/container";
import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";

const Info = () => {
  return (
    <section>
      <Container>
        <div className="space-y-8 rounded-2xl bg-black p-6 text-white lg:rounded-4xl dark:bg-white/10">
          <section className="space-y-4">
            <h3 className="font-bold">Socials</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://facebook.com"
                  className="flex items-center gap-2"
                  target="_blank"
                >
                  <FaFacebookSquare className="text-2xl" />
                  <p className="text-sm lg:text-base">Facebook</p>
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  className="flex items-center gap-2"
                  target="_blank"
                >
                  <FaInstagram className="text-2xl" />
                  <p className="text-sm lg:text-base">Instagram</p>
                </Link>
              </li>
              <li>
                <Link
                  href="https://tiktok.com"
                  className="flex items-center gap-2"
                  target="_blank"
                >
                  <FaTiktok className="text-2xl" />
                  <p className="text-sm lg:text-base">Tiktok</p>
                </Link>
              </li>
            </ul>
          </section>
          <section className="space-y-4">
            <h3 className="font-bold">General</h3>
            <p>
              <span className="font-semibold">Email:</span> shelter@gmail.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +48 777 777 777
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Info;

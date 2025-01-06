import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsGlobe,
  BsTwitterX,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";

const FooterComponent = () => {
  return (
    <Footer container className="border border-t-8 border-teal-700">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-600 to bg-pink-500  rounded-lg text-white">
                Ps.dev's
              </span>
              Blogs
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dev's BLog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <div>
                <Footer.Title title="Follow US" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://www.linkedin.com/in/prabhanjan-puranik/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Footer.Link>
                  <Footer.Link
                    href="https://www.linkedin.com/feed/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linked In
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between mt-4">
          <Footer.Copyright
            href="#"
            by="dev's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.linkedin.com/in/prabhanjan-puranik/"
              icon={BsLinkedin}
            />
            <Footer.Icon href="https://prabhanjansp.web.app/" icon={BsGlobe} />
            <Footer.Icon
              href="https://github.com/prabhanjansp"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.youtube.com/@PrabhanjanDevDesk"
              icon={BsYoutube}
            />
            <Footer.Icon
              href="https://www.instagram.com/iamprabhanjan"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://x.com/iamprabhanjans?t=LEBLKyEPgAr6zkt6uSF9UQ&s=09"
              icon={BsTwitterX}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;

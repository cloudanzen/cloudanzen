"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "@/i18n/navigation";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type DropdownKey = "platform" | "solutions" | "frameworks" | null;

export default function Navbar() {
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLocaleSwitch = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const platformLinks = [
    { label: t("nav.platformLinks.overview.label"), href: "/platform", desc: t("nav.platformLinks.overview.desc") },
    { label: t("nav.platformLinks.complianceAutomation.label"), href: "/platform/compliance-automation", desc: t("nav.platformLinks.complianceAutomation.desc") },
    { label: t("nav.platformLinks.continuousMonitoring.label"), href: "/platform/continuous-monitoring", desc: t("nav.platformLinks.continuousMonitoring.desc") },
    { label: t("nav.platformLinks.riskManagement.label"), href: "/platform/risk-management", desc: t("nav.platformLinks.riskManagement.desc") },
    { label: t("nav.platformLinks.vendorRisk.label"), href: "/platform/vendor-risk", desc: t("nav.platformLinks.vendorRisk.desc") },
    { label: t("nav.platformLinks.policyManagement.label"), href: "/platform/policy-management", desc: t("nav.platformLinks.policyManagement.desc") },
    { label: t("nav.platformLinks.auditReadiness.label"), href: "/platform/audit-readiness", desc: t("nav.platformLinks.auditReadiness.desc") },
    { label: t("nav.platformLinks.trustCenter.label"), href: "/platform/trust-center", desc: t("nav.platformLinks.trustCenter.desc") },
    { label: t("nav.platformLinks.questionnaireAutomation.label"), href: "/platform/questionnaire-automation", desc: t("nav.platformLinks.questionnaireAutomation.desc") },
    { label: t("nav.platformLinks.integrations.label"), href: "/platform/integrations", desc: t("nav.platformLinks.integrations.desc") },
  ];

  const solutionLinks = [
    { label: t("nav.solutionLinks.startups.label"), href: "/solutions/startups", desc: t("nav.solutionLinks.startups.desc") },
    { label: t("nav.solutionLinks.scaleups.label"), href: "/solutions/scaleups", desc: t("nav.solutionLinks.scaleups.desc") },
    { label: t("nav.solutionLinks.enterprise.label"), href: "/solutions/enterprise", desc: t("nav.solutionLinks.enterprise.desc") },
    { label: t("nav.solutionLinks.securityTeams.label"), href: "/solutions/security-teams", desc: t("nav.solutionLinks.securityTeams.desc") },
    { label: t("nav.solutionLinks.grcTeams.label"), href: "/solutions/grc-teams", desc: t("nav.solutionLinks.grcTeams.desc") },
    { label: t("nav.solutionLinks.saas.label"), href: "/solutions/saas", desc: t("nav.solutionLinks.saas.desc") },
  ];

  const frameworkLinks = [
    { label: t("nav.frameworkLinks.soc2"), href: "/frameworks/soc2" },
    { label: t("nav.frameworkLinks.iso27001"), href: "/frameworks/iso27001" },
    { label: t("nav.frameworkLinks.gdpr"), href: "/frameworks/gdpr" },
    { label: t("nav.frameworkLinks.hipaa"), href: "/frameworks/hipaa" },
    { label: t("nav.frameworkLinks.pciDss"), href: "/frameworks/pci-dss" },
    { label: t("nav.frameworkLinks.nistCsf"), href: "/frameworks/nist-csf" },
    { label: t("nav.frameworkLinks.custom"), href: "/frameworks/custom" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (key: DropdownKey) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(key);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
            : "bg-white/72 backdrop-blur-md border-b border-white/60 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
        )}
      >
        <div className="page-shell">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 flex-shrink-0"
              onClick={(e) => {
                setMobileOpen(false);
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="170 110 515 420" className="w-5 h-5 text-white">
                  <path d="M 416 266 L 415 268 L 410 268 L 405 272 L 396 274 L 380 290 L 380 293 L 376 296 L 374 305 L 372 306 L 372 315 L 370 316 L 370 333 L 372 334 L 372 341 L 374 342 L 376 351 L 396 373 L 399 373 L 404 377 L 409 377 L 410 379 L 415 379 L 416 381 L 439 381 L 440 379 L 445 379 L 450 375 L 455 375 L 466 365 L 469 365 L 469 362 L 475 357 L 475 354 L 481 347 L 483 334 L 485 333 L 485 314 L 483 313 L 483 306 L 481 305 L 481 300 L 479 299 L 477 292 L 471 287 L 471 284 L 466 282 L 461 276 L 458 276 L 455 272 L 450 272 L 445 268 L 440 268 L 439 266 Z M 420 285 L 435 285 L 436 287 L 441 287 L 442 289 L 449 291 L 460 302 L 460 305 L 464 310 L 464 315 L 466 316 L 466 331 L 464 332 L 464 337 L 462 338 L 460 345 L 449 356 L 446 356 L 441 360 L 436 360 L 435 362 L 420 362 L 419 360 L 414 360 L 413 358 L 406 356 L 395 345 L 395 342 L 391 337 L 391 330 L 389 329 L 389 318 L 391 317 L 391 310 L 393 309 L 395 302 L 406 291 L 409 291 L 414 287 L 419 287 Z M 458 118 L 452 122 L 452 133 L 454 135 L 463 137 L 464 139 L 481 141 L 482 143 L 493 145 L 498 149 L 503 149 L 504 151 L 523 159 L 526 163 L 529 163 L 532 167 L 535 167 L 540 173 L 543 173 L 550 181 L 553 181 L 658 286 L 658 289 L 515 432 L 512 432 L 501 442 L 498 442 L 497 444 L 494 444 L 481 452 L 476 452 L 475 454 L 466 456 L 465 458 L 456 458 L 455 460 L 444 460 L 443 462 L 412 462 L 411 460 L 400 460 L 399 458 L 384 456 L 379 452 L 374 452 L 373 450 L 354 442 L 343 432 L 340 432 L 269 361 L 269 356 L 370 255 L 373 255 L 382 247 L 385 247 L 398 239 L 417 237 L 418 235 L 451 237 L 452 239 L 457 239 L 458 241 L 473 247 L 484 257 L 487 257 L 492 263 L 501 263 L 507 255 L 505 248 L 497 240 L 494 240 L 489 234 L 486 234 L 483 230 L 480 230 L 471 224 L 466 224 L 461 220 L 454 220 L 453 218 L 442 218 L 441 216 L 414 216 L 413 218 L 394 220 L 389 224 L 384 224 L 383 226 L 372 230 L 361 240 L 358 240 L 246 352 L 246 355 L 244 356 L 244 365 L 324 445 L 327 445 L 340 457 L 347 459 L 350 463 L 353 463 L 362 469 L 367 469 L 372 473 L 377 473 L 378 475 L 383 475 L 384 477 L 403 479 L 404 481 L 419 481 L 420 483 L 435 483 L 436 481 L 463 479 L 464 477 L 471 477 L 472 475 L 483 473 L 488 469 L 493 469 L 494 467 L 509 461 L 512 457 L 515 457 L 518 453 L 521 453 L 528 445 L 531 445 L 636 339 L 639 339 L 658 358 L 658 363 L 625 396 L 622 396 L 619 402 L 616 402 L 555 464 L 552 464 L 543 474 L 540 474 L 535 480 L 528 482 L 525 486 L 522 486 L 519 490 L 514 490 L 507 496 L 502 496 L 501 498 L 492 500 L 487 504 L 480 504 L 479 506 L 456 510 L 452 514 L 450 521 L 454 527 L 457 527 L 458 529 L 465 529 L 466 527 L 485 525 L 486 523 L 491 523 L 496 519 L 507 517 L 520 509 L 525 509 L 528 505 L 535 503 L 538 499 L 541 499 L 544 495 L 547 495 L 550 491 L 553 491 L 560 483 L 563 483 L 681 365 L 681 362 L 683 361 L 681 354 L 651 324 L 655 321 L 656 317 L 659 317 L 663 313 L 664 309 L 667 309 L 671 305 L 672 301 L 675 301 L 679 297 L 679 294 L 683 288 L 681 287 L 681 282 L 563 164 L 560 164 L 553 156 L 550 156 L 547 152 L 544 152 L 535 144 L 528 142 L 525 138 L 520 138 L 507 130 L 496 128 L 491 124 L 476 122 L 475 120 Z M 390 118 L 389 120 L 380 120 L 379 122 L 364 124 L 359 128 L 348 130 L 347 132 L 344 132 L 343 134 L 320 144 L 317 148 L 314 148 L 311 152 L 308 152 L 305 156 L 302 156 L 297 162 L 294 162 L 174 282 L 172 291 L 178 296 L 180 301 L 183 301 L 188 306 L 188 309 L 191 309 L 196 314 L 196 317 L 199 317 L 204 322 L 204 325 L 174 354 L 172 361 L 174 362 L 174 365 L 260 450 L 260 453 L 263 453 L 268 458 L 268 461 L 271 461 L 276 466 L 276 469 L 279 469 L 296 487 L 299 487 L 304 493 L 307 493 L 316 501 L 323 503 L 326 507 L 329 507 L 330 509 L 333 509 L 346 517 L 357 519 L 358 521 L 367 523 L 368 525 L 377 525 L 378 527 L 385 527 L 386 529 L 399 529 L 405 523 L 405 518 L 401 512 L 398 512 L 393 508 L 376 506 L 375 504 L 358 500 L 353 496 L 348 496 L 345 492 L 342 492 L 341 490 L 330 486 L 327 482 L 320 480 L 303 464 L 300 464 L 197 361 L 197 358 L 342 213 L 345 213 L 348 209 L 351 209 L 354 205 L 361 203 L 368 197 L 373 197 L 378 193 L 383 193 L 384 191 L 389 191 L 390 189 L 399 189 L 400 187 L 409 187 L 410 185 L 445 185 L 446 187 L 465 189 L 466 191 L 477 193 L 482 197 L 487 197 L 494 203 L 501 205 L 512 215 L 515 215 L 586 286 L 586 291 L 489 388 L 486 388 L 473 400 L 470 400 L 457 408 L 442 410 L 441 412 L 414 412 L 413 410 L 402 410 L 401 408 L 396 408 L 395 406 L 380 400 L 375 394 L 372 394 L 365 386 L 362 386 L 361 384 L 354 384 L 353 386 L 350 386 L 350 389 L 348 390 L 348 397 L 364 413 L 371 415 L 374 419 L 383 421 L 384 423 L 387 423 L 392 427 L 397 427 L 398 429 L 409 429 L 410 431 L 443 431 L 444 429 L 455 429 L 456 427 L 461 427 L 466 423 L 471 423 L 472 421 L 483 417 L 494 407 L 497 407 L 609 295 L 611 286 L 609 285 L 609 282 L 549 223 L 549 220 L 543 217 L 543 214 L 539 210 L 536 210 L 525 198 L 522 198 L 519 194 L 516 194 L 507 186 L 504 186 L 491 178 L 486 178 L 485 176 L 480 176 L 475 172 L 470 172 L 469 170 L 446 168 L 445 166 L 412 166 L 411 168 L 398 168 L 397 170 L 380 172 L 375 176 L 364 178 L 363 180 L 348 186 L 339 194 L 336 194 L 331 200 L 328 200 L 219 310 L 216 310 L 197 291 L 197 286 L 300 183 L 303 183 L 312 173 L 315 173 L 320 167 L 327 165 L 330 161 L 345 155 L 348 151 L 359 149 L 364 145 L 369 145 L 370 143 L 375 143 L 376 141 L 399 137 L 403 133 L 403 122 L 397 118 Z" fill="currentColor" fillRule="evenodd"/>
                </svg>
              </div>
              <span
                className={cn(
                  "font-bold text-xl tracking-tight",
                  scrolled ? "text-slate-900" : "text-slate-900"
                )}
              >
                CloudAnzen
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {(
                [
                  { label: t("nav.platform"), key: "platform" as DropdownKey },
                  { label: t("nav.solutions"), key: "solutions" as DropdownKey },
                  { label: t("nav.frameworks"), key: "frameworks" as DropdownKey },
                ] as { label: string; key: DropdownKey }[]
              ).map(({ label, key }) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      scrolled
                        ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/70"
                    )}
                  >
                    {label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-150",
                        open === key && "rotate-180"
                      )}
                    />
                  </button>
                </div>
              ))}
              {[
                { label: t("nav.customers"), href: "/customers" },
                { label: t("nav.resources"), href: "/resources" },
                { label: t("nav.pricing"), href: "/pricing" },
                { label: t("nav.help"), href: "/help" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    scrolled
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/70"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language toggle */}
              <div className="flex items-center gap-1.5 text-sm">
                <button
                  onClick={() => handleLocaleSwitch("en")}
                  className={cn(
                    "px-1 py-0.5 rounded transition-colors",
                    locale === "en"
                      ? "font-semibold text-slate-900"
                      : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  EN
                </button>
                <span className="text-slate-300">|</span>
                <button
                  onClick={() => handleLocaleSwitch("ja")}
                  className={cn(
                    "px-1 py-0.5 rounded transition-colors",
                    locale === "ja"
                      ? "font-semibold text-slate-900"
                      : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  日本語
                </button>
              </div>
              <Link
                href="/login"
                className={cn(
                  "text-sm font-medium px-3 py-2 rounded-md transition-colors",
                  scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                {t("nav.signIn")}
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800"
              >
                {t("nav.bookDemo")}
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className={cn(
                "lg:hidden p-2 rounded-md",
                scrolled ? "text-slate-700" : "text-slate-700"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mega-menu dropdowns */}
        {open === "platform" && (
          <div
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl"
            onMouseEnter={() => handleMouseEnter("platform")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-2 gap-2 lg:grid-cols-4 xl:grid-cols-5">
              {platformLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(null)}
                  className="group flex flex-col rounded-lg p-3 transition-colors hover:bg-fuchsia-50"
                >
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-fuchsia-700">
                    {l.label}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">{l.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {open === "solutions" && (
          <div
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-2 gap-2 lg:grid-cols-3">
              {solutionLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(null)}
                  className="group flex flex-col rounded-lg p-3 transition-colors hover:bg-fuchsia-50"
                >
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-fuchsia-700">
                    {l.label}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">{l.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {open === "frameworks" && (
          <div
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl"
            onMouseEnter={() => handleMouseEnter("frameworks")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-3 gap-2 lg:grid-cols-7">
              {frameworkLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(null)}
                  className="group flex flex-col items-center rounded-lg border border-slate-200 p-4 transition-colors hover:border-fuchsia-200 hover:bg-fuchsia-50"
                >
                  <span className="text-center text-sm font-semibold text-slate-800 group-hover:text-fuchsia-700">
                    {l.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 h-16 border-b border-slate-200">
              <span className="font-bold text-slate-900">{t("nav.menu")}</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close">
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>
            {/* Mobile language toggle */}
            <div className="flex items-center gap-2 px-6 py-3 border-b border-slate-200 bg-slate-50">
              <button
                onClick={() => { handleLocaleSwitch("en"); setMobileOpen(false); }}
                className={cn("px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                  locale === "en" ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                )}
              >
                EN
              </button>
              <button
                onClick={() => { handleLocaleSwitch("ja"); setMobileOpen(false); }}
                className={cn("px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                  locale === "ja" ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                )}
              >
                日本語
              </button>
            </div>
            <div className="px-6 py-6 space-y-6">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  {t("nav.platform")}
                </p>
                <div className="space-y-1">
                  {platformLinks.slice(0, 6).map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-md"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  {t("nav.frameworks")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {frameworkLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:border-fuchsia-200 hover:text-fuchsia-700"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <Link
                  href="/login"
                  className="block text-center text-sm font-medium text-slate-700 py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("nav.signIn")}
                </Link>
                <Link
                  href="/demo"
                  className="block rounded-lg bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("nav.bookDemo")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

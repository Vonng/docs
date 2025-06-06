import { cva } from 'class-variance-authority';
import {
    BatteryChargingIcon,
    CpuIcon,
    FileEditIcon,
    FileTextIcon,
    Heart,
    KeyboardIcon,
    LayoutIcon,
    LibraryIcon,
    type LucideIcon,
    MousePointer,
    PaperclipIcon,
    PersonStandingIcon,
    RocketIcon,
    SearchIcon,
    Terminal,
    TimerIcon,
} from 'lucide-react';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import Link from 'next/link';
import type { HTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';
import { CodeBlock } from '@/components/code-block';
import { UwuHero } from '@/app/[lang]/(home)/uwu';
import SourceImage from '@/public/source.png';
import ContributorCounter from '@/components/contributor-count';
import {
    CreateAppAnimation,
    PreviewImages,
    WhyInteractive,
} from './page.client';
import { NetlifyLogo, VercelLogo } from './icons';
import { owner, repo } from '@/lib/github';
import { Marquee } from '@/app/[lang]/(home)/marquee';
import ArchImg from './arch.png';

const badgeVariants = cva(
    'inline-flex size-7 items-center justify-center rounded-full bg-fd-primary font-medium text-fd-primary-foreground',
);

export default function Page() {
    const gridColor =
        'color-mix(in oklab, var(--color-fd-primary) 10%, transparent)';

    return (
        <>
            <div
                className="absolute inset-x-0 top-[360px] h-[250px] max-md:hidden"
                style={{
                    background: `repeating-linear-gradient(to right, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px)`,
                }}
            />
            <main className="container relative max-w-[1100px] px-2 py-4 z-[2] lg:py-8">
                <div
                    style={{
                        background:
                            'repeating-linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-fd-primary) 1%, transparent) 500px, transparent 1000px)',
                    }}
                >
                    <div className="relative">
                        <Hero />
                        <UwuHero />
                    </div>
                    <Feedback />
                    <Introduction />
                    <div
                        className="relative overflow-hidden border-x border-t px-8 py-16 sm:py-24"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at center, var(--color-fd-secondary), var(--color-fd-background) 40%)',
                        }}
                    >
                        <h2 className="text-center text-2xl font-semibold sm:text-3xl">
                            Loved by users.
                            <br />
                            Built for developers.
                        </h2>
                    </div>
                    <Architecture />
                    <Features />
                    <Highlights />
                    <Why />
                    <Contributing />
                    <End />
                </div>
            </main>
        </>
    );
}

function Architecture() {
    return (
        <div className="flex flex-col gap-4 border-x border-t p-8 md:px-12 lg:flex-row">
            <div className="text-start">
                <p className="px-2 py-1 text-sm font-mono bg-fd-primary text-fd-primary-foreground font-bold w-fit mb-4">
                    Designed with Love
                </p>
                <h2 className="text-2xl font-semibold mb-4">A breakable framework.</h2>
                <p className="text-fd-muted-foreground mb-6">
                    Fumadocs makes it easy to build beautiful docs, write content, and
                    transform content into data for your React.js framework.
                </p>
            </div>
            <Image
                src={ArchImg}
                alt="Architecture"
                className="mx-auto -my-16 w-full max-w-[400px] invert dark:invert-0 lg:mx-0"
            />
        </div>
    );
}

async function Why() {
    return (
        <div className="relative overflow-hidden border-x border-t p-2">
            <WhyInteractive></WhyInteractive>
        </div>
    );
}

function End() {
    return (
        <div className="flex flex-col border-b border-r md:flex-row *:border-l *:border-t">
            <div className="group flex flex-col min-w-0 flex-1 pt-8 **:transition-colors">
                <h2 className="text-3xl text-center font-extrabold font-mono uppercase text-fd-muted-foreground mb-4 lg:text-4xl group-hover:text-blue-500">
                    Self-Hosting like a Pro
                </h2>
                <p className="text-center font-mono text-xs text-fd-foreground/60 mb-8 group-hover:text-blue-500/80">
                    Everything you need for a production-grade PostgreSQL service
                </p>
                <div className="h-[200px] overflow-hidden p-8 bg-gradient-to-b from-fd-primary/10 group-hover:from-blue-500/10">
                    <div className="mx-auto bg-radial-[circle_at_0%_100%] from-60% from-transparent to-fd-primary size-[500px] rounded-full group-hover:from-blue-500 group-hover:to-blue-600/10" />
                </div>
            </div>
            <ul className="flex flex-col gap-4 p-6 pt-8">
                <li>
                    <span className="flex flex-row items-center gap-2 font-medium">
                        <BatteryChargingIcon className="size-5" />
                        Battery Included
                    </span>
                    <span className="mt-2 text-sm text-fd-muted-foreground">
                        All you need for enterprise PostgreSQL, out of the box
                    </span>
                </li>
                <li>
                    <span className="flex flex-row items-center gap-2 font-medium">
                        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        Open Source
                    </span>
                    <span className="mt-2 text-sm text-fd-muted-foreground">
                        100% open-source, FOSS license, community-driven
                    </span>
                </li>
                <li>
                    <span className="flex flex-row items-center gap-2 font-medium">
                        <TimerIcon className="size-5" />
                        Local-First
                    </span>
                    <span className="mt-2 text-sm text-fd-muted-foreground">
                        Run anywhere, own your data, no more vendor lock-in
                    </span>
                </li>
                <li className="flex flex-row flex-wrap gap-2 mt-auto">
                    <Link href="/docs/setup/install" className={cn(buttonVariants())}>
                        Get Started
                    </Link>
                    <a
                        href="https://demo.pigsty.cc"
                        rel="noreferrer noopener"
                        className={cn(
                            buttonVariants({
                                variant: 'outline',
                            }),
                        )}
                    >
                        Open Demo
                    </a>
                </li>
            </ul>
        </div>
    );
}

const searchItemVariants = cva(
    'flex flex-row items-center gap-2 rounded-md p-2 text-sm text-fd-popover-foreground',
);

function Search(): React.ReactElement {
    return (
        <div className="mt-6 rounded-lg bg-gradient-to-b from-fd-border p-px">
            <div className="flex select-none flex-col rounded-[inherit] bg-gradient-to-b from-fd-popover">
                <div className="inline-flex items-center gap-2 px-4 py-2 text-sm text-fd-muted-foreground">
                    <SearchIcon className="size-4" />
                    Search...
                </div>
                <div className="border-t p-2">
                    {[
                        'Getting Started',
                        'Components',
                        'MDX Content',
                        'User Guide',
                        'Javascript SDK',
                    ].map((v, i) => (
                        <div
                            key={v}
                            className={cn(
                                searchItemVariants({
                                    className: i === 0 ? 'bg-fd-accent' : '',
                                }),
                            )}
                        >
                            <FileTextIcon className="size-4 text-fd-muted-foreground" />
                            {v}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Highlights(): React.ReactElement {
    return (
        <div className="grid grid-cols-1 border-r md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-full flex flex-row items-start justify-center border-l border-t p-8 pb-2 text-center">
                <h2 className="bg-fd-primary text-fd-primary-foreground px-1 text-2xl font-semibold">
                    Highlights
                </h2>
                <MousePointer className="-ml-1 mt-8" />
            </div>
            <Highlight icon={TimerIcon} heading="Light & Fast.">
                Native Linux, no containers, blazing performance, instant deployment.
            </Highlight>
            <Highlight icon={LayoutIcon} heading="Stunning Observability.">
                Built-in Grafana & Prometheus, best-practice monitoring, out-of-the-box dashboards.
            </Highlight>
            <Highlight icon={RocketIcon} heading="Cloud Native Experience.">
                Declarative infra with Ansible, no K8s required, cloud-like elasticity.
            </Highlight>
            <Highlight icon={SearchIcon} heading="420+ Extensions.">
                420+ PostgreSQL extensions included: TimescaleDB, PostGIS, pgvector, Babelfish, and more.
            </Highlight>
            <Highlight icon={KeyboardIcon} heading="Automation.">
                Automated HA, PITR backup, self-healing clusters, zero-downtime upgrades.
            </Highlight>
            <Highlight icon={PersonStandingIcon} heading="Modular & Customizable.">
                Modular design, rich parameters, easy to extend and hack.
            </Highlight>
        </div>
    );
}

function Highlight({
                       icon: Icon,
                       heading,
                       children,
                   }: {
    icon: LucideIcon;
    heading: ReactNode;
    children: ReactNode;
}): React.ReactElement {
    return (
        <div className="border-l border-t px-6 py-12">
            <div className="mb-4 flex flex-row items-center gap-2 text-fd-muted-foreground">
                <Icon className="size-4" />
                <h2 className="text-sm font-medium">{heading}</h2>
            </div>
            <span className="font-medium">{children}</span>
        </div>
    );
}

function Hero() {
    return (
        <div className="relative z-[2] flex flex-col border-x border-t bg-fd-background/80 px-4 pt-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden overflow-hidden">
            <div
                className="absolute inset-0 z-[-1] blur-2xl hidden dark:block"
                style={{
                    maskImage:
                        'linear-gradient(to bottom, transparent, white, transparent)',
                    background:
                        'repeating-linear-gradient(65deg, var(--color-blue-500), var(--color-blue-500) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)',
                }}
            />
            <div
                className="absolute inset-0 z-[-1] blur-2xl dark:hidden"
                style={{
                    maskImage:
                        'linear-gradient(to bottom, transparent, white, transparent)',
                    background:
                        'repeating-linear-gradient(65deg, var(--color-purple-300), var(--color-purple-300) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)',
                }}
            />
            <h1 className="mb-8 text-4xl font-medium md:hidden">Build Your Docs</h1>
            <h1 className="mb-8 max-w-[600px] text-4xl font-medium max-md:hidden">
                PostgreSQL in Great STYle
            </h1>
            <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
                Battery-Included, Open-Source, Local-First PostgreSQL Distribution
            </p>
            <div className="inline-flex items-center gap-3 max-md:mx-auto">
                <Link
                    href="/docs/"
                    className={cn(
                        buttonVariants({ size: 'lg', className: 'rounded-full' }),
                    )}
                >
                    Get Started
                </Link>
                <a
                    href="https://demo.pigsty.cc"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={cn(
                        buttonVariants({
                            size: 'lg',
                            variant: 'outline',
                            className: 'rounded-full bg-fd-background',
                        }),
                    )}
                >
                    Live Demo
                </a>
            </div>
            <PreviewImages />
        </div>
    );
}

const feedback = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/124599',
        user: 'shadcn',
        role: 'Creator of Shadcn UI',
        message: `You know how you end up rebuilding a full docs site every time you start a new project? 

Fumadocs fixes this by giving you all the right blocks that you compose together.

Like headless docs to build exactly what you need.`,
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/35677084',
        user: 'Anthony Shew',
        role: 'Turbo DX at Vercel',
        message: `Major shoutout to @fuma_nama for making fumadocs, a gorgeous documentation framework that composes beautifully into the App Router.`,
    },
    {
        user: 'Aiden Bai',
        avatar: 'https://avatars.githubusercontent.com/u/38025074',
        role: 'Creator of Million.js',
        message: 'fumadocs is the best Next.js docs framework',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/10645823',
        user: 'David Blass',
        role: 'Creator of Arktype',
        message: `I'd have no shot building @arktypeio docs that looked half this good without it 😍`,
    },    {
        avatar: 'https://avatars.githubusercontent.com/u/35677084',
        user: 'aAnthony Shew',
        role: 'Turbo DX at Vercel',
        message: `Major shoutout to @fuma_nama for making fumadocs, a gorgeous documentation framework that composes beautifully into the App Router.`,
    },
    {
        user: 'aAiden Bai',
        avatar: 'https://avatars.githubusercontent.com/u/38025074',
        role: 'Creator of Million.js',
        message: 'fumadocs is the best Next.js docs framework',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/10645823',
        user: 'aDavid Blass',
        role: 'Creator of Arktype',
        message: `I'd have no shot building @arktypeio docs that looked half this good without it 😍`,
    }
];

function Feedback() {
    return (
        <div className="relative border-x border-t pt-8 bg-fd-background">
            <div className="flex flex-row gap-6 justify-between px-6 mb-6 items-center">
                <p className="text-sm font-medium md:text-lg">
                    Trusted by awesome teams and developers
                </p>
                <Link
                    href="/showcase"
                    className={cn(buttonVariants({ variant: 'outline' }))}
                >
                    Showcase
                </Link>
            </div>
            <Marquee className="pb-8 [mask-image:linear-gradient(to_right,transparent,white_20px,white_calc(100%-20px),transparent)]">
                {feedback.map((item) => (
                    <div
                        key={item.user}
                        className="flex flex-col rounded-xl border bg-gradient-to-b from-fd-card p-4 shadow-lg w-[320px]"
                    >
                        <p className="text-sm whitespace-pre-wrap">{item.message}</p>

                        <div className="mt-auto flex flex-row items-center gap-2 pt-4">
                            <Image
                                src={item.avatar}
                                alt="avatar"
                                width="32"
                                height="32"
                                unoptimized
                                className="size-8 rounded-full"
                            />
                            <div>
                                <p className="text-sm font-medium">{item.user}</p>
                                <p className="text-xs text-fd-muted-foreground">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}

function Introduction(): React.ReactElement {
    return (
        <div className="grid grid-cols-1 border-r md:grid-cols-2">
            <div className="flex flex-col gap-2 border-l border-t px-6 py-12 md:py-16">
                <div className={cn(badgeVariants())}>1</div>
                <h3 className="text-xl font-semibold">Install Pigsty</h3>
                <p className="mb-8 text-fd-muted-foreground">
                    One command to bootstrap a production-ready PostgreSQL stack. No containers, no hassle, just pure Linux performance.
                </p>
                <CreateAppAnimation />
            </div>
            <div className="flex flex-col gap-2 border-l border-t px-6 py-12 md:py-16">
                <div className={cn(badgeVariants())}>2</div>
                <h3 className="text-xl font-semibold">Deploy HA Clusters</h3>
                <p className="text-fd-muted-foreground">
                    Spin up self-healing, high-availability Postgres clusters across multiple nodes with declarative YAML. Built-in PITR, auto failover, and more.
                </p>
                <div className="relative flex flex-col">
                    <CodeBlock
                        lang="yaml"
                        wrapper={{
                            className: 'absolute inset-x-2 top-0 shadow-lg',
                        }}
                        code={`pg-prod:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
    10.10.10.13: { pg_seq: 3, pg_role: offline }
  vars: { pg_cluster: pg-prod }
`}
                    />
                    <Files className="z-[2] mt-40 shadow-xl">
                        <Folder name="pigsty" defaultOpen>
                            <File name="pgsql.yml" />
                            <File name="pigsty.yml" />
                        </Folder>
                    </Files>
                </div>
            </div>
            <div className="col-span-full flex flex-col items-center gap-2 border-l border-t px-6 py-16 text-center">
                <div className={cn(badgeVariants())}>3</div>
                <h3 className="text-2xl font-semibold">Ship & Scale</h3>
                <p className="text-fd-muted-foreground">
                    Effortlessly scale, monitor, and manage your clusters. Pigsty is cloud-native, but runs anywhere. No vendor lock-in, ever.
                </p>
                <div className="mt-4 flex flex-row flex-wrap items-center gap-8">
                    <a href="https://vercel.com" rel="noreferrer noopener">
                        <VercelLogo className="h-auto w-32" />
                    </a>
                    <a href="https://netlify.com" rel="noreferrer noopener">
                        <NetlifyLogo className="h-auto w-32" />
                    </a>
                </div>
            </div>
        </div>
    );
}

function Contributing() {
    return (
        <div className="flex flex-col items-center border-x border-t px-4 py-16 text-center">
            <Heart fill="currentColor" className="text-pink-500 mb-4" />
            <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
                Made Possible by You.
            </h2>
            <p className="mb-4 text-fd-muted-foreground">
                Fumadocs is 100% powered by passion and open source community.
            </p>
            <div className="mb-8 flex flex-row items-center gap-2">
                <Link
                    href="/sponsors"
                    className={cn(buttonVariants({ variant: 'outline' }))}
                >
                    Sponsors
                </Link>
                <a
                    href="https://github.com/pgsty/pigsty/graphs/contributors"
                    rel="noreferrer noopener"
                    className={cn(buttonVariants({ variant: 'ghost' }))}
                >
                    Contributors
                </a>
            </div>
            <ContributorCounter repoOwner={owner} repoName={repo} />
        </div>
    );
}

function Features() {
    return (
        <div className="grid grid-cols-1 border-r md:grid-cols-2">
            <Feature
                icon={PaperclipIcon}
                subheading="Extensible Postgres"
                heading="A Universe of Possibilities"
                description={
                    <>
                        <span className="font-medium text-fd-foreground">
                            420+ extensions, FDW, plugins, analytics, AI, GIS, time-series, and more. Build your own Postgres platform.
                        </span>
                    </>
                }
                className="overflow-hidden"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 60% 50%,var(--color-fd-secondary),var(--color-fd-background) 80%)',
                }}
            >
                <div className="mt-8 flex flex-col">
                    <div className="flex flex-row w-fit bg-fd-secondary border rounded-full *:rounded-full">
                        <a
                            href="https://github.com/Vonng/pigsty"
                            rel="noreferrer noopener"
                            target="_blank"
                            className={cn(buttonVariants({ variant: 'outline' }))}
                        >
                            GitHub Repo
                        </a>
                        <a
                            href="https://pigsty.io/docs/extensions/"
                            rel="noreferrer noopener"
                            target="_blank"
                            className={cn(buttonVariants({ variant: 'ghost' }))}
                        >
                            Extension List
                        </a>
                    </div>
                    <Image
                        alt="Source"
                        src={SourceImage}
                        sizes="600px"
                        className="-mt-16 w-[400px] min-w-[400px] invert pointer-events-none dark:invert-0"
                    />
                    <div className="z-[2] mt-[-170px] w-[300px] overflow-hidden rounded-lg border border-fd-foreground/10 shadow-xl backdrop-blur-lg">
                        <div className="flex flex-row items-center gap-2 bg-fd-muted/50 px-4 py-2 text-xs font-medium text-fd-muted-foreground">
                            <FileEditIcon className="size-4" />
                            Extension Example
                        </div>
                        <pre className="p-4 text-[13px]">
                            <code className="grid">
                                <span className="font-medium"># Enable PostGIS</span>
                                <span>CREATE EXTENSION postgis;</span>
                                <span>{` `}</span>
                                <span className="font-medium"># Use pgvector</span>
                                <span>CREATE EXTENSION vector;</span>
                            </code>
                        </pre>
                    </div>
                </div>
            </Feature>
            <Feature
                icon={SearchIcon}
                subheading="Stunning Observability"
                heading="Clarity and Vision"
                description="Built-in monitoring, alerting, log analysis, custom dashboards. No more blind spots."
            >
                <Link
                    href="/docs/monitoring"
                    className={cn(
                        buttonVariants({ variant: 'outline', className: 'mt-4' }),
                    )}
                >
                    Learn More
                </Link>
                <Search />
            </Feature>
            <Feature
                icon={Terminal}
                subheading="Self-Healing HA"
                heading="Rock-Solid Reliability"
                description="One-click HA cluster, automatic failover, PITR protection, zero-downtime upgrades."
            >
                <div className="relative">
                    <div className="grid grid-cols-[1fr_2fr_1fr] h-[220px] *:border-fd-foreground/50 *:border-dashed mask-radial-circle mask-radial-from-white">
                        <div className="border-r border-b" />
                        <div className="border-b" />
                        <div className="border-l border-b" />
                        <div className="border-r" />
                        <div className="w-[200px]" />
                        <div className="border-l" />
                        <div className="border-r border-t" />
                        <div className="border-t" />
                        <div className="border-l border-t" />
                    </div>
                    <code className="absolute inset-0 flex items-center justify-center">
                        <code className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-fd-foreground font-medium">
                            bin/pgsql-add pg-prod
                        </code>
                    </code>
                </div>
            </Feature>
            <Feature
                icon={CpuIcon}
                subheading="Reliable & Secure"
                heading="Enterprise-Grade Security"
                description="Built-in ACL, CA, SSL, data integrity, compliance ready. Your data, your rules."
            >
                <div className="mt-8 flex flex-col gap-4">
                    <Link
                        href="/docs/security"
                        className="rounded-xl bg-gradient-to-br from-transparent via-fd-primary p-px shadow-lg shadow-fd-primary/20"
                    >
                        <div className="rounded-[inherit] bg-fd-background bg-gradient-to-br from-transparent via-fd-primary/10 p-4 transition-colors hover:bg-fd-muted">
                            <LayoutIcon />
                            <h3 className="font-semibold">Security Best Practices</h3>
                            <p className="text-sm text-fd-muted-foreground">
                                Built-in access control, SSL, CA, and more.
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="/docs/ha"
                        className="rounded-xl border bg-fd-background p-4 shadow-lg transition-colors hover:bg-fd-muted"
                    >
                        <LibraryIcon />
                        <h3 className="font-semibold">HA & PITR</h3>
                        <p className="text-sm text-fd-muted-foreground">
                            High-availability, point-in-time recovery, and automated failover.
                        </p>
                    </Link>
                </div>
            </Feature>
        </div>
    );
}

function Feature({
                     className,
                     icon: Icon,
                     heading,
                     subheading,
                     description,
                     ...props
                 }: HTMLAttributes<HTMLDivElement> & {
    icon: LucideIcon;
    subheading: ReactNode;
    heading: ReactNode;
    description: ReactNode;
}): React.ReactElement {
    return (
        <div
            className={cn('border-l border-t px-6 py-12 md:py-16', className)}
            {...props}
        >
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-fd-muted-foreground">
                <Icon className="size-4" />
                <p>{subheading}</p>
            </div>
            <h2 className="mb-2 text-lg font-semibold">{heading}</h2>
            <p className="text-fd-muted-foreground">{description}</p>

            {props.children}
        </div>
    );
}

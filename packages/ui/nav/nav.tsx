import React from 'react'
import cn from 'clsx'
import Link from '../link'
import Button from '../button'
import DeployButton, { DeployButtonProps } from '../deploy-button'
import s from './nav.module.css'

const REPO_URL = 'https://github.com/vercel/examples/tree/main'

export interface NavProps {
  path: string
  deployButton?: Partial<DeployButtonProps>
}

export default function Nav({ path, deployButton }: NavProps) {
  const displayPath = ['Vercel Examples']
    .concat(path?.split('/').filter(Boolean) || [])
    .join(' / ')
  const repositoryUrl = deployButton?.repositoryUrl || `${REPO_URL}/${path}`

  return (
    <nav className={s.root}>
      <div className={cn('flex items-center lg:px-6 px-8', s.container)}>
        <div className="flex flex-row items-center">
          <Link href="/">
            <span>
              <svg height="26" viewBox="0 0 75 65" fill="#000">
                <title>Vercel Logo</title>
                <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
              </svg>
            </span>
          </Link>
          <ul className="flex items-center content-center">
            <li className="ml-2 text-gray-200">
              <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
              >
                <path d="M16.88 3.549L7.12 20.451"></path>
              </svg>
            </li>
            <li className="font-medium" style={{ letterSpacing: '.01px' }}>
              <Link
                href={repositoryUrl}
                className={s.link}
                target="_blank"
                rel="noreferrer"
              >
                {displayPath}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 justify-end hidden md:flex">
          <nav className="flex-row inline-flex items-center">
            <span className="ml-2 h-full flex items-center cursor-not-allowed text-accents-5">
              <Button
                variant="ghost"
                Component="a"
                href="https://github.com/vercel/examples/tree/main"
                target="_blank"
                rel="noreferrer"
              >
                More Examples →
              </Button>
            </span>
            <span className="ml-2 h-full flex items-center cursor-not-allowed text-accents-5">
              <DeployButton
                {...deployButton}
                repositoryUrl={repositoryUrl}
                projectName={deployButton?.projectName || path}
                repositoryName={deployButton?.repositoryName || path}
              />
            </span>
          </nav>
        </div>
      </div>
    </nav>
  )
}

import { $breakPoint, $color, $cssTRBL, $uw } from "@lemaks/grid_system";
import styled from "styled-components";
import Link from "next/link";
import React from "react";

type Props = {
    onClick?: () => void;
    text?: string;
    id?: string;
    className?: string;
    type?: "button" | "submit";
    color?: string;
    shadowcolor?: string;
    href?: string; // If present, renders a link
    external?: boolean; // If true, renders an external anchor tag
    iconBefore?: React.ReactNode; // Icon to display before text
    iconAfter?: React.ReactNode; // Icon to display after text
};

export const CTA: React.FC<Props> = ({
    className,
    text,
    id,
    onClick,
    type = "button",
    href,
    color = "primary-light",
    shadowcolor = `${color}-shade`,
    external,
    iconBefore,
    iconAfter,
}) => {
    const renderContent = () => (
        <>
            {iconBefore && <IconWrapper className="before">{iconBefore}</IconWrapper>}
            {text && <span>{text}</span>}
            {iconAfter && <IconWrapper className="after">{iconAfter}</IconWrapper>}
        </>
    );

    if (href) {
        if (external) {
            return (
                <StyledLink
                    className={className}
                    id={id}
                    shadowcolor={shadowcolor}
                    color={color}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {renderContent()}
                </StyledLink>
            );
        }

        return (
            <Link href={href} passHref legacyBehavior>
                <StyledLink shadowcolor={shadowcolor} color={color} className={className} id={id}>
                    {renderContent()}
                </StyledLink>
            </Link>
        );
    }

    return (
        <StyledButton
            className={className}
            id={id}
            shadowcolor={shadowcolor}
            type={type}
            color={color}
            onClick={onClick ? () => {
                onClick();
            } : undefined}
        >
            {renderContent()}
        </StyledButton>
    );
};

const StyledButton = styled.button<{ color: string, shadowcolor: string }>`
  all: unset;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 2px;
  color: ${$color("white")};
  text-align: center;
  
  background-color: ${({ color }) => $color(color)};
  box-shadow:  ${$uw(.2)} ${$uw(.2)}  ${({ shadowcolor }) => $color(shadowcolor)};
  padding: ${$cssTRBL(0.5, 2)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  ${$breakPoint(780)} {
    padding: ${$cssTRBL(1, 5)};
  }
`;

const StyledLink = styled.a<{ color: string, shadowcolor: string }>`
  all: unset;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 2px;
  color: ${$color("white")};
  text-align: center;
  background-color: ${({ color }) => $color(color)};
  padding: ${$cssTRBL(0.5, 2)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  box-shadow:  ${$uw(.2)} ${$uw(.2)}  ${({ shadowcolor }) => $color(shadowcolor)};
  ${$breakPoint(780)} {
    padding: ${$cssTRBL(1, 5)};
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  &.before{
    margin-right: ${$uw(1)};
  }
  &.after{
    margin-left: ${$uw(1)};
  }
`;

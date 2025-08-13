import React from "react";
import theme from "theme";
import { Theme, Link, Box, Section, Icon, Text, LinkBox, Button, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FiMenu, FiX } from "react-icons/fi";
import { GiFairyWings } from "react-icons/gi";
import { FaRegWindowMaximize, FaPaintRoller, FaBehance, FaGithub } from "react-icons/fa";
import { IoMdPhonePortrait, IoIosPhonePortrait, IoIosCall } from "react-icons/io";
import { GoMail } from "react-icons/go";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="16px 0"
			sm-padding="8px 0"
			quarkly-title="Header"
			background="#e0b868"
			display="block"
		>
			<Override slot="SectionContent" flex-direction="row" justify-content="flex-end" align-items="center" />
			<Components.QuarklycommunityKitMobileSidePanel menuPosition="full" breakpoint="infinite" width="300px">
				<Override slot="Children" display="none" />
				<Override
					slot="Content"
					padding="16px 16px 16px 16px"
					background="#ffffff"
					border-radius="8px"
					box-shadow="0 4px 8px rgba(0, 0, 0, 0.2)"
					margin="0px 0px 0px 0px"
					lg-height="500px"
					height="500px"
				/>
				<Override
					slot="Button Icon"
					category="fi"
					icon={FiMenu}
					size="32px"
					color="--dark"
					padding="8px 8px 8px 8px"
					border-radius="50%"
					hover-background="#cda660"
					md-width="48px"
					md-hover-background="#d5aa5f"
					md-height="48px"
					lg-width="48px"
					lg-height="48px"
					lg-margin="0px 8px 0px 0px"
					width="48px"
					height="48px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="8px 8px 8px 8px"
					border-radius="50%"
				/>
				<Override
					slot="Cross"
					size="32px"
					color="--dark"
					top="16px"
					right="16px"
					category="fi"
					icon={FiX}
					lg-margin="0px 38px 0px 0px"
					margin="0px 38px 0px 0px"
					hover-color="--secondary"
				/>
				<Override slot="Button Text" width="0%" color="rgba(0, 0, 0, 0)">
					menu
				</Override>
				<Override slot="Wrapper" lg-height="500pz" height="500px" />
				<Override slot="Overlay" lg-height="500px" height="500px" />
				<Link
					href="#"
					color="#000000"
					lg-font="18px --fontFamily-mono"
					lg-text-decoration-line="initial"
					lg-margin="0px 0px 0px 38px"
					lg-padding="10px 0px 0px 0px"
					lg-display="block"
					font="24px --fontFamily-mono"
					text-decoration-line="initial"
					margin="4px 0px 0px 38px"
					display="block"
					sm-font="24px --fontFamily-mono"
					width="300px"
					hover-color="--secondary"
				>
					Amal Anilkumar
				</Link>
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-end"
					gap="16px"
					padding="16px 48px 16px 0px"
					width="100%"
					lg-align-items="flex-end"
					lg-margin="32px 0px 0px 0px"
				>
					<Link
						href="/works"
						font="400 24px/1.5 --fontFamily-mono"
						color="--darkL2"
						hover-color="--secondary"
						text-decoration-line="none"
						transition="color 0.2s ease"
						md-align-self="flex-end"
						md-margin="34px 0px 12px 0px"
						lg-margin="0px 0px 12px 0px"
						margin="14px 0px 24px 0px"
					>
						Works
					</Link>
					<Link
						href="/about"
						font="400 24px/1.5 --fontFamily-mono"
						color="--darkL2"
						hover-color="--secondary"
						text-decoration-line="none"
						transition="color 0.2s ease"
						md-align-self="flex-end"
						md-margin="0px 0px 12px 0px"
						lg-margin="0px 0px 12px 0px"
						margin="0px 0px 24px 0px"
					>
						About
					</Link>
					<Link
						href="/contact"
						font="400 24px/1.5 --fontFamily-mono"
						color="--darkL2"
						hover-color="--secondary"
						text-decoration-line="none"
						transition="color 0.2s ease"
						md-align-self="flex-end"
						md-margin="0px 0px 12px 0px"
						margin="0px 0px 24px 0px"
					>
						Get in Touch
					</Link>
					<Box
						display="flex"
						gap="12px"
						align-items="center"
						margin="0px 0px 0px 0px"
						md-align-self="flex-end"
					>
						<SocialMedia
							facebook="https://www.facebook.com"
							twitter="https://www.twitter.com"
							instagram="https://www.instagram.com"
							linkedin="https://www.linkedin.com"
							display="flex"
							gap="12px"
							align-items="center"
							align-self="center"
							flex="0 1 auto"
							justify-content="center"
						>
							<Override
								slot="link"
								border-radius="50%"
								background="transparent"
								display="flex"
								width="32px"
								height="32px"
								align-items="center"
								justify-content="center"
								margin="0 0px 0 28px"
								hover-color="rgba(255, 255, 255, 0)"
								border-color="rgba(0, 119, 204, 0)"
								padding="0px 0px 0px 0px"
							/>
							<Override slot="icon" size="24px" color="--darkL2" hover-color="#ffffff" />
						</SocialMedia>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section
			sm-padding="8px 0 8px 0"
			quarkly-title="Header-3"
			background="#e0b868"
			md-display="none"
			display="none"
		>
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="infinite"
				width="70%"
				sm-width="50%"
				md-width="50%"
				lg-width="30%"
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0px 0px 0px 0px"
					background="rgba(255, 255, 255, 0)"
					lg-background="#ffffff"
					lg-margin="0px 0px 0px 0px"
					md-height="520px"
					lg-height="320px"
					sm-height="720px"
				/>
				<Override
					slot="Button Text"
					font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-transform="uppercase"
					letter-spacing="1px"
					sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="0px 2px 0px 0px"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="5px 7px 5px 7px"
					border-radius="50px"
				/>
				<Override
					slot="Button Icon"
					width="28px"
					height="28px"
					category="fi"
					icon={FiMenu}
					color="--dark"
					size="24px"
					lg-width="32px"
					lg-height="32px"
				/>
				<Override
					slot="Cross"
					lg-width="32px"
					lg-height="32px"
					size="32px"
					top="24px"
					right="24px"
					lg-margin="0px 25px 0px 0px"
					sm-margin="0px 10px 0px 0px"
					md-margin="0px 2 0px 0px"
				/>
				<Override slot="Wrapper" height="20%" md-height="320px" lg-height="320px" />
				<Override slot="Overlay" md-height="320px" lg-height="320px" />
				<Box
					align-items="center"
					lg-justify-content="center"
					lg-align-items="flex-start"
					justify-content="flex-end"
					display="flex"
					lg-flex-direction="column"
					lg-margin="0px auto 0px auto"
					lg-min-width="300px"
					lg-max-width="1280px"
					lg-width="90%"
					lg-padding="24px 0px 48px 0px"
				>
					<Box
						display="none"
						lg-width="100%"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-padding="12px 0px 12px 0px"
					>
						<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
							<Icon category="gi" icon={GiFairyWings} color="#6d32ec" size="37px" />
							<Text
								margin="0"
								md-margin="0px 0 0px 0"
								text-align="left"
								font="--lead"
								sm-margin="0px 0 0px 0"
								display="block"
							>
								Company
							</Text>
						</LinkBox>
					</Box>
					<Components.QuarklycommunityKitMenu
						display="flex"
						filterMode="exclude"
						filterPages="/index"
						grid-gap="8px"
						lg-flex-direction="column"
						lg-padding="6px 0px 6px 0px"
						lg-margin="0px 0px 24px 0px"
						align-items="center"
						flex-wrap="wrap"
						overflow-x="visible"
						overflow-y="visible"
						lg-align-items="flex-start"
					>
						<Override
							slot="link"
							color="--darkL2"
							hover-color="--primary"
							font="600 16px sans-serif"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override slot="item-active" border-width={0} />
						<Override slot="item" padding="6px 8px 6px 8px" />
						<Override slot="link-active" cursor="default" color="--primary" />
						<Override slot="link-about" />
					</Components.QuarklycommunityKitMenu>
					<Box
						width="25%"
						display="none"
						lg-width="100%"
						lg-flex-direction="column"
						lg-align-items="flex-start"
						lg-display="flex"
						justify-content="space-around"
						align-items="center"
						flex-wrap="wrap"
						lg-margin="0px 0px 0px 0px"
					>
						<Link
							font="--lead"
							padding="10px 0px 10px 0px"
							margin="0px 0px 6px 0px"
							href="tel:12345678"
							text-decoration-line="initial"
							color="--dark"
							lg-margin="0px 0px 24px 0px"
						>
							+1(234)567-89-00
						</Link>
						<SocialMedia
							instagram="https://instagram.com/instagram"
							margin="0px 0px 0px 0px"
							facebook="https://www.facebook.com/quarklyapp/"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							lg-display="flex"
							lg-grid-gap="12px"
						>
							<Override slot="link-twitter" margin="0px 0px 0px 5px">
								<div />
							</Override>
							<Override
								slot="link"
								border-radius="50%"
								background="transparent"
								hover-color="--light"
								display="flex"
								margin="0 5px 0 5px"
								padding="5x 5px 5px 5px"
								width="32px"
								height="32px"
								align-items="center"
								justify-content="center"
							/>
							<Override slot="icon" size="32px" border-radius="50px" color="--darkL2" />
							<Override slot="link-facebook" margin="0px 5px 0px 0px">
								<div />
							</Override>
						</SocialMedia>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section
			padding="140px 0 140px 0"
			background="#e0b868"
			min-height="100vh"
			md-padding="96px 0 70px 0"
			sm-padding="72px 0 70px 0"
			lg-background="#dfb767"
			sm-max-width="fit-content"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="normal 400 72px/1.2 --fontFamily-mono"
					lg-text-align="center"
					sm-font="--headline1"
					md-font="--headline1"
					sm-display="inline"
				>
					Amal Anilkumar
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="normal 300 20px/1.5 --fontFamily-mono" lg-text-align="center">
					UI UX Designer
				</Text>
				<Box display="flex" sm-flex-direction="column" sm-text-align="center">
					<Link
						href="https://www.behance.net/amalux"
						padding="12px 24px 12px 24px"
						color="--dark"
						font="--lead"
						border-radius={0}
						margin="0px 16px 0px 0px"
						sm-margin="0px 0px 16px 0px"
						sm-text-align="center"
						hover-background="#d7af66"
						hover-transition="background-color 0.2s ease-in-out 0s"
						transition="background-color 0.2s ease-in-out 0s"
						flex-direction="row"
						text-decoration-line="initial"
						border-width="1px"
						border-style="solid"
						sm-href="https://www.behance.net/amalux"
						display="none"
					>
						All Projects
					</Link>
				</Box>
			</Box>
			<Box
				display="flex"
				justify-content="center"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
				width="50%"
				padding="0px 0px 0px 0px"
				lg-padding="10px 0px 0px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="450px"
					height="350px"
					background="rgba(0, 0, 0, 0) url(https://res.cloudinary.com/dgxb8m8lr/image/upload/v1754850441/header_ewenpo.png) 5%/100% repeat scroll padding-box"
					display="flex"
					flex-direction="column"
					flex-wrap="wrap"
					margin="80px 0px 0px 0px"
					flex="0 0 auto"
					lg-margin="50px 0px 0px 0px"
				/>
			</Box>
		</Section>
		<Section
			padding="100px 0 170px 0"
			sm-padding="0px 0 40px 0"
			background="url(https://res.cloudinary.com/dgxb8m8lr/image/upload/v1754897793/IMG_20250811_130343_qwdbns_a_hflip_klrpuy.jpg) center/cover"
			height="900px"
			max-height="fit-content"
			sm-max-height="fit-content"
			md-max-height="fit-content"
			lg-max-height="fit-content"
		>
			<Override
				slot="SectionContent"
				sm-align-items="center"
				height="640px"
				sm-margin="0px 0px 0px 0px"
				sm-display="flex"
				sm-flex-direction="row"
				sm-flex-wrap="wrap"
				sm-width="auto"
				lg-height="fit-content"
			/>
			<Box
				max-width="500px"
				padding="50px 50px 50px 50px"
				background="--color-light"
				color="--dark"
				display="flex"
				flex-direction="column"
				flex-wrap="wrap"
				align-content="space-around"
				align-self="auto"
				sm-background="rgba(247, 251, 255, 0)"
				sm-padding="50px 10px 1px 10px"
				sm-align-self="auto"
				sm-align-content="center"
				sm-width="auto"
				md-background="rgba(0, 0, 0, 0.42)"
				lg-background="rgba(0, 0, 0, 0.43)"
			>
				<Text
					as="h4"
					font="normal 300 16px/1.5 --fontFamily-mono"
					color="--grey"
					letter-spacing="1px"
					margin="6px 0"
					sm-color="#ffffff"
					md-color="--light"
					lg-color="--light"
				>
					About Me
				</Text>
				<Text
					as="h2"
					font="normal 400 42px/1.2 --fontFamily-mono"
					margin="0 0 12px 0"
					sm-color="--secondary"
					md-color="--secondary"
					lg-color="--secondary"
				>
					Hey I’m Amal
				</Text>
				<Text
					font="--base"
					sm-color="--light"
					sm-background="rgba(0, 0, 0, 0.42)"
					sm-padding="30px 20px 30px 20px"
					sm-width="fit-content"
					md-color="--lightD1"
					lg-color="--lightD1"
					color="--darkL2"
				>
					A passionate UI/UX designer with a background in visual arts and a love for creating intuitive digital experiences.
					<br />
					<br />
					I began my career as a freelance designer in the cryptocurrency space mainly as a designer of marketing. This experience gave me a unique perspective on designing and approach on public.
					<br />
					<br />
					After several years in the industry, I decided to formalize my education by completing the Google UX Design Certificate, which helped me refine my process and expand my skill set.
					<br />
					<br />
					Today, I combine my technical knowledge with creative problem-solving to design digital products that are both beautiful and functional.
				</Text>
			</Box>
			<Button
				width="max-content"
				margin="3px 0px 0px 0px"
				font="normal 500 20px/1.5 --fontFamily-sans"
				background="rgba(0, 119, 204, 0)"
				border-radius={0}
				type="link"
				href="https://www.behance.net/amalux"
				order="1"
				lg-color="--secondary"
				hover-color="--secondary"
			>
				See all my works &gt;&gt;
			</Button>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 80px 0" quarkly-title="Content-9" background="#1D1D1D">
			<Override
				slot="SectionContent"
				padding="0px 0 0px 0px"
				lg-padding="0px 0 0px 0px"
				display="grid"
				grid-template-columns="repeat(2, 1fr)"
				align-items="start"
				lg-grid-template-columns="1fr"
				lg-display="flex"
				lg-flex-direction="column"
				lg-flex-wrap="no-wrap"
				lg-align-self="flex-start"
				lg-flex="0 0 auto"
				lg-align-content="center"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				padding="160px 35px 50px 35px"
				border-color="#b8bcc0"
				margin="0px 80px 0 0"
				lg-margin="40px 0px 35px 0"
				background="rgba(0, 0, 0, 0) url(https://res.cloudinary.com/dgxb8m8lr/image/upload/v1754899872/Framef_1597880405_cnujdf.png) center/cover repeat scroll padding-box"
				border-radius={0}
				sm-padding="0 25px 30px 25px"
				height="750px"
				align-items="center"
				display="flex"
				flex-direction="row"
				justify-content="center"
				max-width="414px"
				md-height="750px"
				sm-background="rgba(0, 0, 0, 0) url(https://res.cloudinary.com/dgxb8m8lr/image/upload/v1754899872/Framef_1597880405_cnujdf.png) center/cover repeat scroll padding-box"
				sm-height="750px"
				lg-align-self="center"
				sm-align-self="center"
				sm-width="414px"
				md-align-self="center"
				md-width="410px"
				lg-width="414px"
			>
				<Box min-width="10px" min-height="10px" display="flex" align-items="center" />
			</Box>
			<Box min-width="100px" min-height="100px" padding="10px 0px 0px 0px">
				<Text margin="0px 0px 10px 0px" font="--lead" color="--light">
					Case Study 1
				</Text>
				<Text margin="0px 0px 30px 0px" font="--headline2" color="--secondary">
					Trail Back Navigation App
				</Text>
				<Text margin="0px 0px 25px 0px" font="normal 300 16px/1.5 --fontFamily-mono" color="--lightD1" md-font="--base">
					"Trail Back Navigation App just records your path so you can get back safely"
				</Text>
				<Text margin="0px 0px 25px 0px" font="--base" color="--lightD2" md-font="--base">
					Initially Trail Back was my own idea when I was traveling with my family to a relative's place where internet was still not have its foundation. Even though I preferably use Google Maps everywhere I go I forgot to download the offline copy of the map. I reached the place somehow but I lost the way back because the time was late and it was dark.
				</Text>
				<Text margin="0px 0px 35px 0px" font="--base" color="--lightD2">
					That was the time when I had this Idea of an app that works without a network and can record the path so that as a traveler I can use it on my way safely back home.{" "}
					<br />
					<br />
					That's the how Trail Back was my first project for my UI/UX journey.{" "}
				</Text>
				<Box
					min-width="100px"
					min-height="100px"
					display="grid"
					grid-template-columns="repeat(4, 1fr)"
					grid-gap="16px 16px"
					padding="15px 0px 0px 0px"
					border-width="1px 0 0 0"
					border-style="solid"
					border-color="rgba(255, 255, 255, 0.42)"
					margin="0px 0px 30px 0px"
					sm-grid-template-columns="repeat(2, 1fr)"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 15px 0px" font="--base" color="--lightD1" md-color="--lightD2">
							Year
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 400 34px/1.2 --fontFamily-mono" color="--lightD1" md-color="--lightD2">
							2025
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 15px 0px" font="--base" color="--lightD1" md-color="--lightD2">
							Month
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 400 34px/1.2 --fontFamily-mono" color="--lightD1" md-color="--lightD2">
							June
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 15px 0px" font="--base" color="--lightD1" md-color="--lightD2">
							Duration
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="normal 400 34px/1.2 --fontFamily-mono"
							color="--lightD1"
							width="150px"
							md-color="--lightD2"
						>
							2 Months
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" />
				</Box>
				<Link
					href="#https://www.behance.net/gallery/231556413/Trail-Back-A-Navigation-App"
					color="--secondary"
					font="--lead"
					text-decoration-line="initial"
					target="_blank"
					hover-color="#ffffff"
				>
					Learn more &gt;&gt;
				</Link>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 80px 0" quarkly-title="Content-9" background="#9DBCE2">
			<Override
				slot="SectionContent"
				padding="0px 0 0px 80px"
				lg-padding="0px 0 0px 0px"
				display="grid"
				grid-template-columns="repeat(2, 1fr)"
				align-items="start"
				lg-grid-template-columns="1fr"
				lg-display="flex"
				lg-flex-direction="column"
				lg-flex-wrap="no-wrap"
				lg-align-self="flex-start"
				lg-flex="0 0 auto"
				lg-align-content="center"
				order="-1"
				lg-background="#9DBCE2"
				color="--darkL2"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				padding="160px 0px 50px 35px"
				border-color="#b8bcc0"
				margin="0px 0px 0 145px"
				lg-margin="40px 0px 35px 0"
				background="rgba(0, 0, 0, 0) url(https://res.cloudinary.com/dgxb8m8lr/image/upload/v1754904811/Frame_1597880406_pfp7ez.png) center/cover repeat scroll padding-box"
				border-radius={0}
				sm-padding="0 25px 30px 25px"
				height="750px"
				align-items="center"
				display="flex"
				flex-direction="row"
				justify-content="center"
				max-width="414px"
				md-height="750px"
				sm-background="rgba(0, 0, 0, 0) url(https://res.cloudinary.com/dgxb8m8lr/image/upload/v1754904811/Frame_1597880406_pfp7ez.png) center/cover repeat scroll padding-box"
				sm-height="750px"
				lg-align-self="center"
				sm-align-self="center"
				sm-width="390px"
				md-align-self="center"
				md-width="410px"
				lg-width="414px"
				order="1"
				lg-background="rgba(0, 0, 0, 0) url(https://res.cloudinary.com/dgxb8m8lr/image/upload/v1754904811/Frame_1597880406_pfp7ez.png) center/cover repeat scroll padding-box"
			>
				<Box min-width="10px" min-height="10px" display="flex" align-items="center" />
			</Box>
			<Box min-width="100px" min-height="100px" margin="10px 0px 0px 0px">
				<Text margin="0px 0px 10px 0px" font="--lead" color="--dark" lg-color="--darkL2">
					Case Study 2
				</Text>
				<Text margin="0px 0px 30px 0px" font="normal 400 42px/1.2 --fontFamily-mono" color="#325287" lg-color="#325287">
					IRCTC Landing Page Redesign
				</Text>
				<Text
					margin="0px 0px 25px 0px"
					font="--base"
					color="#282828"
					lg-color="--dark"
					lg-font="--base"
				>
					"A total visual overhaul of India's official Railway Portal"
				</Text>
				<Text margin="0px 0px 25px 0px" font="--base" color="--darkL2" lg-color="--dark">
					Every time I open Government service portals I've noticed something. The Government didn't cared about the User Interface and User Experience.{" \n"}
					<br />
					Yes the IRCTC portal was fast and error free considering the amount of people uses it daily.

 The initial thought I had was was Government websites are for providing service and they doesn't need the fancy minimalist design.
					<br />
				</Text>
				<Text margin="0px 0px 35px 0px" font="--base" color="--darkL2" lg-color="--dark">
					Untill I explored developed country's social service pages and found out that they are up-to date with the design while India is still suck at 2000s.
					<br />
					<br />
					So the problem is not usability. Its just being lazy.{" "}
				</Text>
				<Box
					min-width="100px"
					min-height="100px"
					display="grid"
					grid-template-columns="repeat(4, 1fr)"
					grid-gap="16px 16px"
					padding="15px 0px 0px 0px"
					border-width="1px 0 0 0"
					border-style="solid"
					border-color="rgba(0, 0, 0, 0.22)"
					margin="0px 0px 30px 0px"
					sm-grid-template-columns="repeat(2, 1fr)"
					lg-border-color="#5e5e5e"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 15px 0px" font="--base" color="--darkL2" lg-color="--darkL2">
							Year
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 400 34px/1.2 --fontFamily-mono" color="--darkL2" lg-color="--darkL2">
							2025
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 15px 0px" font="--base" color="--darkL2" lg-color="--darkL2">
							Month
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 400 34px/1.2 --fontFamily-mono" color="--darkL2" lg-color="--darkL2">
							June
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 15px 0px" font="--base" color="--darkL2" lg-color="--darkL2">
							Duration
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="normal 400 34px/1.2 --fontFamily-mono"
							color="--darkL2"
							width="150px"
							lg-color="--darkL2"
						>
							2 Days
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" />
				</Box>
				<Link
					href="#https://www.behance.net/gallery/231556413/Trail-Back-A-Navigation-App"
					color="#325287"
					font="--lead"
					text-decoration-line="initial"
					target="_blank"
					lg-color="#325287"
					hover-color="#ffffff"
				>
					Learn more &gt;&gt;
				</Link>
			</Box>
		</Section>
		<Section padding="60px 0 60px 0" sm-padding="60px 0 60px 0" background="#DE8579">
			<Box min-width="100px" min-height="100px" margin="0px 0px 20px 0px" height="fit-content">
				<Text margin="2px 0px 0px 0px" font="--headline2" text-align="center" color="#ffffff">
					Things I'm Capable of
				</Text>
			</Box>
			<Box
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="24px 4%"
				md-grid-template-columns="1fr"
				grid-column-gap={0}
				grid-row-gap={0}
			>
				<Box
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					background="#DE8579"
					padding="20px 20px 20px 20px"
				>
					<Icon
						category="fa"
						icon={FaRegWindowMaximize}
						margin="0px 0px 16px 0px"
						color="rgba(255, 255, 255, 0.7)"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="#ffffff" font="--headline3" lg-text-align="left">
						UI UX Design
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="rgba(255, 255, 255, 0.9)"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Creating intuitive interfaces and seamless user experiences that engage and delight. Empathizing, Ideating, Prototyping and Testing.
					</Text>
				</Box>
				<Box
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					background="#DE8579"
					padding="20px 20px 20px 20px"
				>
					<Icon
						category="fa"
						icon={FaPaintRoller}
						margin="0px 0px 16px 0px"
						color="rgba(255, 255, 255, 0.7)"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="#ffffff" font="--headline3" lg-text-align="left">
						Brand Identity{"\n\n"}
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="rgba(255, 255, 255, 0.9)"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Developing cohesive visual identities that communicate your brand's unique story.
					</Text>
				</Box>
				<Box
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					background="#DE8579"
					padding="20px 20px 20px 20px"
				>
					<Icon
						category="io"
						icon={IoMdPhonePortrait}
						margin="0px 0px 16px 0px"
						color="rgba(255, 255, 255, 0.7)"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="#ffffff" font="--headline3" lg-text-align="left">
						App Design{"\n\n"}
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="rgba(255, 255, 255, 0.9)"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Designing beautiful, functional mobile experiences that users love to interact with.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			padding="40px 0 40px 0"
			justify-content="center"
			align-items="center"
			color="#797979"
			height="auto"
			background="#ffffff"
			border-width="1px"
			border-style="solid"
		>
			<Box
				min-width="100px"
				min-height="100px"
				margin="0px 0px 0px 0px"
				height="fit-content"
				align-items="center"
				display="flex"
				flex-direction="row"
				justify-content="center"
			>
				<Text margin="0px 0px 0px 0px" font="--headline2" text-align="center" color="--darkL2">
					Tools I'm Good at
				</Text>
			</Box>
			<Box margin="40px 0px 0px 0px" display="flex" flex-direction="row" flex-wrap="wrap">
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/6898d7c82d10660018b805ee/images/Figma.svg?v=2025-08-13T04:42:19.845Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/6898d7c82d10660018b805ee/images/Sketch.svg?v=2025-08-13T04:42:19.852Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/6898d7c82d10660018b805ee/images/Xd.svg?v=2025-08-13T04:42:19.849Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/6898d7c82d10660018b805ee/images/Ai.svg?v=2025-08-13T04:42:19.845Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/6898d7c82d10660018b805ee/images/PS.svg?v=2025-08-13T04:42:19.878Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/6898d7c82d10660018b805ee/images/Low%20Code.svg?v=2025-08-13T04:57:18.786Z" border-radius="16px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Section padding="50px 0 50px 0" quarkly-title="Footer-2" border-width="1px" background="#B097BE">
			<Override slot="SectionContent" order="0" />
			<Box display="flex" justify-content="space-between" sm-flex-direction="column">
				<Text
					margin="0px 0px 0px 0px"
					font="normal 300 16px/1.5 --fontFamily-mono"
					color="#ffffff"
					sm-margin="0px 0px 15px 0px"
					sm-text-align="center"
					md-flex="0 1 auto"
					md-align-self="center"
					md-order="1"
					order="1"
				>
					©amalanilkumar
				</Text>
				<Box
					display="grid"
					grid-template-columns="repeat(5, 1fr)"
					grid-gap="16px 24px"
					sm-align-self="center"
					color="#000000"
				>
					<LinkBox href="/">
						<Icon
							category="io"
							icon={IoIosPhonePortrait}
							size="24px"
							color="#5a5d64"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
							display="none"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="io"
							icon={IoIosCall}
							size="24px"
							color="#ffffff"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="go"
							icon={GoMail}
							size="24px"
							color="#ffffff"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaBehance}
							size="24px"
							color="#ffffff"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaGithub}
							size="24px"
							color="#ffffff"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6898d7c82d10660018b805ec"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
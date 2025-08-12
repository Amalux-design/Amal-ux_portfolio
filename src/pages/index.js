import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Button, Icon, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { IoIosPhonePortrait, IoIosCall } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { FaBehance, FaGithub } from "react-icons/fa";
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
			padding="100px 0 140px 0"
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
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
					sm-color="#ffffff"
					md-color="--light"
					lg-color="--light"
				>
					About me
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
				margin="30px 0px 0px 0px"
				font="normal 500 20px/1.5 --fontFamily-sans"
				background="rgba(0, 119, 204, 0)"
				border-radius={0}
				type="link"
				href="https://www.behance.net/amalux"
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
			<Box min-width="100px" min-height="100px">
				<Text margin="0px 0px 10px 0px" font="normal 400 18px/1.5 --fontFamily-sans" color="--light">
					Case Study 1
				</Text>
				<Text margin="0px 0px 30px 0px" font="--headline2" color="--secondary">
					Trail Back Navigation App
				</Text>
				<Text margin="0px 0px 25px 0px" font="normal 300 16px/1.5 &quot;Rubik&quot;, sans-serif" color="--light" md-font="--base">
					"Trail Back Navigation App just records your path so you can get back safely"
				</Text>
				<Text margin="0px 0px 25px 0px" font="--base" color="--light" md-font="--base">
					Initially Trail Back was my own idea when I was traveling with my family to a relative's place where internet was still not have its foundation. Even though I preferably use Google Maps everywhere I go I forgot to download the offline copy of the map. I reached the place somehow but I lost the way back because the time was late and it was dark.
				</Text>
				<Text margin="0px 0px 35px 0px" font="--base" color="--light">
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
					border-color="--color-lightD2"
					margin="0px 0px 30px 0px"
					sm-grid-template-columns="repeat(2, 1fr)"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 15px 0px" font="normal 400 16px/1.5 --fontFamily-sans" color="--lightD1" md-color="--lightD2">
							Year
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 600 34px/1.2 --fontFamily-sans" color="--lightD1" md-color="--lightD2">
							2025
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 15px 0px" font="normal 400 16px/1.5 --fontFamily-sans" color="--lightD1" md-color="--lightD2">
							Month
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 600 34px/1.2 --fontFamily-sans" color="--lightD1" md-color="--lightD2">
							June
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 15px 0px" font="normal 400 16px/1.5 --fontFamily-sans" color="--lightD1" md-color="--lightD2">
							Duration
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="normal 600 34px/1.2 --fontFamily-sans"
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
					font="normal 500 20px/1.5 --fontFamily-sans"
					text-decoration-line="initial"
					target="_blank"
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
			<Box min-width="100px" min-height="100px">
				<Text margin="0px 0px 10px 0px" font="normal 400 18px/1.5 --fontFamily-sans" color="--dark" lg-color="--darkL2">
					Case Study 2
				</Text>
				<Text margin="0px 0px 30px 0px" font="--headline2" color="#325287" lg-color="#325287">
					IRCTC Landing Page Redesign
				</Text>
				<Text
					margin="0px 0px 25px 0px"
					font="normal 300 16px/1.5 &quot;Rubik&quot;, sans-serif"
					color="--dark"
					lg-color="--dark"
					lg-font="--base"
				>
					"Trail Back Navigation App just records your path so you can get back safely"
				</Text>
				<Text margin="0px 0px 25px 0px" font="--base" color="--dark" lg-color="--dark">
					Initially Trail Back was my own idea when I was traveling with my family to a relative's place where internet was still not have its foundation. Even though I preferably use Google Maps everywhere I go I forgot to download the offline copy of the map. I reached the place somehow but I lost the way back because the time was late and it was dark.
				</Text>
				<Text margin="0px 0px 35px 0px" font="--base" color="--dark" lg-color="--dark">
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
					border-color="#565656"
					margin="0px 0px 30px 0px"
					sm-grid-template-columns="repeat(2, 1fr)"
					lg-border-color="#5e5e5e"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 15px 0px" font="normal 400 16px/1.5 --fontFamily-sans" color="--darkL2" lg-color="--darkL2">
							Year
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 600 34px/1.2 --fontFamily-sans" color="--darkL2" lg-color="--darkL2">
							2025
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 15px 0px" font="normal 400 16px/1.5 --fontFamily-sans" color="--darkL2" lg-color="--darkL2">
							Month
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 600 34px/1.2 --fontFamily-sans" color="--darkL2" lg-color="--darkL2">
							June
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 15px 0px" font="normal 400 16px/1.5 --fontFamily-sans" color="--darkL2" lg-color="--darkL2">
							Duration
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="normal 600 34px/1.2 --fontFamily-sans"
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
					font="normal 500 20px/1.5 --fontFamily-sans"
					text-decoration-line="initial"
					target="_blank"
					lg-color="#325287"
				>
					Learn more &gt;&gt;
				</Link>
			</Box>
		</Section>
		<Section padding="50px 0 50px 0" quarkly-title="Footer-2">
			<Box display="flex" justify-content="space-between" sm-flex-direction="column">
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="#5a5d64"
					sm-margin="0px 0px 15px 0px"
					sm-text-align="center"
				>
					©amalux
				</Text>
				<Box display="grid" grid-template-columns="repeat(5, 1fr)" grid-gap="16px 24px" sm-align-self="center">
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
							color="#5a5d64"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="go"
							icon={GoMail}
							size="24px"
							color="#5a5d64"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaBehance}
							size="24px"
							color="#5a5d64"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaGithub}
							size="24px"
							color="#5a5d64"
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
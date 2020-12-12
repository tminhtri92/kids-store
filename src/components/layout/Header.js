import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const menuData = [
  {
    title: "Trang chủ",
    link: "/",
    backgroundColor: "#BB4CE8",
    subMenu: [
      {
        title: "Sản phẩm 1",
      },
      {
        title: "Sản phẩm 2",
      },
      {
        title: "Sản phẩm 3",
      },
      {
        title: "Sản phẩm 4",
      },
    ],
    imageUrl: "/images/menuImage/menuImage@2x.png",
  },
  {
    title: "Giới thiệu",
    link: "/gioi-thieu",
    backgroundColor: "#F5D321",
    subMenu: [
      {
        title: "Sản phẩm 1",
      },
      {
        title: "Sản phẩm 2",
      },
      {
        title: "Sản phẩm 3",
      },
      {
        title: "Sản phẩm 4",
      },
    ],
    imageUrl: "/images/menuImage/menuImage@2x.png",
  },
  {
    title: "Sản phẩm",
    link: "/san-pham",
    backgroundColor: "#18A68D",
    subMenu: [
      {
        title: "Sản phẩm 1",
      },
      {
        title: "Sản phẩm 2",
      },
      {
        title: "Sản phẩm 3",
      },
      {
        title: "Sản phẩm 4",
      },
    ],
    imageUrl: "/images/menuImage/menuImage@2x.png",
  },
  {
    title: "Tin tức",
    link: "/tin-tuc",
    backgroundColor: "#F86924",
    subMenu: [
      {
        title: "Tin tức 1",
      },
      {
        title: "Tin tức 2",
      },
      {
        title: "Tin tức 3",
      },
      {
        title: "Tin tức 4",
      },
    ],
    imageUrl: "/images/menuImage/menuImage@2x.png",
  },
  {
    title: "Khuyến mãi",
    link: "/khuyen-mai",
    backgroundColor: "#F5D321",
    subMenu: [
      {
        title: "Khuyến mãi 1",
      },
      {
        title: "Khuyến mãi 2",
      },
      {
        title: "Khuyến mãi 3",
      },
      {
        title: "Khuyến mãi 4",
      },
    ],
    imageUrl: "/images/menuImage/menuImage@2x.png",
  },
  {
    title: "Liên hệ",
    link: "/lien-he",
    backgroundColor: "#216AA5",
    subMenu: [
      {
        title: "Liên hệ 1",
      },
      {
        title: "Liên hệ 2",
      },
      {
        title: "Liên hệ 3",
      },
      {
        title: "Liên hệ 4",
      },
    ],
    imageUrl: "/images/menuImage/menuImage@2x.png",
  },
]

const hexToRgbA = hex => {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("")
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = "0x" + c.join("")
    return (
      "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",0.7)"
    )
  }
  throw new Error("Bad Hex")
}

const Header = () => {
  const [cart, setCart] = useState(0)
  const [search, setSearch] = useState("")
  const [activeSubMenu, setActiveSubMenu] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  const handleInputChange = event => {
    setSearch(event.target.value)
  }

  const handleHover = i => {
    setActiveSubMenu(
      [...activeSubMenu].map((bool, j) => (i === j ? !bool : bool))
    )
  }

  const handleSearchButtonClick = () => {}

  return (
    <>
      <HeaderWapper>
        <TopHeader>
          <LoginWrapper>
            <RegisterButton>Đăng ký</RegisterButton>
            <LoginButton>Đăng nhập</LoginButton>
          </LoginWrapper>
          <CartSearchWrapper>
            <CartWrapper>
              <Link to="/cart">
                <img src="/images/icons/cart@2x.png" alt="Cart"></img>
              </Link>
              <CartContent>
                <p>Shopping Cart: {cart} items</p>
              </CartContent>
            </CartWrapper>
            <SearchWrapper>
              <SearchInput
                type="text"
                value={search}
                placeholder="Tìm kiếm"
                name="search"
                onChange={event => handleInputChange(event)}
              ></SearchInput>
              <SearchButton onClick={() => handleSearchButtonClick()}>
                Tìm
              </SearchButton>
            </SearchWrapper>
          </CartSearchWrapper>
        </TopHeader>
        <LogoWrapper>
          <Link to="/">
            <img src="/images/logos/logo@2x.png" alt="Kids Store"></img>
          </Link>
        </LogoWrapper>
        <MenuWrapper>
          {menuData.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() =>
                setActiveSubMenu([false, false, false, false, false, false])
              }
            >
              <MenuItem
                style={{
                  background: `${item.backgroundColor}`,
                }}
              >
                {item.title}
              </MenuItem>
              {activeSubMenu[index] && (
                <SubMenuWrapper
                  style={{
                    backgroundColor: `${hexToRgbA(item.backgroundColor)}`,
                  }}
                >
                  <SubMenuContentWrapper>
                    {item.subMenu.map((item, index) => (
                      <Link key={index}>{item.title}</Link>
                    ))}
                  </SubMenuContentWrapper>
                  <SubMenuImage src={`${item.imageUrl}`} objectFit="cover" />
                </SubMenuWrapper>
              )}
            </Link>
          ))}
        </MenuWrapper>
      </HeaderWapper>
    </>
  )
}

export default Header

const HeaderWapper = styled.div`
  background-image: url("/images/backgrounds/headerbackground@2x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

const MenuWrapper = styled.div`
  display: flex;
  max-width: 875px;
  justify-content: space-between;
  margin: auto;
  margin-top: 25px;
  transform: translate(0, 17px);
`

const MenuItem = styled.div`
  text-transform: uppercase;
  padding: 10px 30px;
  border-radius: 12px;
  color: white;
  font-size: 14px;
`

const TopHeader = styled.div``

const LogoWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-left: 140px;
  padding-bottom: 21px;
`

const CartSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 1200px;
  margin: auto;
  padding-right: 40px;
  padding-bottom: 15px;
`
const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 5px;
`
const CartContent = styled.div`
  font-size: 14px;
  color: white;
`
const SearchWrapper = styled.div`
  background: grey;
  display: flex;
`
const SearchInput = styled.input`
  padding: 5px;
`
const SearchButton = styled.button`
  background: red;
  color: white;
  padding: 5px 10px;
  font-size: 14px;
`
const LoginWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 1200px;
  margin: auto;
`
const LoginButton = styled.a`
  color: white;
  padding-left: 5px;
  cursor: pointer;
`
const RegisterButton = styled.a`
  color: white;
  font-family: "VniAvoBold";
  border-right: 1px solid white;
  padding-right: 5px;
  cursor: pointer;
`
const SubMenuWrapper = styled.div`
  position: absolute;
  display: flex;
  padding: 20px;
  border-radius: 20px;
  margin-top: 5px;
`

const SubMenuContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`

const SubMenuImage = styled.img``

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const catalogData = [
  {
    title: "Khuyến mãi giá sốc",
    subMenu: [{}],
  },
  {
    title: "Decal & khung ảnh",
    subMenu: [{}],
  },
  {
    title: "Thời trang cho bé",
    subMenu: [{}],
  },
  {
    title: "Đồ dùng cho bé",
    subMenu: [{}],
  },
  {
    title: "Đồ chơi cho bé",
    subMenu: [{}],
  },
  {
    title: "Phụ kiện cho bé",
    subMenu: [{}],
  },
  {
    title: "Đồ bơi cho bé",
    subMenu: [{}],
  },
  {
    title: "Balo & vali cho bé",
    subMenu: [{}],
  },
  {
    title: "Váy mùa & phụ kiện",
    subMenu: [{}],
  },
  {
    title: "Đồ dùng cho mẹ",
    subMenu: [{}],
  },
]

const HeroSection = () => {
  return (
    <Wrapper>
      <Section>
        <CatalogueWrapper>
          <CatalogueTitle>DANH MỤC SẢN PHẨM</CatalogueTitle>
          <CatalogueContentWrapper>
            {catalogData.map((item, index) => (
              <CatalogueItem>{item.title}</CatalogueItem>
            ))}
          </CatalogueContentWrapper>
        </CatalogueWrapper>
        <MainBannerWrapper>
          <MainBannerTopBar>
            <MainBannerTopBarLeft>ALL BRANDS</MainBannerTopBarLeft>
            <MainBannerTopBarRight>
              <MainBannerTopBarRightItem
                style={{ background: "#BE54FD", marginRight: "-30px" }}
              >
                TODAY'S - 50%
              </MainBannerTopBarRightItem>
              <MainBannerTopBarRightItem
                style={{ background: "#EC95F8", marginRight: "-30px" }}
              >
                FREE GIFT
              </MainBannerTopBarRightItem>
              <MainBannerTopBarRightItem style={{ background: "#7264FB" }}>
                SALE OFF
              </MainBannerTopBarRightItem>
            </MainBannerTopBarRight>
          </MainBannerTopBar>
          <MainBannerContentWrapper>
            <BigBanner
              src={"/images/mainbanner/mainBanner1@2x.png"}
            ></BigBanner>
            <SmallBannerWrapper>
              <SmallBanner
                src={"/images/mainbanner/mainBanner2@2x.png"}
              ></SmallBanner>
              <SmallBanner
                src={"/images/mainbanner/mainBanner3@2x.png"}
              ></SmallBanner>
              <SmallBanner
                src={"/images/mainbanner/mainBanner4@2x.png"}
              ></SmallBanner>
            </SmallBannerWrapper>
          </MainBannerContentWrapper>
        </MainBannerWrapper>
      </Section>
      <Section>
        <BrandWrapper>
          <BrandImage src={"/images/brandimg/brandimg@2x.png"}></BrandImage>
          <BrandImage src={"/images/brandimg/brandimg@2x.png"}></BrandImage>
        </BrandWrapper>
      </Section>
      <Section>
        <CollectionOneWrapper>
          <CollectionOneTitleWrapper>
            <CollectionBackground>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1200"
                height="13"
                viewBox="0 0 1679 13"
              >
                <g
                  id="Group_2"
                  dataName="Group 2"
                  transform="translate(56 -3851)"
                >
                  <line
                    id="Line_1"
                    dataName="Line 1"
                    x2="1666"
                    transform="translate(-49.5 3857.5)"
                    fill="none"
                    stroke="#ff7826"
                    strokeWidth="1"
                  />
                  <g
                    id="Ellipse_1"
                    dataName="Ellipse 1"
                    transform="translate(-56 3851)"
                    fill="#ff7826"
                    stroke="#707070"
                    strokeWidth="1"
                  >
                    <circle cx="6" cy="6" r="6" stroke="none" />
                    <circle cx="6" cy="6" r="5.5" fill="none" />
                  </g>
                  <g
                    id="Ellipse_2"
                    data-name="Ellipse 2"
                    transform="translate(1611 3852)"
                    fill="#ff7826"
                    stroke="#707070"
                    strokeWidth="1"
                  >
                    <circle cx="6" cy="6" r="6" stroke="none" />
                    <circle cx="6" cy="6" r="5.5" fill="none" />
                  </g>
                </g>
              </svg>
            </CollectionBackground>
            <ColecctionTitleItem
              style={{
                background: "#FF7826",
                color: "white",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginLeft: "50px",
              }}
            >
              Sản phẩm mới
            </ColecctionTitleItem>
            <ColecctionTitleItem style={{ borderRight: "1px solid black" }}>
              Sản phẩm khuyến mãi
            </ColecctionTitleItem>
            <ColecctionTitleItem>Sản phẩm hot</ColecctionTitleItem>
          </CollectionOneTitleWrapper>
          <CollectionOneContentWrapper>
            <CollectionItem>
              <CollectionImage
                src={"/images/product/productImage@2x.png"}
              ></CollectionImage>
              <CollectionProfile>
                <ProductTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </ProductTitle>
                <ProductPrice>850.000</ProductPrice>
                <ProductSalePrice>450.000</ProductSalePrice>
                <ProductCartContent>
                  <ProductCartWrapper>
                    <ProductText>Mua</ProductText>
                    <ProductCart>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="shopping-cart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        class="svg-inline--fa fa-shopping-cart fa-w-18 fa-3x"
                      >
                        <path
                          fill="currentColor"
                          d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                          class=""
                        ></path>
                      </svg>
                    </ProductCart>
                  </ProductCartWrapper>
                  <ProductCompair>So sanh</ProductCompair>
                </ProductCartContent>
              </CollectionProfile>
            </CollectionItem>
            <CollectionItem>
              <CollectionImage
                src={"/images/product/productImage@2x.png"}
              ></CollectionImage>
              <CollectionProfile>
                <ProductTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </ProductTitle>
                <ProductPrice>850.000</ProductPrice>
                <ProductSalePrice>450.000</ProductSalePrice>
                <ProductCartContent>
                  <ProductCartWrapper>
                    <ProductText>Mua</ProductText>
                    <ProductCart>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="shopping-cart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        class="svg-inline--fa fa-shopping-cart fa-w-18 fa-3x"
                      >
                        <path
                          fill="currentColor"
                          d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                          class=""
                        ></path>
                      </svg>
                    </ProductCart>
                  </ProductCartWrapper>
                  <ProductCompair>So sanh</ProductCompair>
                </ProductCartContent>
              </CollectionProfile>
            </CollectionItem>
            <CollectionItem>
              <CollectionImage
                src={"/images/product/productImage@2x.png"}
              ></CollectionImage>
              <CollectionProfile>
                <ProductTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </ProductTitle>
                <ProductPrice>850.000</ProductPrice>
                <ProductSalePrice>450.000</ProductSalePrice>
                <ProductCartContent>
                  <ProductCartWrapper>
                    <ProductText>Mua</ProductText>
                    <ProductCart>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="shopping-cart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        class="svg-inline--fa fa-shopping-cart fa-w-18 fa-3x"
                      >
                        <path
                          fill="currentColor"
                          d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                          class=""
                        ></path>
                      </svg>
                    </ProductCart>
                  </ProductCartWrapper>
                  <ProductCompair>So sanh</ProductCompair>
                </ProductCartContent>
              </CollectionProfile>
            </CollectionItem>
            <CollectionItem>
              <CollectionImage
                src={"/images/product/productImage@2x.png"}
              ></CollectionImage>
              <CollectionProfile>
                <ProductTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </ProductTitle>
                <ProductPrice>850.000</ProductPrice>
                <ProductSalePrice>450.000</ProductSalePrice>
                <ProductCartContent>
                  <ProductCartWrapper>
                    <ProductText>Mua</ProductText>
                    <ProductCart>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="shopping-cart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        class="svg-inline--fa fa-shopping-cart fa-w-18 fa-3x"
                      >
                        <path
                          fill="currentColor"
                          d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                          class=""
                        ></path>
                      </svg>
                    </ProductCart>
                  </ProductCartWrapper>
                  <ProductCompair>So sanh</ProductCompair>
                </ProductCartContent>
              </CollectionProfile>
            </CollectionItem>
            <CollectionItem>
              <CollectionImage
                src={"/images/product/productImage@2x.png"}
              ></CollectionImage>
              <CollectionProfile>
                <ProductTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </ProductTitle>
                <ProductPrice>850.000</ProductPrice>
                <ProductSalePrice>450.000</ProductSalePrice>
                <ProductCartContent>
                  <ProductCartWrapper>
                    <ProductText>Mua</ProductText>
                    <ProductCart>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="shopping-cart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        class="svg-inline--fa fa-shopping-cart fa-w-18 fa-3x"
                      >
                        <path
                          fill="currentColor"
                          d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                          class=""
                        ></path>
                      </svg>
                    </ProductCart>
                  </ProductCartWrapper>
                  <ProductCompair>So sanh</ProductCompair>
                </ProductCartContent>
              </CollectionProfile>
            </CollectionItem>
            <CollectionItem>
              <CollectionImage
                src={"/images/product/productImage@2x.png"}
              ></CollectionImage>
              <CollectionProfile>
                <ProductTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </ProductTitle>
                <ProductPrice>850.000</ProductPrice>
                <ProductSalePrice>450.000</ProductSalePrice>
                <ProductCartContent>
                  <ProductCartWrapper>
                    <ProductText>Mua</ProductText>
                    <ProductCart>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="shopping-cart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        class="svg-inline--fa fa-shopping-cart fa-w-18 fa-3x"
                      >
                        <path
                          fill="currentColor"
                          d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                          class=""
                        ></path>
                      </svg>
                    </ProductCart>
                  </ProductCartWrapper>
                  <ProductCompair>So sanh</ProductCompair>
                </ProductCartContent>
              </CollectionProfile>
            </CollectionItem>
            <CollectionItem>
              <CollectionImage
                src={"/images/product/productImage@2x.png"}
              ></CollectionImage>
              <CollectionProfile>
                <ProductTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </ProductTitle>
                <ProductPrice>850.000</ProductPrice>
                <ProductSalePrice>450.000</ProductSalePrice>
                <ProductCartContent>
                  <ProductCartWrapper>
                    <ProductText>Mua</ProductText>
                    <ProductCart>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="shopping-cart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        class="svg-inline--fa fa-shopping-cart fa-w-18 fa-3x"
                      >
                        <path
                          fill="currentColor"
                          d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                          class=""
                        ></path>
                      </svg>
                    </ProductCart>
                  </ProductCartWrapper>
                  <ProductCompair>So sanh</ProductCompair>
                </ProductCartContent>
              </CollectionProfile>
            </CollectionItem>
          </CollectionOneContentWrapper>
        </CollectionOneWrapper>
      </Section>
    </Wrapper>
  )
}

export default HeroSection
const ProductCartContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProductCartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
  padding: 5px;
  border-radius: 2px;
`
const ProductText = styled.div``
const ProductCart = styled.div`
  width: 20px;
`

const ProductTitle = styled.h3`
  color: #6c6374;
  padding-bottom: 5px;
`
const ProductPrice = styled.div`
  text-decoration-line: line-through;
  color: #6c6374;
  padding-bottom: 5px;
`
const ProductSalePrice = styled.div`
  color: #6c6374;
  padding-bottom: 5px;
`
const ProductCompair = styled.div``

const CollectionProfile = styled.div`
  padding: 8px;
`

const CollectionItem = styled.div`
  width: 14%;
  border-right: 1px dashed grey;
`

const CollectionImage = styled.img`
  width: 100%;
`
const CollectionOneContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: dashed 1px black;
`
const ColecctionTitleItem = styled.div`
  z-index: 100;
  background: white;
  margin: 0 10px;
  padding: 0 10px;
`

const CollectionBackground = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
`
const CollectionOneWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 17px;
`
const CollectionOneTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-bottom: 17px;
  position: relative;
`
const BrandImage = styled.img`
  width: 100%;
`
const BrandWrapper = styled.div`
  text-align: center;
  padding: 10px 20px;
  border: 1px solid red;
  margin-top: 10px;
  border-radius: 20px;
`
const MainBannerContentWrapper = styled.div``
const SmallBannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SmallBanner = styled.img`
  width: 32%;
`
const BigBanner = styled.img`
  width: 100%;
  padding-bottom: 5px;
`
const MainBannerTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  background: #b09df9;
  margin-bottom: 5px;
`
const MainBannerTopBarRight = styled.div`
  display: flex;
  flex-direction: row;
`
const MainBannerTopBarRightItem = styled.div`
  margin-left: 7px;
  color: white;
  padding: 15px 25px;
  border-radius: 20px;
  font-family: VniAvoBold;
`

const MainBannerTopBarLeft = styled.div`
  background: #9370ed;
  color: white;
  padding: 15px 25px;
  border-radius: 20px;
  font-family: VniAvoBold;
`

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-top: 35px;
`
const ContentWrapper = styled.div``

const Section = styled.div`
  display: flex;
`
const CatalogueWrapper = styled.div`
  width: 25%;
  background: #ff9999;
  border-radius: 20px;
  padding-top: 18px;
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 2px;
`
const MainBannerWrapper = styled.div`
  width: 75%;
  margin-left: 7px;
`
const CatalogueItem = styled.li`
  padding-bottom: 7px;
  color: red;
  list-style: disc;
  text-transform: uppercase;
`

const CatalogueTitle = styled.h2`
  font-size: 14px;
  color: white;
  padding-bottom: 18px;
  text-align: center;
`
const CatalogueContentWrapper = styled.ul`
  background: white;
  border-radius: 20px;
  padding: 20px;
  padding-left: 30px;
`

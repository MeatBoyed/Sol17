import React from 'react';

const styles = {
  FooterSection: {
    display: "flex",
    justifyContent: "space-evenly",
    color: "white",
    background: "#212121",
    height: "9.625em",
    marginTop: "10em"
  },
  LinksContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  } as React.CSSProperties,
  NavLinks: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  } as React.CSSProperties,
  NavLinksA: {
    marginRight: "15px",
    marginLeft: "15px",
    fontSize: "20px",
    fontWeight: 400,
    letterSpacing: "5px",
    color: "white",
  },
  SocialLinksA: {
    marginLeft: "20px",
    marginRight: "20px",
  },
  SocialLinksSVG: {
    width: "35px"
  }
} 


export const FooterSection: React.FC = () => {
  return (
    <div id="FooterSection" style={styles.FooterSection}>
      <div className="LinksContainer" style={styles.LinksContainer}>
        <div className="NavLinks" style={styles.NavLinks} >
          <a href="/#ShopNowSection" style={styles.NavLinksA} >Shop</a>
          <a href="/#AboutSection" style={styles.NavLinksA} >About</a>
          <a href="#" style={styles.NavLinksA} >Support</a>
          <a href="#" style={styles.NavLinksA} >Sizing-Chart</a>
        </div>
        <div className="SocialLinks">
          <a href="https://instagram.com/" style={styles.SocialLinksA} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="59.473"
              height="59.472"
              viewBox="0 0 59.473 59.472"
              style={styles.SocialLinksSVG}
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.381"
                  y1="0.971"
                  x2="0.619"
                  y2="0.029"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset={0} stopColor="#f58529" />
                  <stop offset="0.129" stopColor="#feda77" />
                  <stop offset="0.431" stopColor="#dd2a7b" />
                  <stop offset="0.741" stopColor="#8134af" />
                  <stop offset={1} stopColor="#515bd4" />
                </linearGradient>
              </defs>
              <path
                id="instagram-round-line-color"
                d="M23.161,14.318h13.15a8.946,8.946,0,0,1,8.977,8.861V36.294a8.945,8.945,0,0,1-8.977,8.861H23.161a8.945,8.945,0,0,1-8.977-8.861V23.179A8.946,8.946,0,0,1,23.161,14.318ZM29.736,0A29.737,29.737,0,1,1,8.71,8.71,29.643,29.643,0,0,1,29.736,0Zm18.72,11.016a26.475,26.475,0,1,0,7.754,18.72A26.392,26.392,0,0,0,48.457,11.016Zm-18.8,10.395A8.693,8.693,0,1,1,20.959,30.1,8.7,8.7,0,0,1,29.652,21.411Zm0,2.936A5.757,5.757,0,1,1,23.895,30.1,5.759,5.759,0,0,1,29.652,24.347Zm8.41-4.141a1.411,1.411,0,1,1-1.411,1.411A1.411,1.411,0,0,1,38.063,20.206ZM24.236,16.837h11a7.512,7.512,0,0,1,7.51,7.471V35.365a7.512,7.512,0,0,1-7.51,7.47h-11a7.512,7.512,0,0,1-7.51-7.47V24.307a7.512,7.512,0,0,1,7.51-7.47Z"
                fillRule="evenodd"
                fill="url(#linear-gradient)"
              />
            </svg>
          </a>
          <a href="https://twiter.com/meatboyed" style={styles.SocialLinksA} >
            <svg xmlns="http://www.w3.org/2000/svg" width="59.473" height="59.477" viewBox="0 0 59.473 59.477">
              <path
                id="twitter-color"
                d="M60.472,31287.029a20.515,20.515,0,0,1-7,2.359,14.958,14.958,0,0,0,5.367-8.3,21.985,21.985,0,0,1-7.746,3.645,11.268,11.268,0,0,0-8.906-4.734c-6.737,0-12.192,6.727-12.192,15.016a18.657,18.657,0,0,0,.312,3.418c-10.138-.637-19.125-6.609-25.142-15.7a17.8,17.8,0,0,0-1.65,7.547h0a16.141,16.141,0,0,0,5.422,12.5A10.576,10.576,0,0,1,3.4,31300.9v.188c0,7.277,4.2,13.352,9.787,14.727a10.072,10.072,0,0,1-3.216.527,10.525,10.525,0,0,1-2.3-.266c1.56,5.957,6.062,10.309,11.393,10.43a21.756,21.756,0,0,1-15.155,6.438,19.473,19.473,0,0,1-2.911-.223,29.991,29.991,0,0,0,18.706,6.754c22.433,0,34.711-22.887,34.711-42.727,0-.664-.012-1.3-.034-1.945a28.4,28.4,0,0,0,6.084-7.762l.006-.008h0Z"
                transform="translate(-1 -31279.994)"
                fill="#1da1f2"
                fillRule="evenodd"
                style={styles.SocialLinksSVG}
              />
            </svg>
          </a>
          <a href="https://facebook.com" style={styles.SocialLinksA} >
            <svg xmlns="http://www.w3.org/2000/svg" width="59.473" height="59.472" viewBox="0 0 59.473 59.472" style={styles.SocialLinksSVG}>
              <path
                id="facebook-round-line-color"
                d="M29.736,0A29.736,29.736,0,1,1,8.71,8.71,29.643,29.643,0,0,1,29.736,0ZM32.68,19.923h4.906V14.035H32.68A6.877,6.877,0,0,0,25.812,20.9v2.944H21.886v5.889h3.925v15.7H31.7v-15.7h4.906l.981-5.888H31.7V20.9a.994.994,0,0,1,.981-.981h0Zm16.08-9.211a26.905,26.905,0,1,0,7.88,19.024A26.82,26.82,0,0,0,48.761,10.712Z"
                fill="#3b5998"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

import styled, { useTheme } from 'styled-components'

const Container = styled.div`
  padding: ${({ theme }) => `0 ${theme.spacing(14)}`};
  width: 100%;
`

export function EmptyIllustration() {
  const { color } = useTheme()
  const clipboard = color.surface.accent
  const bg = color.surface.subtle
  const paper = color.surface.base

  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 655 681">
        <path d="M557.611 533.866L172.589 652.01C170.402 652.679 168.038 652.45 166.016 651.374C163.993 650.299 162.477 648.463 161.801 646.27L19.9088 183.855C19.2382 181.66 19.4638 179.29 20.5349 177.265C21.6059 175.24 23.4348 173.725 25.62 173.052L410.643 54.9075C412.83 54.2395 415.194 54.4678 417.216 55.5435C419.239 56.6194 420.755 58.4553 421.431 60.6488L563.323 523.062C563.994 525.257 563.768 527.627 562.697 529.653C561.626 531.678 559.796 533.193 557.611 533.866Z" fill={bg} stroke={clipboard} stroke-width="3"/>
        <path d="M509.099 485.65L185.969 584.802C183.814 585.461 181.486 585.238 179.495 584.182C177.504 583.126 176.013 581.323 175.35 579.17L56.5428 191.988C55.8841 189.832 56.1072 187.504 57.1632 185.513C58.2191 183.522 60.0217 182.032 62.1754 181.368L385.305 82.2156C387.46 81.557 389.789 81.7802 391.779 82.8361C393.77 83.8921 395.261 85.6946 395.925 87.8482L514.731 475.03C515.39 477.185 515.167 479.514 514.111 481.505C513.055 483.495 511.253 484.986 509.099 485.65Z" fill={paper}/>
        <path d="M318.733 127.748L142.828 181.724C140.546 182.422 138.081 182.185 135.973 181.067C133.865 179.949 132.287 178.041 131.584 175.76L118.677 133.696C117.979 131.414 118.216 128.949 119.334 126.841C120.452 124.733 122.36 123.154 124.641 122.452L300.546 68.4754C302.828 67.778 305.293 68.0143 307.401 69.1323C309.509 70.2504 311.087 72.1589 311.79 74.4393L324.697 116.504C325.395 118.785 325.158 121.251 324.04 123.359C322.922 125.467 321.014 127.045 318.733 127.748Z" fill={clipboard}/>
        <path d="M214.059 100.244C224.619 97.0035 230.553 85.8164 227.312 75.2567C224.072 64.6969 212.885 58.7633 202.325 62.0036C191.765 65.2439 185.832 76.431 189.072 86.9907C192.312 97.5504 203.499 103.484 214.059 100.244Z" fill={clipboard}/>
        <path d="M210.945 90.5575C216.488 88.8564 219.669 83.1971 218.049 77.9173C216.429 72.6374 210.621 69.7363 205.078 71.4374C199.534 73.1385 196.353 78.7978 197.973 84.0776C199.593 89.3575 205.401 92.2586 210.945 90.5575Z" fill={paper}/>
        <path d="M644.87 679.326H242.13C239.843 679.324 237.65 678.412 236.032 676.79C234.414 675.168 233.503 672.969 233.5 670.674V186.979C233.503 184.684 234.414 182.484 236.032 180.862C237.65 179.241 239.842 178.329 242.129 178.326H644.871C647.157 178.329 649.35 179.241 650.968 180.862C652.586 182.484 653.497 184.684 653.5 186.98V670.673C653.497 672.968 652.586 675.168 650.968 676.79C649.35 678.412 647.157 679.323 644.87 679.326Z" fill={bg} stroke={clipboard} stroke-width="3"/>
        <path d="M612.637 619H274.637C272.383 618.997 270.223 618.101 268.629 616.508C267.036 614.914 266.139 612.754 266.137 610.5V205.5C266.139 203.246 267.036 201.086 268.629 199.492C270.223 197.899 272.383 197.003 274.637 197H612.637C614.89 197.003 617.051 197.899 618.644 199.492C620.238 201.086 621.134 203.246 621.137 205.5V610.5C621.134 612.754 620.238 614.914 618.644 616.507C617.051 618.101 614.89 618.997 612.637 619Z" fill={paper}/>
        <path d="M535.637 221H351.637C349.251 220.997 346.963 220.048 345.276 218.361C343.588 216.674 342.639 214.386 342.637 212V168C342.639 165.614 343.589 163.326 345.276 161.639C346.963 159.952 349.251 159.003 351.637 159H535.637C538.023 159.003 540.31 159.952 541.998 161.639C543.685 163.326 544.634 165.614 544.637 168V212C544.634 214.386 543.685 216.674 541.998 218.361C540.31 220.048 538.023 220.997 535.637 221Z" fill={clipboard}/>
        <path d="M443.636 164C454.682 164 463.636 155.046 463.636 144C463.636 132.954 454.682 124 443.636 124C432.591 124 423.636 132.954 423.636 144C423.636 155.046 432.591 164 443.636 164Z" fill={clipboard}/>
        <path d="M443.5 153.826C449.299 153.826 454 149.349 454 143.826C454 138.303 449.299 133.826 443.5 133.826C437.701 133.826 433 138.303 433 143.826C433 149.349 437.701 153.826 443.5 153.826Z" fill={paper}/>
      </svg>
    </Container>
  )
}
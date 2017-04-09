const Image = ({ width, src }) => (
    <div>
        <img width={width} src={src} />
        <style jsx>{`
      img {
        max-width: 100%;
        display: block;
        margin: 15px 0;
      }
    `}</style>
    </div>
)
export default Image
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Cards.module.css";
function Cards() {
  return (
    <>
      <div class={style.card}>
        <div class="col-md-6">
          <div class="card mx-auto">
            <div className="card-body">
              <img
                src="https://res.cloudinary.com/dxfb576me/image/upload/v1750986774/istockphoto-1475221128-612x612_pjsrgz.jpg"
                className="card-img-top"
                alt="..."
              ></img>
              <h5 className="card-title">
                Improve your front-end skills by bullding projects
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;

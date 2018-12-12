import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer id="gtco-footer" className="gtco-section" role="contentinfo">
        <div className="gtco-container">
          <div className="row row-pb-md">
            <div className="col-md-8 col-md-offset-2 gtco-cta text-center">
              <h3>We Love To Talk About Your Business</h3>
              <p>
                <a href="#" className="btn btn-white btn-outline">
                  Contact Us
                </a>
              </p>
            </div>
          </div>
          <div className="row row-pb-md">
            <div className="col-md-4 gtco-widget gtco-footer-paragraph">
              <h3>Cube</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus placerat enim et urna sagittis, rhoncus euismod.
              </p>
            </div>
            <div className="col-md-4 gtco-footer-link">
              <div className="row">
                <div className="col-md-6">
                  <ul className="gtco-list-link">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="#">Products</a>
                    </li>
                    <li>
                      <a href="#">Testimonial</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p>
                    <a href="tel://1234567890">+1 234 4565 2342</a> <br />
                    <a href="#">info@domain.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 gtco-footer-subscribe">
              <form className="form-inline">
                <div className="form-group">
                  <label className="sr-only" for="exampleInputEmail3">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id=""
                    placeholder="Email"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="gtco-copyright">
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-6 text-left">
                <p>
                  <small>&copy; 2016 Free HTML5. All Rights Reserved. </small>
                </p>
              </div>
              <div className="col-md-6 text-right">
                <p>
                  <small>
                    Designed by{' '}
                    <a href="http://freehtml5.co/" target="_blank">
                      FreeHTML5.co
                    </a>{' '}
                    Demo Images:{' '}
                    <a href="http://pixeden.com/" target="_blank">
                      Pixeden
                    </a>{' '}
                    &amp;{' '}
                    <a href="http://unsplash.com" target="_blank">
                      Unsplash
                    </a>
                  </small>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="gototop js-top">
        <a href="#" className="js-gotop">
          <i className="icon-arrow-up" />
        </a>
      </div>
    </div>
  );
}

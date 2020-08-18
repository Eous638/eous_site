import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader2';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Workflow that just works',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Data Science
                  </div>
                <h3 className="mt-0 mb-12">
                  Nauka o Podacim
                  </h3>
                <p className="m-0">
                  Data Science, tj. Nauka o Podacima, je proces  <span className="text-color-primary">prikupljanja, čišćenja i analiziranja podataka.</span> Naš tim može da podesi sisteme koji će da prikupljaju podatke, kao i da ih ručno prikupljamo analizom računa, anketama... Vaš biznis proizvodi ogromne količine podataka koje možete koristiti da steknete ključna znanja koja možete iskoristiti da bi ste <span className="text-color-primary">poboljšali</span> svoji način rada ili stekli znanja o korisniciam radi <span className="text-color-primary">pametnogmarketinga</span> ili radi lakšeg zadržavanja mušterija
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/datascience.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Artificial Inteligence
                  </div>
                <h3 className="mt-0 mb-12">
                  Veštačka Inteligencija
                  </h3>
                <p className="m-0">
                  AI, iliti Veštačka inteligencija, je bilo koji kompjuterski program koji može da donosi odluke <span className="text-color-primary">bez direktnog uticaja čoveka</span>. AI ima veliku primenu u savremenom biznisu jer može da optimizuje i olakša vaš rad. Može biti sve od jednostavnih algoritama koji prikupljaju podatke i uz pomoć njih prave predvidjanja (npr. buduću cenu proizvoda, troškova...). do naprednih <span className="text-color-primary">ChatBot-ova</span> i <span className="text-color-primary">SocialBot-ova</span> koji održavaju interakciju sa mušterijama da bi vaši radnici radili ono što je zaista bitno.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/ai.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  IoT
                  </div>
                <h3 className="mt-0 mb-12">
                  Internet of Things
                  </h3>
                <p className="m-0">
                  Internet of Things je skup uredjaja povezanih bežično koji zajedno mogu analizirati i kontrolisati okruženje. IoT uredjaji dolaze u raznim oblicima. Neke od stvari koje mogu postići su <span className="text-color-primary">kamere</span> koje beleže broj mušterija i njihovo čekanje, uredjaji koji računaju putanju sanduka u magacinu, automatizovane klime, sigurnosni <span className="text-color-primary">dronovi</span>... naš tim će vam pomoći da iskoristite postojeće tehnologije, ali će i <span className="text-color-primary">napraviti specifične za vas</span> ako je neophodno.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/iot.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
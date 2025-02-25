/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import rootActions from '../actions/rootActions';
import { replaceXmlTagValue } from '../utils/xmlUtil';
import HelpInfo from "./HelpInfo";

const useStyles = makeStyles((theme) => ({
  keywords: {
    position: 'relative',
    bottom: 35
  }
}));

export default function Tags() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const releaseKeywords = useSelector(state => {
      let keywordList = state.appReducer.releaseKeywords;
      let filteredKeywords = keywordList.filter((keyword) => 
        keyword.length > 0
      );
      return filteredKeywords;
    }
  );

  const releaseXml = useSelector(state =>
    state.appReducer.releaseXml
  );

  const handleKeywordChange = (event, value) => {
    dispatch(rootActions.appAction.updateReleaseKeywords(value));

    let updatedXml = replaceXmlTagValue(releaseXml, "subjects", value);
    dispatch(rootActions.appAction.updateReleaseXml(updatedXml));
  }

  return (
    <div className={classes.keywords}>
      <HelpInfo type={'keyword'}/>
      <Autocomplete
        multiple
        freeSolo
        filterSelectedOptions
        id="tags-outlined"
        options={uat_json.map((option) => option.label)}
        value={releaseKeywords}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option} {...getTagProps({ index })} 
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Keywords"
            placeholder="Keywords"
          />
        )}
        onChange={handleKeywordChange}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const uat_json = [
      {
        value: "A supergiant stars",
        label: "A supergiant stars",
        uri: "http://astrothesaurus.org/uat/8",
      },
      {
        value: "A supergiant stars",
        label: "A-type supergiants (A supergiant stars)",
        uri: "http://astrothesaurus.org/uat/8",
      },
      {
        value: "A supergiant stars",
        label: "A-type supergiant stars (A supergiant stars)",
        uri: "http://astrothesaurus.org/uat/8",
      },
      {
        value: "A supergiant stars",
        label: "A supergiants (A supergiant stars)",
        uri: "http://astrothesaurus.org/uat/8",
      },
      {
        value: "Apsides",
        label: "Apsides",
        uri: "http://astrothesaurus.org/uat/63",
      },
      {
        value: "Apsides",
        label: "Apsis (Apsides)",
        uri: "http://astrothesaurus.org/uat/63",
      },
      {
        value: "Apsides",
        label: "Apse (Apsides)",
        uri: "http://astrothesaurus.org/uat/63",
      },
      {
        value: "Compact dwarf galaxies",
        label: "Compact dwarf galaxies",
        uri: "http://astrothesaurus.org/uat/281",
      },
      {
        value: "Wavelet analysis",
        label: "Wavelet analysis",
        uri: "http://astrothesaurus.org/uat/1918",
      },
      {
        value: "Lunar rays",
        label: "Lunar rays",
        uri: "http://astrothesaurus.org/uat/970",
      },
      {
        value: "Model selection",
        label: "Model selection",
        uri: "http://astrothesaurus.org/uat/1912",
      },
      {
        value: "Red giant clump",
        label: "Red giant clump",
        uri: "http://astrothesaurus.org/uat/1370",
      },
      {
        value: "Red giant clump",
        label: "Red clump (Red giant clump)",
        uri: "http://astrothesaurus.org/uat/1370",
      },
      {
        value: "Bolides",
        label: "Bolides",
        uri: "http://astrothesaurus.org/uat/172",
      },
      {
        value: "Stellar astronomy",
        label: "Stellar astronomy",
        uri: "http://astrothesaurus.org/uat/1583",
      },
      {
        value: "Stellar astronomy",
        label: "Stellar astrophysics (Stellar astronomy)",
        uri: "http://astrothesaurus.org/uat/1583",
      },
      {
        value: "Twilight",
        label: "Twilight",
        uri: "http://astrothesaurus.org/uat/1722",
      },
      {
        value: "Tidal friction",
        label: "Tidal friction",
        uri: "http://astrothesaurus.org/uat/1698",
      },
      {
        value: "Open star clusters",
        label: "Open star clusters",
        uri: "http://astrothesaurus.org/uat/1160",
      },
      {
        value: "Open star clusters",
        label: "Open clusters (Open star clusters)",
        uri: "http://astrothesaurus.org/uat/1160",
      },
      {
        value: "Ultraviolet color",
        label: "Ultraviolet color",
        uri: "http://astrothesaurus.org/uat/1737",
      },
      {
        value: "Ultraviolet color",
        label: "Ultraviolet colour (Ultraviolet color)",
        uri: "http://astrothesaurus.org/uat/1737",
      },
      {
        value: "Lc variable stars",
        label: "Lc variable stars",
        uri: "http://astrothesaurus.org/uat/913",
      },
      {
        value: "Interstellar abundances",
        label: "Interstellar abundances",
        uri: "http://astrothesaurus.org/uat/832",
      },
      {
        value: "Comet interiors",
        label: "Comet interiors",
        uri: "http://astrothesaurus.org/uat/272",
      },
      {
        value: "Comet interiors",
        label: "Cometary interiors (Comet interiors)",
        uri: "http://astrothesaurus.org/uat/272",
      },
      {
        value: "Eclipsing binary stars",
        label: "Eclipsing binary stars",
        uri: "http://astrothesaurus.org/uat/444",
      },
      {
        value: "Eclipsing binary stars",
        label: "Photometric binary stars (Eclipsing binary stars)",
        uri: "http://astrothesaurus.org/uat/444",
      },
      {
        value: "Eclipsing binary stars",
        label: "Eclipsing stars (Eclipsing binary stars)",
        uri: "http://astrothesaurus.org/uat/444",
      },
      {
        value: "Eclipsing binary stars",
        label: "Eclipsing variable stars (Eclipsing binary stars)",
        uri: "http://astrothesaurus.org/uat/444",
      },
      {
        value: "Eclipsing binary stars",
        label: "Eclipsing binaries (Eclipsing binary stars)",
        uri: "http://astrothesaurus.org/uat/444",
      },
      {
        value: "Prior distribution",
        label: "Prior distribution",
        uri: "http://astrothesaurus.org/uat/1927",
      },
      {
        value: "Galactic cosmic rays",
        label: "Galactic cosmic rays",
        uri: "http://astrothesaurus.org/uat/567",
      },
      {
        value: "Position angle",
        label: "Position angle",
        uri: "http://astrothesaurus.org/uat/1286",
      },
      {
        value: "Doppler shift",
        label: "Doppler shift",
        uri: "http://astrothesaurus.org/uat/401",
      },
      {
        value: "Doppler shift",
        label: "Doppler effect (Doppler shift)",
        uri: "http://astrothesaurus.org/uat/401",
      },
      {
        value: "Astrophysical fluid dynamics",
        label: "Astrophysical fluid dynamics",
        uri: "http://astrothesaurus.org/uat/101",
      },
      {
        value: "Schwarzschild black holes",
        label: "Schwarzschild black holes",
        uri: "http://astrothesaurus.org/uat/1433",
      },
      {
        value: "Hydrodynamics",
        label: "Hydrodynamics",
        uri: "http://astrothesaurus.org/uat/1963",
      },
      {
        value: "Ice destruction",
        label: "Ice destruction",
        uri: "http://astrothesaurus.org/uat/2091",
      },
      {
        value: "Ultraviolet sources",
        label: "Ultraviolet sources",
        uri: "http://astrothesaurus.org/uat/1741",
      },
      {
        value: "Ultraviolet sources",
        label: "Ultraviolet objects (Ultraviolet sources)",
        uri: "http://astrothesaurus.org/uat/1741",
      },
      {
        value: "Ultraviolet sources",
        label: "UV sources (Ultraviolet sources)",
        uri: "http://astrothesaurus.org/uat/1741",
      },
      {
        value: "Ionospheric scintillation",
        label: "Ionospheric scintillation",
        uri: "http://astrothesaurus.org/uat/861",
      },
      {
        value: "Bode's law",
        label: "Bode's law",
        uri: "http://astrothesaurus.org/uat/170",
      },
      {
        value: "Bode's law",
        label: "Bodes law (Bode's law)",
        uri: "http://astrothesaurus.org/uat/170",
      },
      {
        value: "Bode's law",
        label: "Titius-Bode law (Bode's law)",
        uri: "http://astrothesaurus.org/uat/170",
      },
      {
        value: "Kruskal diagram",
        label: "Kruskal diagram",
        uri: "http://astrothesaurus.org/uat/892",
      },
      {
        value: "Kruskal diagram",
        label: "Kruskal-Szekeres diagram (Kruskal diagram)",
        uri: "http://astrothesaurus.org/uat/892",
      },
      {
        value: "Parallax",
        label: "Parallax",
        uri: "http://astrothesaurus.org/uat/1197",
      },
      {
        value: "Pareto distribution",
        label: "Pareto distribution",
        uri: "http://astrothesaurus.org/uat/1897",
      },
      {
        value: "Pareto distribution",
        label: "Power law distribution (Pareto distribution)",
        uri: "http://astrothesaurus.org/uat/1897",
      },
      {
        value: "Bayes' Theorem",
        label: "Bayes' Theorem",
        uri: "http://astrothesaurus.org/uat/1924",
      },
      {
        value: "Voronoi tessellation",
        label: "Voronoi tessellation",
        uri: "http://astrothesaurus.org/uat/1952",
      },
      {
        value: "Circumstellar shells",
        label: "Circumstellar shells",
        uri: "http://astrothesaurus.org/uat/242",
      },
      {
        value: "Supernova dynamics",
        label: "Supernova dynamics",
        uri: "http://astrothesaurus.org/uat/1664",
      },
      {
        value: "Rapid bursts",
        label: "Rapid bursts",
        uri: "http://astrothesaurus.org/uat/1362",
      },
      {
        value: "Ecliptic coordinate system",
        label: "Ecliptic coordinate system",
        uri: "http://astrothesaurus.org/uat/445",
      },
      {
        value: "Ecliptic coordinate system",
        label: "Ecliptic system (Ecliptic coordinate system)",
        uri: "http://astrothesaurus.org/uat/445",
      },
      {
        value: "Ecliptic coordinate system",
        label: "Ecliptic (Ecliptic coordinate system)",
        uri: "http://astrothesaurus.org/uat/445",
      },
      {
        value: "Spectrometers",
        label: "Spectrometers",
        uri: "http://astrothesaurus.org/uat/1554",
      },
      {
        value: "Zodiacal dust bands",
        label: "Zodiacal dust bands",
        uri: "http://astrothesaurus.org/uat/2194",
      },
      {
        value: "Zodiacal dust bands",
        label: "Dust bands (Zodiacal dust bands)",
        uri: "http://astrothesaurus.org/uat/2194",
      },
      {
        value: "Zodiacal dust bands",
        label: "IRAS dust bands (Zodiacal dust bands)",
        uri: "http://astrothesaurus.org/uat/2194",
      },
      {
        value: "OB supergiant stars",
        label: "OB supergiant stars",
        uri: "http://astrothesaurus.org/uat/1142",
      },
      {
        value: "OB supergiant stars",
        label: "OB-type supergiant stars (OB supergiant stars)",
        uri: "http://astrothesaurus.org/uat/1142",
      },
      {
        value: "OB supergiant stars",
        label: "OB-type supergiants (OB supergiant stars)",
        uri: "http://astrothesaurus.org/uat/1142",
      },
      {
        value: "OB supergiant stars",
        label: "OB supergiants (OB supergiant stars)",
        uri: "http://astrothesaurus.org/uat/1142",
      },
      {
        value: "Comet surfaces",
        label: "Comet surfaces",
        uri: "http://astrothesaurus.org/uat/2161",
      },
      {
        value: "Astronomical methods",
        label: "Astronomical methods",
        uri: "http://astrothesaurus.org/uat/1043",
      },
      {
        value: "Astronomical methods",
        label: "Observation methods (Astronomical methods)",
        uri: "http://astrothesaurus.org/uat/1043",
      },
      {
        value: "Astronomical methods",
        label: "Methods (Astronomical methods)",
        uri: "http://astrothesaurus.org/uat/1043",
      },
      {
        value: "Stellar convective zones",
        label: "Stellar convective zones",
        uri: "http://astrothesaurus.org/uat/301",
      },
      {
        value: "Stellar convective zones",
        label: "Convective zones (Stellar convective zones)",
        uri: "http://astrothesaurus.org/uat/301",
      },
      {
        value: "Stellar convective zones",
        label: "Convection zones (Stellar convective zones)",
        uri: "http://astrothesaurus.org/uat/301",
      },
      {
        value: "Planetary nebulae",
        label: "Planetary nebulae",
        uri: "http://astrothesaurus.org/uat/1249",
      },
      {
        value: "Exoplanet surface composition",
        label: "Exoplanet surface composition",
        uri: "http://astrothesaurus.org/uat/2022",
      },
      {
        value: "Carbonaceous grains",
        label: "Carbonaceous grains",
        uri: "http://astrothesaurus.org/uat/201",
      },
      {
        value: "Baade-Wesselink method",
        label: "Baade-Wesselink method",
        uri: "http://astrothesaurus.org/uat/131",
      },
      {
        value: "Baade-Wesselink method",
        label: "Expanding photosphere method (Baade-Wesselink method)",
        uri: "http://astrothesaurus.org/uat/131",
      },
      {
        value: "Baade-Wesselink method",
        label: "Expanding-photosphere method (Baade-Wesselink method)",
        uri: "http://astrothesaurus.org/uat/131",
      },
      {
        value: "Baade-Wesselink method",
        label: "Baade Wesselink method (Baade-Wesselink method)",
        uri: "http://astrothesaurus.org/uat/131",
      },
      {
        value: "Ultraviolet surveys",
        label: "Ultraviolet surveys",
        uri: "http://astrothesaurus.org/uat/1742",
      },
      {
        value: "Galaxy spurs",
        label: "Galaxy spurs",
        uri: "http://astrothesaurus.org/uat/620",
      },
      {
        value: "Solar particle emission",
        label: "Solar particle emission",
        uri: "http://astrothesaurus.org/uat/1517",
      },
      {
        value: "Cold neutral medium",
        label: "Cold neutral medium",
        uri: "http://astrothesaurus.org/uat/266",
      },
      {
        value: "Cold neutral medium",
        label: "CNM (Cold neutral medium)",
        uri: "http://astrothesaurus.org/uat/266",
      },
      {
        value: "Amateur astronomers",
        label: "Amateur astronomers",
        uri: "http://astrothesaurus.org/uat/34",
      },
      {
        value: "Supergalactic coordinate system",
        label: "Supergalactic coordinate system",
        uri: "http://astrothesaurus.org/uat/1658",
      },
      {
        value: "Blueshifted",
        label: "Blueshifted",
        uri: "http://astrothesaurus.org/uat/169",
      },
      {
        value: "Blueshifted",
        label: "Blue shift (Blueshifted)",
        uri: "http://astrothesaurus.org/uat/169",
      },
      {
        value: "Blueshifted",
        label: "Blueshift (Blueshifted)",
        uri: "http://astrothesaurus.org/uat/169",
      },
      {
        value: "Water masers",
        label: "Water masers",
        uri: "http://astrothesaurus.org/uat/1790",
      },
      {
        value: "Water masers",
        label: "H2O masers (Water masers)",
        uri: "http://astrothesaurus.org/uat/1790",
      },
      {
        value: "Interacting galaxies",
        label: "Interacting galaxies",
        uri: "http://astrothesaurus.org/uat/802",
      },
      {
        value: "Interacting galaxies",
        label: "Colliding galaxies (Interacting galaxies)",
        uri: "http://astrothesaurus.org/uat/802",
      },
      {
        value: "Magnitude",
        label: "Magnitude",
        uri: "http://astrothesaurus.org/uat/999",
      },
      {
        value: "Deconvolution",
        label: "Deconvolution",
        uri: "http://astrothesaurus.org/uat/1910",
      },
      {
        value: "Halo stars",
        label: "Halo stars",
        uri: "http://astrothesaurus.org/uat/699",
      },
      {
        value: "Australites",
        label: "Australites",
        uri: "http://astrothesaurus.org/uat/120",
      },
      {
        value: "Stellar activity",
        label: "Stellar activity",
        uri: "http://astrothesaurus.org/uat/1580",
      },
      {
        value: "Cosmic noise",
        label: "Cosmic noise",
        uri: "http://astrothesaurus.org/uat/323",
      },
      {
        value: "G dwarf stars",
        label: "G dwarf stars",
        uri: "http://astrothesaurus.org/uat/556",
      },
      {
        value: "G dwarf stars",
        label: "G-type dwarf stars (G dwarf stars)",
        uri: "http://astrothesaurus.org/uat/556",
      },
      {
        value: "G dwarf stars",
        label: "G-type dwarfs (G dwarf stars)",
        uri: "http://astrothesaurus.org/uat/556",
      },
      {
        value: "G dwarf stars",
        label: "G-type main sequence stars (G dwarf stars)",
        uri: "http://astrothesaurus.org/uat/556",
      },
      {
        value: "G dwarf stars",
        label: "G dwarfs (G dwarf stars)",
        uri: "http://astrothesaurus.org/uat/556",
      },
      {
        value: "Emission line galaxies",
        label: "Emission line galaxies",
        uri: "http://astrothesaurus.org/uat/459",
      },
      {
        value: "SRS variable stars",
        label: "SRS variable stars",
        uri: "http://astrothesaurus.org/uat/2014",
      },
      {
        value: "Geocorona",
        label: "Geocorona",
        uri: "http://astrothesaurus.org/uat/644",
      },
      {
        value: "Regression",
        label: "Regression",
        uri: "http://astrothesaurus.org/uat/1914",
      },
      {
        value: "Regression",
        label: "Fitting (Regression)",
        uri: "http://astrothesaurus.org/uat/1914",
      },
      {
        value: "Asteroid belt",
        label: "Asteroid belt",
        uri: "http://astrothesaurus.org/uat/70",
      },
      {
        value: "Chandrasekhar limit",
        label: "Chandrasekhar limit",
        uri: "http://astrothesaurus.org/uat/221",
      },
      {
        value: "Cometary globules",
        label: "Cometary globules",
        uri: "http://astrothesaurus.org/uat/276",
      },
      {
        value: "Interferometers",
        label: "Interferometers",
        uri: "http://astrothesaurus.org/uat/805",
      },
      {
        value: "Interferometers",
        label: "Interferometric instrumentation (Interferometers)",
        uri: "http://astrothesaurus.org/uat/805",
      },
      {
        value: "Interferometers",
        label: "Interferometric instruments (Interferometers)",
        uri: "http://astrothesaurus.org/uat/805",
      },
      {
        value: "Lunar rilles",
        label: "Lunar rilles",
        uri: "http://astrothesaurus.org/uat/971",
      },
      {
        value: "Lunar rilles",
        label: "Lunar rills (Lunar rilles)",
        uri: "http://astrothesaurus.org/uat/971",
      },
      {
        value: "Vilnius photometry",
        label: "Vilnius photometry",
        uri: "http://astrothesaurus.org/uat/1771",
      },
      {
        value: "Vilnius photometry",
        label: "Vilnius photometric system (Vilnius photometry)",
        uri: "http://astrothesaurus.org/uat/1771",
      },
      {
        value: "Microgravity",
        label: "Microgravity",
        uri: "http://astrothesaurus.org/uat/1046",
      },
      {
        value: "Infrared observatories",
        label: "Infrared observatories",
        uri: "http://astrothesaurus.org/uat/791",
      },
      {
        value: "Binary lens microlensing",
        label: "Binary lens microlensing",
        uri: "http://astrothesaurus.org/uat/2136",
      },
      {
        value: "Ritchey-ChrÃ©tien telescopes",
        label: "Ritchey-ChrÃ©tien telescopes",
        uri: "http://astrothesaurus.org/uat/1403",
      },
      {
        value: "Ritchey-ChrÃ©tien telescopes",
        label: "Ritchey-Chretien telescopes (Ritchey-ChrÃ©tien telescopes)",
        uri: "http://astrothesaurus.org/uat/1403",
      },
      {
        value: "Sunspot flow",
        label: "Sunspot flow",
        uri: "http://astrothesaurus.org/uat/1978",
      },
      {
        value: "Quiescent solar prominence",
        label: "Quiescent solar prominence",
        uri: "http://astrothesaurus.org/uat/1321",
      },
      {
        value: "Quiescent solar prominence",
        label: "Polar crown filament (Quiescent solar prominence)",
        uri: "http://astrothesaurus.org/uat/1321",
      },
      {
        value: "Dynamical parallax",
        label: "Dynamical parallax",
        uri: "http://astrothesaurus.org/uat/423",
      },
      {
        value: "Ocean planets",
        label: "Ocean planets",
        uri: "http://astrothesaurus.org/uat/1151",
      },
      {
        value: "Ocean planets",
        label: "Water worlds (Ocean planets)",
        uri: "http://astrothesaurus.org/uat/1151",
      },
      {
        value: "Lightning",
        label: "Lightning",
        uri: "http://astrothesaurus.org/uat/2193",
      },
      {
        value: "Underabundances",
        label: "Underabundances",
        uri: "http://astrothesaurus.org/uat/1747",
      },
      {
        value: "Cooling flows",
        label: "Cooling flows",
        uri: "http://astrothesaurus.org/uat/2028",
      },
      {
        value: "Giant molecular clouds",
        label: "Giant molecular clouds",
        uri: "http://astrothesaurus.org/uat/653",
      },
      {
        value: "Giant molecular clouds",
        label: "GMC (Giant molecular clouds)",
        uri: "http://astrothesaurus.org/uat/653",
      },
      {
        value: "Elliptical orbits",
        label: "Elliptical orbits",
        uri: "http://astrothesaurus.org/uat/457",
      },
      {
        value: "Elliptical orbits",
        label: "Elliptical orbit (Elliptical orbits)",
        uri: "http://astrothesaurus.org/uat/457",
      },
      {
        value: "Elliptical orbits",
        label: "Eccentric orbit (Elliptical orbits)",
        uri: "http://astrothesaurus.org/uat/457",
      },
      {
        value: "Galaxy infall",
        label: "Galaxy infall",
        uri: "http://astrothesaurus.org/uat/599",
      },
      {
        value: "Scattered disk objects",
        label: "Scattered disk objects",
        uri: "http://astrothesaurus.org/uat/1430",
      },
      {
        value: "Scattered disk objects",
        label: "SDOs (Scattered disk objects)",
        uri: "http://astrothesaurus.org/uat/1430",
      },
      {
        value: "Infrared galaxies",
        label: "Infrared galaxies",
        uri: "http://astrothesaurus.org/uat/790",
      },
      {
        value: "Galaxy magnetic fields",
        label: "Galaxy magnetic fields",
        uri: "http://astrothesaurus.org/uat/604",
      },
      {
        value: "Baryon density",
        label: "Baryon density",
        uri: "http://astrothesaurus.org/uat/139",
      },
      {
        value: "CCD photometry",
        label: "CCD photometry",
        uri: "http://astrothesaurus.org/uat/208",
      },
      {
        value: "CCD photometry",
        label: "Charge-coupled device photometry (CCD photometry)",
        uri: "http://astrothesaurus.org/uat/208",
      },
      {
        value: "Radio observatories",
        label: "Radio observatories",
        uri: "http://astrothesaurus.org/uat/1350",
      },
      {
        value: "Solar-planetary interactions",
        label: "Solar-planetary interactions",
        uri: "http://astrothesaurus.org/uat/1472",
      },
      {
        value: "Solar-planetary interactions",
        label: "Solar/planetary interactions (Solar-planetary interactions)",
        uri: "http://astrothesaurus.org/uat/1472",
      },
      {
        value: "Solar-planetary interactions",
        label: "Solar-planetary relation (Solar-planetary interactions)",
        uri: "http://astrothesaurus.org/uat/1472",
      },
      {
        value: "Solar-planetary interactions",
        label: "Solar planetary interactions (Solar-planetary interactions)",
        uri: "http://astrothesaurus.org/uat/1472",
      },
      {
        value: "Solar-planetary interactions",
        label: "Solar planetary relation (Solar-planetary interactions)",
        uri: "http://astrothesaurus.org/uat/1472",
      },
      {
        value: "Galactic abundances",
        label: "Galactic abundances",
        uri: "http://astrothesaurus.org/uat/2002",
      },
      {
        value: "Atomic physics",
        label: "Atomic physics",
        uri: "http://astrothesaurus.org/uat/2063",
      },
      {
        value: "Period determination",
        label: "Period determination",
        uri: "http://astrothesaurus.org/uat/1211",
      },
      {
        value: "Exoplanet dynamics",
        label: "Exoplanet dynamics",
        uri: "http://astrothesaurus.org/uat/490",
      },
      {
        value: "Interplanetary particle acceleration",
        label: "Interplanetary particle acceleration",
        uri: "http://astrothesaurus.org/uat/826",
      },
      {
        value: "Compact nebulae",
        label: "Compact nebulae",
        uri: "http://astrothesaurus.org/uat/287",
      },
      {
        value: "Compact nebulae",
        label: "Compact nebula (Compact nebulae)",
        uri: "http://astrothesaurus.org/uat/287",
      },
      {
        value: "Night sky brightness",
        label: "Night sky brightness",
        uri: "http://astrothesaurus.org/uat/1112",
      },
      {
        value: "Night sky brightness",
        label: "Night sky background (Night sky brightness)",
        uri: "http://astrothesaurus.org/uat/1112",
      },
      {
        value: "Stellar spectral lines",
        label: "Stellar spectral lines",
        uri: "http://astrothesaurus.org/uat/1630",
      },
      {
        value: "Seyfert galaxies",
        label: "Seyfert galaxies",
        uri: "http://astrothesaurus.org/uat/1447",
      },
      {
        value: "South celestial pole",
        label: "South celestial pole",
        uri: "http://astrothesaurus.org/uat/1538",
      },
      {
        value: "South celestial pole",
        label: "S c p (South celestial pole)",
        uri: "http://astrothesaurus.org/uat/1538",
      },
      {
        value: "South celestial pole",
        label: "S. c. p. (South celestial pole)",
        uri: "http://astrothesaurus.org/uat/1538",
      },
      {
        value: "Stellar masses",
        label: "Stellar masses",
        uri: "http://astrothesaurus.org/uat/1614",
      },
      {
        value: "Stellar surfaces",
        label: "Stellar surfaces",
        uri: "http://astrothesaurus.org/uat/1632",
      },
      {
        value: "Single-linkage hierarchical clustering",
        label: "Single-linkage hierarchical clustering",
        uri: "http://astrothesaurus.org/uat/1939",
      },
      {
        value: "Single-linkage hierarchical clustering",
        label:
          "friend-of-a-friend algorithm (Single-linkage hierarchical clustering)",
        uri: "http://astrothesaurus.org/uat/1939",
      },
      {
        value: "Single-linkage hierarchical clustering",
        label:
          "friend-of-friends algorithm (Single-linkage hierarchical clustering)",
        uri: "http://astrothesaurus.org/uat/1939",
      },
      {
        value: "Lunar eclipses",
        label: "Lunar eclipses",
        uri: "http://astrothesaurus.org/uat/951",
      },
      {
        value: "Eclipses",
        label: "Eclipses",
        uri: "http://astrothesaurus.org/uat/442",
      },
      {
        value: "DO stars",
        label: "DO stars",
        uri: "http://astrothesaurus.org/uat/397",
      },
      {
        value: "DO stars",
        label: "DO white dwarf (DO stars)",
        uri: "http://astrothesaurus.org/uat/397",
      },
      {
        value: "DO stars",
        label: "DO white dwarf stars (DO stars)",
        uri: "http://astrothesaurus.org/uat/397",
      },
      {
        value: "Red dwarf flare stars",
        label: "Red dwarf flare stars",
        uri: "http://astrothesaurus.org/uat/1367",
      },
      {
        value: "Secondary cosmic rays",
        label: "Secondary cosmic rays",
        uri: "http://astrothesaurus.org/uat/1438",
      },
      {
        value: "Aphelion",
        label: "Aphelion",
        uri: "http://astrothesaurus.org/uat/55",
      },
      {
        value: "Galaxy dynamics",
        label: "Galaxy dynamics",
        uri: "http://astrothesaurus.org/uat/591",
      },
      {
        value: "Xallarap effect",
        label: "Xallarap effect",
        uri: "http://astrothesaurus.org/uat/2139",
      },
      {
        value: "Polar orbit",
        label: "Polar orbit",
        uri: "http://astrothesaurus.org/uat/1275",
      },
      {
        value: "Mesogranulation",
        label: "Mesogranulation",
        uri: "http://astrothesaurus.org/uat/1028",
      },
      {
        value: "Cosmic web",
        label: "Cosmic web",
        uri: "http://astrothesaurus.org/uat/330",
      },
      {
        value: "Software available on request",
        label: "Software available on request",
        uri: "http://astrothesaurus.org/uat/1865",
      },
      {
        value: "Planetary dynamics",
        label: "Planetary dynamics",
        uri: "http://astrothesaurus.org/uat/2173",
      },
      {
        value: "Type II supernovae",
        label: "Type II supernovae",
        uri: "http://astrothesaurus.org/uat/1731",
      },
      {
        value: "Heterodyne interferometry",
        label: "Heterodyne interferometry",
        uri: "http://astrothesaurus.org/uat/726",
      },
      {
        value: "Semiminor axis",
        label: "Semiminor axis",
        uri: "http://astrothesaurus.org/uat/1446",
      },
      {
        value: "Semiminor axis",
        label: "Semi-minor axis (Semiminor axis)",
        uri: "http://astrothesaurus.org/uat/1446",
      },
      {
        value: "Galaxy rotation",
        label: "Galaxy rotation",
        uri: "http://astrothesaurus.org/uat/618",
      },
      {
        value: "Faint blue stars",
        label: "Faint blue stars",
        uri: "http://astrothesaurus.org/uat/525",
      },
      {
        value: "Intergalactic clouds",
        label: "Intergalactic clouds",
        uri: "http://astrothesaurus.org/uat/809",
      },
      {
        value: "Stellar spectral types",
        label: "Stellar spectral types",
        uri: "http://astrothesaurus.org/uat/2051",
      },
      {
        value: "Stellar spectral types",
        label: "Morgan-Keenan spectral types (Stellar spectral types)",
        uri: "http://astrothesaurus.org/uat/2051",
      },
      {
        value: "Software licensing",
        label: "Software licensing",
        uri: "http://astrothesaurus.org/uat/1862",
      },
      {
        value: "Hardness ratio",
        label: "Hardness ratio",
        uri: "http://astrothesaurus.org/uat/700",
      },
      {
        value: "Protoplanetary nebulae",
        label: "Protoplanetary nebulae",
        uri: "http://astrothesaurus.org/uat/1301",
      },
      {
        value: "Protoplanetary nebulae",
        label: "Protoplanetary nebula (Protoplanetary nebulae)",
        uri: "http://astrothesaurus.org/uat/1301",
      },
      {
        value: "Protoplanetary nebulae",
        label: "Preplanetary nebulae (Protoplanetary nebulae)",
        uri: "http://astrothesaurus.org/uat/1301",
      },
      {
        value: "Protoplanetary nebulae",
        label: "PPN (Protoplanetary nebulae)",
        uri: "http://astrothesaurus.org/uat/1301",
      },
      {
        value: "K subgiant stars",
        label: "K subgiant stars",
        uri: "http://astrothesaurus.org/uat/880",
      },
      {
        value: "K subgiant stars",
        label: "K-type subgiants (K subgiant stars)",
        uri: "http://astrothesaurus.org/uat/880",
      },
      {
        value: "K subgiant stars",
        label: "K subgiants (K subgiant stars)",
        uri: "http://astrothesaurus.org/uat/880",
      },
      {
        value: "K subgiant stars",
        label: "K-type subgiant stars (K subgiant stars)",
        uri: "http://astrothesaurus.org/uat/880",
      },
      {
        value: "Radiative recombination",
        label: "Radiative recombination",
        uri: "http://astrothesaurus.org/uat/2057",
      },
      {
        value: "Atmospheric circulation",
        label: "Atmospheric circulation",
        uri: "http://astrothesaurus.org/uat/112",
      },
      {
        value: "Carbonaceous chondrites",
        label: "Carbonaceous chondrites",
        uri: "http://astrothesaurus.org/uat/200",
      },
      {
        value: "Tidal interaction",
        label: "Tidal interaction",
        uri: "http://astrothesaurus.org/uat/1699",
      },
      {
        value: "Silicate grains",
        label: "Silicate grains",
        uri: "http://astrothesaurus.org/uat/1456",
      },
      {
        value: "Quadrants",
        label: "Quadrants",
        uri: "http://astrothesaurus.org/uat/1312",
      },
      {
        value: "Gravitational instability",
        label: "Gravitational instability",
        uri: "http://astrothesaurus.org/uat/668",
      },
      {
        value: "Hertzsprung Russell diagram",
        label: "Hertzsprung Russell diagram",
        uri: "http://astrothesaurus.org/uat/725",
      },
      {
        value: "Hertzsprung Russell diagram",
        label: "Hertzsprung-Russell diagrams (Hertzsprung Russell diagram)",
        uri: "http://astrothesaurus.org/uat/725",
      },
      {
        value: "Hertzsprung Russell diagram",
        label: "HRD (Hertzsprung Russell diagram)",
        uri: "http://astrothesaurus.org/uat/725",
      },
      {
        value: "Hertzsprung Russell diagram",
        label: "Hertzsprung Russell diagrams (Hertzsprung Russell diagram)",
        uri: "http://astrothesaurus.org/uat/725",
      },
      {
        value: "Hertzsprung Russell diagram",
        label: "H-R diagrams (Hertzsprung Russell diagram)",
        uri: "http://astrothesaurus.org/uat/725",
      },
      {
        value: "Hertzsprung Russell diagram",
        label: "Hertzsprung/Russell diagrams (Hertzsprung Russell diagram)",
        uri: "http://astrothesaurus.org/uat/725",
      },
      {
        value: "Hertzsprung Russell diagram",
        label: "HR diagram (Hertzsprung Russell diagram)",
        uri: "http://astrothesaurus.org/uat/725",
      },
      {
        value: "Hertzsprung Russell diagram",
        label: "Hertzsprung-Russell diagram (Hertzsprung Russell diagram)",
        uri: "http://astrothesaurus.org/uat/725",
      },
      {
        value: "Hertzsprung Russell diagram",
        label: "Color-color diagrams of stars (Hertzsprung Russell diagram)",
        uri: "http://astrothesaurus.org/uat/725",
      },
      {
        value: "Hertzsprung Russell diagram",
        label: "Color-magnitude diagrams of stars (Hertzsprung Russell diagram)",
        uri: "http://astrothesaurus.org/uat/725",
      },
      {
        value: "Hertzsprung Russell diagram",
        label: "Hertzsprungâ€“Russell diagram (Hertzsprung Russell diagram)",
        uri: "http://astrothesaurus.org/uat/725",
      },
      {
        value: "SRa variable stars",
        label: "SRa variable stars",
        uri: "http://astrothesaurus.org/uat/2010",
      },
      {
        value: "SRa variable stars",
        label: "SRa stars (SRa variable stars)",
        uri: "http://astrothesaurus.org/uat/2010",
      },
      {
        value: "SRa variable stars",
        label: "SRA stars (SRa variable stars)",
        uri: "http://astrothesaurus.org/uat/2010",
      },
      {
        value: "UU Herculis stars",
        label: "UU Herculis stars",
        uri: "http://astrothesaurus.org/uat/1754",
      },
      {
        value: "Planetary polar regions",
        label: "Planetary polar regions",
        uri: "http://astrothesaurus.org/uat/1251",
      },
      {
        value: "Cocoon stars",
        label: "Cocoon stars",
        uri: "http://astrothesaurus.org/uat/263",
      },
      {
        value: "Non-thermal radiation sources",
        label: "Non-thermal radiation sources",
        uri: "http://astrothesaurus.org/uat/1119",
      },
      {
        value: "Non-thermal radiation sources",
        label: "Non-thermal sources (Non-thermal radiation sources)",
        uri: "http://astrothesaurus.org/uat/1119",
      },
      {
        value: "Non-thermal radiation sources",
        label: "Nonthermal sources (Non-thermal radiation sources)",
        uri: "http://astrothesaurus.org/uat/1119",
      },
      {
        value: "Stellar mergers",
        label: "Stellar mergers",
        uri: "http://astrothesaurus.org/uat/2157",
      },
      {
        value: "Stellar mergers",
        label: "Merging stars (Stellar mergers)",
        uri: "http://astrothesaurus.org/uat/2157",
      },
      {
        value: "Apocenter",
        label: "Apocenter",
        uri: "http://astrothesaurus.org/uat/56",
      },
      {
        value: "Apocenter",
        label: "Apoapsis (Apocenter)",
        uri: "http://astrothesaurus.org/uat/56",
      },
      {
        value: "Apocenter",
        label: "Apocentre (Apocenter)",
        uri: "http://astrothesaurus.org/uat/56",
      },
      {
        value: "Apocenter",
        label: "Apapsis (Apocenter)",
        uri: "http://astrothesaurus.org/uat/56",
      },
      {
        value: "Fisher's Information",
        label: "Fisher's Information",
        uri: "http://astrothesaurus.org/uat/1922",
      },
      {
        value: "Lens orbital motion",
        label: "Lens orbital motion",
        uri: "http://astrothesaurus.org/uat/2143",
      },
      {
        value: "Stellar jets",
        label: "Stellar jets",
        uri: "http://astrothesaurus.org/uat/1607",
      },
      {
        value: "Stellar jets",
        label: "Bipolar outflows (Stellar jets)",
        uri: "http://astrothesaurus.org/uat/1607",
      },
      {
        value: "Stellar jets",
        label: "Jet outflows (Stellar jets)",
        uri: "http://astrothesaurus.org/uat/1607",
      },
      {
        value: "Speckle interferometry",
        label: "Speckle interferometry",
        uri: "http://astrothesaurus.org/uat/1552",
      },
      {
        value: "Gamma distribution",
        label: "Gamma distribution",
        uri: "http://astrothesaurus.org/uat/1895",
      },
      {
        value: "Gamma distribution",
        label: "Schechter function (Gamma distribution)",
        uri: "http://astrothesaurus.org/uat/1895",
      },
      {
        value: "Lyman limit systems",
        label: "Lyman limit systems",
        uri: "http://astrothesaurus.org/uat/981",
      },
      {
        value: "Galactic archaeology",
        label: "Galactic archaeology",
        uri: "http://astrothesaurus.org/uat/2178",
      },
      {
        value: "Shadow bands",
        label: "Shadow bands",
        uri: "http://astrothesaurus.org/uat/1449",
      },
      {
        value: "Solar-terrestrial interactions",
        label: "Solar-terrestrial interactions",
        uri: "http://astrothesaurus.org/uat/1473",
      },
      {
        value: "Solar-terrestrial interactions",
        label: "Sun-Earth interactions (Solar-terrestrial interactions)",
        uri: "http://astrothesaurus.org/uat/1473",
      },
      {
        value: "Solar-terrestrial interactions",
        label: "Solar/terrestrial relations (Solar-terrestrial interactions)",
        uri: "http://astrothesaurus.org/uat/1473",
      },
      {
        value: "Solar-terrestrial interactions",
        label: "Solar terrestrial relation (Solar-terrestrial interactions)",
        uri: "http://astrothesaurus.org/uat/1473",
      },
      {
        value: "Extended radiation sources",
        label: "Extended radiation sources",
        uri: "http://astrothesaurus.org/uat/504",
      },
      {
        value: "Dwarf elliptical galaxies",
        label: "Dwarf elliptical galaxies",
        uri: "http://astrothesaurus.org/uat/415",
      },
      {
        value: "Dwarf elliptical galaxies",
        label: "Dwarf ellipticals (Dwarf elliptical galaxies)",
        uri: "http://astrothesaurus.org/uat/415",
      },
      {
        value: "Dwarf elliptical galaxies",
        label: "dEs (Dwarf elliptical galaxies)",
        uri: "http://astrothesaurus.org/uat/415",
      },
      {
        value: "Dwarf elliptical galaxies",
        label: "dE (Dwarf elliptical galaxies)",
        uri: "http://astrothesaurus.org/uat/415",
      },
      {
        value: "Stellar associations",
        label: "Stellar associations",
        uri: "http://astrothesaurus.org/uat/1582",
      },
      {
        value: "Stellar associations",
        label: "Star associations (Stellar associations)",
        uri: "http://astrothesaurus.org/uat/1582",
      },
      {
        value: "Meteors",
        label: "Meteors",
        uri: "http://astrothesaurus.org/uat/1041",
      },
      {
        value: "Circumstellar dust",
        label: "Circumstellar dust",
        uri: "http://astrothesaurus.org/uat/236",
      },
      {
        value: "Nonstandard evolution",
        label: "Nonstandard evolution",
        uri: "http://astrothesaurus.org/uat/1122",
      },
      {
        value: "Binary stars",
        label: "Binary stars",
        uri: "http://astrothesaurus.org/uat/154",
      },
      {
        value: "Binary stars",
        label: "Binaries (Binary stars)",
        uri: "http://astrothesaurus.org/uat/154",
      },
      {
        value: "Blue straggler stars",
        label: "Blue straggler stars",
        uri: "http://astrothesaurus.org/uat/168",
      },
      {
        value: "Blue straggler stars",
        label: "Blue-straggler stars (Blue straggler stars)",
        uri: "http://astrothesaurus.org/uat/168",
      },
      {
        value: "Blue straggler stars",
        label: "Blue stragglers (Blue straggler stars)",
        uri: "http://astrothesaurus.org/uat/168",
      },
      {
        value: "Hydrogen deficient stars",
        label: "Hydrogen deficient stars",
        uri: "http://astrothesaurus.org/uat/769",
      },
      { value: "Eros", label: "Eros", uri: "http://astrothesaurus.org/uat/2182" },
      {
        value: "Eros",
        label: "Asteroid Eros (Eros)",
        uri: "http://astrothesaurus.org/uat/2182",
      },
      {
        value: "Eros",
        label: "433 Eros (Eros)",
        uri: "http://astrothesaurus.org/uat/2182",
      },
      {
        value: "Eros",
        label: "(433) Eros (Eros)",
        uri: "http://astrothesaurus.org/uat/2182",
      },
      {
        value: "Hadron barrier",
        label: "Hadron barrier",
        uri: "http://astrothesaurus.org/uat/697",
      },
      {
        value: "Hadron barrier",
        label: "Hadron epoch (Hadron barrier)",
        uri: "http://astrothesaurus.org/uat/697",
      },
      {
        value: "Dwarf planets",
        label: "Dwarf planets",
        uri: "http://astrothesaurus.org/uat/419",
      },
      {
        value: "Dwarf planets",
        label: "Solar system dwarf planets (Dwarf planets)",
        uri: "http://astrothesaurus.org/uat/419",
      },
      {
        value: "Dwarf planets",
        label: "Dwarf planets (Solar system) (Dwarf planets)",
        uri: "http://astrothesaurus.org/uat/419",
      },
      {
        value: "Hot intergalactic medium",
        label: "Hot intergalactic medium",
        uri: "http://astrothesaurus.org/uat/751",
      },
      {
        value: "Optical observation",
        label: "Optical observation",
        uri: "http://astrothesaurus.org/uat/1169",
      },
      {
        value: "Optical observation",
        label: "Visual observation (Optical observation)",
        uri: "http://astrothesaurus.org/uat/1169",
      },
      {
        value: "Transient detection",
        label: "Transient detection",
        uri: "http://astrothesaurus.org/uat/1957",
      },
      {
        value: "Spiral arms",
        label: "Spiral arms",
        uri: "http://astrothesaurus.org/uat/1559",
      },
      {
        value: "Heavy metal stars",
        label: "Heavy metal stars",
        uri: "http://astrothesaurus.org/uat/705",
      },
      {
        value: "Heavy metal stars",
        label: "Heavy-metal stars (Heavy metal stars)",
        uri: "http://astrothesaurus.org/uat/705",
      },
      {
        value: "Astronomy data visualization",
        label: "Astronomy data visualization",
        uri: "http://astrothesaurus.org/uat/1968",
      },
      {
        value: "Hydrodynamical simulations",
        label: "Hydrodynamical simulations",
        uri: "http://astrothesaurus.org/uat/767",
      },
      {
        value: "Hydrodynamical simulations",
        label: "Magneto-hydrodynamic simulations (Hydrodynamical simulations)",
        uri: "http://astrothesaurus.org/uat/767",
      },
      {
        value: "Slow solar wind",
        label: "Slow solar wind",
        uri: "http://astrothesaurus.org/uat/1873",
      },
      {
        value: "Herbig Ae/Be stars",
        label: "Herbig Ae/Be stars",
        uri: "http://astrothesaurus.org/uat/723",
      },
      {
        value: "Herbig Ae/Be stars",
        label: "Herbig Ae-Be stars (Herbig Ae/Be stars)",
        uri: "http://astrothesaurus.org/uat/723",
      },
      {
        value: "Herbig Ae/Be stars",
        label: "HAeBe stars (Herbig Ae/Be stars)",
        uri: "http://astrothesaurus.org/uat/723",
      },
      {
        value: "Herbig Ae/Be stars",
        label: "Herbig stars (Herbig Ae/Be stars)",
        uri: "http://astrothesaurus.org/uat/723",
      },
      {
        value: "Technetium stars",
        label: "Technetium stars",
        uri: "http://astrothesaurus.org/uat/1683",
      },
      {
        value: "Deep space probes",
        label: "Deep space probes",
        uri: "http://astrothesaurus.org/uat/366",
      },
      {
        value: "Deep space probes",
        label: "Deep-space probes (Deep space probes)",
        uri: "http://astrothesaurus.org/uat/366",
      },
      {
        value: "Asteroid satellites",
        label: "Asteroid satellites",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Multi-body asteroids (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Binary SSSBs (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Binary asteroids (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Double asteroids (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Multiple small Solar System body systems (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Binary small Solar System body systems (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Satellites of asteroids (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Binary small Solar System bodies (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Multiple asteroids (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Asteroid moons (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Binary systems (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Multiple systems (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Asteroid multiples (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Multiple SSSB systems (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Multiple small Solar System bodies (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Multiple SSSBs (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Binary SSSB systems (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "Asteroid satellites",
        label: "Minor planet moons (Asteroid satellites)",
        uri: "http://astrothesaurus.org/uat/2207",
      },
      {
        value: "DB stars",
        label: "DB stars",
        uri: "http://astrothesaurus.org/uat/358",
      },
      {
        value: "DB stars",
        label: "DB white dwarf (DB stars)",
        uri: "http://astrothesaurus.org/uat/358",
      },
      {
        value: "DB stars",
        label: "DB white dwarf stars (DB stars)",
        uri: "http://astrothesaurus.org/uat/358",
      },
      {
        value: "Summer solstice",
        label: "Summer solstice",
        uri: "http://astrothesaurus.org/uat/1649",
      },
      {
        value: "Astronomical techniques",
        label: "Astronomical techniques",
        uri: "http://astrothesaurus.org/uat/1684",
      },
      {
        value: "Astronomical techniques",
        label: "Techniques (Astronomical techniques)",
        uri: "http://astrothesaurus.org/uat/1684",
      },
      {
        value: "Astronomical techniques",
        label: "Observation techniques (Astronomical techniques)",
        uri: "http://astrothesaurus.org/uat/1684",
      },
      {
        value: "Cepheid variable stars",
        label: "Cepheid variable stars",
        uri: "http://astrothesaurus.org/uat/218",
      },
      {
        value: "Cepheid variable stars",
        label: "Classical Cepheid (Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/218",
      },
      {
        value: "Cepheid variable stars",
        label: "Bump cepheid (Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/218",
      },
      {
        value: "Cepheid variable stars",
        label: "Cepheid stars (Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/218",
      },
      {
        value: "Cepheid variable stars",
        label: "Cepheids (Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/218",
      },
      {
        value: "Cepheid variable stars",
        label: "Cepheid variables (Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/218",
      },
      {
        value: "Orbital motion",
        label: "Orbital motion",
        uri: "http://astrothesaurus.org/uat/1179",
      },
      {
        value: "Warm ionized medium",
        label: "Warm ionized medium",
        uri: "http://astrothesaurus.org/uat/1788",
      },
      {
        value: "Warm ionized medium",
        label: "Defuse ionized gas (Warm ionized medium)",
        uri: "http://astrothesaurus.org/uat/1788",
      },
      {
        value: "Warm ionized medium",
        label: "WIM (Warm ionized medium)",
        uri: "http://astrothesaurus.org/uat/1788",
      },
      {
        value: "Warm ionized medium",
        label: "Reynolds' layer (Warm ionized medium)",
        uri: "http://astrothesaurus.org/uat/1788",
      },
      {
        value: "Warm ionized medium",
        label: "DIG (Warm ionized medium)",
        uri: "http://astrothesaurus.org/uat/1788",
      },
      {
        value: "Fast solar wind",
        label: "Fast solar wind",
        uri: "http://astrothesaurus.org/uat/1872",
      },
      {
        value: "Solar abundances",
        label: "Solar abundances",
        uri: "http://astrothesaurus.org/uat/1474",
      },
      {
        value: "Software tutorials",
        label: "Software tutorials",
        uri: "http://astrothesaurus.org/uat/1871",
      },
      {
        value: "Cosmic background radiation",
        label: "Cosmic background radiation",
        uri: "http://astrothesaurus.org/uat/317",
      },
      {
        value: "Cosmic background radiation",
        label: "CBR (Cosmic background radiation)",
        uri: "http://astrothesaurus.org/uat/317",
      },
      {
        value: "Long baseline interferometers",
        label: "Long baseline interferometers",
        uri: "http://astrothesaurus.org/uat/931",
      },
      {
        value: "Helium-rich stars",
        label: "Helium-rich stars",
        uri: "http://astrothesaurus.org/uat/715",
      },
      {
        value: "Helium-rich stars",
        label: "Helium rich stars (Helium-rich stars)",
        uri: "http://astrothesaurus.org/uat/715",
      },
      {
        value: "Helium-rich stars",
        label: "Helium strong stars (Helium-rich stars)",
        uri: "http://astrothesaurus.org/uat/715",
      },
      {
        value: "Weak G band stars",
        label: "Weak G band stars",
        uri: "http://astrothesaurus.org/uat/1796",
      },
      {
        value: "A stars",
        label: "A stars",
        uri: "http://astrothesaurus.org/uat/5",
      },
      {
        value: "A stars",
        label: "Type A stars (A stars)",
        uri: "http://astrothesaurus.org/uat/5",
      },
      {
        value: "A stars",
        label: "A-type stars (A stars)",
        uri: "http://astrothesaurus.org/uat/5",
      },
      {
        value: "A stars",
        label: "Class A stars (A stars)",
        uri: "http://astrothesaurus.org/uat/5",
      },
      {
        value: "A stars",
        label: "A type stars (A stars)",
        uri: "http://astrothesaurus.org/uat/5",
      },
      {
        value: "Spectrophotometric standards",
        label: "Spectrophotometric standards",
        uri: "http://astrothesaurus.org/uat/1555",
      },
      {
        value: "Late-type galaxies",
        label: "Late-type galaxies",
        uri: "http://astrothesaurus.org/uat/907",
      },
      {
        value: "Late-type galaxies",
        label: "Late type galaxies (Late-type galaxies)",
        uri: "http://astrothesaurus.org/uat/907",
      },
      {
        value: "Geodesics",
        label: "Geodesics",
        uri: "http://astrothesaurus.org/uat/645",
      },
      {
        value: "Soft gamma-ray repeaters",
        label: "Soft gamma-ray repeaters",
        uri: "http://astrothesaurus.org/uat/1471",
      },
      {
        value: "Soft gamma-ray repeaters",
        label: "Soft gamma repeaters (Soft gamma-ray repeaters)",
        uri: "http://astrothesaurus.org/uat/1471",
      },
      {
        value: "Soft gamma-ray repeaters",
        label: "Soft gamma ray repeaters (Soft gamma-ray repeaters)",
        uri: "http://astrothesaurus.org/uat/1471",
      },
      {
        value: "DQ Herculis stars",
        label: "DQ Herculis stars",
        uri: "http://astrothesaurus.org/uat/407",
      },
      {
        value: "DQ Herculis stars",
        label: "Intermediate polar stars (DQ Herculis stars)",
        uri: "http://astrothesaurus.org/uat/407",
      },
      {
        value: "DQ Herculis stars",
        label: "Intermediate polars (DQ Herculis stars)",
        uri: "http://astrothesaurus.org/uat/407",
      },
      {
        value: "Ursa Minor dwarf spheroidal galaxy",
        label: "Ursa Minor dwarf spheroidal galaxy",
        uri: "http://astrothesaurus.org/uat/1753",
      },
      {
        value: "Early-type galaxies",
        label: "Early-type galaxies",
        uri: "http://astrothesaurus.org/uat/429",
      },
      {
        value: "Early-type galaxies",
        label: "Early type galaxies (Early-type galaxies)",
        uri: "http://astrothesaurus.org/uat/429",
      },
      {
        value: "Infrared dark clouds",
        label: "Infrared dark clouds",
        uri: "http://astrothesaurus.org/uat/787",
      },
      {
        value: "Infrared dark clouds",
        label: "IRDC (Infrared dark clouds)",
        uri: "http://astrothesaurus.org/uat/787",
      },
      {
        value: "Interstellar absorption",
        label: "Interstellar absorption",
        uri: "http://astrothesaurus.org/uat/831",
      },
      {
        value: "Hickson compact group",
        label: "Hickson compact group",
        uri: "http://astrothesaurus.org/uat/729",
      },
      {
        value: "Hickson compact group",
        label: "Compact group of galaxies (Hickson compact group)",
        uri: "http://astrothesaurus.org/uat/729",
      },
      {
        value: "Hickson compact group",
        label: "HCG (Hickson compact group)",
        uri: "http://astrothesaurus.org/uat/729",
      },
      {
        value: "Termination shock",
        label: "Termination shock",
        uri: "http://astrothesaurus.org/uat/1690",
      },
      {
        value: "Molecule destruction",
        label: "Molecule destruction",
        uri: "http://astrothesaurus.org/uat/2075",
      },
      {
        value: "Black holes",
        label: "Black holes",
        uri: "http://astrothesaurus.org/uat/162",
      },
      {
        value: "Antapex",
        label: "Antapex",
        uri: "http://astrothesaurus.org/uat/46",
      },
      {
        value: "Antapex",
        label: "Solar antapex (Antapex)",
        uri: "http://astrothesaurus.org/uat/46",
      },
      {
        value: "Meteoroid dust clouds",
        label: "Meteoroid dust clouds",
        uri: "http://astrothesaurus.org/uat/1039",
      },
      {
        value: "Meteoroid dust clouds",
        label: "Meteoric clouds (Meteoroid dust clouds)",
        uri: "http://astrothesaurus.org/uat/1039",
      },
      {
        value: "Meteoroid dust clouds",
        label: "Meteoroid dust (Meteoroid dust clouds)",
        uri: "http://astrothesaurus.org/uat/1039",
      },
      {
        value: "Meteoroid dust clouds",
        label: "Meteoric dust (Meteoroid dust clouds)",
        uri: "http://astrothesaurus.org/uat/1039",
      },
      {
        value: "Solar coronal seismology",
        label: "Solar coronal seismology",
        uri: "http://astrothesaurus.org/uat/1994",
      },
      {
        value: "Solar transition region",
        label: "Solar transition region",
        uri: "http://astrothesaurus.org/uat/1532",
      },
      {
        value: "Giant galaxies",
        label: "Giant galaxies",
        uri: "http://astrothesaurus.org/uat/652",
      },
      {
        value: "Calibration",
        label: "Calibration",
        uri: "http://astrothesaurus.org/uat/2179",
      },
      {
        value: "Space debris",
        label: "Space debris",
        uri: "http://astrothesaurus.org/uat/1542",
      },
      {
        value: "Space debris",
        label: "Debris (Space debris)",
        uri: "http://astrothesaurus.org/uat/1542",
      },
      {
        value: "Wolf-Rayet stars",
        label: "Wolf-Rayet stars",
        uri: "http://astrothesaurus.org/uat/1806",
      },
      {
        value: "Wolf-Rayet stars",
        label: "WR stars (Wolf-Rayet stars)",
        uri: "http://astrothesaurus.org/uat/1806",
      },
      {
        value: "Wolf-Rayet stars",
        label: "Wolf Rayet stars (Wolf-Rayet stars)",
        uri: "http://astrothesaurus.org/uat/1806",
      },
      {
        value: "Vega photometry",
        label: "Vega photometry",
        uri: "http://astrothesaurus.org/uat/2169",
      },
      {
        value: "Vega photometry",
        label: "Vega photometric system (Vega photometry)",
        uri: "http://astrothesaurus.org/uat/2169",
      },
      {
        value: "Galaxy stellar halos",
        label: "Galaxy stellar halos",
        uri: "http://astrothesaurus.org/uat/598",
      },
      {
        value: "Galaxy stellar halos",
        label: "Galaxy halos (Galaxy stellar halos)",
        uri: "http://astrothesaurus.org/uat/598",
      },
      {
        value: "Apastron",
        label: "Apastron",
        uri: "http://astrothesaurus.org/uat/51",
      },
      {
        value: "Nonlinear regression",
        label: "Nonlinear regression",
        uri: "http://astrothesaurus.org/uat/1948",
      },
      {
        value: "Massive stars",
        label: "Massive stars",
        uri: "http://astrothesaurus.org/uat/732",
      },
      {
        value: "Massive stars",
        label: "High mass stars (Massive stars)",
        uri: "http://astrothesaurus.org/uat/732",
      },
      {
        value: "Massive stars",
        label: "High-mass stars (Massive stars)",
        uri: "http://astrothesaurus.org/uat/732",
      },
      {
        value: "Hot dark matter",
        label: "Hot dark matter",
        uri: "http://astrothesaurus.org/uat/750",
      },
      {
        value: "Hot dark matter",
        label: "HDM (Hot dark matter)",
        uri: "http://astrothesaurus.org/uat/750",
      },
      {
        value: "Supernovae",
        label: "Supernovae",
        uri: "http://astrothesaurus.org/uat/1668",
      },
      {
        value: "Stellar winds",
        label: "Stellar winds",
        uri: "http://astrothesaurus.org/uat/1636",
      },
      {
        value: "Stellar winds",
        label: "Stellar outflows (Stellar winds)",
        uri: "http://astrothesaurus.org/uat/1636",
      },
      {
        value: "De-excitation rates",
        label: "De-excitation rates",
        uri: "http://astrothesaurus.org/uat/2066",
      },
      {
        value: "Tektites",
        label: "Tektites",
        uri: "http://astrothesaurus.org/uat/1686",
      },
      {
        value: "AM Canum Venaticorum stars",
        label: "AM Canum Venaticorum stars",
        uri: "http://astrothesaurus.org/uat/31",
      },
      {
        value: "AM Canum Venaticorum stars",
        label: "AM CVn stars (AM Canum Venaticorum stars)",
        uri: "http://astrothesaurus.org/uat/31",
      },
      {
        value: "Astrophotography",
        label: "Astrophotography",
        uri: "http://astrothesaurus.org/uat/97",
      },
      {
        value: "Astrophotography",
        label: "Astrophotographers (Astrophotography)",
        uri: "http://astrothesaurus.org/uat/97",
      },
      {
        value: "Principal component analysis",
        label: "Principal component analysis",
        uri: "http://astrothesaurus.org/uat/1944",
      },
      {
        value: "Kreutz group",
        label: "Kreutz group",
        uri: "http://astrothesaurus.org/uat/890",
      },
      {
        value: "Kreutz group",
        label: "Kreutz sungrazers (Kreutz group)",
        uri: "http://astrothesaurus.org/uat/890",
      },
      {
        value: "Reaction rates",
        label: "Reaction rates",
        uri: "http://astrothesaurus.org/uat/2081",
      },
      {
        value: "Armillary spheres",
        label: "Armillary spheres",
        uri: "http://astrothesaurus.org/uat/67",
      },
      {
        value: "Armillary spheres",
        label: "Armilla (Armillary spheres)",
        uri: "http://astrothesaurus.org/uat/67",
      },
      {
        value: "Armillary spheres",
        label: "Armil (Armillary spheres)",
        uri: "http://astrothesaurus.org/uat/67",
      },
      {
        value: "Armillary spheres",
        label: "Spherical astrolabes (Armillary spheres)",
        uri: "http://astrothesaurus.org/uat/67",
      },
      {
        value: "Optical pulsars",
        label: "Optical pulsars",
        uri: "http://astrothesaurus.org/uat/1173",
      },
      {
        value: "G supergiant stars",
        label: "G supergiant stars",
        uri: "http://astrothesaurus.org/uat/561",
      },
      {
        value: "G supergiant stars",
        label: "G-type supergiants (G supergiant stars)",
        uri: "http://astrothesaurus.org/uat/561",
      },
      {
        value: "G supergiant stars",
        label: "G supergiants (G supergiant stars)",
        uri: "http://astrothesaurus.org/uat/561",
      },
      {
        value: "G supergiant stars",
        label: "G-type supergiant stars (G supergiant stars)",
        uri: "http://astrothesaurus.org/uat/561",
      },
      {
        value: "Inclination",
        label: "Inclination",
        uri: "http://astrothesaurus.org/uat/780",
      },
      {
        value: "Radio galaxies",
        label: "Radio galaxies",
        uri: "http://astrothesaurus.org/uat/1343",
      },
      {
        value: "Shocks",
        label: "Shocks",
        uri: "http://astrothesaurus.org/uat/2086",
      },
      {
        value: "Magnetic variable stars",
        label: "Magnetic variable stars",
        uri: "http://astrothesaurus.org/uat/996",
      },
      {
        value: "Short period variable stars",
        label: "Short period variable stars",
        uri: "http://astrothesaurus.org/uat/1453",
      },
      {
        value: "Short period variable stars",
        label: "Short-period variable (Short period variable stars)",
        uri: "http://astrothesaurus.org/uat/1453",
      },
      {
        value: "Short period variable stars",
        label: "Short period variables (Short period variable stars)",
        uri: "http://astrothesaurus.org/uat/1453",
      },
      {
        value: "Short period variable stars",
        label: "Short-period variable stars (Short period variable stars)",
        uri: "http://astrothesaurus.org/uat/1453",
      },
      {
        value: "Short period variable stars",
        label: "Short-period variables (Short period variable stars)",
        uri: "http://astrothesaurus.org/uat/1453",
      },
      {
        value: "Short period variable stars",
        label: "Short period variable (Short period variable stars)",
        uri: "http://astrothesaurus.org/uat/1453",
      },
      {
        value: "Phase angle",
        label: "Phase angle",
        uri: "http://astrothesaurus.org/uat/1217",
      },
      {
        value: "M dwarf stars",
        label: "M dwarf stars",
        uri: "http://astrothesaurus.org/uat/982",
      },
      {
        value: "M dwarf stars",
        label: "M-type dwarf stars (M dwarf stars)",
        uri: "http://astrothesaurus.org/uat/982",
      },
      {
        value: "M dwarf stars",
        label: "Red dwarfs (M dwarf stars)",
        uri: "http://astrothesaurus.org/uat/982",
      },
      {
        value: "M dwarf stars",
        label: "M-type dwarfs (M dwarf stars)",
        uri: "http://astrothesaurus.org/uat/982",
      },
      {
        value: "M dwarf stars",
        label: "M dwarfs (M dwarf stars)",
        uri: "http://astrothesaurus.org/uat/982",
      },
      {
        value: "M dwarf stars",
        label: "M-type main sequence stars (M dwarf stars)",
        uri: "http://astrothesaurus.org/uat/982",
      },
      {
        value: "Solar coronal heating",
        label: "Solar coronal heating",
        uri: "http://astrothesaurus.org/uat/1989",
      },
      {
        value: "Long period comets",
        label: "Long period comets",
        uri: "http://astrothesaurus.org/uat/933",
      },
      {
        value: "Cassegrain telescopes",
        label: "Cassegrain telescopes",
        uri: "http://astrothesaurus.org/uat/202",
      },
      {
        value: "Galaxy processes",
        label: "Galaxy processes",
        uri: "http://astrothesaurus.org/uat/614",
      },
      {
        value: "Galaxy processes",
        label: "Galactic processes (Galaxy processes)",
        uri: "http://astrothesaurus.org/uat/614",
      },
      {
        value: "Galaxy processes",
        label: "Galactic motion (Galaxy processes)",
        uri: "http://astrothesaurus.org/uat/614",
      },
      {
        value: "Antarctic observatories",
        label: "Antarctic observatories",
        uri: "http://astrothesaurus.org/uat/47",
      },
      {
        value: "Photoelectron spectroscopy",
        label: "Photoelectron spectroscopy",
        uri: "http://astrothesaurus.org/uat/2097",
      },
      {
        value: "Intergalactic medium phases",
        label: "Intergalactic medium phases",
        uri: "http://astrothesaurus.org/uat/814",
      },
      {
        value: "Ozone layer",
        label: "Ozone layer",
        uri: "http://astrothesaurus.org/uat/1194",
      },
      {
        value: "Young disk Cepheid variable stars",
        label: "Young disk Cepheid variable stars",
        uri: "http://astrothesaurus.org/uat/1832",
      },
      {
        value: "Young disk Cepheid variable stars",
        label: "Young disk Cepheids (Young disk Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/1832",
      },
      {
        value: "Young disk Cepheid variable stars",
        label: "Young disk Cepheid stars (Young disk Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/1832",
      },
      {
        value: "Young disk Cepheid variable stars",
        label: "Young disc cepheid (Young disk Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/1832",
      },
      {
        value: "Young disk Cepheid variable stars",
        label: "Young disk Cepheid variables (Young disk Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/1832",
      },
      {
        value: "Solar convective zone",
        label: "Solar convective zone",
        uri: "http://astrothesaurus.org/uat/1998",
      },
      {
        value: "Stellar phenomena",
        label: "Stellar phenomena",
        uri: "http://astrothesaurus.org/uat/1619",
      },
      {
        value: "Earth (planet)",
        label: "Earth (planet)",
        uri: "http://astrothesaurus.org/uat/439",
      },
      {
        value: "Earth (planet)",
        label: "Planet Earth (Earth (planet))",
        uri: "http://astrothesaurus.org/uat/439",
      },
      {
        value: "Almanacs",
        label: "Almanacs",
        uri: "http://astrothesaurus.org/uat/26",
      },
      {
        value: "Almanacs",
        label: "Almanachs (Almanacs)",
        uri: "http://astrothesaurus.org/uat/26",
      },
      {
        value: "Radical-radical recombination",
        label: "Radical-radical recombination",
        uri: "http://astrothesaurus.org/uat/1071",
      },
      {
        value: "Lunar gravitational field",
        label: "Lunar gravitational field",
        uri: "http://astrothesaurus.org/uat/956",
      },
      {
        value: "Lunar gravitational field",
        label: "Lunar gravity (Lunar gravitational field)",
        uri: "http://astrothesaurus.org/uat/956",
      },
      {
        value: "Extinction",
        label: "Extinction",
        uri: "http://astrothesaurus.org/uat/505",
      },
      {
        value: "Asteroid surfaces",
        label: "Asteroid surfaces",
        uri: "http://astrothesaurus.org/uat/2209",
      },
      {
        value: "Transit timing variation method",
        label: "Transit timing variation method",
        uri: "http://astrothesaurus.org/uat/1710",
      },
      {
        value: "Fireballs",
        label: "Fireballs",
        uri: "http://astrothesaurus.org/uat/538",
      },
      {
        value: "Pulsar planets",
        label: "Pulsar planets",
        uri: "http://astrothesaurus.org/uat/1304",
      },
      {
        value: "Solar radio emission",
        label: "Solar radio emission",
        uri: "http://astrothesaurus.org/uat/1522",
      },
      {
        value: "Galaxy tails",
        label: "Galaxy tails",
        uri: "http://astrothesaurus.org/uat/2125",
      },
      {
        value: "Solar differential rotation",
        label: "Solar differential rotation",
        uri: "http://astrothesaurus.org/uat/1996",
      },
      {
        value: "Galaxy rotation curves",
        label: "Galaxy rotation curves",
        uri: "http://astrothesaurus.org/uat/619",
      },
      {
        value: "Galaxy rotation curves",
        label: "Rotation curves (Galaxy rotation curves)",
        uri: "http://astrothesaurus.org/uat/619",
      },
      {
        value: "Galaxy equators",
        label: "Galaxy equators",
        uri: "http://astrothesaurus.org/uat/593",
      },
      {
        value: "Galaxy equators",
        label: "Galactic equators (Galaxy equators)",
        uri: "http://astrothesaurus.org/uat/593",
      },
      {
        value: "Field stars",
        label: "Field stars",
        uri: "http://astrothesaurus.org/uat/2103",
      },
      {
        value: "Irregular cadence",
        label: "Irregular cadence",
        uri: "http://astrothesaurus.org/uat/1953",
      },
      {
        value: "Atmospheric clouds",
        label: "Atmospheric clouds",
        uri: "http://astrothesaurus.org/uat/2180",
      },
      {
        value: "Interstellar masers",
        label: "Interstellar masers",
        uri: "http://astrothesaurus.org/uat/846",
      },
      {
        value: "Maunder minimum",
        label: "Maunder minimum",
        uri: "http://astrothesaurus.org/uat/1015",
      },
      {
        value: "Maunder minimum",
        label: "Prolonged sunspot minimum (Maunder minimum)",
        uri: "http://astrothesaurus.org/uat/1015",
      },
      {
        value: "Star forming regions",
        label: "Star forming regions",
        uri: "http://astrothesaurus.org/uat/1565",
      },
      {
        value: "Star forming regions",
        label: "Star formation regions (Star forming regions)",
        uri: "http://astrothesaurus.org/uat/1565",
      },
      {
        value: "Galilean satellites",
        label: "Galilean satellites",
        uri: "http://astrothesaurus.org/uat/627",
      },
      {
        value: "Galilean satellites",
        label: "Galilean moons (Galilean satellites)",
        uri: "http://astrothesaurus.org/uat/627",
      },
      {
        value: "Galilean satellites",
        label: "Callisto (Galilean satellites)",
        uri: "http://astrothesaurus.org/uat/627",
      },
      {
        value: "Stellar evolution",
        label: "Stellar evolution",
        uri: "http://astrothesaurus.org/uat/1599",
      },
      {
        value: "Stellar evolution",
        label: "Star cycle (Stellar evolution)",
        uri: "http://astrothesaurus.org/uat/1599",
      },
      {
        value: "Stellar evolution",
        label: "Stellar cycle (Stellar evolution)",
        uri: "http://astrothesaurus.org/uat/1599",
      },
      {
        value: "Stellar evolution",
        label: "Evolution of stars (Stellar evolution)",
        uri: "http://astrothesaurus.org/uat/1599",
      },
      {
        value: "DZ stars",
        label: "DZ stars",
        uri: "http://astrothesaurus.org/uat/1848",
      },
      {
        value: "DZ stars",
        label: "DZ white dwarf stars (DZ stars)",
        uri: "http://astrothesaurus.org/uat/1848",
      },
      {
        value: "DZ stars",
        label: "DZ white dwarf (DZ stars)",
        uri: "http://astrothesaurus.org/uat/1848",
      },
      {
        value: "Integrated magnitude",
        label: "Integrated magnitude",
        uri: "http://astrothesaurus.org/uat/800",
      },
      {
        value: "Integrated magnitude",
        label: "Total magnitude (Integrated magnitude)",
        uri: "http://astrothesaurus.org/uat/800",
      },
      {
        value: "Stellar F corona",
        label: "Stellar F corona",
        uri: "http://astrothesaurus.org/uat/515",
      },
      {
        value: "Stellar F corona",
        label: "Stellar F coronal regions (Stellar F corona)",
        uri: "http://astrothesaurus.org/uat/515",
      },
      {
        value: "Stellar F corona",
        label: "F components (Stellar F corona)",
        uri: "http://astrothesaurus.org/uat/515",
      },
      {
        value: "Recombination (cosmology)",
        label: "Recombination (cosmology)",
        uri: "http://astrothesaurus.org/uat/1365",
      },
      {
        value: "WC stars",
        label: "WC stars",
        uri: "http://astrothesaurus.org/uat/1793",
      },
      {
        value: "WC stars",
        label: "WC-type stars (WC stars)",
        uri: "http://astrothesaurus.org/uat/1793",
      },
      {
        value: "Gravitational deflection",
        label: "Gravitational deflection",
        uri: "http://astrothesaurus.org/uat/663",
      },
      {
        value: "Fast Fourier transform",
        label: "Fast Fourier transform",
        uri: "http://astrothesaurus.org/uat/1958",
      },
      {
        value: "Starlight polarization",
        label: "Starlight polarization",
        uri: "http://astrothesaurus.org/uat/1571",
      },
      {
        value: "Starlight polarization",
        label: "Star light polarization (Starlight polarization)",
        uri: "http://astrothesaurus.org/uat/1571",
      },
      {
        value: "Starlight polarization",
        label: "Starlight polarisation (Starlight polarization)",
        uri: "http://astrothesaurus.org/uat/1571",
      },
      {
        value: "Hierarchical cosmology",
        label: "Hierarchical cosmology",
        uri: "http://astrothesaurus.org/uat/730",
      },
      {
        value: "M stars",
        label: "M stars",
        uri: "http://astrothesaurus.org/uat/985",
      },
      {
        value: "M stars",
        label: "M-type stars (M stars)",
        uri: "http://astrothesaurus.org/uat/985",
      },
      {
        value: "M stars",
        label: "Class M stars (M stars)",
        uri: "http://astrothesaurus.org/uat/985",
      },
      {
        value: "Anthropic principle",
        label: "Anthropic principle",
        uri: "http://astrothesaurus.org/uat/48",
      },
      {
        value: "Chondrites",
        label: "Chondrites",
        uri: "http://astrothesaurus.org/uat/228",
      },
      {
        value: "Radiative transfer simulations",
        label: "Radiative transfer simulations",
        uri: "http://astrothesaurus.org/uat/1967",
      },
      {
        value: "Extragalactic radio sources",
        label: "Extragalactic radio sources",
        uri: "http://astrothesaurus.org/uat/508",
      },
      {
        value: "Tides",
        label: "Tides",
        uri: "http://astrothesaurus.org/uat/1702",
      },
      {
        value: "Astrophysical processes",
        label: "Astrophysical processes",
        uri: "http://astrothesaurus.org/uat/104",
      },
      {
        value: "Nested sampling",
        label: "Nested sampling",
        uri: "http://astrothesaurus.org/uat/1894",
      },
      {
        value: "Burst astrophysics",
        label: "Burst astrophysics",
        uri: "http://astrothesaurus.org/uat/187",
      },
      {
        value: "Internal waves",
        label: "Internal waves",
        uri: "http://astrothesaurus.org/uat/819",
      },
      {
        value: "Wormholes",
        label: "Wormholes",
        uri: "http://astrothesaurus.org/uat/1808",
      },
      {
        value: "Wormholes",
        label: "Einstein-Rosen Bridge (Wormholes)",
        uri: "http://astrothesaurus.org/uat/1808",
      },
      {
        value: "High angular resolution",
        label: "High angular resolution",
        uri: "http://astrothesaurus.org/uat/2167",
      },
      {
        value: "Atomic data benchmarking",
        label: "Atomic data benchmarking",
        uri: "http://astrothesaurus.org/uat/2064",
      },
      {
        value: "Walraven photometry",
        label: "Walraven photometry",
        uri: "http://astrothesaurus.org/uat/1785",
      },
      {
        value: "Walraven photometry",
        label: "Walraven photometric system (Walraven photometry)",
        uri: "http://astrothesaurus.org/uat/1785",
      },
      {
        value: "Walraven photometry",
        label: "V b l uw photometry (Walraven photometry)",
        uri: "http://astrothesaurus.org/uat/1785",
      },
      {
        value: "Hypervelocity stars",
        label: "Hypervelocity stars",
        uri: "http://astrothesaurus.org/uat/776",
      },
      {
        value: "Proton-proton reaction",
        label: "Proton-proton reaction",
        uri: "http://astrothesaurus.org/uat/1299",
      },
      {
        value: "Proton-proton reaction",
        label: "Proton proton cycle (Proton-proton reaction)",
        uri: "http://astrothesaurus.org/uat/1299",
      },
      {
        value: "Proton-proton reaction",
        label: "Proton proton reaction (Proton-proton reaction)",
        uri: "http://astrothesaurus.org/uat/1299",
      },
      {
        value: "Proton-proton reaction",
        label: "Proton-proton cycle (Proton-proton reaction)",
        uri: "http://astrothesaurus.org/uat/1299",
      },
      { value: "Io", label: "Io", uri: "http://astrothesaurus.org/uat/2190" },
      {
        value: "Io",
        label: "Jupiter I (Io)",
        uri: "http://astrothesaurus.org/uat/2190",
      },
      {
        value: "Lunar magnetic fields",
        label: "Lunar magnetic fields",
        uri: "http://astrothesaurus.org/uat/960",
      },
      {
        value: "RR Lyrae variable stars",
        label: "RR Lyrae variable stars",
        uri: "http://astrothesaurus.org/uat/1410",
      },
      {
        value: "RR Lyrae variable stars",
        label: "Cluster type variable stars (RR Lyrae variable stars)",
        uri: "http://astrothesaurus.org/uat/1410",
      },
      {
        value: "RR Lyrae variable stars",
        label: "RR Lyrae type variable stars (RR Lyrae variable stars)",
        uri: "http://astrothesaurus.org/uat/1410",
      },
      {
        value: "RR Lyrae variable stars",
        label: "Bailey type stars (RR Lyrae variable stars)",
        uri: "http://astrothesaurus.org/uat/1410",
      },
      {
        value: "RR Lyrae variable stars",
        label: "RR Lyrae variables (RR Lyrae variable stars)",
        uri: "http://astrothesaurus.org/uat/1410",
      },
      {
        value: "RR Lyrae variable stars",
        label: "RR Lyrae (RR Lyrae variable stars)",
        uri: "http://astrothesaurus.org/uat/1410",
      },
      {
        value: "Planetary ring divisions",
        label: "Planetary ring divisions",
        uri: "http://astrothesaurus.org/uat/1253",
      },
      {
        value: "Planetary ring divisions",
        label: "Cassini's Division (Planetary ring divisions)",
        uri: "http://astrothesaurus.org/uat/1253",
      },
      {
        value: "Planetary ring divisions",
        label: "Cassini ring division (Planetary ring divisions)",
        uri: "http://astrothesaurus.org/uat/1253",
      },
      {
        value: "Planetary ring divisions",
        label: "Saturn ring division (Planetary ring divisions)",
        uri: "http://astrothesaurus.org/uat/1253",
      },
      {
        value: "Neutral coma gases",
        label: "Neutral coma gases",
        uri: "http://astrothesaurus.org/uat/2158",
      },
      {
        value: "Search for extraterrestrial intelligence",
        label: "Search for extraterrestrial intelligence",
        uri: "http://astrothesaurus.org/uat/2127",
      },
      {
        value: "Search for extraterrestrial intelligence",
        label: "SETI (Search for extraterrestrial intelligence)",
        uri: "http://astrothesaurus.org/uat/2127",
      },
      {
        value: "Big Bang theory",
        label: "Big Bang theory",
        uri: "http://astrothesaurus.org/uat/152",
      },
      {
        value: "Maximum likelihood estimation",
        label: "Maximum likelihood estimation",
        uri: "http://astrothesaurus.org/uat/1901",
      },
      {
        value: "Maximum likelihood estimation",
        label: "MLE (Maximum likelihood estimation)",
        uri: "http://astrothesaurus.org/uat/1901",
      },
      {
        value: "Sky surveys",
        label: "Sky surveys",
        uri: "http://astrothesaurus.org/uat/1464",
      },
      {
        value: "Extreme horizontal branch stars",
        label: "Extreme horizontal branch stars",
        uri: "http://astrothesaurus.org/uat/513",
      },
      {
        value: "Moldavites",
        label: "Moldavites",
        uri: "http://astrothesaurus.org/uat/1070",
      },
      {
        value: "Newtonian gravitation",
        label: "Newtonian gravitation",
        uri: "http://astrothesaurus.org/uat/1110",
      },
      {
        value: "Spokes",
        label: "Spokes",
        uri: "http://astrothesaurus.org/uat/1562",
      },
      {
        value: "CCD observation",
        label: "CCD observation",
        uri: "http://astrothesaurus.org/uat/207",
      },
      {
        value: "RRc variable stars",
        label: "RRc variable stars",
        uri: "http://astrothesaurus.org/uat/1415",
      },
      {
        value: "RRc variable stars",
        label: "Bailey type c stars (RRc variable stars)",
        uri: "http://astrothesaurus.org/uat/1415",
      },
      {
        value: "RRc variable stars",
        label: "RRc stars (RRc variable stars)",
        uri: "http://astrothesaurus.org/uat/1415",
      },
      {
        value: "Symbiotic binary stars",
        label: "Symbiotic binary stars",
        uri: "http://astrothesaurus.org/uat/1674",
      },
      {
        value: "Symbiotic binary stars",
        label: "Symbiotic stars (Symbiotic binary stars)",
        uri: "http://astrothesaurus.org/uat/1674",
      },
      {
        value: "Symbiotic binary stars",
        label: "Symbiotic binaries (Symbiotic binary stars)",
        uri: "http://astrothesaurus.org/uat/1674",
      },
      {
        value: "Scaling relations",
        label: "Scaling relations",
        uri: "http://astrothesaurus.org/uat/2031",
      },
      {
        value: "Bondi accretion",
        label: "Bondi accretion",
        uri: "http://astrothesaurus.org/uat/174",
      },
      {
        value: "Bondi accretion",
        label: "Bondi-Hoyle accretion (Bondi accretion)",
        uri: "http://astrothesaurus.org/uat/174",
      },
      {
        value: "Infrared Astronomical Satellite",
        label: "Infrared Astronomical Satellite",
        uri: "http://astrothesaurus.org/uat/785",
      },
      {
        value: "Infrared Astronomical Satellite",
        label: "IRAS (Infrared Astronomical Satellite)",
        uri: "http://astrothesaurus.org/uat/785",
      },
      {
        value: "Opik theory",
        label: "Opik theory",
        uri: "http://astrothesaurus.org/uat/1162",
      },
      {
        value: "Opik theory",
        label: "Opik's theory (Opik theory)",
        uri: "http://astrothesaurus.org/uat/1162",
      },
      {
        value: "Opik theory",
        label: "Ã–pik theory (Opik theory)",
        uri: "http://astrothesaurus.org/uat/1162",
      },
      {
        value: "Opik theory",
        label: "Ã–pik's theory (Opik theory)",
        uri: "http://astrothesaurus.org/uat/1162",
      },
      {
        value: "H I line emission",
        label: "H I line emission",
        uri: "http://astrothesaurus.org/uat/690",
      },
      {
        value: "H I line emission",
        label: "HI line (H I line emission)",
        uri: "http://astrothesaurus.org/uat/690",
      },
      {
        value: "H I line emission",
        label: "21-cm lines (H I line emission)",
        uri: "http://astrothesaurus.org/uat/690",
      },
      {
        value: "H I line emission",
        label: "H I lines (H I line emission)",
        uri: "http://astrothesaurus.org/uat/690",
      },
      {
        value: "H I line emission",
        label: "21 cm lines (H I line emission)",
        uri: "http://astrothesaurus.org/uat/690",
      },
      {
        value: "H I line emission",
        label: "Hydrogen lines (H I line emission)",
        uri: "http://astrothesaurus.org/uat/690",
      },
      {
        value: "H I line emission",
        label: "21-cm line emissions (H I line emission)",
        uri: "http://astrothesaurus.org/uat/690",
      },
      {
        value: "H I line emission",
        label: "H1 line emission (H I line emission)",
        uri: "http://astrothesaurus.org/uat/690",
      },
      {
        value: "Infrared telescopes",
        label: "Infrared telescopes",
        uri: "http://astrothesaurus.org/uat/794",
      },
      {
        value: "Infrared telescopes",
        label: "IR telescopes (Infrared telescopes)",
        uri: "http://astrothesaurus.org/uat/794",
      },
      {
        value: "Gravitation",
        label: "Gravitation",
        uri: "http://astrothesaurus.org/uat/661",
      },
      {
        value: "Gravitation",
        label: "Gravitational force (Gravitation)",
        uri: "http://astrothesaurus.org/uat/661",
      },
      {
        value: "Gravitation",
        label: "Gravity (Gravitation)",
        uri: "http://astrothesaurus.org/uat/661",
      },
      {
        value: "Solar neighborhood",
        label: "Solar neighborhood",
        uri: "http://astrothesaurus.org/uat/1509",
      },
      {
        value: "Solar neighborhood",
        label: "Solar neighbourhood (Solar neighborhood)",
        uri: "http://astrothesaurus.org/uat/1509",
      },
      {
        value: "Amor group",
        label: "Amor group",
        uri: "http://astrothesaurus.org/uat/36",
      },
      {
        value: "Amor group",
        label: "Amor asteroids (Amor group)",
        uri: "http://astrothesaurus.org/uat/36",
      },
      {
        value: "Neutrino telescopes",
        label: "Neutrino telescopes",
        uri: "http://astrothesaurus.org/uat/1105",
      },
      {
        value: "SRb variable stars",
        label: "SRb variable stars",
        uri: "http://astrothesaurus.org/uat/2011",
      },
      {
        value: "SRb variable stars",
        label: "SRb stars (SRb variable stars)",
        uri: "http://astrothesaurus.org/uat/2011",
      },
      {
        value: "SRb variable stars",
        label: "SRB stars (SRb variable stars)",
        uri: "http://astrothesaurus.org/uat/2011",
      },
      {
        value: "RGU photometry",
        label: "RGU photometry",
        uri: "http://astrothesaurus.org/uat/1398",
      },
      {
        value: "Open universe",
        label: "Open universe",
        uri: "http://astrothesaurus.org/uat/1161",
      },
      {
        value: "Double galaxies",
        label: "Double galaxies",
        uri: "http://astrothesaurus.org/uat/405",
      },
      {
        value: "Double galaxies",
        label: "Binary galaxies (Double galaxies)",
        uri: "http://astrothesaurus.org/uat/405",
      },
      {
        value: "Ocean-atmosphere interactions",
        label: "Ocean-atmosphere interactions",
        uri: "http://astrothesaurus.org/uat/1150",
      },
      {
        value: "Sociology of astronomy",
        label: "Sociology of astronomy",
        uri: "http://astrothesaurus.org/uat/1470",
      },
      {
        value: "F subgiant stars",
        label: "F subgiant stars",
        uri: "http://astrothesaurus.org/uat/521",
      },
      {
        value: "F subgiant stars",
        label: "F-type subgiant stars (F subgiant stars)",
        uri: "http://astrothesaurus.org/uat/521",
      },
      {
        value: "F subgiant stars",
        label: "F subgiants (F subgiant stars)",
        uri: "http://astrothesaurus.org/uat/521",
      },
      {
        value: "F subgiant stars",
        label: "F-type subgiants (F subgiant stars)",
        uri: "http://astrothesaurus.org/uat/521",
      },
      {
        value: "Kullback-Leibler distance",
        label: "Kullback-Leibler distance",
        uri: "http://astrothesaurus.org/uat/1923",
      },
      {
        value: "Galaxy bulges",
        label: "Galaxy bulges",
        uri: "http://astrothesaurus.org/uat/578",
      },
      {
        value: "Atmospheric science",
        label: "Atmospheric science",
        uri: "http://astrothesaurus.org/uat/116",
      },
      {
        value: "B subgiant stars",
        label: "B subgiant stars",
        uri: "http://astrothesaurus.org/uat/125",
      },
      {
        value: "B subgiant stars",
        label: "B-type subgiants (B subgiant stars)",
        uri: "http://astrothesaurus.org/uat/125",
      },
      {
        value: "B subgiant stars",
        label: "B-type subgiant stars (B subgiant stars)",
        uri: "http://astrothesaurus.org/uat/125",
      },
      {
        value: "B subgiant stars",
        label: "B subgiants (B subgiant stars)",
        uri: "http://astrothesaurus.org/uat/125",
      },
      {
        value: "Gamma-ray observatories",
        label: "Gamma-ray observatories",
        uri: "http://astrothesaurus.org/uat/632",
      },
      {
        value: "Gamma-ray observatories",
        label: "Gamma ray observatories (Gamma-ray observatories)",
        uri: "http://astrothesaurus.org/uat/632",
      },
      {
        value: "Stellar radii",
        label: "Stellar radii",
        uri: "http://astrothesaurus.org/uat/1626",
      },
      {
        value: "Stellar radii",
        label: "Stellar radius (Stellar radii)",
        uri: "http://astrothesaurus.org/uat/1626",
      },
      {
        value: "Chi-squared statistic",
        label: "Chi-squared statistic",
        uri: "http://astrothesaurus.org/uat/1921",
      },
      {
        value: "Gravitational wave astronomy",
        label: "Gravitational wave astronomy",
        uri: "http://astrothesaurus.org/uat/675",
      },
      {
        value: "Solar electromagnetic emission",
        label: "Solar electromagnetic emission",
        uri: "http://astrothesaurus.org/uat/1490",
      },
      {
        value: "Radio hot spots",
        label: "Radio hot spots",
        uri: "http://astrothesaurus.org/uat/1344",
      },
      {
        value: "Solar x-ray emission",
        label: "Solar x-ray emission",
        uri: "http://astrothesaurus.org/uat/1536",
      },
      {
        value: "Super Earths",
        label: "Super Earths",
        uri: "http://astrothesaurus.org/uat/1655",
      },
      {
        value: "Super Earths",
        label: "Super-Earths (Super Earths)",
        uri: "http://astrothesaurus.org/uat/1655",
      },
      {
        value: "Solstice",
        label: "Solstice",
        uri: "http://astrothesaurus.org/uat/1537",
      },
      {
        value: "X-ray surveys",
        label: "X-ray surveys",
        uri: "http://astrothesaurus.org/uat/1824",
      },
      {
        value: "Planetesimals",
        label: "Planetesimals",
        uri: "http://astrothesaurus.org/uat/1259",
      },
      {
        value: "Astronomical unit",
        label: "Astronomical unit",
        uri: "http://astrothesaurus.org/uat/95",
      },
      {
        value: "Astronomical unit",
        label: "au (Astronomical unit)",
        uri: "http://astrothesaurus.org/uat/95",
      },
      {
        value: "Astronomical unit",
        label: "AU (Astronomical unit)",
        uri: "http://astrothesaurus.org/uat/95",
      },
      {
        value: "Rapidly oscillating Ap star",
        label: "Rapidly oscillating Ap star",
        uri: "http://astrothesaurus.org/uat/27",
      },
      {
        value: "Rapidly oscillating Ap star",
        label: "roAp stars (Rapidly oscillating Ap star)",
        uri: "http://astrothesaurus.org/uat/27",
      },
      {
        value: "Rapidly oscillating Ap star",
        label: "Alpha2 Canum Venaticorum stars (Rapidly oscillating Ap star)",
        uri: "http://astrothesaurus.org/uat/27",
      },
      {
        value: "Rapidly oscillating Ap star",
        label: "Alpha2 CVn stars (Rapidly oscillating Ap star)",
        uri: "http://astrothesaurus.org/uat/27",
      },
      {
        value: "Photometric standard stars",
        label: "Photometric standard stars",
        uri: "http://astrothesaurus.org/uat/1232",
      },
      {
        value: "Chlorofluorocarbons",
        label: "Chlorofluorocarbons",
        uri: "http://astrothesaurus.org/uat/227",
      },
      {
        value: "Quasar microlensing",
        label: "Quasar microlensing",
        uri: "http://astrothesaurus.org/uat/1318",
      },
      {
        value: "Exoplanet catalogs",
        label: "Exoplanet catalogs",
        uri: "http://astrothesaurus.org/uat/488",
      },
      {
        value: "Cosmological parameters from large-scale structure",
        label: "Cosmological parameters from large-scale structure",
        uri: "http://astrothesaurus.org/uat/340",
      },
      {
        value: "Cosmological parameters from large-scale structure",
        label:
          "Cosmological parameters from large scale structure (Cosmological parameters from large-scale structure)",
        uri: "http://astrothesaurus.org/uat/340",
      },
      {
        value: "Cosmological parameters from large-scale structure",
        label:
          "Cosmological parameters from LSS (Cosmological parameters from large-scale structure)",
        uri: "http://astrothesaurus.org/uat/340",
      },
      {
        value: "Space plasmas",
        label: "Space plasmas",
        uri: "http://astrothesaurus.org/uat/1544",
      },
      {
        value: "Space plasmas",
        label: "Astrophysical plasmas (Space plasmas)",
        uri: "http://astrothesaurus.org/uat/1544",
      },
      {
        value: "Interstellar thermal emission",
        label: "Interstellar thermal emission",
        uri: "http://astrothesaurus.org/uat/857",
      },
      {
        value: "Multi-periodic variable stars",
        label: "Multi-periodic variable stars",
        uri: "http://astrothesaurus.org/uat/1079",
      },
      {
        value: "Multi-periodic variable stars",
        label: "Multiperiodic variable stars (Multi-periodic variable stars)",
        uri: "http://astrothesaurus.org/uat/1079",
      },
      {
        value: "N-body problem",
        label: "N-body problem",
        uri: "http://astrothesaurus.org/uat/1082",
      },
      {
        value: "N-body problem",
        label: "N body problem (N-body problem)",
        uri: "http://astrothesaurus.org/uat/1082",
      },
      {
        value: "Hertzsprung gap",
        label: "Hertzsprung gap",
        uri: "http://astrothesaurus.org/uat/724",
      },
      {
        value: "Stellar coronal mass ejections",
        label: "Stellar coronal mass ejections",
        uri: "http://astrothesaurus.org/uat/1881",
      },
      {
        value: "Stellar coronal mass ejections",
        label: "Stellar CME (Stellar coronal mass ejections)",
        uri: "http://astrothesaurus.org/uat/1881",
      },
      {
        value: "Natural satellites (Solar system)",
        label: "Natural satellites (Solar system)",
        uri: "http://astrothesaurus.org/uat/1089",
      },
      {
        value: "Natural satellites (Solar system)",
        label: "Secondary planets (Natural satellites (Solar system))",
        uri: "http://astrothesaurus.org/uat/1089",
      },
      {
        value: "Natural satellites (Solar system)",
        label: "Planet satellites (Natural satellites (Solar system))",
        uri: "http://astrothesaurus.org/uat/1089",
      },
      {
        value: "Natural satellites (Solar system)",
        label: "Moons (Solar system) (Natural satellites (Solar system))",
        uri: "http://astrothesaurus.org/uat/1089",
      },
      {
        value: "Natural satellites (Solar system)",
        label: "Planetary satellites (Natural satellites (Solar system))",
        uri: "http://astrothesaurus.org/uat/1089",
      },
      {
        value: "Rovers",
        label: "Rovers",
        uri: "http://astrothesaurus.org/uat/1409",
      },
      {
        value: "Altitude angle",
        label: "Altitude angle",
        uri: "http://astrothesaurus.org/uat/30",
      },
      {
        value: "Altitude angle",
        label: "Elevation angle (Altitude angle)",
        uri: "http://astrothesaurus.org/uat/30",
      },
      {
        value: "Hypernovae",
        label: "Hypernovae",
        uri: "http://astrothesaurus.org/uat/775",
      },
      {
        value: "Hypernovae",
        label: "Hypernova (Hypernovae)",
        uri: "http://astrothesaurus.org/uat/775",
      },
      {
        value: "OB stars",
        label: "OB stars",
        uri: "http://astrothesaurus.org/uat/1141",
      },
      {
        value: "OB stars",
        label: "OB-type stars (OB stars)",
        uri: "http://astrothesaurus.org/uat/1141",
      },
      {
        value: "T associations",
        label: "T associations",
        uri: "http://astrothesaurus.org/uat/1678",
      },
      {
        value: "T associations",
        label: "T-association (T associations)",
        uri: "http://astrothesaurus.org/uat/1678",
      },
      {
        value: "Elliptical galaxies",
        label: "Elliptical galaxies",
        uri: "http://astrothesaurus.org/uat/456",
      },
      {
        value: "Elliptical galaxies",
        label: "E galaxies (Elliptical galaxies)",
        uri: "http://astrothesaurus.org/uat/456",
      },
      {
        value: "Ultracompact dwarf galaxies",
        label: "Ultracompact dwarf galaxies",
        uri: "http://astrothesaurus.org/uat/1734",
      },
      {
        value: "Charge exchange ionization",
        label: "Charge exchange ionization",
        uri: "http://astrothesaurus.org/uat/2056",
      },
      {
        value: "Evaporating gaseous globules",
        label: "Evaporating gaseous globules",
        uri: "http://astrothesaurus.org/uat/478",
      },
      {
        value: "Solar prominences",
        label: "Solar prominences",
        uri: "http://astrothesaurus.org/uat/1519",
      },
      {
        value: "Solar prominences",
        label: "Solar prominence (Solar prominences)",
        uri: "http://astrothesaurus.org/uat/1519",
      },
      {
        value: "Solar prominences",
        label: "Prominence (Solar prominences)",
        uri: "http://astrothesaurus.org/uat/1519",
      },
      {
        value: "Solar prominences",
        label: "Solar eruptions (Solar prominences)",
        uri: "http://astrothesaurus.org/uat/1519",
      },
      {
        value: "Solar prominences",
        label: "Solar prominence eruptions (Solar prominences)",
        uri: "http://astrothesaurus.org/uat/1519",
      },
      {
        value: "Interferometric binary stars",
        label: "Interferometric binary stars",
        uri: "http://astrothesaurus.org/uat/806",
      },
      {
        value: "Interferometric binary stars",
        label: "Interferometric binaries (Interferometric binary stars)",
        uri: "http://astrothesaurus.org/uat/806",
      },
      {
        value: "Interstellar emissions",
        label: "Interstellar emissions",
        uri: "http://astrothesaurus.org/uat/840",
      },
      {
        value: "Interstellar emissions",
        label: "Interstellar infrared emissions (Interstellar emissions)",
        uri: "http://astrothesaurus.org/uat/840",
      },
      {
        value: "Interstellar emissions",
        label: "Interstellar electromagnetic emissions (Interstellar emissions)",
        uri: "http://astrothesaurus.org/uat/840",
      },
      {
        value: "Interstellar emissions",
        label: "Interstellar optical emissions (Interstellar emissions)",
        uri: "http://astrothesaurus.org/uat/840",
      },
      {
        value: "Red giant branch",
        label: "Red giant branch",
        uri: "http://astrothesaurus.org/uat/1368",
      },
      {
        value: "Relativistic stars",
        label: "Relativistic stars",
        uri: "http://astrothesaurus.org/uat/1392",
      },
      {
        value: "F layer",
        label: "F layer",
        uri: "http://astrothesaurus.org/uat/518",
      },
      {
        value: "F layer",
        label: "Appleton layer (F layer)",
        uri: "http://astrothesaurus.org/uat/518",
      },
      {
        value: "Plasmapause",
        label: "Plasmapause",
        uri: "http://astrothesaurus.org/uat/1264",
      },
      {
        value: "Detection",
        label: "Detection",
        uri: "http://astrothesaurus.org/uat/1911",
      },
      {
        value: "Planetary cores",
        label: "Planetary cores",
        uri: "http://astrothesaurus.org/uat/1247",
      },
      {
        value: "Cosmochemistry",
        label: "Cosmochemistry",
        uri: "http://astrothesaurus.org/uat/331",
      },
      {
        value: "Cosmochemistry",
        label: "Cosmic chemistry (Cosmochemistry)",
        uri: "http://astrothesaurus.org/uat/331",
      },
      {
        value: "Cosmochemistry",
        label: "Chemical cosmology (Cosmochemistry)",
        uri: "http://astrothesaurus.org/uat/331",
      },
      {
        value: "Van Allen radiation belts",
        label: "Van Allen radiation belts",
        uri: "http://astrothesaurus.org/uat/1758",
      },
      {
        value: "Van Allen radiation belts",
        label: "Van Allen belts (Van Allen radiation belts)",
        uri: "http://astrothesaurus.org/uat/1758",
      },
      {
        value: "Van Allen radiation belts",
        label: "Radiation belts (Van Allen radiation belts)",
        uri: "http://astrothesaurus.org/uat/1758",
      },
      {
        value: "Diurnal parallax",
        label: "Diurnal parallax",
        uri: "http://astrothesaurus.org/uat/396",
      },
      {
        value: "Diurnal parallax",
        label: "Geocentric parallax (Diurnal parallax)",
        uri: "http://astrothesaurus.org/uat/396",
      },
      {
        value: "Dark matter distribution",
        label: "Dark matter distribution",
        uri: "http://astrothesaurus.org/uat/356",
      },
      {
        value: "Annual parallax",
        label: "Annual parallax",
        uri: "http://astrothesaurus.org/uat/42",
      },
      {
        value: "Annual parallax",
        label: "Heliocentric parallax (Annual parallax)",
        uri: "http://astrothesaurus.org/uat/42",
      },
      {
        value: "Finding charts",
        label: "Finding charts",
        uri: "http://astrothesaurus.org/uat/536",
      },
      { value: "Ansae", label: "Ansae", uri: "http://astrothesaurus.org/uat/45" },
      {
        value: "Ansae",
        label: "Ansa (Ansae)",
        uri: "http://astrothesaurus.org/uat/45",
      },
      {
        value: "Relativistic binary stars",
        label: "Relativistic binary stars",
        uri: "http://astrothesaurus.org/uat/1386",
      },
      {
        value: "Relativistic binary stars",
        label: "Relativistic binary (Relativistic binary stars)",
        uri: "http://astrothesaurus.org/uat/1386",
      },
      {
        value: "Relativistic binary stars",
        label: "Relativistic binaries (Relativistic binary stars)",
        uri: "http://astrothesaurus.org/uat/1386",
      },
      {
        value: "Lemaitre universe",
        label: "Lemaitre universe",
        uri: "http://astrothesaurus.org/uat/914",
      },
      {
        value: "Lemaitre universe",
        label: "LemaÃ®tre universe (Lemaitre universe)",
        uri: "http://astrothesaurus.org/uat/914",
      },
      {
        value: "Star clusters",
        label: "Star clusters",
        uri: "http://astrothesaurus.org/uat/1567",
      },
      {
        value: "Star clusters",
        label: "Star clouds (Star clusters)",
        uri: "http://astrothesaurus.org/uat/1567",
      },
      {
        value: "Star clusters",
        label: "Cluster of stars (Star clusters)",
        uri: "http://astrothesaurus.org/uat/1567",
      },
      {
        value: "Space vehicle instruments",
        label: "Space vehicle instruments",
        uri: "http://astrothesaurus.org/uat/1548",
      },
      {
        value: "Space vehicle instruments",
        label: "Space vehicle instrumentation (Space vehicle instruments)",
        uri: "http://astrothesaurus.org/uat/1548",
      },
      {
        value: "Polar jets",
        label: "Polar jets",
        uri: "http://astrothesaurus.org/uat/1274",
      },
      {
        value: "Solar parallax",
        label: "Solar parallax",
        uri: "http://astrothesaurus.org/uat/1516",
      },
      {
        value: "Galaxy groups",
        label: "Galaxy groups",
        uri: "http://astrothesaurus.org/uat/597",
      },
      {
        value: "High resolution spectroscopy",
        label: "High resolution spectroscopy",
        uri: "http://astrothesaurus.org/uat/2096",
      },
      {
        value: "Milky Way dynamics",
        label: "Milky Way dynamics",
        uri: "http://astrothesaurus.org/uat/1051",
      },
      {
        value: "Milky Way dynamics",
        label: "Dynamics of the Milky Way (Milky Way dynamics)",
        uri: "http://astrothesaurus.org/uat/1051",
      },
      {
        value: "Milky Way dynamics",
        label: "Milky Way Galaxy dynamics (Milky Way dynamics)",
        uri: "http://astrothesaurus.org/uat/1051",
      },
      {
        value: "Mars trojans",
        label: "Mars trojans",
        uri: "http://astrothesaurus.org/uat/1008",
      },
      { value: "Mars", label: "Mars", uri: "http://astrothesaurus.org/uat/1007" },
      {
        value: "Microlensing event rate",
        label: "Microlensing event rate",
        uri: "http://astrothesaurus.org/uat/2146",
      },
      {
        value: "Short period comets",
        label: "Short period comets",
        uri: "http://astrothesaurus.org/uat/1452",
      },
      {
        value: "Short period comets",
        label: "Periodic comets (Short period comets)",
        uri: "http://astrothesaurus.org/uat/1452",
      },
      {
        value: "Short period comets",
        label: "Short-period comet (Short period comets)",
        uri: "http://astrothesaurus.org/uat/1452",
      },
      {
        value: "Long period variable stars",
        label: "Long period variable stars",
        uri: "http://astrothesaurus.org/uat/935",
      },
      {
        value: "Long period variable stars",
        label: "Long period variables (Long period variable stars)",
        uri: "http://astrothesaurus.org/uat/935",
      },
      {
        value: "Long period variable stars",
        label: "Long-period variables (Long period variable stars)",
        uri: "http://astrothesaurus.org/uat/935",
      },
      {
        value: "Hubble radius",
        label: "Hubble radius",
        uri: "http://astrothesaurus.org/uat/760",
      },
      {
        value: "Planetary nebulae nuclei",
        label: "Planetary nebulae nuclei",
        uri: "http://astrothesaurus.org/uat/1250",
      },
      {
        value: "Planetary nebulae nuclei",
        label: "Nucleus of planetary nebula (Planetary nebulae nuclei)",
        uri: "http://astrothesaurus.org/uat/1250",
      },
      {
        value: "Planetary nebulae nuclei",
        label: "Planetary nebula nuclei (Planetary nebulae nuclei)",
        uri: "http://astrothesaurus.org/uat/1250",
      },
      {
        value: "Planetary nebulae nuclei",
        label: "Nuclei of planetary nebulae (Planetary nebulae nuclei)",
        uri: "http://astrothesaurus.org/uat/1250",
      },
      {
        value: "Cosmological constant",
        label: "Cosmological constant",
        uri: "http://astrothesaurus.org/uat/334",
      },
      {
        value: "Cosmological constant",
        label: "Lambda (Cosmological constant)",
        uri: "http://astrothesaurus.org/uat/334",
      },
      {
        value: "Exoplanet formation",
        label: "Exoplanet formation",
        uri: "http://astrothesaurus.org/uat/492",
      },
      {
        value: "Cape photometry",
        label: "Cape photometry",
        uri: "http://astrothesaurus.org/uat/192",
      },
      {
        value: "Cape photometry",
        label: "UCBVc BV photometry (Cape photometry)",
        uri: "http://astrothesaurus.org/uat/192",
      },
      {
        value: "Doppler imaging",
        label: "Doppler imaging",
        uri: "http://astrothesaurus.org/uat/400",
      },
      {
        value: "Doppler imaging",
        label: "Doppler-imaging (Doppler imaging)",
        uri: "http://astrothesaurus.org/uat/400",
      },
      {
        value: "Natural satellite atmospheres",
        label: "Natural satellite atmospheres",
        uri: "http://astrothesaurus.org/uat/2214",
      },
      {
        value: "Azimuth",
        label: "Azimuth",
        uri: "http://astrothesaurus.org/uat/124",
      },
      {
        value: "Azimuth",
        label: "Bearing (Azimuth)",
        uri: "http://astrothesaurus.org/uat/124",
      },
      {
        value: "Narrow band photometry",
        label: "Narrow band photometry",
        uri: "http://astrothesaurus.org/uat/1088",
      },
      {
        value: "White dwarf stars",
        label: "White dwarf stars",
        uri: "http://astrothesaurus.org/uat/1799",
      },
      {
        value: "White dwarf stars",
        label: "Degenerate dwarf (White dwarf stars)",
        uri: "http://astrothesaurus.org/uat/1799",
      },
      {
        value: "White dwarf stars",
        label: "White dwarfs (White dwarf stars)",
        uri: "http://astrothesaurus.org/uat/1799",
      },
      {
        value: "White dwarf stars",
        label: "Degenerate dwarf stars (White dwarf stars)",
        uri: "http://astrothesaurus.org/uat/1799",
      },
      {
        value: "Landers",
        label: "Landers",
        uri: "http://astrothesaurus.org/uat/901",
      },
      {
        value: "Celestial sphere",
        label: "Celestial sphere",
        uri: "http://astrothesaurus.org/uat/214",
      },
      {
        value: "Astronomical models",
        label: "Astronomical models",
        uri: "http://astrothesaurus.org/uat/86",
      },
      {
        value: "Collisional broadening",
        label: "Collisional broadening",
        uri: "http://astrothesaurus.org/uat/2083",
      },
      {
        value: "Variable stars",
        label: "Variable stars",
        uri: "http://astrothesaurus.org/uat/1761",
      },
      {
        value: "Variable stars",
        label: "Variables (Variable stars)",
        uri: "http://astrothesaurus.org/uat/1761",
      },
      {
        value: "Ap stars",
        label: "Ap stars",
        uri: "http://astrothesaurus.org/uat/50",
      },
      {
        value: "Ap stars",
        label: "Ap-type stars (Ap stars)",
        uri: "http://astrothesaurus.org/uat/50",
      },
      {
        value: "Ap stars",
        label: "Peculiar A stars (Ap stars)",
        uri: "http://astrothesaurus.org/uat/50",
      },
      {
        value: "Ap stars",
        label: "Peculiar A-type stars (Ap stars)",
        uri: "http://astrothesaurus.org/uat/50",
      },
      {
        value: "Radio pulsars",
        label: "Radio pulsars",
        uri: "http://astrothesaurus.org/uat/1353",
      },
      {
        value: "Photographic magnitude",
        label: "Photographic magnitude",
        uri: "http://astrothesaurus.org/uat/1228",
      },
      {
        value: "Interplanetary grains",
        label: "Interplanetary grains",
        uri: "http://astrothesaurus.org/uat/823",
      },
      {
        value: "Natural satellite formation",
        label: "Natural satellite formation",
        uri: "http://astrothesaurus.org/uat/1425",
      },
      {
        value: "Natural satellite formation",
        label: "Satellite formation (Natural satellite formation)",
        uri: "http://astrothesaurus.org/uat/1425",
      },
      {
        value: "Volcanism",
        label: "Volcanism",
        uri: "http://astrothesaurus.org/uat/2174",
      },
      {
        value: "Astronomical instrumentation",
        label: "Astronomical instrumentation",
        uri: "http://astrothesaurus.org/uat/799",
      },
      {
        value: "Astronomical instrumentation",
        label: "Instrumentation (Astronomical instrumentation)",
        uri: "http://astrothesaurus.org/uat/799",
      },
      {
        value: "Astronomical instrumentation",
        label: "Equipment and apparatus (Astronomical instrumentation)",
        uri: "http://astrothesaurus.org/uat/799",
      },
      {
        value: "OGLE small amplitude red giant stars",
        label: "OGLE small amplitude red giant stars",
        uri: "http://astrothesaurus.org/uat/2123",
      },
      {
        value: "OGLE small amplitude red giant stars",
        label: "OSARGs (OGLE small amplitude red giant stars)",
        uri: "http://astrothesaurus.org/uat/2123",
      },
      {
        value: "OGLE small amplitude red giant stars",
        label:
          "Optical gravitational lensing experiment small amplitude red giant stars (OGLE small amplitude red giant stars)",
        uri: "http://astrothesaurus.org/uat/2123",
      },
      {
        value: "OGLE small amplitude red giant stars",
        label:
          "Optical gravitational lensing experiment small amplitude red giants (OGLE small amplitude red giant stars)",
        uri: "http://astrothesaurus.org/uat/2123",
      },
      {
        value: "OGLE small amplitude red giant stars",
        label:
          "OGLE Small Amplitude Red Giants (OGLE small amplitude red giant stars)",
        uri: "http://astrothesaurus.org/uat/2123",
      },
      {
        value: "OGLE small amplitude red giant stars",
        label: "OSARG (OGLE small amplitude red giant stars)",
        uri: "http://astrothesaurus.org/uat/2123",
      },
      {
        value: "Small Magellanic Cloud",
        label: "Small Magellanic Cloud",
        uri: "http://astrothesaurus.org/uat/1468",
      },
      {
        value: "Small Magellanic Cloud",
        label: "S m c (Small Magellanic Cloud)",
        uri: "http://astrothesaurus.org/uat/1468",
      },
      {
        value: "Small Magellanic Cloud",
        label: "SMC (Small Magellanic Cloud)",
        uri: "http://astrothesaurus.org/uat/1468",
      },
      {
        value: "Classification systems",
        label: "Classification systems",
        uri: "http://astrothesaurus.org/uat/253",
      },
      {
        value: "X-ray photometry",
        label: "X-ray photometry",
        uri: "http://astrothesaurus.org/uat/1820",
      },
      {
        value: "K giant stars",
        label: "K giant stars",
        uri: "http://astrothesaurus.org/uat/877",
      },
      {
        value: "K giant stars",
        label: "K-type giants (K giant stars)",
        uri: "http://astrothesaurus.org/uat/877",
      },
      {
        value: "K giant stars",
        label: "K giants (K giant stars)",
        uri: "http://astrothesaurus.org/uat/877",
      },
      {
        value: "K giant stars",
        label: "K-type giant stars (K giant stars)",
        uri: "http://astrothesaurus.org/uat/877",
      },
      {
        value: "Interstellar objects",
        label: "Interstellar objects",
        uri: "http://astrothesaurus.org/uat/52",
      },
      {
        value: "Interstellar objects",
        label: "Interstellar comets (Interstellar objects)",
        uri: "http://astrothesaurus.org/uat/52",
      },
      {
        value: "Interstellar objects",
        label: "Aperiodic comets (Interstellar objects)",
        uri: "http://astrothesaurus.org/uat/52",
      },
      {
        value: "Exoplanet rings",
        label: "Exoplanet rings",
        uri: "http://astrothesaurus.org/uat/494",
      },
      {
        value: "Space weather",
        label: "Space weather",
        uri: "http://astrothesaurus.org/uat/2037",
      },
      {
        value: "Solar core",
        label: "Solar core",
        uri: "http://astrothesaurus.org/uat/1482",
      },
      {
        value: "Density wave model",
        label: "Density wave model",
        uri: "http://astrothesaurus.org/uat/373",
      },
      {
        value: "Density wave model",
        label: "Density wave theory (Density wave model)",
        uri: "http://astrothesaurus.org/uat/373",
      },
      {
        value: "Three-body problem",
        label: "Three-body problem",
        uri: "http://astrothesaurus.org/uat/1695",
      },
      {
        value: "Three-body problem",
        label: "Three body problem (Three-body problem)",
        uri: "http://astrothesaurus.org/uat/1695",
      },
      {
        value: "Marsden group",
        label: "Marsden group",
        uri: "http://astrothesaurus.org/uat/2201",
      },
      {
        value: "Marsden group",
        label: "Marsden sunskirters (Marsden group)",
        uri: "http://astrothesaurus.org/uat/2201",
      },
      {
        value: "Dwarf stars",
        label: "Dwarf stars",
        uri: "http://astrothesaurus.org/uat/2053",
      },
      {
        value: "W Virginis variable stars",
        label: "W Virginis variable stars",
        uri: "http://astrothesaurus.org/uat/1784",
      },
      {
        value: "W Virginis variable stars",
        label: "W-Virginis variables (W Virginis variable stars)",
        uri: "http://astrothesaurus.org/uat/1784",
      },
      {
        value: "W Virginis variable stars",
        label: "W Virginis stars (W Virginis variable stars)",
        uri: "http://astrothesaurus.org/uat/1784",
      },
      {
        value: "W Virginis variable stars",
        label: "W Virginis variables (W Virginis variable stars)",
        uri: "http://astrothesaurus.org/uat/1784",
      },
      {
        value: "Population III stars",
        label: "Population III stars",
        uri: "http://astrothesaurus.org/uat/1285",
      },
      {
        value: "Population III stars",
        label: "Metal free stars (Population III stars)",
        uri: "http://astrothesaurus.org/uat/1285",
      },
      {
        value: "Population III stars",
        label: "Population three stars (Population III stars)",
        uri: "http://astrothesaurus.org/uat/1285",
      },
      {
        value: "Population III stars",
        label: "Pop III (Population III stars)",
        uri: "http://astrothesaurus.org/uat/1285",
      },
      {
        value: "Population III stars",
        label: "First stars (Population III stars)",
        uri: "http://astrothesaurus.org/uat/1285",
      },
      {
        value: "Population III stars",
        label: "Population 3 stars (Population III stars)",
        uri: "http://astrothesaurus.org/uat/1285",
      },
      {
        value: "Abundance ratios",
        label: "Abundance ratios",
        uri: "http://astrothesaurus.org/uat/11",
      },
      {
        value: "Blue loop",
        label: "Blue loop",
        uri: "http://astrothesaurus.org/uat/167",
      },
      {
        value: "Diffuse interstellar clouds",
        label: "Diffuse interstellar clouds",
        uri: "http://astrothesaurus.org/uat/380",
      },
      {
        value: "Diffuse interstellar clouds",
        label: "Translucent interstellar clouds (Diffuse interstellar clouds)",
        uri: "http://astrothesaurus.org/uat/380",
      },
      {
        value: "Galaxy magnitudes",
        label: "Galaxy magnitudes",
        uri: "http://astrothesaurus.org/uat/605",
      },
      {
        value: "Galaxy magnitudes",
        label: "Galactic magnitudes and colours (Galaxy magnitudes)",
        uri: "http://astrothesaurus.org/uat/605",
      },
      {
        value: "Kerr-Newman black holes",
        label: "Kerr-Newman black holes",
        uri: "http://astrothesaurus.org/uat/885",
      },
      {
        value: "Inflationary universe",
        label: "Inflationary universe",
        uri: "http://astrothesaurus.org/uat/784",
      },
      {
        value: "Interstellar reddening",
        label: "Interstellar reddening",
        uri: "http://astrothesaurus.org/uat/853",
      },
      {
        value: "P-process",
        label: "P-process",
        uri: "http://astrothesaurus.org/uat/1195",
      },
      {
        value: "Resonant Kuiper belt objects",
        label: "Resonant Kuiper belt objects",
        uri: "http://astrothesaurus.org/uat/1396",
      },
      {
        value: "Resonant Kuiper belt objects",
        label: "Resonant Kuiper-belt objects (Resonant Kuiper belt objects)",
        uri: "http://astrothesaurus.org/uat/1396",
      },
      {
        value: "Atmospheric composition",
        label: "Atmospheric composition",
        uri: "http://astrothesaurus.org/uat/2120",
      },
      {
        value: "Stellar ages",
        label: "Stellar ages",
        uri: "http://astrothesaurus.org/uat/1581",
      },
      {
        value: "Solar wind termination",
        label: "Solar wind termination",
        uri: "http://astrothesaurus.org/uat/1535",
      },
      {
        value: "E layer",
        label: "E layer",
        uri: "http://astrothesaurus.org/uat/427",
      },
      {
        value: "E layer",
        label: "Kennellyâ€“Heaviside layer (E layer)",
        uri: "http://astrothesaurus.org/uat/427",
      },
      {
        value: "von Zeipel theorem",
        label: "von Zeipel theorem",
        uri: "http://astrothesaurus.org/uat/1781",
      },
      {
        value: "von Zeipel theorem",
        label: "von Zeipel's theorem (von Zeipel theorem)",
        uri: "http://astrothesaurus.org/uat/1781",
      },
      {
        value: "Evolved stars",
        label: "Evolved stars",
        uri: "http://astrothesaurus.org/uat/481",
      },
      {
        value: "Evolved stars",
        label: "Post-main sequence stars (Evolved stars)",
        uri: "http://astrothesaurus.org/uat/481",
      },
      {
        value: "Stellar motion",
        label: "Stellar motion",
        uri: "http://astrothesaurus.org/uat/1615",
      },
      {
        value: "Achondrites",
        label: "Achondrites",
        uri: "http://astrothesaurus.org/uat/15",
      },
      {
        value: "T subdwarfs",
        label: "T subdwarfs",
        uri: "http://astrothesaurus.org/uat/1680",
      },
      {
        value: "T subdwarfs",
        label: "T brown subdwarfs (T subdwarfs)",
        uri: "http://astrothesaurus.org/uat/1680",
      },
      {
        value: "T subdwarfs",
        label: "T subdwarf stars (T subdwarfs)",
        uri: "http://astrothesaurus.org/uat/1680",
      },
      {
        value: "T subdwarfs",
        label: "T-type brown subdwarfs (T subdwarfs)",
        uri: "http://astrothesaurus.org/uat/1680",
      },
      {
        value: "Transit duration variation method",
        label: "Transit duration variation method",
        uri: "http://astrothesaurus.org/uat/1707",
      },
      {
        value: "Hz Herculis x-ray binary stars",
        label: "Hz Herculis x-ray binary stars",
        uri: "http://astrothesaurus.org/uat/777",
      },
      {
        value: "Hz Herculis x-ray binary stars",
        label: "Hz Herculis x-ray binaries (Hz Herculis x-ray binary stars)",
        uri: "http://astrothesaurus.org/uat/777",
      },
      {
        value: "Interdisciplinary astronomy",
        label: "Interdisciplinary astronomy",
        uri: "http://astrothesaurus.org/uat/804",
      },
      {
        value: "Lunar mineralogy",
        label: "Lunar mineralogy",
        uri: "http://astrothesaurus.org/uat/962",
      },
      {
        value: "Far infrared interferometry",
        label: "Far infrared interferometry",
        uri: "http://astrothesaurus.org/uat/528",
      },
      {
        value: "Far infrared interferometry",
        label: "Far-infrared interferometry (Far infrared interferometry)",
        uri: "http://astrothesaurus.org/uat/528",
      },
      {
        value: "DC stars",
        label: "DC stars",
        uri: "http://astrothesaurus.org/uat/0",
      },
      {
        value: "DC stars",
        label: "DC white dwarf (DC stars)",
        uri: "http://astrothesaurus.org/uat/0",
      },
      {
        value: "DC stars",
        label: "DC white dwarf stars (DC stars)",
        uri: "http://astrothesaurus.org/uat/0",
      },
      {
        value: "High-energy cosmic radiation",
        label: "High-energy cosmic radiation",
        uri: "http://astrothesaurus.org/uat/731",
      },
      {
        value: "High-energy cosmic radiation",
        label: "High-energy cosmic rays (High-energy cosmic radiation)",
        uri: "http://astrothesaurus.org/uat/731",
      },
      {
        value: "High-energy cosmic radiation",
        label: "High energy cosmic rays (High-energy cosmic radiation)",
        uri: "http://astrothesaurus.org/uat/731",
      },
      {
        value: "High-energy cosmic radiation",
        label: "High energy cosmic radiation (High-energy cosmic radiation)",
        uri: "http://astrothesaurus.org/uat/731",
      },
      {
        value: "Hot ionized medium",
        label: "Hot ionized medium",
        uri: "http://astrothesaurus.org/uat/752",
      },
      {
        value: "Hot ionized medium",
        label: "HIM (Hot ionized medium)",
        uri: "http://astrothesaurus.org/uat/752",
      },
      {
        value: "Purkinje effect",
        label: "Purkinje effect",
        uri: "http://astrothesaurus.org/uat/1310",
      },
      {
        value: "Purkinje effect",
        label: "Purkinje shift (Purkinje effect)",
        uri: "http://astrothesaurus.org/uat/1310",
      },
      {
        value: "Planetary-disk interactions",
        label: "Planetary-disk interactions",
        uri: "http://astrothesaurus.org/uat/2204",
      },
      {
        value: "Eruptive variable stars",
        label: "Eruptive variable stars",
        uri: "http://astrothesaurus.org/uat/476",
      },
      {
        value: "Eruptive variable stars",
        label: "Eruptive variables (Eruptive variable stars)",
        uri: "http://astrothesaurus.org/uat/476",
      },
      {
        value: "Friedmann universe",
        label: "Friedmann universe",
        uri: "http://astrothesaurus.org/uat/551",
      },
      {
        value: "Active galaxies",
        label: "Active galaxies",
        uri: "http://astrothesaurus.org/uat/17",
      },
      {
        value: "Solar neutrons",
        label: "Solar neutrons",
        uri: "http://astrothesaurus.org/uat/1512",
      },
      {
        value: "Astrometry",
        label: "Astrometry",
        uri: "http://astrothesaurus.org/uat/80",
      },
      {
        value: "Galaxy accretion disks",
        label: "Galaxy accretion disks",
        uri: "http://astrothesaurus.org/uat/562",
      },
      {
        value: "Galaxy accretion disks",
        label: "Galactic accretion disks (Galaxy accretion disks)",
        uri: "http://astrothesaurus.org/uat/562",
      },
      {
        value: "Galaxy accretion disks",
        label: "Galaxy accretion discs (Galaxy accretion disks)",
        uri: "http://astrothesaurus.org/uat/562",
      },
      {
        value: "Markov chain Monte Carlo",
        label: "Markov chain Monte Carlo",
        uri: "http://astrothesaurus.org/uat/1889",
      },
      {
        value: "Ellipsoidal variable stars",
        label: "Ellipsoidal variable stars",
        uri: "http://astrothesaurus.org/uat/455",
      },
      {
        value: "Ellipsoidal variable stars",
        label: "Ellipsoidal binary stars (Ellipsoidal variable stars)",
        uri: "http://astrothesaurus.org/uat/455",
      },
      {
        value: "Galaxy planes",
        label: "Galaxy planes",
        uri: "http://astrothesaurus.org/uat/613",
      },
      {
        value: "Observatories",
        label: "Observatories",
        uri: "http://astrothesaurus.org/uat/1147",
      },
      {
        value: "Cross-validation ",
        label: "Cross-validation ",
        uri: "http://astrothesaurus.org/uat/1909",
      },
      {
        value: "Neutrino masses",
        label: "Neutrino masses",
        uri: "http://astrothesaurus.org/uat/1102",
      },
      {
        value: "Faber-Jackson distance",
        label: "Faber-Jackson distance",
        uri: "http://astrothesaurus.org/uat/523",
      },
      {
        value: "Faber-Jackson distance",
        label: "Faber Jackson distance (Faber-Jackson distance)",
        uri: "http://astrothesaurus.org/uat/523",
      },
      {
        value: "Nonparametric inference",
        label: "Nonparametric inference",
        uri: "http://astrothesaurus.org/uat/1903",
      },
      {
        value: "Gravitational equilibrium",
        label: "Gravitational equilibrium",
        uri: "http://astrothesaurus.org/uat/666",
      },
      {
        value: "Angular separation",
        label: "Angular separation",
        uri: "http://astrothesaurus.org/uat/40",
      },
      {
        value: "Angular separation",
        label: "Angular distance (Angular separation)",
        uri: "http://astrothesaurus.org/uat/40",
      },
      {
        value: "Angular separation",
        label: "Apparent distance (Angular separation)",
        uri: "http://astrothesaurus.org/uat/40",
      },
      {
        value: "Angular separation",
        label: "Apparent separation (Angular separation)",
        uri: "http://astrothesaurus.org/uat/40",
      },
      {
        value: "Extrasolar gaseous planets",
        label: "Extrasolar gaseous planets",
        uri: "http://astrothesaurus.org/uat/2172",
      },
      {
        value: "Extrasolar gaseous planets",
        label: "Extrasolar gas planets (Extrasolar gaseous planets)",
        uri: "http://astrothesaurus.org/uat/2172",
      },
      {
        value: "H-alpha stars",
        label: "H-alpha stars",
        uri: "http://astrothesaurus.org/uat/689",
      },
      {
        value: "F supergiant stars",
        label: "F supergiant stars",
        uri: "http://astrothesaurus.org/uat/522",
      },
      {
        value: "F supergiant stars",
        label: "F-type supergiant stars (F supergiant stars)",
        uri: "http://astrothesaurus.org/uat/522",
      },
      {
        value: "F supergiant stars",
        label: "F supergiants (F supergiant stars)",
        uri: "http://astrothesaurus.org/uat/522",
      },
      {
        value: "F supergiant stars",
        label: "F-type supergiants (F supergiant stars)",
        uri: "http://astrothesaurus.org/uat/522",
      },
      {
        value: "R stars",
        label: "R stars",
        uri: "http://astrothesaurus.org/uat/1328",
      },
      {
        value: "R stars",
        label: "Class R stars (R stars)",
        uri: "http://astrothesaurus.org/uat/1328",
      },
      {
        value: "R stars",
        label: "R-type stars (R stars)",
        uri: "http://astrothesaurus.org/uat/1328",
      },
      {
        value: "Galactic latitude",
        label: "Galactic latitude",
        uri: "http://astrothesaurus.org/uat/568",
      },
      {
        value: "Bouwers telescope",
        label: "Bouwers telescope",
        uri: "http://astrothesaurus.org/uat/177",
      },
      {
        value: "Methane",
        label: "Methane",
        uri: "http://astrothesaurus.org/uat/1042",
      },
      {
        value: "Methane",
        label: "C h4 (Methane)",
        uri: "http://astrothesaurus.org/uat/1042",
      },
      {
        value: "Methane",
        label: "C h_4 (Methane)",
        uri: "http://astrothesaurus.org/uat/1042",
      },
      {
        value: "Cosmological perturbation theory",
        label: "Cosmological perturbation theory",
        uri: "http://astrothesaurus.org/uat/341",
      },
      {
        value: "Galaxy accretion",
        label: "Galaxy accretion",
        uri: "http://astrothesaurus.org/uat/575",
      },
      {
        value: "Remote telescope astrophotography",
        label: "Remote telescope astrophotography",
        uri: "http://astrothesaurus.org/uat/1395",
      },
      {
        value: "Lithium stars",
        label: "Lithium stars",
        uri: "http://astrothesaurus.org/uat/927",
      },
      {
        value: "Lithium stars",
        label: "Lithium rich stars (Lithium stars)",
        uri: "http://astrothesaurus.org/uat/927",
      },
      {
        value: "Lithium stars",
        label: "Li stars (Lithium stars)",
        uri: "http://astrothesaurus.org/uat/927",
      },
      {
        value: "Lithium stars",
        label: "Lithium-rich stars (Lithium stars)",
        uri: "http://astrothesaurus.org/uat/927",
      },
      {
        value: "Post-asymptotic giant branch stars",
        label: "Post-asymptotic giant branch stars",
        uri: "http://astrothesaurus.org/uat/2121",
      },
      {
        value: "Post-asymptotic giant branch stars",
        label: "Post-AGB stars (Post-asymptotic giant branch stars)",
        uri: "http://astrothesaurus.org/uat/2121",
      },
      {
        value: "Rotating shells",
        label: "Rotating shells",
        uri: "http://astrothesaurus.org/uat/1407",
      },
      {
        value: "Milky Way formation",
        label: "Milky Way formation",
        uri: "http://astrothesaurus.org/uat/1053",
      },
      {
        value: "Milky Way formation",
        label: "Milky Way Galaxy origin (Milky Way formation)",
        uri: "http://astrothesaurus.org/uat/1053",
      },
      {
        value: "Milky Way formation",
        label: "Milky Way Galaxy formation (Milky Way formation)",
        uri: "http://astrothesaurus.org/uat/1053",
      },
      {
        value: "Milky Way formation",
        label: "Formation of the Milky Way (Milky Way formation)",
        uri: "http://astrothesaurus.org/uat/1053",
      },
      {
        value: "Milky Way formation",
        label: "Milky Way origin (Milky Way formation)",
        uri: "http://astrothesaurus.org/uat/1053",
      },
      {
        value: "Milky Way formation",
        label: "Origin of the Milky Way (Milky Way formation)",
        uri: "http://astrothesaurus.org/uat/1053",
      },
      {
        value: "Nuclear astrophysics",
        label: "Nuclear astrophysics",
        uri: "http://astrothesaurus.org/uat/1129",
      },
      {
        value: "Natural decay",
        label: "Natural decay",
        uri: "http://astrothesaurus.org/uat/2070",
      },
      {
        value: "Neptune",
        label: "Neptune",
        uri: "http://astrothesaurus.org/uat/1096",
      },
      {
        value: "Circumstellar disks",
        label: "Circumstellar disks",
        uri: "http://astrothesaurus.org/uat/235",
      },
      {
        value: "Circumstellar disks",
        label: "Circumstellar discs (Circumstellar disks)",
        uri: "http://astrothesaurus.org/uat/235",
      },
      {
        value: "Lunar theory",
        label: "Lunar theory",
        uri: "http://astrothesaurus.org/uat/975",
      },
      { value: "LIGO", label: "LIGO", uri: "http://astrothesaurus.org/uat/920" },
      {
        value: "LIGO",
        label: "Laser Interferometer Gravitational-Wave Observatory (LIGO)",
        uri: "http://astrothesaurus.org/uat/920",
      },
      {
        value: "Partial eclipses",
        label: "Partial eclipses",
        uri: "http://astrothesaurus.org/uat/1200",
      },
      {
        value: "Gamma Cassiopeiae stars",
        label: "Gamma Cassiopeiae stars",
        uri: "http://astrothesaurus.org/uat/635",
      },
      {
        value: "Lunar features",
        label: "Lunar features",
        uri: "http://astrothesaurus.org/uat/953",
      },
      {
        value: "Lunar features",
        label: "Lunar landmarks (Lunar features)",
        uri: "http://astrothesaurus.org/uat/953",
      },
      {
        value: "Quasars",
        label: "Quasars",
        uri: "http://astrothesaurus.org/uat/1319",
      },
      {
        value: "Quasars",
        label: "Quasi-stellar radio sources (Quasars)",
        uri: "http://astrothesaurus.org/uat/1319",
      },
      {
        value: "Quasars",
        label: "QSO (Quasars)",
        uri: "http://astrothesaurus.org/uat/1319",
      },
      {
        value: "Quasars",
        label: "Quasi-stellar object (Quasars)",
        uri: "http://astrothesaurus.org/uat/1319",
      },
      {
        value: "Quasars",
        label: "Quasi-stellar galaxies (Quasars)",
        uri: "http://astrothesaurus.org/uat/1319",
      },
      {
        value: "Meteor trails",
        label: "Meteor trails",
        uri: "http://astrothesaurus.org/uat/1036",
      },
      {
        value: "Meteor trails",
        label: "Trail of meteors (Meteor trails)",
        uri: "http://astrothesaurus.org/uat/1036",
      },
      {
        value: "Meteor trails",
        label: "Trails of meteors (Meteor trails)",
        uri: "http://astrothesaurus.org/uat/1036",
      },
      {
        value: "Oort cloud",
        label: "Oort cloud",
        uri: "http://astrothesaurus.org/uat/1157",
      },
      {
        value: "Oort cloud",
        label: "Oort Cloud (Oort cloud)",
        uri: "http://astrothesaurus.org/uat/1157",
      },
      {
        value: "Oort cloud",
        label: "Ã–pikâ€“Oort cloud (Oort cloud)",
        uri: "http://astrothesaurus.org/uat/1157",
      },
      {
        value: "Oort cloud",
        label: "Opik-Oort Cloud (Oort cloud)",
        uri: "http://astrothesaurus.org/uat/1157",
      },
      {
        value: "Longitude of the descending node",
        label: "Longitude of the descending node",
        uri: "http://astrothesaurus.org/uat/937",
      },
      {
        value: "Radio telescopes",
        label: "Radio telescopes",
        uri: "http://astrothesaurus.org/uat/1360",
      },
      {
        value: "Irregular variable stars",
        label: "Irregular variable stars",
        uri: "http://astrothesaurus.org/uat/865",
      },
      {
        value: "Optical double stars",
        label: "Optical double stars",
        uri: "http://astrothesaurus.org/uat/1165",
      },
      {
        value: "Optical double stars",
        label: "Optical doubles (Optical double stars)",
        uri: "http://astrothesaurus.org/uat/1165",
      },
      {
        value: "Natural satellite surfaces",
        label: "Natural satellite surfaces",
        uri: "http://astrothesaurus.org/uat/2208",
      },
      {
        value: "Exoplanet detection methods",
        label: "Exoplanet detection methods",
        uri: "http://astrothesaurus.org/uat/489",
      },
      {
        value: "Exoplanet detection methods",
        label:
          "Extrasolar planetary system detection (Exoplanet detection methods)",
        uri: "http://astrothesaurus.org/uat/489",
      },
      {
        value: "Exoplanet detection methods",
        label: "Extrasolar planet detection (Exoplanet detection methods)",
        uri: "http://astrothesaurus.org/uat/489",
      },
      {
        value: "Exoplanet detection methods",
        label: "Exoplanet detection (Exoplanet detection methods)",
        uri: "http://astrothesaurus.org/uat/489",
      },
      {
        value: "Me variable stars",
        label: "Me variable stars",
        uri: "http://astrothesaurus.org/uat/1018",
      },
      {
        value: "Me variable stars",
        label: "Me-type variables (Me variable stars)",
        uri: "http://astrothesaurus.org/uat/1018",
      },
      {
        value: "Me variable stars",
        label: "Me variables (Me variable stars)",
        uri: "http://astrothesaurus.org/uat/1018",
      },
      {
        value: "Me variable stars",
        label: "Me-type variable stars (Me variable stars)",
        uri: "http://astrothesaurus.org/uat/1018",
      },
      {
        value: "Holographic interferometry",
        label: "Holographic interferometry",
        uri: "http://astrothesaurus.org/uat/745",
      },
      {
        value: "Long baseline interferometry",
        label: "Long baseline interferometry",
        uri: "http://astrothesaurus.org/uat/932",
      },
      {
        value: "B supergiant stars",
        label: "B supergiant stars",
        uri: "http://astrothesaurus.org/uat/130",
      },
      {
        value: "B supergiant stars",
        label: "B-type supergiants (B supergiant stars)",
        uri: "http://astrothesaurus.org/uat/130",
      },
      {
        value: "B supergiant stars",
        label: "B-type supergiant stars (B supergiant stars)",
        uri: "http://astrothesaurus.org/uat/130",
      },
      {
        value: "B supergiant stars",
        label: "B supergiants (B supergiant stars)",
        uri: "http://astrothesaurus.org/uat/130",
      },
      {
        value: "Normal distribution",
        label: "Normal distribution",
        uri: "http://astrothesaurus.org/uat/1896",
      },
      {
        value: "Damped Lyman-alpha systems",
        label: "Damped Lyman-alpha systems",
        uri: "http://astrothesaurus.org/uat/349",
      },
      {
        value: "Bootstrap",
        label: "Bootstrap",
        uri: "http://astrothesaurus.org/uat/1906",
      },
      {
        value: "Luminosity function",
        label: "Luminosity function",
        uri: "http://astrothesaurus.org/uat/942",
      },
      {
        value: "Hirayama families",
        label: "Hirayama families",
        uri: "http://astrothesaurus.org/uat/742",
      },
      {
        value: "Dwarf galaxies",
        label: "Dwarf galaxies",
        uri: "http://astrothesaurus.org/uat/416",
      },
      {
        value: "Meyer group",
        label: "Meyer group",
        uri: "http://astrothesaurus.org/uat/2200",
      },
      {
        value: "Meyer group",
        label: "Meyer sunskirters (Meyer group)",
        uri: "http://astrothesaurus.org/uat/2200",
      },
      {
        value: "Dredge-up",
        label: "Dredge-up",
        uri: "http://astrothesaurus.org/uat/409",
      },
      {
        value: "Dredge-up",
        label: "Dredge up (Dredge-up)",
        uri: "http://astrothesaurus.org/uat/409",
      },
      {
        value: "Galaxy chemical evolution",
        label: "Galaxy chemical evolution",
        uri: "http://astrothesaurus.org/uat/580",
      },
      {
        value: "Vesta",
        label: "Vesta",
        uri: "http://astrothesaurus.org/uat/2183",
      },
      {
        value: "Vesta",
        label: "(4) Vesta (Vesta)",
        uri: "http://astrothesaurus.org/uat/2183",
      },
      {
        value: "Vesta",
        label: "Asteroid Vesta (Vesta)",
        uri: "http://astrothesaurus.org/uat/2183",
      },
      {
        value: "Vesta",
        label: "4 Vesta (Vesta)",
        uri: "http://astrothesaurus.org/uat/2183",
      },
      {
        value: "Stellar evolutionary tracks",
        label: "Stellar evolutionary tracks",
        uri: "http://astrothesaurus.org/uat/1600",
      },
      {
        value: "Circumstellar grains",
        label: "Circumstellar grains",
        uri: "http://astrothesaurus.org/uat/239",
      },
      {
        value: "Experimental techniques",
        label: "Experimental techniques",
        uri: "http://astrothesaurus.org/uat/2078",
      },
      {
        value: "Transits",
        label: "Transits",
        uri: "http://astrothesaurus.org/uat/1711",
      },
      {
        value: "Transits",
        label: "Astronomical transits (Transits)",
        uri: "http://astrothesaurus.org/uat/1711",
      },
      {
        value: "Vertical circle",
        label: "Vertical circle",
        uri: "http://astrothesaurus.org/uat/1765",
      },
      {
        value: "Variable radiation sources",
        label: "Variable radiation sources",
        uri: "http://astrothesaurus.org/uat/1759",
      },
      {
        value: "Reflecting telescopes",
        label: "Reflecting telescopes",
        uri: "http://astrothesaurus.org/uat/1380",
      },
      {
        value: "Reflecting telescopes",
        label: "Catoptric telescopes (Reflecting telescopes)",
        uri: "http://astrothesaurus.org/uat/1380",
      },
      {
        value: "Reflecting telescopes",
        label: "Reflector telescopes (Reflecting telescopes)",
        uri: "http://astrothesaurus.org/uat/1380",
      },
      {
        value: "Instability strip",
        label: "Instability strip",
        uri: "http://astrothesaurus.org/uat/798",
      },
      {
        value: "Lunar craters",
        label: "Lunar craters",
        uri: "http://astrothesaurus.org/uat/949",
      },
      {
        value: "Stellar evolutionary models",
        label: "Stellar evolutionary models",
        uri: "http://astrothesaurus.org/uat/2046",
      },
      {
        value: "Am stars",
        label: "Am stars",
        uri: "http://astrothesaurus.org/uat/33",
      },
      {
        value: "Am stars",
        label: "Metallic line stars (Am stars)",
        uri: "http://astrothesaurus.org/uat/33",
      },
      {
        value: "Am stars",
        label: "Metallic-line stars (Am stars)",
        uri: "http://astrothesaurus.org/uat/33",
      },
      {
        value: "Am stars",
        label: "Am-type stars (Am stars)",
        uri: "http://astrothesaurus.org/uat/33",
      },
      {
        value: "Timing variation methods",
        label: "Timing variation methods",
        uri: "http://astrothesaurus.org/uat/1703",
      },
      {
        value: "Solar system gas giant planets",
        label: "Solar system gas giant planets",
        uri: "http://astrothesaurus.org/uat/1191",
      },
      {
        value: "Solar system gas giant planets",
        label: "Jovian planets (Solar system gas giant planets)",
        uri: "http://astrothesaurus.org/uat/1191",
      },
      {
        value: "Solar system gas giant planets",
        label: "Outer planets (Solar system gas giant planets)",
        uri: "http://astrothesaurus.org/uat/1191",
      },
      {
        value: "Solar system gas giant planets",
        label: "Gas giants (Solar system gas giant planets)",
        uri: "http://astrothesaurus.org/uat/1191",
      },
      {
        value: "Interstellar extinction",
        label: "Interstellar extinction",
        uri: "http://astrothesaurus.org/uat/841",
      },
      {
        value: "Cloud computing",
        label: "Cloud computing",
        uri: "http://astrothesaurus.org/uat/1970",
      },
      {
        value: "Interplanetary shocks",
        label: "Interplanetary shocks",
        uri: "http://astrothesaurus.org/uat/829",
      },
      {
        value: "OH/IR stars",
        label: "OH/IR stars",
        uri: "http://astrothesaurus.org/uat/1156",
      },
      {
        value: "OH/IR stars",
        label: "OH-IR stars (OH/IR stars)",
        uri: "http://astrothesaurus.org/uat/1156",
      },
      {
        value: "Night vision",
        label: "Night vision",
        uri: "http://astrothesaurus.org/uat/1113",
      },
      {
        value: "Dust continuum emission",
        label: "Dust continuum emission",
        uri: "http://astrothesaurus.org/uat/412",
      },
      {
        value: "Dust continuum emission",
        label: "Infrared cirrus (Dust continuum emission)",
        uri: "http://astrothesaurus.org/uat/412",
      },
      {
        value: "Meteorite composition",
        label: "Meteorite composition",
        uri: "http://astrothesaurus.org/uat/1037",
      },
      {
        value: "Meteorite composition",
        label: "Composition of meteorites (Meteorite composition)",
        uri: "http://astrothesaurus.org/uat/1037",
      },
      {
        value: "Saturn",
        label: "Saturn",
        uri: "http://astrothesaurus.org/uat/1426",
      },
      {
        value: "Convolutional neural networks",
        label: "Convolutional neural networks",
        uri: "http://astrothesaurus.org/uat/1938",
      },
      {
        value: "Convolutional neural networks",
        label: "Deep learning (Convolutional neural networks)",
        uri: "http://astrothesaurus.org/uat/1938",
      },
      {
        value: "Galaxy fountains",
        label: "Galaxy fountains",
        uri: "http://astrothesaurus.org/uat/596",
      },
      {
        value: "Reflection nebulae",
        label: "Reflection nebulae",
        uri: "http://astrothesaurus.org/uat/1381",
      },
      {
        value: "Reflection nebulae",
        label: "Reflection nebula (Reflection nebulae)",
        uri: "http://astrothesaurus.org/uat/1381",
      },
      {
        value: "Radio interferometers",
        label: "Radio interferometers",
        uri: "http://astrothesaurus.org/uat/1345",
      },
      {
        value: "Synodic period",
        label: "Synodic period",
        uri: "http://astrothesaurus.org/uat/1676",
      },
      {
        value: "Caustic crossing",
        label: "Caustic crossing",
        uri: "http://astrothesaurus.org/uat/206",
      },
      {
        value: "Caustic crossing",
        label: "Caustic-crossing (Caustic crossing)",
        uri: "http://astrothesaurus.org/uat/206",
      },
      {
        value: "Galaxy pairs",
        label: "Galaxy pairs",
        uri: "http://astrothesaurus.org/uat/610",
      },
      {
        value: "Galaxy pairs",
        label: "Pair of galaxies (Galaxy pairs)",
        uri: "http://astrothesaurus.org/uat/610",
      },
      {
        value: "Galaxy pairs",
        label: "Galactic pairs (Galaxy pairs)",
        uri: "http://astrothesaurus.org/uat/610",
      },
      {
        value: "Cosmic ray nucleosynthesis",
        label: "Cosmic ray nucleosynthesis",
        uri: "http://astrothesaurus.org/uat/326",
      },
      {
        value: "Space vehicles",
        label: "Space vehicles",
        uri: "http://astrothesaurus.org/uat/1549",
      },
      {
        value: "Henyey track",
        label: "Henyey track",
        uri: "http://astrothesaurus.org/uat/721",
      },
      {
        value: "Biosignatures",
        label: "Biosignatures",
        uri: "http://astrothesaurus.org/uat/2018",
      },
      {
        value: "Biosignatures",
        label: "Biomarkers (Biosignatures)",
        uri: "http://astrothesaurus.org/uat/2018",
      },
      {
        value: "Irregular satellites",
        label: "Irregular satellites",
        uri: "http://astrothesaurus.org/uat/2027",
      },
      {
        value: "Irregular satellites",
        label: "Irregular moons (Solar system) (Irregular satellites)",
        uri: "http://astrothesaurus.org/uat/2027",
      },
      {
        value: "Irregular satellites",
        label: "Irregular natural satellites (Irregular satellites)",
        uri: "http://astrothesaurus.org/uat/2027",
      },
      {
        value: "RS Canum Venaticorum variable stars",
        label: "RS Canum Venaticorum variable stars",
        uri: "http://astrothesaurus.org/uat/1416",
      },
      {
        value: "RS Canum Venaticorum variable stars",
        label:
          "RS-Canum Venaticorum variables (RS Canum Venaticorum variable stars)",
        uri: "http://astrothesaurus.org/uat/1416",
      },
      {
        value: "RS Canum Venaticorum variable stars",
        label:
          "RS Canum Venaticorum variables (RS Canum Venaticorum variable stars)",
        uri: "http://astrothesaurus.org/uat/1416",
      },
      {
        value: "RS Canum Venaticorum variable stars",
        label: "RS Canum Venaticorum stars (RS Canum Venaticorum variable stars)",
        uri: "http://astrothesaurus.org/uat/1416",
      },
      {
        value: "RS Canum Venaticorum variable stars",
        label: "RS Canum Venaticorum (RS Canum Venaticorum variable stars)",
        uri: "http://astrothesaurus.org/uat/1416",
      },
      {
        value: "Ice formation",
        label: "Ice formation",
        uri: "http://astrothesaurus.org/uat/2092",
      },
      {
        value: "Ultraviolet extinction",
        label: "Ultraviolet extinction",
        uri: "http://astrothesaurus.org/uat/1738",
      },
      {
        value: "Companion stars",
        label: "Companion stars",
        uri: "http://astrothesaurus.org/uat/291",
      },
      {
        value: "Companion stars",
        label: "Secondary stars (Companion stars)",
        uri: "http://astrothesaurus.org/uat/291",
      },
      {
        value: "Perihelion",
        label: "Perihelion",
        uri: "http://astrothesaurus.org/uat/1210",
      },
      {
        value: "Optical identification",
        label: "Optical identification",
        uri: "http://astrothesaurus.org/uat/1167",
      },
      {
        value: "Optical identification",
        label: "Optical counterparts (Optical identification)",
        uri: "http://astrothesaurus.org/uat/1167",
      },
      {
        value: "Limb darkening",
        label: "Limb darkening",
        uri: "http://astrothesaurus.org/uat/922",
      },
      {
        value: "StrÃ¶mgren spheres",
        label: "StrÃ¶mgren spheres",
        uri: "http://astrothesaurus.org/uat/1642",
      },
      {
        value: "StrÃ¶mgren spheres",
        label: "Stromgren spheres (StrÃ¶mgren spheres)",
        uri: "http://astrothesaurus.org/uat/1642",
      },
      {
        value: "Plasma physics",
        label: "Plasma physics",
        uri: "http://astrothesaurus.org/uat/2089",
      },
      {
        value: "Stellar coronal dimming",
        label: "Stellar coronal dimming",
        uri: "http://astrothesaurus.org/uat/306",
      },
      {
        value: "Solar energetic particles",
        label: "Solar energetic particles",
        uri: "http://astrothesaurus.org/uat/1491",
      },
      {
        value: "Solar energetic particles",
        label: "Suprathermal particles (Solar energetic particles)",
        uri: "http://astrothesaurus.org/uat/1491",
      },
      {
        value: "Solar energetic particles",
        label: "Energetic solar particles (Solar energetic particles)",
        uri: "http://astrothesaurus.org/uat/1491",
      },
      {
        value: "Deceleration parameter",
        label: "Deceleration parameter",
        uri: "http://astrothesaurus.org/uat/364",
      },
      {
        value: "Deceleration parameter",
        label: "Q-parameter (Deceleration parameter)",
        uri: "http://astrothesaurus.org/uat/364",
      },
      {
        value: "Weak gravitational lensing",
        label: "Weak gravitational lensing",
        uri: "http://astrothesaurus.org/uat/1797",
      },
      {
        value: "Luminous arcs",
        label: "Luminous arcs",
        uri: "http://astrothesaurus.org/uat/943",
      },
      {
        value: "Lunar petrology",
        label: "Lunar petrology",
        uri: "http://astrothesaurus.org/uat/967",
      },
      {
        value: "Optical phase shifting interferometry",
        label: "Optical phase shifting interferometry",
        uri: "http://astrothesaurus.org/uat/1171",
      },
      {
        value: "Optical phase shifting interferometry",
        label:
          "Optical phase-shifting interferometry (Optical phase shifting interferometry)",
        uri: "http://astrothesaurus.org/uat/1171",
      },
      {
        value: "Optical phase shifting interferometry",
        label:
          "Phase-shifting interferometry (Optical phase shifting interferometry)",
        uri: "http://astrothesaurus.org/uat/1171",
      },
      {
        value: "Optical phase shifting interferometry",
        label:
          "Phase shifting interferometry (Optical phase shifting interferometry)",
        uri: "http://astrothesaurus.org/uat/1171",
      },
      {
        value: "Lunar origin",
        label: "Lunar origin",
        uri: "http://astrothesaurus.org/uat/966",
      },
      {
        value: "UV Ceti stars",
        label: "UV Ceti stars",
        uri: "http://astrothesaurus.org/uat/1755",
      },
      {
        value: "UV Ceti stars",
        label: "UV-Ceti (UV Ceti stars)",
        uri: "http://astrothesaurus.org/uat/1755",
      },
      {
        value: "UV Ceti stars",
        label: "UV Ceti (UV Ceti stars)",
        uri: "http://astrothesaurus.org/uat/1755",
      },
      {
        value: "X-ray active galactic nuclei",
        label: "X-ray active galactic nuclei",
        uri: "http://astrothesaurus.org/uat/2035",
      },
      {
        value: "X-ray active galactic nuclei",
        label: "X-ray AGN (X-ray active galactic nuclei)",
        uri: "http://astrothesaurus.org/uat/2035",
      },
      {
        value: "X-ray active galactic nuclei",
        label: "X-ray AGNs (X-ray active galactic nuclei)",
        uri: "http://astrothesaurus.org/uat/2035",
      },
      {
        value: "Milky Way magnetic fields",
        label: "Milky Way magnetic fields",
        uri: "http://astrothesaurus.org/uat/1057",
      },
      {
        value: "Milky Way magnetic fields",
        label: "Milky Way Galaxy magnetic fields (Milky Way magnetic fields)",
        uri: "http://astrothesaurus.org/uat/1057",
      },
      {
        value: "Milky Way magnetic fields",
        label: "Magnetic fields in the Milky Way (Milky Way magnetic fields)",
        uri: "http://astrothesaurus.org/uat/1057",
      },
      {
        value: "Extragalactic magnetic fields",
        label: "Extragalactic magnetic fields",
        uri: "http://astrothesaurus.org/uat/507",
      },
      {
        value: "Meridian circles",
        label: "Meridian circles",
        uri: "http://astrothesaurus.org/uat/1027",
      },
      {
        value: "Meridian circles",
        label: "Transit circles (Meridian circles)",
        uri: "http://astrothesaurus.org/uat/1027",
      },
      {
        value: "Meridian circles",
        label: "Transit telescopes (Meridian circles)",
        uri: "http://astrothesaurus.org/uat/1027",
      },
      {
        value: "Extragalactic astronomy",
        label: "Extragalactic astronomy",
        uri: "http://astrothesaurus.org/uat/506",
      },
      {
        value: "Stellar faculae",
        label: "Stellar faculae",
        uri: "http://astrothesaurus.org/uat/1601",
      },
      {
        value: "Stellar faculae",
        label: "Stellar facula (Stellar faculae)",
        uri: "http://astrothesaurus.org/uat/1601",
      },
      {
        value: "Planetary alignment",
        label: "Planetary alignment",
        uri: "http://astrothesaurus.org/uat/1243",
      },
      {
        value: "Quiet solar chromosphere",
        label: "Quiet solar chromosphere",
        uri: "http://astrothesaurus.org/uat/1986",
      },
      {
        value: "Semimajor axis",
        label: "Semimajor axis",
        uri: "http://astrothesaurus.org/uat/1445",
      },
      {
        value: "Semimajor axis",
        label: "Semi-major axis (Semimajor axis)",
        uri: "http://astrothesaurus.org/uat/1445",
      },
      {
        value: "Galaxy colors",
        label: "Galaxy colors",
        uri: "http://astrothesaurus.org/uat/586",
      },
      {
        value: "Galaxy colors",
        label: "Galactic colours (Galaxy colors)",
        uri: "http://astrothesaurus.org/uat/586",
      },
      {
        value: "Galaxy colors",
        label: "Galactic colors (Galaxy colors)",
        uri: "http://astrothesaurus.org/uat/586",
      },
      {
        value: "Diamond ring effect",
        label: "Diamond ring effect",
        uri: "http://astrothesaurus.org/uat/378",
      },
      {
        value: "Visibility function",
        label: "Visibility function",
        uri: "http://astrothesaurus.org/uat/1775",
      },
      {
        value: "Lunar science",
        label: "Lunar science",
        uri: "http://astrothesaurus.org/uat/972",
      },
      {
        value: "Lunar science",
        label: "Lunar physics (Lunar science)",
        uri: "http://astrothesaurus.org/uat/972",
      },
      {
        value: "Orbital evolution",
        label: "Orbital evolution",
        uri: "http://astrothesaurus.org/uat/1178",
      },
      {
        value: "Cosmic microwave background radiation",
        label: "Cosmic microwave background radiation",
        uri: "http://astrothesaurus.org/uat/322",
      },
      {
        value: "Cosmic microwave background radiation",
        label: "Relic radiation (Cosmic microwave background radiation)",
        uri: "http://astrothesaurus.org/uat/322",
      },
      {
        value: "Cosmic microwave background radiation",
        label: "CMBR (Cosmic microwave background radiation)",
        uri: "http://astrothesaurus.org/uat/322",
      },
      {
        value: "Cosmic microwave background radiation",
        label: "CMB (Cosmic microwave background radiation)",
        uri: "http://astrothesaurus.org/uat/322",
      },
      {
        value: "Cosmic microwave background radiation",
        label:
          "Cosmic microwave background (Cosmic microwave background radiation)",
        uri: "http://astrothesaurus.org/uat/322",
      },
      {
        value: "Cosmic microwave background radiation",
        label: "MBR (Cosmic microwave background radiation)",
        uri: "http://astrothesaurus.org/uat/322",
      },
      {
        value: "Trigonometric parallax",
        label: "Trigonometric parallax",
        uri: "http://astrothesaurus.org/uat/1713",
      },
      {
        value: "Lunar geodesy",
        label: "Lunar geodesy",
        uri: "http://astrothesaurus.org/uat/955",
      },
      {
        value: "Lunar geodesy",
        label: "Lunar geodetics (Lunar geodesy)",
        uri: "http://astrothesaurus.org/uat/955",
      },
      {
        value: "RV Tauri variable stars",
        label: "RV Tauri variable stars",
        uri: "http://astrothesaurus.org/uat/1418",
      },
      {
        value: "RV Tauri variable stars",
        label: "RV Tauri variables (RV Tauri variable stars)",
        uri: "http://astrothesaurus.org/uat/1418",
      },
      {
        value: "RV Tauri variable stars",
        label: "RV Tauri (RV Tauri variable stars)",
        uri: "http://astrothesaurus.org/uat/1418",
      },
      {
        value: "RV Tauri variable stars",
        label: "RV Tauri stars (RV Tauri variable stars)",
        uri: "http://astrothesaurus.org/uat/1418",
      },
      {
        value: "RV Tauri variable stars",
        label: "RV Tau (RV Tauri variable stars)",
        uri: "http://astrothesaurus.org/uat/1418",
      },
      {
        value: "Intermediate-type stars",
        label: "Intermediate-type stars",
        uri: "http://astrothesaurus.org/uat/818",
      },
      {
        value: "Intermediate-type stars",
        label: "Intermediate type stars (Intermediate-type stars)",
        uri: "http://astrothesaurus.org/uat/818",
      },
      {
        value: "Intermediate-type stars",
        label: "Intermediate stars (Intermediate-type stars)",
        uri: "http://astrothesaurus.org/uat/818",
      },
      {
        value: "Supernova neutrinos",
        label: "Supernova neutrinos",
        uri: "http://astrothesaurus.org/uat/1666",
      },
      {
        value: "Recombination",
        label: "Recombination",
        uri: "http://astrothesaurus.org/uat/2072",
      },
      {
        value: "Magnetohydrodynamics",
        label: "Magnetohydrodynamics",
        uri: "http://astrothesaurus.org/uat/1964",
      },
      {
        value: "Magnetohydrodynamics",
        label: "MHD (Magnetohydrodynamics)",
        uri: "http://astrothesaurus.org/uat/1964",
      },
      {
        value: "Solar instruments",
        label: "Solar instruments",
        uri: "http://astrothesaurus.org/uat/1499",
      },
      {
        value: "Solar instruments",
        label: "Solar instrumentation (Solar instruments)",
        uri: "http://astrothesaurus.org/uat/1499",
      },
      {
        value: "Trojan planets",
        label: "Trojan planets",
        uri: "http://astrothesaurus.org/uat/1716",
      },
      {
        value: "K subdwarf stars",
        label: "K subdwarf stars",
        uri: "http://astrothesaurus.org/uat/879",
      },
      {
        value: "K subdwarf stars",
        label: "K-type subdwarfs (K subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/879",
      },
      {
        value: "K subdwarf stars",
        label: "K subdwarfs (K subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/879",
      },
      {
        value: "K subdwarf stars",
        label: "K-type subdwarf stars (K subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/879",
      },
      {
        value: "Syzygy",
        label: "Syzygy",
        uri: "http://astrothesaurus.org/uat/1677",
      },
      {
        value: "Atmospheric variability",
        label: "Atmospheric variability",
        uri: "http://astrothesaurus.org/uat/2119",
      },
      {
        value: "Atmospheric variability",
        label: "Planetary atmospheric variability (Atmospheric variability)",
        uri: "http://astrothesaurus.org/uat/2119",
      },
      {
        value: "Quasar-galaxy pairs",
        label: "Quasar-galaxy pairs",
        uri: "http://astrothesaurus.org/uat/1316",
      },
      {
        value: "Annual equation",
        label: "Annual equation",
        uri: "http://astrothesaurus.org/uat/41",
      },
      {
        value: "Infrared excess",
        label: "Infrared excess",
        uri: "http://astrothesaurus.org/uat/788",
      },
      {
        value: "Infrared excess",
        label: "IR excess (Infrared excess)",
        uri: "http://astrothesaurus.org/uat/788",
      },
      {
        value: "Infrared excess",
        label: "IR excess stars (Infrared excess)",
        uri: "http://astrothesaurus.org/uat/788",
      },
      {
        value: "Astrophysical explosive burning",
        label: "Astrophysical explosive burning",
        uri: "http://astrothesaurus.org/uat/100",
      },
      {
        value: "Astrophysical explosive burning",
        label:
          "Explosive astrophysical burning (Astrophysical explosive burning)",
        uri: "http://astrothesaurus.org/uat/100",
      },
      {
        value: "Astrophysical explosive burning",
        label: "Explosive astronomical burning (Astrophysical explosive burning)",
        uri: "http://astrothesaurus.org/uat/100",
      },
      {
        value: "Multivariate analysis",
        label: "Multivariate analysis",
        uri: "http://astrothesaurus.org/uat/1913",
      },
      {
        value: "Millisecond pulsars",
        label: "Millisecond pulsars",
        uri: "http://astrothesaurus.org/uat/1062",
      },
      {
        value: "Trans-Neptunian objects",
        label: "Trans-Neptunian objects",
        uri: "http://astrothesaurus.org/uat/1705",
      },
      {
        value: "Trans-Neptunian objects",
        label: "TNO (Trans-Neptunian objects)",
        uri: "http://astrothesaurus.org/uat/1705",
      },
      {
        value: "Trans-Neptunian objects",
        label: "Trans Neptunian objects (Trans-Neptunian objects)",
        uri: "http://astrothesaurus.org/uat/1705",
      },
      {
        value: "Trans-Neptunian objects",
        label: "Transneptunian objects (Trans-Neptunian objects)",
        uri: "http://astrothesaurus.org/uat/1705",
      },
      {
        value: "Trans-Neptunian objects",
        label: "Kuiper belt objects (Trans-Neptunian objects)",
        uri: "http://astrothesaurus.org/uat/1705",
      },
      {
        value: "Galaxy circumnuclear disk",
        label: "Galaxy circumnuclear disk",
        uri: "http://astrothesaurus.org/uat/581",
      },
      {
        value: "Galaxy circumnuclear disk",
        label: "Galactic circumnuclear matter (Galaxy circumnuclear disk)",
        uri: "http://astrothesaurus.org/uat/581",
      },
      {
        value: "Galaxy circumnuclear disk",
        label: "Circumnuclear matter (Galaxy circumnuclear disk)",
        uri: "http://astrothesaurus.org/uat/581",
      },
      {
        value: "Optical astronomy",
        label: "Optical astronomy",
        uri: "http://astrothesaurus.org/uat/1776",
      },
      {
        value: "Optical astronomy",
        label: "Visible telescopes (Optical astronomy)",
        uri: "http://astrothesaurus.org/uat/1776",
      },
      {
        value: "Optical astronomy",
        label: "Visible astronomy (Optical astronomy)",
        uri: "http://astrothesaurus.org/uat/1776",
      },
      {
        value: "Optical astronomy",
        label: "Visible astronomical observations (Optical astronomy)",
        uri: "http://astrothesaurus.org/uat/1776",
      },
      {
        value: "Calendars",
        label: "Calendars",
        uri: "http://astrothesaurus.org/uat/191",
      },
      {
        value: "Dust shells",
        label: "Dust shells",
        uri: "http://astrothesaurus.org/uat/414",
      },
      {
        value: "Secular parallax",
        label: "Secular parallax",
        uri: "http://astrothesaurus.org/uat/1439",
      },
      {
        value: "Stellar streams",
        label: "Stellar streams",
        uri: "http://astrothesaurus.org/uat/2166",
      },
      {
        value: "Plutoids",
        label: "Plutoids",
        uri: "http://astrothesaurus.org/uat/1268",
      },
      {
        value: "Lunar mountains",
        label: "Lunar mountains",
        uri: "http://astrothesaurus.org/uat/963",
      },
      {
        value: "Distributed computing",
        label: "Distributed computing",
        uri: "http://astrothesaurus.org/uat/1971",
      },
      {
        value: "Private software",
        label: "Private software",
        uri: "http://astrothesaurus.org/uat/1867",
      },
      {
        value: "Perigee",
        label: "Perigee",
        uri: "http://astrothesaurus.org/uat/1209",
      },
      {
        value: "Weak-line T Tauri stars",
        label: "Weak-line T Tauri stars",
        uri: "http://astrothesaurus.org/uat/1795",
      },
      {
        value: "Weak-line T Tauri stars",
        label: "Weak Emission T Tauri stars (Weak-line T Tauri stars)",
        uri: "http://astrothesaurus.org/uat/1795",
      },
      {
        value: "Weak-line T Tauri stars",
        label: "Weak-emission T Tauri stars (Weak-line T Tauri stars)",
        uri: "http://astrothesaurus.org/uat/1795",
      },
      {
        value: "Weak-line T Tauri stars",
        label: "WTTS (Weak-line T Tauri stars)",
        uri: "http://astrothesaurus.org/uat/1795",
      },
      {
        value: "Dirac cosmology",
        label: "Dirac cosmology",
        uri: "http://astrothesaurus.org/uat/385",
      },
      {
        value: "Gravitational wave detectors",
        label: "Gravitational wave detectors",
        uri: "http://astrothesaurus.org/uat/676",
      },
      {
        value: "Cool intergalactic medium",
        label: "Cool intergalactic medium",
        uri: "http://astrothesaurus.org/uat/303",
      },
      {
        value: "Periastron",
        label: "Periastron",
        uri: "http://astrothesaurus.org/uat/1208",
      },
      {
        value: "Radiative transfer equation",
        label: "Radiative transfer equation",
        uri: "http://astrothesaurus.org/uat/1336",
      },
      {
        value: "Early-type variable stars",
        label: "Early-type variable stars",
        uri: "http://astrothesaurus.org/uat/432",
      },
      {
        value: "Early-type variable stars",
        label: "Early type variable stars (Early-type variable stars)",
        uri: "http://astrothesaurus.org/uat/432",
      },
      {
        value: "Gamma-ray bursts",
        label: "Gamma-ray bursts",
        uri: "http://astrothesaurus.org/uat/629",
      },
      {
        value: "Gamma-ray bursts",
        label: "Gamma-ray burst (Gamma-ray bursts)",
        uri: "http://astrothesaurus.org/uat/629",
      },
      {
        value: "Gamma-ray bursts",
        label: "GRB (Gamma-ray bursts)",
        uri: "http://astrothesaurus.org/uat/629",
      },
      {
        value: "Gamma-ray bursts",
        label: "Î³-ray bursts (Gamma-ray bursts)",
        uri: "http://astrothesaurus.org/uat/629",
      },
      {
        value: "Gamma-ray bursts",
        label: "Gamma ray burst (Gamma-ray bursts)",
        uri: "http://astrothesaurus.org/uat/629",
      },
      {
        value: "Gamma-ray bursts",
        label: "Cosmic gamma ray burst (Gamma-ray bursts)",
        uri: "http://astrothesaurus.org/uat/629",
      },
      {
        value: "Gamma-ray bursts",
        label: "Gamma ray bursts (Gamma-ray bursts)",
        uri: "http://astrothesaurus.org/uat/629",
      },
      {
        value: "Gamma-ray bursts",
        label: "Cosmic gamma-ray burst (Gamma-ray bursts)",
        uri: "http://astrothesaurus.org/uat/629",
      },
      {
        value: "PV Telescopii variable stars",
        label: "PV Telescopii variable stars",
        uri: "http://astrothesaurus.org/uat/1311",
      },
      {
        value: "PV Telescopii variable stars",
        label: "PV Telescopii variables (PV Telescopii variable stars)",
        uri: "http://astrothesaurus.org/uat/1311",
      },
      {
        value: "PV Telescopii variable stars",
        label: "PV Telescopii (PV Telescopii variable stars)",
        uri: "http://astrothesaurus.org/uat/1311",
      },
      {
        value: "Solar macrospicules",
        label: "Solar macrospicules",
        uri: "http://astrothesaurus.org/uat/1502",
      },
      {
        value: "Domes",
        label: "Domes",
        uri: "http://astrothesaurus.org/uat/399",
      },
      {
        value: "Domes",
        label: "Telescope dome (Domes)",
        uri: "http://astrothesaurus.org/uat/399",
      },
      {
        value: "Amateur astronomy",
        label: "Amateur astronomy",
        uri: "http://astrothesaurus.org/uat/35",
      },
      {
        value: "Amateur astronomy",
        label: "Backyard astronomy (Amateur astronomy)",
        uri: "http://astrothesaurus.org/uat/35",
      },
      {
        value: "Amateur astronomy",
        label: "Stargazing (Amateur astronomy)",
        uri: "http://astrothesaurus.org/uat/35",
      },
      {
        value: "Particle physics",
        label: "Particle physics",
        uri: "http://astrothesaurus.org/uat/2088",
      },
      {
        value: "Intrinsic variable stars",
        label: "Intrinsic variable stars",
        uri: "http://astrothesaurus.org/uat/859",
      },
      {
        value: "Intrinsic variable stars",
        label: "Unstable stars (Intrinsic variable stars)",
        uri: "http://astrothesaurus.org/uat/859",
      },
      {
        value: "Diffuse x-ray background",
        label: "Diffuse x-ray background",
        uri: "http://astrothesaurus.org/uat/384",
      },
      {
        value: "Land-atmosphere interactions",
        label: "Land-atmosphere interactions",
        uri: "http://astrothesaurus.org/uat/900",
      },
      {
        value: "Land-atmosphere interactions",
        label: "Land atmosphere interactions (Land-atmosphere interactions)",
        uri: "http://astrothesaurus.org/uat/900",
      },
      {
        value: "Laser guide stars",
        label: "Laser guide stars",
        uri: "http://astrothesaurus.org/uat/904",
      },
      {
        value: "Zero-age main sequence stars",
        label: "Zero-age main sequence stars",
        uri: "http://astrothesaurus.org/uat/1843",
      },
      {
        value: "Zero-age main sequence stars",
        label: "Zero-age main sequence (Zero-age main sequence stars)",
        uri: "http://astrothesaurus.org/uat/1843",
      },
      {
        value: "Zero-age main sequence stars",
        label: "ZAMS (Zero-age main sequence stars)",
        uri: "http://astrothesaurus.org/uat/1843",
      },
      {
        value: "Zero-age main sequence stars",
        label: "Zero age main sequence (Zero-age main sequence stars)",
        uri: "http://astrothesaurus.org/uat/1843",
      },
      {
        value: "Stellar bow shocks",
        label: "Stellar bow shocks",
        uri: "http://astrothesaurus.org/uat/1586",
      },
      {
        value: "Stellar bow shocks",
        label: "Solar bow shock (Stellar bow shocks)",
        uri: "http://astrothesaurus.org/uat/1586",
      },
      {
        value: "Stellar cores",
        label: "Stellar cores",
        uri: "http://astrothesaurus.org/uat/1592",
      },
      {
        value: "Automatic patrol telescopes",
        label: "Automatic patrol telescopes",
        uri: "http://astrothesaurus.org/uat/122",
      },
      {
        value: "Automatic patrol telescopes",
        label: "Automated patrol telescopes (Automatic patrol telescopes)",
        uri: "http://astrothesaurus.org/uat/122",
      },
      {
        value: "Interstellar dust",
        label: "Interstellar dust",
        uri: "http://astrothesaurus.org/uat/836",
      },
      {
        value: "Interstellar dust",
        label: "Interstellar grains (Interstellar dust)",
        uri: "http://astrothesaurus.org/uat/836",
      },
      {
        value: "Interstellar dust",
        label: "Dust grain (Interstellar dust)",
        uri: "http://astrothesaurus.org/uat/836",
      },
      {
        value: "Interstellar dust",
        label: "Interstellar dust clouds (Interstellar dust)",
        uri: "http://astrothesaurus.org/uat/836",
      },
      {
        value: "Interstellar dust",
        label: "Dust grains (Interstellar dust)",
        uri: "http://astrothesaurus.org/uat/836",
      },
      {
        value: "Interstellar dust",
        label: "Cosmic dust (Interstellar dust)",
        uri: "http://astrothesaurus.org/uat/836",
      },
      {
        value: "Interstellar dust",
        label: "Interstellar dust grains (Interstellar dust)",
        uri: "http://astrothesaurus.org/uat/836",
      },
      {
        value: "Solar faculae",
        label: "Solar faculae",
        uri: "http://astrothesaurus.org/uat/1494",
      },
      {
        value: "Solar faculae",
        label: "Solar facula (Solar faculae)",
        uri: "http://astrothesaurus.org/uat/1494",
      },
      {
        value: "ZZ Ceti stars",
        label: "ZZ Ceti stars",
        uri: "http://astrothesaurus.org/uat/1847",
      },
      {
        value: "B(e) stars",
        label: "B(e) stars",
        uri: "http://astrothesaurus.org/uat/2104",
      },
      {
        value: "B(e) stars",
        label: "B[e]-type stars (B(e) stars)",
        uri: "http://astrothesaurus.org/uat/2104",
      },
      {
        value: "B(e) stars",
        label: "B(e)-type stars (B(e) stars)",
        uri: "http://astrothesaurus.org/uat/2104",
      },
      {
        value: "B(e) stars",
        label: "B[e] stars (B(e) stars)",
        uri: "http://astrothesaurus.org/uat/2104",
      },
      {
        value: "Diffuse radiation",
        label: "Diffuse radiation",
        uri: "http://astrothesaurus.org/uat/383",
      },
      {
        value: "Diffuse radiation",
        label: "Diffuse skylight (Diffuse radiation)",
        uri: "http://astrothesaurus.org/uat/383",
      },
      {
        value: "Diffuse radiation",
        label: "Diffuse sky radiation (Diffuse radiation)",
        uri: "http://astrothesaurus.org/uat/383",
      },
      {
        value: "Diffuse radiation",
        label: "Skylight (Diffuse radiation)",
        uri: "http://astrothesaurus.org/uat/383",
      },
      {
        value: "Diffuse radiation",
        label: "Sky radiation (Diffuse radiation)",
        uri: "http://astrothesaurus.org/uat/383",
      },
      {
        value: "Lunar domes",
        label: "Lunar domes",
        uri: "http://astrothesaurus.org/uat/950",
      },
      {
        value: "Young massive clusters",
        label: "Young massive clusters",
        uri: "http://astrothesaurus.org/uat/2049",
      },
      {
        value: "High mass x-ray binary stars",
        label: "High mass x-ray binary stars",
        uri: "http://astrothesaurus.org/uat/733",
      },
      {
        value: "High mass x-ray binary stars",
        label: "HMXBs (High mass x-ray binary stars)",
        uri: "http://astrothesaurus.org/uat/733",
      },
      {
        value: "High mass x-ray binary stars",
        label: "High-mass X-ray binaries (High mass x-ray binary stars)",
        uri: "http://astrothesaurus.org/uat/733",
      },
      {
        value: "High mass x-ray binary stars",
        label: "High-mass X-ray binary stars (High mass x-ray binary stars)",
        uri: "http://astrothesaurus.org/uat/733",
      },
      {
        value: "High mass x-ray binary stars",
        label: "HMXB (High mass x-ray binary stars)",
        uri: "http://astrothesaurus.org/uat/733",
      },
      {
        value: "Cosmic magnetic fields theory",
        label: "Cosmic magnetic fields theory",
        uri: "http://astrothesaurus.org/uat/321",
      },
      {
        value: "Lunar maria",
        label: "Lunar maria",
        uri: "http://astrothesaurus.org/uat/961",
      },
      {
        value: "Lunar maria",
        label: "Moon seas (Lunar maria)",
        uri: "http://astrothesaurus.org/uat/961",
      },
      {
        value: "Lunar maria",
        label: "Lunar mare (Lunar maria)",
        uri: "http://astrothesaurus.org/uat/961",
      },
      {
        value: "Lunar maria",
        label: "Lunar seas (Lunar maria)",
        uri: "http://astrothesaurus.org/uat/961",
      },
      {
        value: "Lunar maria",
        label: "Moon maria (Lunar maria)",
        uri: "http://astrothesaurus.org/uat/961",
      },
      {
        value: "Lunar maria",
        label: "Moon mare (Lunar maria)",
        uri: "http://astrothesaurus.org/uat/961",
      },
      {
        value: "Aurorae",
        label: "Aurorae",
        uri: "http://astrothesaurus.org/uat/2192",
      },
      {
        value: "Solar K corona",
        label: "Solar K corona",
        uri: "http://astrothesaurus.org/uat/2042",
      },
      {
        value: "Solar K corona",
        label: "K region (Solar K corona)",
        uri: "http://astrothesaurus.org/uat/2042",
      },
      {
        value: "Solar K corona",
        label: "Solar K coronal region (Solar K corona)",
        uri: "http://astrothesaurus.org/uat/2042",
      },
      {
        value: "Solar K corona",
        label: "K corona (Solar K corona)",
        uri: "http://astrothesaurus.org/uat/2042",
      },
      {
        value: "Pre-solar nebulae",
        label: "Pre-solar nebulae",
        uri: "http://astrothesaurus.org/uat/1291",
      },
      {
        value: "Pre-solar nebulae",
        label: "Presolar nebula (Pre-solar nebulae)",
        uri: "http://astrothesaurus.org/uat/1291",
      },
      {
        value: "Multi-periodic pulsation",
        label: "Multi-periodic pulsation",
        uri: "http://astrothesaurus.org/uat/1078",
      },
      {
        value: "Multi-periodic pulsation",
        label: "Multiperiodic pulsation (Multi-periodic pulsation)",
        uri: "http://astrothesaurus.org/uat/1078",
      },
      {
        value: "Galaxy properties",
        label: "Galaxy properties",
        uri: "http://astrothesaurus.org/uat/615",
      },
      {
        value: "Galaxy properties",
        label: "Galactic properties (Galaxy properties)",
        uri: "http://astrothesaurus.org/uat/615",
      },
      {
        value: "Of stars",
        label: "Of stars",
        uri: "http://astrothesaurus.org/uat/1155",
      },
      {
        value: "Of stars",
        label: "Of type stars (Of stars)",
        uri: "http://astrothesaurus.org/uat/1155",
      },
      {
        value: "Of stars",
        label: "Of-type stars (Of stars)",
        uri: "http://astrothesaurus.org/uat/1155",
      },
      {
        value: "Interstellar line emission",
        label: "Interstellar line emission",
        uri: "http://astrothesaurus.org/uat/844",
      },
      {
        value: "Experimental models",
        label: "Experimental models",
        uri: "http://astrothesaurus.org/uat/2098",
      },
      {
        value: "Solar meridional circulation",
        label: "Solar meridional circulation",
        uri: "http://astrothesaurus.org/uat/1874",
      },
      {
        value: "Delta Scuti variable stars",
        label: "Delta Scuti variable stars",
        uri: "http://astrothesaurus.org/uat/370",
      },
      {
        value: "Delta Scuti variable stars",
        label: "Dwarf Cepheids (Delta Scuti variable stars)",
        uri: "http://astrothesaurus.org/uat/370",
      },
      {
        value: "Delta Scuti variable stars",
        label: "Delta Scuti variables (Delta Scuti variable stars)",
        uri: "http://astrothesaurus.org/uat/370",
      },
      {
        value: "Delta Scuti variable stars",
        label: "Al Velorum stars (Delta Scuti variable stars)",
        uri: "http://astrothesaurus.org/uat/370",
      },
      {
        value: "Circumstellar clouds",
        label: "Circumstellar clouds",
        uri: "http://astrothesaurus.org/uat/234",
      },
      {
        value: "Microlensing parallax",
        label: "Microlensing parallax",
        uri: "http://astrothesaurus.org/uat/2144",
      },
      {
        value: "Parsec",
        label: "Parsec",
        uri: "http://astrothesaurus.org/uat/1199",
      },
      {
        value: "Parsec",
        label: "Parallax second (Parsec)",
        uri: "http://astrothesaurus.org/uat/1199",
      },
      {
        value: "Planetary ionospheres",
        label: "Planetary ionospheres",
        uri: "http://astrothesaurus.org/uat/2185",
      },
      {
        value: "Triangulum Galaxy",
        label: "Triangulum Galaxy",
        uri: "http://astrothesaurus.org/uat/1712",
      },
      {
        value: "Triangulum Galaxy",
        label: "M33 (Triangulum Galaxy)",
        uri: "http://astrothesaurus.org/uat/1712",
      },
      {
        value: "Triangulum Galaxy",
        label: "NGC 598 (Triangulum Galaxy)",
        uri: "http://astrothesaurus.org/uat/1712",
      },
      {
        value: "Triangulum Galaxy",
        label: "Messier 33 (Triangulum Galaxy)",
        uri: "http://astrothesaurus.org/uat/1712",
      },
      {
        value: "Kappa mechanism",
        label: "Kappa mechanism",
        uri: "http://astrothesaurus.org/uat/882",
      },
      {
        value: "Kappa mechanism",
        label: "K mechanism (Kappa mechanism)",
        uri: "http://astrothesaurus.org/uat/882",
      },
      {
        value: "Kappa mechanism",
        label: "Îº-mechanism (Kappa mechanism)",
        uri: "http://astrothesaurus.org/uat/882",
      },
      {
        value: "Kappa mechanism",
        label: "K-mechanism (Kappa mechanism)",
        uri: "http://astrothesaurus.org/uat/882",
      },
      {
        value: "Sunspot cycle",
        label: "Sunspot cycle",
        uri: "http://astrothesaurus.org/uat/1650",
      },
      {
        value: "Redshifted",
        label: "Redshifted",
        uri: "http://astrothesaurus.org/uat/1379",
      },
      {
        value: "Redshifted",
        label: "Red shift (Redshifted)",
        uri: "http://astrothesaurus.org/uat/1379",
      },
      {
        value: "Redshifted",
        label: "Redshift (Redshifted)",
        uri: "http://astrothesaurus.org/uat/1379",
      },
      {
        value: "Polarimeters",
        label: "Polarimeters",
        uri: "http://astrothesaurus.org/uat/1277",
      },
      {
        value: "Polarimeters",
        label: "Polarimetric instruments (Polarimeters)",
        uri: "http://astrothesaurus.org/uat/1277",
      },
      {
        value: "Polarimeters",
        label: "Polarimetric instrumentation (Polarimeters)",
        uri: "http://astrothesaurus.org/uat/1277",
      },
      {
        value: "Wolf diagram",
        label: "Wolf diagram",
        uri: "http://astrothesaurus.org/uat/1807",
      },
      {
        value: "Galaxy encounters",
        label: "Galaxy encounters",
        uri: "http://astrothesaurus.org/uat/592",
      },
      {
        value: "Kolmogorov-Smirnov test",
        label: "Kolmogorov-Smirnov test",
        uri: "http://astrothesaurus.org/uat/1928",
      },
      {
        value: "Maximal Kerr black holes",
        label: "Maximal Kerr black holes",
        uri: "http://astrothesaurus.org/uat/1016",
      },
      {
        value: "M-sigma relation",
        label: "M-sigma relation",
        uri: "http://astrothesaurus.org/uat/2026",
      },
      {
        value: "Galaxy mergers",
        label: "Galaxy mergers",
        uri: "http://astrothesaurus.org/uat/608",
      },
      {
        value: "Compact binary stars",
        label: "Compact binary stars",
        uri: "http://astrothesaurus.org/uat/283",
      },
      {
        value: "Compact binary stars",
        label: "Compact object binaries (Compact binary stars)",
        uri: "http://astrothesaurus.org/uat/283",
      },
      {
        value: "Lunar interior",
        label: "Lunar interior",
        uri: "http://astrothesaurus.org/uat/959",
      },
      {
        value: "Nadir",
        label: "Nadir",
        uri: "http://astrothesaurus.org/uat/1086",
      },
      {
        value: "O dwarf stars",
        label: "O dwarf stars",
        uri: "http://astrothesaurus.org/uat/1135",
      },
      {
        value: "O dwarf stars",
        label: "O-type dwarf stars (O dwarf stars)",
        uri: "http://astrothesaurus.org/uat/1135",
      },
      {
        value: "O dwarf stars",
        label: "O dwarfs (O dwarf stars)",
        uri: "http://astrothesaurus.org/uat/1135",
      },
      {
        value: "O dwarf stars",
        label: "O-type dwarfs (O dwarf stars)",
        uri: "http://astrothesaurus.org/uat/1135",
      },
      {
        value: "O dwarf stars",
        label: "O-type main sequence stars (O dwarf stars)",
        uri: "http://astrothesaurus.org/uat/1135",
      },
      {
        value: "Solar neutrino problem",
        label: "Solar neutrino problem",
        uri: "http://astrothesaurus.org/uat/1510",
      },
      {
        value: "E-folding time",
        label: "E-folding time",
        uri: "http://astrothesaurus.org/uat/425",
      },
      {
        value: "Emission nebulae",
        label: "Emission nebulae",
        uri: "http://astrothesaurus.org/uat/461",
      },
      {
        value: "Photometer",
        label: "Photometer",
        uri: "http://astrothesaurus.org/uat/2030",
      },
      {
        value: "Ultraviolet transient sources",
        label: "Ultraviolet transient sources",
        uri: "http://astrothesaurus.org/uat/1854",
      },
      {
        value: "Ultraviolet transient sources",
        label: "UV transient sources (Ultraviolet transient sources)",
        uri: "http://astrothesaurus.org/uat/1854",
      },
      {
        value: "Dwarf novae",
        label: "Dwarf novae",
        uri: "http://astrothesaurus.org/uat/418",
      },
      {
        value: "Dwarf novae",
        label: "U Geminorum-type variable stars (Dwarf novae)",
        uri: "http://astrothesaurus.org/uat/418",
      },
      {
        value: "Dwarf novae",
        label: "Dwarf nova (Dwarf novae)",
        uri: "http://astrothesaurus.org/uat/418",
      },
      {
        value: "Schwarzschild metric",
        label: "Schwarzschild metric",
        uri: "http://astrothesaurus.org/uat/1434",
      },
      {
        value: "Schwarzschild metric",
        label: "Schwarzschild vacuum (Schwarzschild metric)",
        uri: "http://astrothesaurus.org/uat/1434",
      },
      {
        value: "Schwarzschild metric",
        label: "Schwarzschild solution (Schwarzschild metric)",
        uri: "http://astrothesaurus.org/uat/1434",
      },
      {
        value: "Color equation",
        label: "Color equation",
        uri: "http://astrothesaurus.org/uat/269",
      },
      {
        value: "Color equation",
        label: "Colour equation (Color equation)",
        uri: "http://astrothesaurus.org/uat/269",
      },
      {
        value: "Ultraluminous x-ray sources",
        label: "Ultraluminous x-ray sources",
        uri: "http://astrothesaurus.org/uat/2164",
      },
      {
        value: "Ultraluminous x-ray sources",
        label: "ULS (Ultraluminous x-ray sources)",
        uri: "http://astrothesaurus.org/uat/2164",
      },
      {
        value: "Ultraluminous x-ray sources",
        label: "PULX (Ultraluminous x-ray sources)",
        uri: "http://astrothesaurus.org/uat/2164",
      },
      {
        value: "Ultraluminous x-ray sources",
        label: "ULX (Ultraluminous x-ray sources)",
        uri: "http://astrothesaurus.org/uat/2164",
      },
      {
        value: "Ultraluminous x-ray sources",
        label: " SSXS (Ultraluminous x-ray sources)",
        uri: "http://astrothesaurus.org/uat/2164",
      },
      {
        value: "Ultraluminous x-ray sources",
        label: "Ultraluminous supersoft sources (Ultraluminous x-ray sources)",
        uri: "http://astrothesaurus.org/uat/2164",
      },
      {
        value: "Ultraluminous x-ray sources",
        label: "Luminous supersoft x-ray source (Ultraluminous x-ray sources)",
        uri: "http://astrothesaurus.org/uat/2164",
      },
      {
        value: "Ultraluminous x-ray sources",
        label: "Supersoft sources (Ultraluminous x-ray sources)",
        uri: "http://astrothesaurus.org/uat/2164",
      },
      {
        value: "Ultraluminous x-ray sources",
        label: "SSS (Ultraluminous x-ray sources)",
        uri: "http://astrothesaurus.org/uat/2164",
      },
      {
        value: "Ultraluminous x-ray sources",
        label:
          "Pulsating ultraluminous X-ray sources (Ultraluminous x-ray sources)",
        uri: "http://astrothesaurus.org/uat/2164",
      },
      {
        value: "Neutrino oscillations",
        label: "Neutrino oscillations",
        uri: "http://astrothesaurus.org/uat/1104",
      },
      {
        value: "Near infrared astronomy",
        label: "Near infrared astronomy",
        uri: "http://astrothesaurus.org/uat/1093",
      },
      {
        value: "Near infrared astronomy",
        label: "Near-ir astronomy (Near infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/1093",
      },
      {
        value: "Near infrared astronomy",
        label: "Near infrared telescopes (Near infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/1093",
      },
      {
        value: "Near infrared astronomy",
        label: "Near-infrared telescopes (Near infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/1093",
      },
      {
        value: "Near infrared astronomy",
        label:
          "Near infrared astronomical observations (Near infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/1093",
      },
      {
        value: "Near infrared astronomy",
        label: "Near ir astronomy (Near infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/1093",
      },
      {
        value: "Near infrared astronomy",
        label: "Near-infrared astronomy (Near infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/1093",
      },
      {
        value: "Near infrared astronomy",
        label: "Near-ir astronomical observations (Near infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/1093",
      },
      {
        value: "Near infrared astronomy",
        label: "Near ir astronomical observations (Near infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/1093",
      },
      {
        value: "Near infrared astronomy",
        label:
          "Near-infrared astronomical observations (Near infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/1093",
      },
      {
        value: "High-resolution microlensing event imaging",
        label: "High-resolution microlensing event imaging",
        uri: "http://astrothesaurus.org/uat/2138",
      },
      {
        value: "Multiple mirror telescopes",
        label: "Multiple mirror telescopes",
        uri: "http://astrothesaurus.org/uat/1080",
      },
      {
        value: "Multiple mirror telescopes",
        label: "MM (Multiple mirror telescopes)",
        uri: "http://astrothesaurus.org/uat/1080",
      },
      {
        value: "Galaxy environments",
        label: "Galaxy environments",
        uri: "http://astrothesaurus.org/uat/2029",
      },
      {
        value: "Closed universe",
        label: "Closed universe",
        uri: "http://astrothesaurus.org/uat/256",
      },
      {
        value: "Cosmic isotropy",
        label: "Cosmic isotropy",
        uri: "http://astrothesaurus.org/uat/320",
      },
      {
        value: "FU Orionis stars",
        label: "FU Orionis stars",
        uri: "http://astrothesaurus.org/uat/553",
      },
      {
        value: "FU Orionis stars",
        label: "FU Orionis (FU Orionis stars)",
        uri: "http://astrothesaurus.org/uat/553",
      },
      {
        value: "FU Orionis stars",
        label: "FU-Orionis (FU Orionis stars)",
        uri: "http://astrothesaurus.org/uat/553",
      },
      {
        value: "Software documentation",
        label: "Software documentation",
        uri: "http://astrothesaurus.org/uat/1869",
      },
      {
        value: "D galaxies",
        label: "D galaxies",
        uri: "http://astrothesaurus.org/uat/346",
      },
      {
        value: "Giant radio galaxies",
        label: "Giant radio galaxies",
        uri: "http://astrothesaurus.org/uat/654",
      },
      {
        value: "Solar observatories",
        label: "Solar observatories",
        uri: "http://astrothesaurus.org/uat/1513",
      },
      {
        value: "Forbush effect",
        label: "Forbush effect",
        uri: "http://astrothesaurus.org/uat/546",
      },
      {
        value: "Forbush effect",
        label: "Forbush decrease (Forbush effect)",
        uri: "http://astrothesaurus.org/uat/546",
      },
      {
        value: "Radio occultation",
        label: "Radio occultation",
        uri: "http://astrothesaurus.org/uat/1351",
      },
      {
        value: "Gamma-ray telescopes",
        label: "Gamma-ray telescopes",
        uri: "http://astrothesaurus.org/uat/634",
      },
      {
        value: "Gamma-ray telescopes",
        label: "Gamma ray telescopes (Gamma-ray telescopes)",
        uri: "http://astrothesaurus.org/uat/634",
      },
      {
        value: "Gamma-ray telescopes",
        label: "Gamma telescopes (Gamma-ray telescopes)",
        uri: "http://astrothesaurus.org/uat/634",
      },
      {
        value: "Gamma-ray telescopes",
        label: "Î³-ray telescopes  (Gamma-ray telescopes)",
        uri: "http://astrothesaurus.org/uat/634",
      },
      {
        value: "Leptogenesis",
        label: "Leptogenesis",
        uri: "http://astrothesaurus.org/uat/916",
      },
      {
        value: "Astroinformatics",
        label: "Astroinformatics",
        uri: "http://astrothesaurus.org/uat/78",
      },
      {
        value: "Polycyclic aromatic hydrocarbons",
        label: "Polycyclic aromatic hydrocarbons",
        uri: "http://astrothesaurus.org/uat/1280",
      },
      {
        value: "Polycyclic aromatic hydrocarbons",
        label: "Polyaromatic hydrocarbons (Polycyclic aromatic hydrocarbons)",
        uri: "http://astrothesaurus.org/uat/1280",
      },
      {
        value: "Polycyclic aromatic hydrocarbons",
        label: "PAHs (Polycyclic aromatic hydrocarbons)",
        uri: "http://astrothesaurus.org/uat/1280",
      },
      {
        value: "Polycyclic aromatic hydrocarbons",
        label:
          "Polynuclear aromatic hydrocarbons (Polycyclic aromatic hydrocarbons)",
        uri: "http://astrothesaurus.org/uat/1280",
      },
      {
        value: "Silicon monoxide masers",
        label: "Silicon monoxide masers",
        uri: "http://astrothesaurus.org/uat/1458",
      },
      {
        value: "Silicon monoxide masers",
        label: "Silicon-monoxide masers (Silicon monoxide masers)",
        uri: "http://astrothesaurus.org/uat/1458",
      },
      {
        value: "Silicon monoxide masers",
        label: "SiO masers (Silicon monoxide masers)",
        uri: "http://astrothesaurus.org/uat/1458",
      },
      {
        value: "Survival analysis",
        label: "Survival analysis",
        uri: "http://astrothesaurus.org/uat/1905",
      },
      {
        value: "Population II stars",
        label: "Population II stars",
        uri: "http://astrothesaurus.org/uat/1284",
      },
      {
        value: "Population II stars",
        label: "Pop II (Population II stars)",
        uri: "http://astrothesaurus.org/uat/1284",
      },
      {
        value: "Population II stars",
        label: "Population 2 stars (Population II stars)",
        uri: "http://astrothesaurus.org/uat/1284",
      },
      {
        value: "Population II stars",
        label: "Population two stars (Population II stars)",
        uri: "http://astrothesaurus.org/uat/1284",
      },
      {
        value: "Solar magnetic reconnection",
        label: "Solar magnetic reconnection",
        uri: "http://astrothesaurus.org/uat/1504",
      },
      {
        value: "Nuclear abundances",
        label: "Nuclear abundances",
        uri: "http://astrothesaurus.org/uat/1128",
      },
      {
        value: "Interstellar dust processes",
        label: "Interstellar dust processes",
        uri: "http://astrothesaurus.org/uat/838",
      },
      {
        value: "Interstellar dust processes",
        label: "Interstellar dust grain processes (Interstellar dust processes)",
        uri: "http://astrothesaurus.org/uat/838",
      },
      {
        value: "Interstellar dust processes",
        label: "Interstellar grain processes (Interstellar dust processes)",
        uri: "http://astrothesaurus.org/uat/838",
      },
      {
        value: "Philosophy of astronomy",
        label: "Philosophy of astronomy",
        uri: "http://astrothesaurus.org/uat/1222",
      },
      {
        value: "Intracluster medium",
        label: "Intracluster medium",
        uri: "http://astrothesaurus.org/uat/858",
      },
      {
        value: "Intracluster medium",
        label: "ICM (Intracluster medium)",
        uri: "http://astrothesaurus.org/uat/858",
      },
      {
        value: "Intracluster medium",
        label: "Intracluster matter (Intracluster medium)",
        uri: "http://astrothesaurus.org/uat/858",
      },
      {
        value: "Baryon acoustic oscillations",
        label: "Baryon acoustic oscillations",
        uri: "http://astrothesaurus.org/uat/138",
      },
      {
        value: "Baryon acoustic oscillations",
        label: "BAO (Baryon acoustic oscillations)",
        uri: "http://astrothesaurus.org/uat/138",
      },
      {
        value: "Geosynchronous satellites",
        label: "Geosynchronous satellites",
        uri: "http://astrothesaurus.org/uat/648",
      },
      {
        value: "Hilda group",
        label: "Hilda group",
        uri: "http://astrothesaurus.org/uat/741",
      },
      {
        value: "Hilda group",
        label: "Hilda asteroids (Hilda group)",
        uri: "http://astrothesaurus.org/uat/741",
      },
      {
        value: "Ephemeral active regions",
        label: "Ephemeral active regions",
        uri: "http://astrothesaurus.org/uat/463",
      },
      {
        value: "Affine invariant",
        label: "Affine invariant",
        uri: "http://astrothesaurus.org/uat/1890",
      },
      {
        value: "Fast novae",
        label: "Fast novae",
        uri: "http://astrothesaurus.org/uat/530",
      },
      {
        value: "Natural satellites (Extrasolar)",
        label: "Natural satellites (Extrasolar)",
        uri: "http://astrothesaurus.org/uat/483",
      },
      {
        value: "Natural satellites (Extrasolar)",
        label: "Exomoons (Natural satellites (Extrasolar))",
        uri: "http://astrothesaurus.org/uat/483",
      },
      {
        value: "Atmospheric effects",
        label: "Atmospheric effects",
        uri: "http://astrothesaurus.org/uat/113",
      },
      {
        value: "Solar corona",
        label: "Solar corona",
        uri: "http://astrothesaurus.org/uat/1483",
      },
      {
        value: "UV Persei stars",
        label: "UV Persei stars",
        uri: "http://astrothesaurus.org/uat/1756",
      },
      {
        value: "Argument of perigee",
        label: "Argument of perigee",
        uri: "http://astrothesaurus.org/uat/65",
      },
      {
        value: "Ecliptic poles",
        label: "Ecliptic poles",
        uri: "http://astrothesaurus.org/uat/448",
      },
      {
        value: "General relativity",
        label: "General relativity",
        uri: "http://astrothesaurus.org/uat/641",
      },
      {
        value: "General relativity",
        label: "General theory of relativity (General relativity)",
        uri: "http://astrothesaurus.org/uat/641",
      },
      {
        value: "North ecliptic pole",
        label: "North ecliptic pole",
        uri: "http://astrothesaurus.org/uat/1124",
      },
      {
        value: "North ecliptic pole",
        label: "NEP (North ecliptic pole)",
        uri: "http://astrothesaurus.org/uat/1124",
      },
      {
        value: "North ecliptic pole",
        label: "N.E.P. (North ecliptic pole)",
        uri: "http://astrothesaurus.org/uat/1124",
      },
      {
        value: "Comet nuclei",
        label: "Comet nuclei",
        uri: "http://astrothesaurus.org/uat/2160",
      },
      {
        value: "Double quasars",
        label: "Double quasars",
        uri: "http://astrothesaurus.org/uat/406",
      },
      {
        value: "Solar system",
        label: "Solar system",
        uri: "http://astrothesaurus.org/uat/1528",
      },
      {
        value: "Galaxy formation",
        label: "Galaxy formation",
        uri: "http://astrothesaurus.org/uat/595",
      },
      {
        value: "Holmberg radius",
        label: "Holmberg radius",
        uri: "http://astrothesaurus.org/uat/743",
      },
      {
        value: "Orbital elements",
        label: "Orbital elements",
        uri: "http://astrothesaurus.org/uat/1177",
      },
      {
        value: "Orbital elements",
        label: "Keplerian elements (Orbital elements)",
        uri: "http://astrothesaurus.org/uat/1177",
      },
      {
        value: "Compact galaxies",
        label: "Compact galaxies",
        uri: "http://astrothesaurus.org/uat/285",
      },
      {
        value: "N galaxies",
        label: "N galaxies",
        uri: "http://astrothesaurus.org/uat/1084",
      },
      {
        value: "Hubble diagram",
        label: "Hubble diagram",
        uri: "http://astrothesaurus.org/uat/759",
      },
      {
        value: "Interstellar filaments",
        label: "Interstellar filaments",
        uri: "http://astrothesaurus.org/uat/842",
      },
      {
        value: "Interstellar filaments",
        label: "Filaments (Interstellar filaments)",
        uri: "http://astrothesaurus.org/uat/842",
      },
      {
        value: "Exoplanet structure",
        label: "Exoplanet structure",
        uri: "http://astrothesaurus.org/uat/495",
      },
      {
        value: "Argument of perihelion",
        label: "Argument of perihelion",
        uri: "http://astrothesaurus.org/uat/66",
      },
      {
        value: "Planetary interior",
        label: "Planetary interior",
        uri: "http://astrothesaurus.org/uat/1248",
      },
      {
        value: "Solar coronal loops",
        label: "Solar coronal loops",
        uri: "http://astrothesaurus.org/uat/1485",
      },
      {
        value: "Two-color diagrams",
        label: "Two-color diagrams",
        uri: "http://astrothesaurus.org/uat/1724",
      },
      {
        value: "Two-color diagrams",
        label: "Two color diagrams (Two-color diagrams)",
        uri: "http://astrothesaurus.org/uat/1724",
      },
      {
        value: "Two-color diagrams",
        label: "Color-color diagrams (Two-color diagrams)",
        uri: "http://astrothesaurus.org/uat/1724",
      },
      {
        value: "Mesosphere",
        label: "Mesosphere",
        uri: "http://astrothesaurus.org/uat/1030",
      },
      {
        value: "Population II Cepheid variable stars",
        label: "Population II Cepheid variable stars",
        uri: "http://astrothesaurus.org/uat/1283",
      },
      {
        value: "Population II Cepheid variable stars",
        label:
          "Population II Cepheid stars (Population II Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/1283",
      },
      {
        value: "Relativistic cosmology",
        label: "Relativistic cosmology",
        uri: "http://astrothesaurus.org/uat/1387",
      },
      {
        value: "Flare stars",
        label: "Flare stars",
        uri: "http://astrothesaurus.org/uat/540",
      },
      {
        value: "Polar caps",
        label: "Polar caps",
        uri: "http://astrothesaurus.org/uat/1273",
      },
      {
        value: "Polar caps",
        label: "Polar icecaps (Polar caps)",
        uri: "http://astrothesaurus.org/uat/1273",
      },
      {
        value: "Polar caps",
        label: "Polar ice caps (Polar caps)",
        uri: "http://astrothesaurus.org/uat/1273",
      },
      {
        value: "Intergalactic gas",
        label: "Intergalactic gas",
        uri: "http://astrothesaurus.org/uat/812",
      },
      {
        value: "Late-type stars",
        label: "Late-type stars",
        uri: "http://astrothesaurus.org/uat/909",
      },
      {
        value: "Late-type stars",
        label: "Late type stars (Late-type stars)",
        uri: "http://astrothesaurus.org/uat/909",
      },
      {
        value: "Late-type stars",
        label: "Cool stars (Late-type stars)",
        uri: "http://astrothesaurus.org/uat/909",
      },
      {
        value: "Cosmic anisotropy",
        label: "Cosmic anisotropy",
        uri: "http://astrothesaurus.org/uat/316",
      },
      {
        value: "Asymptotic giant branch stars",
        label: "Asymptotic giant branch stars",
        uri: "http://astrothesaurus.org/uat/2100",
      },
      {
        value: "Asymptotic giant branch stars",
        label: "AGB stars (Asymptotic giant branch stars)",
        uri: "http://astrothesaurus.org/uat/2100",
      },
      {
        value: "Atmospheric refraction",
        label: "Atmospheric refraction",
        uri: "http://astrothesaurus.org/uat/115",
      },
      {
        value: "Non-standard theories of gravity",
        label: "Non-standard theories of gravity",
        uri: "http://astrothesaurus.org/uat/1118",
      },
      {
        value: "F stars",
        label: "F stars",
        uri: "http://astrothesaurus.org/uat/519",
      },
      {
        value: "F stars",
        label: "Class F stars (F stars)",
        uri: "http://astrothesaurus.org/uat/519",
      },
      {
        value: "F stars",
        label: "F-type stars (F stars)",
        uri: "http://astrothesaurus.org/uat/519",
      },
      {
        value: "Bright nebulae",
        label: "Bright nebulae",
        uri: "http://astrothesaurus.org/uat/180",
      },
      {
        value: "Bright nebulae",
        label: "Bright nebula (Bright nebulae)",
        uri: "http://astrothesaurus.org/uat/180",
      },
      {
        value: "Ecliptic latitude",
        label: "Ecliptic latitude",
        uri: "http://astrothesaurus.org/uat/446",
      },
      {
        value: "Binary pulsars",
        label: "Binary pulsars",
        uri: "http://astrothesaurus.org/uat/153",
      },
      {
        value: "Solar atmosphere",
        label: "Solar atmosphere",
        uri: "http://astrothesaurus.org/uat/1477",
      },
      {
        value: "Horizontal branch stars",
        label: "Horizontal branch stars",
        uri: "http://astrothesaurus.org/uat/746",
      },
      {
        value: "Horizontal branch stars",
        label: "Horizontal-branch stars (Horizontal branch stars)",
        uri: "http://astrothesaurus.org/uat/746",
      },
      {
        value: "Horizontal branch stars",
        label: "HB stars (Horizontal branch stars)",
        uri: "http://astrothesaurus.org/uat/746",
      },
      {
        value: "Horizontal branch stars",
        label: "Horizontal branch star (Horizontal branch stars)",
        uri: "http://astrothesaurus.org/uat/746",
      },
      {
        value: "Interstellar radiation field",
        label: "Interstellar radiation field",
        uri: "http://astrothesaurus.org/uat/852",
      },
      {
        value: "Surface ices",
        label: "Surface ices",
        uri: "http://astrothesaurus.org/uat/2117",
      },
      {
        value: "Surface ices",
        label: "Planetary surface ice (Surface ices)",
        uri: "http://astrothesaurus.org/uat/2117",
      },
      {
        value: "Surface ices",
        label: "Planetary surface ices (Surface ices)",
        uri: "http://astrothesaurus.org/uat/2117",
      },
      {
        value: "Surface ices",
        label: "Surface ice (Surface ices)",
        uri: "http://astrothesaurus.org/uat/2117",
      },
      {
        value: "Andromeda Galaxy",
        label: "Andromeda Galaxy",
        uri: "http://astrothesaurus.org/uat/39",
      },
      {
        value: "Andromeda Galaxy",
        label: "Messier 31 (Andromeda Galaxy)",
        uri: "http://astrothesaurus.org/uat/39",
      },
      {
        value: "Andromeda Galaxy",
        label: "M31 (Andromeda Galaxy)",
        uri: "http://astrothesaurus.org/uat/39",
      },
      {
        value: "Andromeda Galaxy",
        label: "NGC 224 (Andromeda Galaxy)",
        uri: "http://astrothesaurus.org/uat/39",
      },
      {
        value: "Early-type stars",
        label: "Early-type stars",
        uri: "http://astrothesaurus.org/uat/430",
      },
      {
        value: "Early-type stars",
        label: "Hot stars (Early-type stars)",
        uri: "http://astrothesaurus.org/uat/430",
      },
      {
        value: "Early-type stars",
        label: "Early type stars (Early-type stars)",
        uri: "http://astrothesaurus.org/uat/430",
      },
      {
        value: "Curvature singularities",
        label: "Curvature singularities",
        uri: "http://astrothesaurus.org/uat/344",
      },
      {
        value: "Atomic spectroscopy",
        label: "Atomic spectroscopy",
        uri: "http://astrothesaurus.org/uat/2099",
      },
      {
        value: "Interstellar molecules",
        label: "Interstellar molecules",
        uri: "http://astrothesaurus.org/uat/849",
      },
      {
        value: "Photogrammetry",
        label: "Photogrammetry",
        uri: "http://astrothesaurus.org/uat/1226",
      },
      {
        value: "Photogrammetry",
        label: "Stereophotogrammetry (Photogrammetry)",
        uri: "http://astrothesaurus.org/uat/1226",
      },
      {
        value: "Astronomy data acquisition",
        label: "Astronomy data acquisition",
        uri: "http://astrothesaurus.org/uat/1860",
      },
      {
        value: "Dobsonian telescopes",
        label: "Dobsonian telescopes",
        uri: "http://astrothesaurus.org/uat/398",
      },
      {
        value: "HST photometry",
        label: "HST photometry",
        uri: "http://astrothesaurus.org/uat/756",
      },
      {
        value: "HST photometry",
        label: "Hubble photometry (HST photometry)",
        uri: "http://astrothesaurus.org/uat/756",
      },
      {
        value: "HST photometry",
        label: "HST Fnnn(LMNW) photometry (HST photometry)",
        uri: "http://astrothesaurus.org/uat/756",
      },
      {
        value: "HST photometry",
        label: "Hubble Space Telescope photometry (HST photometry)",
        uri: "http://astrothesaurus.org/uat/756",
      },
      {
        value: "Sundivers",
        label: "Sundivers",
        uri: "http://astrothesaurus.org/uat/2196",
      },
      {
        value: "Sundivers",
        label: "Sun-plunging comets (Sundivers)",
        uri: "http://astrothesaurus.org/uat/2196",
      },
      {
        value: "Sundivers",
        label: "Sun-plunging comet (Sundivers)",
        uri: "http://astrothesaurus.org/uat/2196",
      },
      {
        value: "Sundivers",
        label: "Sun-plunger (Sundivers)",
        uri: "http://astrothesaurus.org/uat/2196",
      },
      {
        value: "Sundivers",
        label: "Sun-plunging (Sundivers)",
        uri: "http://astrothesaurus.org/uat/2196",
      },
      {
        value: "Solar filaments",
        label: "Solar filaments",
        uri: "http://astrothesaurus.org/uat/1495",
      },
      {
        value: "Solar filaments",
        label: "Solar flocculi (Solar filaments)",
        uri: "http://astrothesaurus.org/uat/1495",
      },
      {
        value: "Solar filaments",
        label: "Solar flocculus (Solar filaments)",
        uri: "http://astrothesaurus.org/uat/1495",
      },
      {
        value: "Magnetic fields",
        label: "Magnetic fields",
        uri: "http://astrothesaurus.org/uat/994",
      },
      {
        value: "Photoelectric magnitude",
        label: "Photoelectric magnitude",
        uri: "http://astrothesaurus.org/uat/1224",
      },
      {
        value: "Origin of the universe",
        label: "Origin of the universe",
        uri: "http://astrothesaurus.org/uat/1186",
      },
      {
        value: "Origin of the universe",
        label: "Formation of the universe (Origin of the universe)",
        uri: "http://astrothesaurus.org/uat/1186",
      },
      {
        value: "Meteor streams",
        label: "Meteor streams",
        uri: "http://astrothesaurus.org/uat/1035",
      },
      {
        value: "Meteor streams",
        label: "Meteoroid stream (Meteor streams)",
        uri: "http://astrothesaurus.org/uat/1035",
      },
      {
        value: "Plutonian satellites",
        label: "Plutonian satellites",
        uri: "http://astrothesaurus.org/uat/2202",
      },
      {
        value: "Plutonian satellites",
        label: "Moons of Pluto (Plutonian satellites)",
        uri: "http://astrothesaurus.org/uat/2202",
      },
      {
        value: "Plutonian satellites",
        label: "Pluto's moons (Plutonian satellites)",
        uri: "http://astrothesaurus.org/uat/2202",
      },
      {
        value: "Plutonian satellites",
        label: "Charon (Plutonian satellites)",
        uri: "http://astrothesaurus.org/uat/2202",
      },
      {
        value: "O subgiant stars",
        label: "O subgiant stars",
        uri: "http://astrothesaurus.org/uat/1132",
      },
      {
        value: "O subgiant stars",
        label: "O subgiants (O subgiant stars)",
        uri: "http://astrothesaurus.org/uat/1132",
      },
      {
        value: "O subgiant stars",
        label: "O-type subgiants (O subgiant stars)",
        uri: "http://astrothesaurus.org/uat/1132",
      },
      {
        value: "O subgiant stars",
        label: "O-type subgiant stars (O subgiant stars)",
        uri: "http://astrothesaurus.org/uat/1132",
      },
      {
        value: "Planetary rings",
        label: "Planetary rings",
        uri: "http://astrothesaurus.org/uat/1254",
      },
      {
        value: "Planetary rings",
        label: "Circumplanetary dust (Planetary rings)",
        uri: "http://astrothesaurus.org/uat/1254",
      },
      {
        value: "Planetary rings",
        label: "Circumplanetary medium (Planetary rings)",
        uri: "http://astrothesaurus.org/uat/1254",
      },
      {
        value: "Planetary rings",
        label: "Circumplanetary matter (Planetary rings)",
        uri: "http://astrothesaurus.org/uat/1254",
      },
      {
        value: "Solar surface",
        label: "Solar surface",
        uri: "http://astrothesaurus.org/uat/1527",
      },
      {
        value: "Mantle",
        label: "Mantle",
        uri: "http://astrothesaurus.org/uat/1005",
      },
      {
        value: "Ultraviolet observatories",
        label: "Ultraviolet observatories",
        uri: "http://astrothesaurus.org/uat/1739",
      },
      {
        value: "Stellar accretion",
        label: "Stellar accretion",
        uri: "http://astrothesaurus.org/uat/1578",
      },
      {
        value: "Visual binary stars",
        label: "Visual binary stars",
        uri: "http://astrothesaurus.org/uat/1777",
      },
      {
        value: "Visual binary stars",
        label: "Visual binaries (Visual binary stars)",
        uri: "http://astrothesaurus.org/uat/1777",
      },
      {
        value: "Bessel photometry",
        label: "Bessel photometry",
        uri: "http://astrothesaurus.org/uat/147",
      },
      {
        value: "Bessel photometry",
        label: "Bessel UB VRI photometry (Bessel photometry)",
        uri: "http://astrothesaurus.org/uat/147",
      },
      {
        value: "Late stellar evolution",
        label: "Late stellar evolution",
        uri: "http://astrothesaurus.org/uat/911",
      },
      {
        value: "Carbon burning",
        label: "Carbon burning",
        uri: "http://astrothesaurus.org/uat/195",
      },
      {
        value: "Line positions",
        label: "Line positions",
        uri: "http://astrothesaurus.org/uat/2085",
      },
      {
        value: "Planetary theory",
        label: "Planetary theory",
        uri: "http://astrothesaurus.org/uat/1258",
      },
      {
        value: "Apparent position",
        label: "Apparent position",
        uri: "http://astrothesaurus.org/uat/60",
      },
      {
        value: "Apparent position",
        label: "Apparent places (Apparent position)",
        uri: "http://astrothesaurus.org/uat/60",
      },
      {
        value: "Astrostatistics tools",
        label: "Astrostatistics tools",
        uri: "http://astrothesaurus.org/uat/1887",
      },
      {
        value: "Broad band photometry",
        label: "Broad band photometry",
        uri: "http://astrothesaurus.org/uat/184",
      },
      {
        value: "Broad band photometry",
        label: "Wide-band photometry (Broad band photometry)",
        uri: "http://astrothesaurus.org/uat/184",
      },
      {
        value: "Broad band photometry",
        label: "Broadband photometry (Broad band photometry)",
        uri: "http://astrothesaurus.org/uat/184",
      },
      {
        value: "Artificial satellites",
        label: "Artificial satellites",
        uri: "http://astrothesaurus.org/uat/68",
      },
      {
        value: "Mercury (planet)",
        label: "Mercury (planet)",
        uri: "http://astrothesaurus.org/uat/1024",
      },
      {
        value: "Mercury (planet)",
        label: "Mercury (Mercury (planet))",
        uri: "http://astrothesaurus.org/uat/1024",
      },
      {
        value: "Declination",
        label: "Declination",
        uri: "http://astrothesaurus.org/uat/365",
      },
      {
        value: "Declination",
        label: "Celestial latitude (Declination)",
        uri: "http://astrothesaurus.org/uat/365",
      },
      {
        value: "Ultraluminous infrared galaxies",
        label: "Ultraluminous infrared galaxies",
        uri: "http://astrothesaurus.org/uat/1735",
      },
      {
        value: "Ultraluminous infrared galaxies",
        label: "ULIRG (Ultraluminous infrared galaxies)",
        uri: "http://astrothesaurus.org/uat/1735",
      },
      {
        value: "Orbital nodes",
        label: "Orbital nodes",
        uri: "http://astrothesaurus.org/uat/1180",
      },
      {
        value: "Orbital nodes",
        label: "Line of node (Orbital nodes)",
        uri: "http://astrothesaurus.org/uat/1180",
      },
      {
        value: "Apogee",
        label: "Apogee",
        uri: "http://astrothesaurus.org/uat/57",
      },
      {
        value: "Xenobiology",
        label: "Xenobiology",
        uri: "http://astrothesaurus.org/uat/1826",
      },
      {
        value: "Starburst galaxies",
        label: "Starburst galaxies",
        uri: "http://astrothesaurus.org/uat/1570",
      },
      {
        value: "Starburst galaxies",
        label: "Starburst galaxy (Starburst galaxies)",
        uri: "http://astrothesaurus.org/uat/1570",
      },
      {
        value: "Stellar mass loss",
        label: "Stellar mass loss",
        uri: "http://astrothesaurus.org/uat/1613",
      },
      {
        value: "Classical Kuiper belt objects",
        label: "Classical Kuiper belt objects",
        uri: "http://astrothesaurus.org/uat/250",
      },
      {
        value: "Classical Kuiper belt objects",
        label: "cubewanos (Classical Kuiper belt objects)",
        uri: "http://astrothesaurus.org/uat/250",
      },
      {
        value: "Classical Kuiper belt objects",
        label: "Classical Kuiper-belt objects (Classical Kuiper belt objects)",
        uri: "http://astrothesaurus.org/uat/250",
      },
      {
        value: "Classical Kuiper belt objects",
        label: "Cubewanos (Classical Kuiper belt objects)",
        uri: "http://astrothesaurus.org/uat/250",
      },
      {
        value: "Mean matter density",
        label: "Mean matter density",
        uri: "http://astrothesaurus.org/uat/1020",
      },
      {
        value: "Mean matter density",
        label: "Mean mass density (Mean matter density)",
        uri: "http://astrothesaurus.org/uat/1020",
      },
      {
        value: "Mean matter density",
        label: "Mean density (Mean matter density)",
        uri: "http://astrothesaurus.org/uat/1020",
      },
      {
        value: "F test",
        label: "F test",
        uri: "http://astrothesaurus.org/uat/1931",
      },
      {
        value: "Ionized coma gases",
        label: "Ionized coma gases",
        uri: "http://astrothesaurus.org/uat/277",
      },
      {
        value: "Ionized coma gases",
        label: "Cometary ionospheres (Ionized coma gases)",
        uri: "http://astrothesaurus.org/uat/277",
      },
      {
        value: "Tectonics",
        label: "Tectonics",
        uri: "http://astrothesaurus.org/uat/2175",
      },
      {
        value: "Aeronomy",
        label: "Aeronomy",
        uri: "http://astrothesaurus.org/uat/22",
      },
      {
        value: "Magnetic stars",
        label: "Magnetic stars",
        uri: "http://astrothesaurus.org/uat/995",
      },
      {
        value: "Magnetic stars",
        label: "Cobalt stars (Magnetic stars)",
        uri: "http://astrothesaurus.org/uat/995",
      },
      {
        value: "Hubble constant",
        label: "Hubble constant",
        uri: "http://astrothesaurus.org/uat/758",
      },
      {
        value: "Hubble constant",
        label: "Hubble-Lemaitre constant (Hubble constant)",
        uri: "http://astrothesaurus.org/uat/758",
      },
      {
        value: "Cosmological evolution",
        label: "Cosmological evolution",
        uri: "http://astrothesaurus.org/uat/336",
      },
      {
        value: "Cosmological evolution",
        label: "Astronomical evolution (Cosmological evolution)",
        uri: "http://astrothesaurus.org/uat/336",
      },
      {
        value: "Hubble classification scheme",
        label: "Hubble classification scheme",
        uri: "http://astrothesaurus.org/uat/757",
      },
      {
        value: "Hubble classification scheme",
        label: "Hubble classification (Hubble classification scheme)",
        uri: "http://astrothesaurus.org/uat/757",
      },
      {
        value: "Hubble classification scheme",
        label: "Hubble galaxy classification (Hubble classification scheme)",
        uri: "http://astrothesaurus.org/uat/757",
      },
      {
        value: "Hubble classification scheme",
        label: "Hubble's classification (Hubble classification scheme)",
        uri: "http://astrothesaurus.org/uat/757",
      },
      {
        value: "Hubble classification scheme",
        label: "Hubble sequence (Hubble classification scheme)",
        uri: "http://astrothesaurus.org/uat/757",
      },
      {
        value: "Meteor radiants",
        label: "Meteor radiants",
        uri: "http://astrothesaurus.org/uat/1033",
      },
      {
        value: "Cosmochronology",
        label: "Cosmochronology",
        uri: "http://astrothesaurus.org/uat/332",
      },
      {
        value: "Cosmochronology",
        label: "Nucleocosmochronology (Cosmochronology)",
        uri: "http://astrothesaurus.org/uat/332",
      },
      {
        value: "Transit instruments",
        label: "Transit instruments",
        uri: "http://astrothesaurus.org/uat/1708",
      },
      {
        value: "Transit instruments",
        label: "Transit telescopes (Transit instruments)",
        uri: "http://astrothesaurus.org/uat/1708",
      },
      {
        value: "Saros cycle",
        label: "Saros cycle",
        uri: "http://astrothesaurus.org/uat/1424",
      },
      {
        value: "Saros cycle",
        label: "Saros series (Saros cycle)",
        uri: "http://astrothesaurus.org/uat/1424",
      },
      {
        value: "Comets",
        label: "Comets",
        uri: "http://astrothesaurus.org/uat/280",
      },
      {
        value: "Gaseous nebulae",
        label: "Gaseous nebulae",
        uri: "http://astrothesaurus.org/uat/639",
      },
      {
        value: "Gaseous nebulae",
        label: "Gaseous nebula (Gaseous nebulae)",
        uri: "http://astrothesaurus.org/uat/639",
      },
      {
        value: "Gravitational wave sources",
        label: "Gravitational wave sources",
        uri: "http://astrothesaurus.org/uat/677",
      },
      {
        value: "Meteoroids",
        label: "Meteoroids",
        uri: "http://astrothesaurus.org/uat/1040",
      },
      {
        value: "Orbit determination",
        label: "Orbit determination",
        uri: "http://astrothesaurus.org/uat/1175",
      },
      {
        value: "Moving clusters",
        label: "Moving clusters",
        uri: "http://astrothesaurus.org/uat/1076",
      },
      {
        value: "Solar evolution",
        label: "Solar evolution",
        uri: "http://astrothesaurus.org/uat/1492",
      },
      {
        value: "Solar evolution",
        label: "Evolution of the sun (Solar evolution)",
        uri: "http://astrothesaurus.org/uat/1492",
      },
      {
        value: "Double-mode Cepheid variable stars",
        label: "Double-mode Cepheid variable stars",
        uri: "http://astrothesaurus.org/uat/402",
      },
      {
        value: "Double-mode Cepheid variable stars",
        label:
          "Double-mode Cepheid variables (Double-mode Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/402",
      },
      {
        value: "Double-mode Cepheid variable stars",
        label: "Double-mode Cepheid stars (Double-mode Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/402",
      },
      {
        value: "Double-mode Cepheid variable stars",
        label: "Double-mode Cepheids (Double-mode Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/402",
      },
      {
        value: "Interstellar medium wind",
        label: "Interstellar medium wind",
        uri: "http://astrothesaurus.org/uat/848",
      },
      {
        value: "Interstellar medium wind",
        label: "Interstellar wind (Interstellar medium wind)",
        uri: "http://astrothesaurus.org/uat/848",
      },
      {
        value: "Spectral line lists",
        label: "Spectral line lists",
        uri: "http://astrothesaurus.org/uat/2082",
      },
      {
        value: "Photometric parallax",
        label: "Photometric parallax",
        uri: "http://astrothesaurus.org/uat/1231",
      },
      {
        value: "Mesopause",
        label: "Mesopause",
        uri: "http://astrothesaurus.org/uat/1029",
      },
      {
        value: "Solar radiation",
        label: "Solar radiation",
        uri: "http://astrothesaurus.org/uat/1521",
      },
      {
        value: "FK Comae stars",
        label: "FK Comae stars",
        uri: "http://astrothesaurus.org/uat/2015",
      },
      {
        value: "Trinary stars",
        label: "Trinary stars",
        uri: "http://astrothesaurus.org/uat/1714",
      },
      {
        value: "Trinary stars",
        label: "Triple stars (Trinary stars)",
        uri: "http://astrothesaurus.org/uat/1714",
      },
      {
        value: "Trinary stars",
        label: "Ternary stars (Trinary stars)",
        uri: "http://astrothesaurus.org/uat/1714",
      },
      {
        value: "Polar tides",
        label: "Polar tides",
        uri: "http://astrothesaurus.org/uat/1276",
      },
      {
        value: "Polar tides",
        label: "Arctic barotroclinic tides (Polar tides)",
        uri: "http://astrothesaurus.org/uat/1276",
      },
      {
        value: "Polar tides",
        label: "Antarctic tides (Polar tides)",
        uri: "http://astrothesaurus.org/uat/1276",
      },
      {
        value: "Polar tides",
        label: "Arctic barotropic tides (Polar tides)",
        uri: "http://astrothesaurus.org/uat/1276",
      },
      {
        value: "Polar tides",
        label: "Antarctic barotroclinic tides (Polar tides)",
        uri: "http://astrothesaurus.org/uat/1276",
      },
      {
        value: "Polar tides",
        label: "Arctic tides (Polar tides)",
        uri: "http://astrothesaurus.org/uat/1276",
      },
      {
        value: "Polar tides",
        label: "Antarctic barotropic tides (Polar tides)",
        uri: "http://astrothesaurus.org/uat/1276",
      },
      {
        value: "R Coronae Borealis variable stars",
        label: "R Coronae Borealis variable stars",
        uri: "http://astrothesaurus.org/uat/1327",
      },
      {
        value: "R Coronae Borealis variable stars",
        label: "R Coronae Borealis (R Coronae Borealis variable stars)",
        uri: "http://astrothesaurus.org/uat/1327",
      },
      {
        value: "R Coronae Borealis variable stars",
        label: "R Coronae Borealis stars (R Coronae Borealis variable stars)",
        uri: "http://astrothesaurus.org/uat/1327",
      },
      {
        value: "R Coronae Borealis variable stars",
        label: "R Coronae Borealis variables (R Coronae Borealis variable stars)",
        uri: "http://astrothesaurus.org/uat/1327",
      },
      {
        value: "R Coronae Borealis variable stars",
        label: "R cor bor stars (R Coronae Borealis variable stars)",
        uri: "http://astrothesaurus.org/uat/1327",
      },
      {
        value: "R Coronae Borealis variable stars",
        label: "R-Coronae Borealis variables (R Coronae Borealis variable stars)",
        uri: "http://astrothesaurus.org/uat/1327",
      },
      {
        value: "R Coronae Borealis variable stars",
        label: "R c b stars (R Coronae Borealis variable stars)",
        uri: "http://astrothesaurus.org/uat/1327",
      },
      {
        value: "Astronomy data modeling",
        label: "Astronomy data modeling",
        uri: "http://astrothesaurus.org/uat/1859",
      },
      {
        value: "Eclipsing binary minima timing method",
        label: "Eclipsing binary minima timing method",
        uri: "http://astrothesaurus.org/uat/443",
      },
      {
        value: "Neptunian satellites",
        label: "Neptunian satellites",
        uri: "http://astrothesaurus.org/uat/1098",
      },
      {
        value: "Neptunian satellites",
        label: "Moons of Neptune (Neptunian satellites)",
        uri: "http://astrothesaurus.org/uat/1098",
      },
      {
        value: "Neptunian satellites",
        label: "Neptunian moons (Neptunian satellites)",
        uri: "http://astrothesaurus.org/uat/1098",
      },
      {
        value: "Neptunian satellites",
        label: "Nereid (Neptunian satellites)",
        uri: "http://astrothesaurus.org/uat/1098",
      },
      {
        value: "Star formation",
        label: "Star formation",
        uri: "http://astrothesaurus.org/uat/1569",
      },
      {
        value: "Radio astronomy",
        label: "Radio astronomy",
        uri: "http://astrothesaurus.org/uat/1338",
      },
      {
        value: "Double-mode pulsation",
        label: "Double-mode pulsation",
        uri: "http://astrothesaurus.org/uat/403",
      },
      {
        value: "Double-mode pulsation",
        label: "Double mode pulsation (Double-mode pulsation)",
        uri: "http://astrothesaurus.org/uat/403",
      },
      {
        value: "Plate tectonics",
        label: "Plate tectonics",
        uri: "http://astrothesaurus.org/uat/1265",
      },
      {
        value: "Plate tectonics",
        label: "Continental drift (Plate tectonics)",
        uri: "http://astrothesaurus.org/uat/1265",
      },
      {
        value: "Ergosphere",
        label: "Ergosphere",
        uri: "http://astrothesaurus.org/uat/472",
      },
      {
        value: "Exoplanet evolution",
        label: "Exoplanet evolution",
        uri: "http://astrothesaurus.org/uat/491",
      },
      {
        value: "Catalogs",
        label: "Catalogs",
        uri: "http://astrothesaurus.org/uat/205",
      },
      {
        value: "Catalogs",
        label: "Catalogues (Catalogs)",
        uri: "http://astrothesaurus.org/uat/205",
      },
      {
        value: "Horizontal parallax",
        label: "Horizontal parallax",
        uri: "http://astrothesaurus.org/uat/748",
      },
      {
        value: "Gravitational singularities",
        label: "Gravitational singularities",
        uri: "http://astrothesaurus.org/uat/674",
      },
      {
        value: "Gravitational singularities",
        label: "Space-time singularities (Gravitational singularities)",
        uri: "http://astrothesaurus.org/uat/674",
      },
      {
        value: "Gravitational singularities",
        label: "Spacetime singularities (Gravitational singularities)",
        uri: "http://astrothesaurus.org/uat/674",
      },
      {
        value: "Gravitational singularities",
        label: "Cosmic singularities (Gravitational singularities)",
        uri: "http://astrothesaurus.org/uat/674",
      },
      {
        value: "Gravitational singularities",
        label: "Singularity (Gravitational singularities)",
        uri: "http://astrothesaurus.org/uat/674",
      },
      {
        value: "Plasma astrophysics",
        label: "Plasma astrophysics",
        uri: "http://astrothesaurus.org/uat/1261",
      },
      {
        value: "CN stars",
        label: "CN stars",
        uri: "http://astrothesaurus.org/uat/260",
      },
      {
        value: "CN stars",
        label: "Carbon-nitrogen stars (CN stars)",
        uri: "http://astrothesaurus.org/uat/260",
      },
      {
        value: "Einstein rings",
        label: "Einstein rings",
        uri: "http://astrothesaurus.org/uat/451",
      },
      {
        value: "Einstein rings",
        label: "Einstein-Chwolson ring (Einstein rings)",
        uri: "http://astrothesaurus.org/uat/451",
      },
      {
        value: "Einstein rings",
        label: "Chwolson ring (Einstein rings)",
        uri: "http://astrothesaurus.org/uat/451",
      },
      {
        value: "Evolution equation",
        label: "Evolution equation",
        uri: "http://astrothesaurus.org/uat/480",
      },
      {
        value: "AGN host galaxies",
        label: "AGN host galaxies",
        uri: "http://astrothesaurus.org/uat/2017",
      },
      {
        value: "Type Ia supernovae",
        label: "Type Ia supernovae",
        uri: "http://astrothesaurus.org/uat/1728",
      },
      {
        value: "Type Ia supernovae",
        label: "Type Ia supernova (Type Ia supernovae)",
        uri: "http://astrothesaurus.org/uat/1728",
      },
      {
        value: "Center to limb observations",
        label: "Center to limb observations",
        uri: "http://astrothesaurus.org/uat/1972",
      },
      {
        value: "Mass spectrometers",
        label: "Mass spectrometers",
        uri: "http://astrothesaurus.org/uat/1013",
      },
      {
        value: "Slow novae",
        label: "Slow novae",
        uri: "http://astrothesaurus.org/uat/1467",
      },
      {
        value: "Slow novae",
        label: "Novoid (Slow novae)",
        uri: "http://astrothesaurus.org/uat/1467",
      },
      {
        value: "Wide-field telescopes",
        label: "Wide-field telescopes",
        uri: "http://astrothesaurus.org/uat/1800",
      },
      {
        value: "Wide-field telescopes",
        label: "Wide field telescopes (Wide-field telescopes)",
        uri: "http://astrothesaurus.org/uat/1800",
      },
      {
        value: "Zone of totality",
        label: "Zone of totality",
        uri: "http://astrothesaurus.org/uat/1846",
      },
      {
        value: "Mach-Zehnder interferometers",
        label: "Mach-Zehnder interferometers",
        uri: "http://astrothesaurus.org/uat/989",
      },
      {
        value: "Mach-Zehnder interferometers",
        label: "Machâ€“Zehnder modulators (Mach-Zehnder interferometers)",
        uri: "http://astrothesaurus.org/uat/989",
      },
      {
        value: "Mach-Zehnder interferometers",
        label: "Mach zehnder interferometers (Mach-Zehnder interferometers)",
        uri: "http://astrothesaurus.org/uat/989",
      },
      {
        value: "Mach-Zehnder interferometers",
        label: "Mach Zehnder modulators (Mach-Zehnder interferometers)",
        uri: "http://astrothesaurus.org/uat/989",
      },
      {
        value: "Uranian satellites",
        label: "Uranian satellites",
        uri: "http://astrothesaurus.org/uat/1750",
      },
      {
        value: "Uranian satellites",
        label: "Uranian moons (Uranian satellites)",
        uri: "http://astrothesaurus.org/uat/1750",
      },
      {
        value: "Uranian satellites",
        label: "Moons of Uranus (Uranian satellites)",
        uri: "http://astrothesaurus.org/uat/1750",
      },
      {
        value: "Uranian satellites",
        label: "Oberon (Uranian satellites)",
        uri: "http://astrothesaurus.org/uat/1750",
      },
      {
        value: "Uranian satellites",
        label: "Titania (Uranian satellites)",
        uri: "http://astrothesaurus.org/uat/1750",
      },
      {
        value: "Charge exchange recombination",
        label: "Charge exchange recombination",
        uri: "http://astrothesaurus.org/uat/2062",
      },
      {
        value: "Interplanetary discontinuities",
        label: "Interplanetary discontinuities",
        uri: "http://astrothesaurus.org/uat/820",
      },
      {
        value: "Very Large Telescope",
        label: "Very Large Telescope",
        uri: "http://astrothesaurus.org/uat/1767",
      },
      {
        value: "Very Large Telescope",
        label: "VLT (Very Large Telescope)",
        uri: "http://astrothesaurus.org/uat/1767",
      },
      {
        value: "Turnoff point",
        label: "Turnoff point",
        uri: "http://astrothesaurus.org/uat/1721",
      },
      {
        value: "Oscillating universe",
        label: "Oscillating universe",
        uri: "http://astrothesaurus.org/uat/1188",
      },
      {
        value: "Minor axis",
        label: "Minor axis",
        uri: "http://astrothesaurus.org/uat/1064",
      },
      {
        value: "O stars",
        label: "O stars",
        uri: "http://astrothesaurus.org/uat/1137",
      },
      {
        value: "O stars",
        label: "O-type stars (O stars)",
        uri: "http://astrothesaurus.org/uat/1137",
      },
      {
        value: "O stars",
        label: "Class O stars (O stars)",
        uri: "http://astrothesaurus.org/uat/1137",
      },
      {
        value: "Radio bursts",
        label: "Radio bursts",
        uri: "http://astrothesaurus.org/uat/1339",
      },
      {
        value: "Lambda density",
        label: "Lambda density",
        uri: "http://astrothesaurus.org/uat/898",
      },
      {
        value: "Me stars",
        label: "Me stars",
        uri: "http://astrothesaurus.org/uat/1017",
      },
      {
        value: "Me stars",
        label: "Me-type stars (Me stars)",
        uri: "http://astrothesaurus.org/uat/1017",
      },
      {
        value: "Pulsation modes",
        label: "Pulsation modes",
        uri: "http://astrothesaurus.org/uat/1309",
      },
      {
        value: "Keplerian orbit",
        label: "Keplerian orbit",
        uri: "http://astrothesaurus.org/uat/884",
      },
      {
        value: "Solar storm",
        label: "Solar storm",
        uri: "http://astrothesaurus.org/uat/1526",
      },
      {
        value: "Total eclipses",
        label: "Total eclipses",
        uri: "http://astrothesaurus.org/uat/1704",
      },
      {
        value: "Parametric hypothesis tests",
        label: "Parametric hypothesis tests",
        uri: "http://astrothesaurus.org/uat/1904",
      },
      {
        value: "Coma Cluster",
        label: "Coma Cluster",
        uri: "http://astrothesaurus.org/uat/270",
      },
      {
        value: "Coma Cluster",
        label: "Abell 1656 (Coma Cluster)",
        uri: "http://astrothesaurus.org/uat/270",
      },
      {
        value: "Linear regression",
        label: "Linear regression",
        uri: "http://astrothesaurus.org/uat/1945",
      },
      {
        value: "Stellar atmospheric opacity",
        label: "Stellar atmospheric opacity",
        uri: "http://astrothesaurus.org/uat/1585",
      },
      {
        value: "Stellar atmospheric opacity",
        label: "Stellar opacity (Stellar atmospheric opacity)",
        uri: "http://astrothesaurus.org/uat/1585",
      },
      {
        value: "Stellar atmospheric opacity",
        label: "Stellar opacities (Stellar atmospheric opacity)",
        uri: "http://astrothesaurus.org/uat/1585",
      },
      {
        value: "Stellar atmospheric opacity",
        label: "Stellar atmospheric opacities (Stellar atmospheric opacity)",
        uri: "http://astrothesaurus.org/uat/1585",
      },
      {
        value: "Meteor showers",
        label: "Meteor showers",
        uri: "http://astrothesaurus.org/uat/1034",
      },
      {
        value: "Ejecta",
        label: "Ejecta",
        uri: "http://astrothesaurus.org/uat/453",
      },
      {
        value: "Particle astrophysics",
        label: "Particle astrophysics",
        uri: "http://astrothesaurus.org/uat/96",
      },
      {
        value: "Particle astrophysics",
        label: "Astroparticle physics (Particle astrophysics)",
        uri: "http://astrothesaurus.org/uat/96",
      },
      {
        value: "Roche lobe overflow",
        label: "Roche lobe overflow",
        uri: "http://astrothesaurus.org/uat/2155",
      },
      {
        value: "pp waves",
        label: "pp waves",
        uri: "http://astrothesaurus.org/uat/1288",
      },
      {
        value: "pp waves",
        label: "pp-wave (pp waves)",
        uri: "http://astrothesaurus.org/uat/1288",
      },
      {
        value: "pp waves",
        label: "pp-wave spacetimes (pp waves)",
        uri: "http://astrothesaurus.org/uat/1288",
      },
      {
        value: "Common envelope binary stars",
        label: "Common envelope binary stars",
        uri: "http://astrothesaurus.org/uat/2156",
      },
      {
        value: "Common envelope binary stars",
        label: "Common envelope binaries (Common envelope binary stars)",
        uri: "http://astrothesaurus.org/uat/2156",
      },
      {
        value: "Modified Newtonian dynamics",
        label: "Modified Newtonian dynamics",
        uri: "http://astrothesaurus.org/uat/1069",
      },
      {
        value: "Modified Newtonian dynamics",
        label: "M o n d (Modified Newtonian dynamics)",
        uri: "http://astrothesaurus.org/uat/1069",
      },
      {
        value: "Magnetic anomalies",
        label: "Magnetic anomalies",
        uri: "http://astrothesaurus.org/uat/993",
      },
      {
        value: "Semi-regular variable stars",
        label: "Semi-regular variable stars",
        uri: "http://astrothesaurus.org/uat/1444",
      },
      {
        value: "Semi-regular variable stars",
        label: "Semiregular variable stars (Semi-regular variable stars)",
        uri: "http://astrothesaurus.org/uat/1444",
      },
      {
        value: "Solar F corona",
        label: "Solar F corona",
        uri: "http://astrothesaurus.org/uat/1991",
      },
      {
        value: "Solar F corona",
        label: "F region (Solar F corona)",
        uri: "http://astrothesaurus.org/uat/1991",
      },
      {
        value: "Solar F corona",
        label: "Solar F coronal region (Solar F corona)",
        uri: "http://astrothesaurus.org/uat/1991",
      },
      {
        value: "Solar F corona",
        label: "F corona (Solar F corona)",
        uri: "http://astrothesaurus.org/uat/1991",
      },
      {
        value: "Eccentric anomaly",
        label: "Eccentric anomaly",
        uri: "http://astrothesaurus.org/uat/440",
      },
      {
        value: "Nitrous oxide",
        label: "Nitrous oxide",
        uri: "http://astrothesaurus.org/uat/1114",
      },
      {
        value: "Nitrous oxide",
        label: "N2O (Nitrous oxide)",
        uri: "http://astrothesaurus.org/uat/1114",
      },
      {
        value: "Nitrous oxide",
        label: "Laughing gas (Nitrous oxide)",
        uri: "http://astrothesaurus.org/uat/1114",
      },
      {
        value: "Nitrous oxide",
        label: "Sweet air (Nitrous oxide)",
        uri: "http://astrothesaurus.org/uat/1114",
      },
      {
        value: "Phase dispersion minimization",
        label: "Phase dispersion minimization",
        uri: "http://astrothesaurus.org/uat/1960",
      },
      {
        value: "Schwarzschild radius",
        label: "Schwarzschild radius",
        uri: "http://astrothesaurus.org/uat/1435",
      },
      {
        value: "Schwarzschild radius",
        label: "Gravitational radius (Schwarzschild radius)",
        uri: "http://astrothesaurus.org/uat/1435",
      },
      {
        value: "Interstellar atomic gas",
        label: "Interstellar atomic gas",
        uri: "http://astrothesaurus.org/uat/833",
      },
      {
        value: "Interstellar atomic gas",
        label: "Interstellar atoms (Interstellar atomic gas)",
        uri: "http://astrothesaurus.org/uat/833",
      },
      {
        value: "Lomb-Scargle periodogram",
        label: "Lomb-Scargle periodogram",
        uri: "http://astrothesaurus.org/uat/1959",
      },
      {
        value: "Penumbra",
        label: "Penumbra",
        uri: "http://astrothesaurus.org/uat/1205",
      },
      {
        value: "Penumbra",
        label: "Penumbras (Penumbra)",
        uri: "http://astrothesaurus.org/uat/1205",
      },
      {
        value: "Refracting telescopes",
        label: "Refracting telescopes",
        uri: "http://astrothesaurus.org/uat/1382",
      },
      {
        value: "Refracting telescopes",
        label: "Dioptrics (Refracting telescopes)",
        uri: "http://astrothesaurus.org/uat/1382",
      },
      {
        value: "North celestial pole",
        label: "North celestial pole",
        uri: "http://astrothesaurus.org/uat/1123",
      },
      {
        value: "North celestial pole",
        label: "NCP (North celestial pole)",
        uri: "http://astrothesaurus.org/uat/1123",
      },
      {
        value: "North celestial pole",
        label: "N.C.P. (North celestial pole)",
        uri: "http://astrothesaurus.org/uat/1123",
      },
      {
        value: "Stellar E corona",
        label: "Stellar E corona",
        uri: "http://astrothesaurus.org/uat/426",
      },
      {
        value: "Stellar E corona",
        label: "Stellar E coronal regions (Stellar E corona)",
        uri: "http://astrothesaurus.org/uat/426",
      },
      {
        value: "Stellar E corona",
        label: "E components (Stellar E corona)",
        uri: "http://astrothesaurus.org/uat/426",
      },
      {
        value: "Caustic curve",
        label: "Caustic curve",
        uri: "http://astrothesaurus.org/uat/2151",
      },
      {
        value: "Silicon burning",
        label: "Silicon burning",
        uri: "http://astrothesaurus.org/uat/1457",
      },
      {
        value: "Clustering",
        label: "Clustering",
        uri: "http://astrothesaurus.org/uat/1908",
      },
      {
        value: "Extrasolar gaseous giant planets",
        label: "Extrasolar gaseous giant planets",
        uri: "http://astrothesaurus.org/uat/509",
      },
      {
        value: "Extrasolar gaseous giant planets",
        label: "Extrasolar gas giants (Extrasolar gaseous giant planets)",
        uri: "http://astrothesaurus.org/uat/509",
      },
      {
        value: "Lunar probes",
        label: "Lunar probes",
        uri: "http://astrothesaurus.org/uat/969",
      },
      {
        value: "Galaxy interactions",
        label: "Galaxy interactions",
        uri: "http://astrothesaurus.org/uat/600",
      },
      {
        value: "Galaxy interactions",
        label: "Galactic interactions (Galaxy interactions)",
        uri: "http://astrothesaurus.org/uat/600",
      },
      {
        value: "X-ray transient sources",
        label: "X-ray transient sources",
        uri: "http://astrothesaurus.org/uat/1852",
      },
      {
        value: "X-ray transient sources",
        label: "X-ray transient (X-ray transient sources)",
        uri: "http://astrothesaurus.org/uat/1852",
      },
      {
        value: "Chemically peculiar stars",
        label: "Chemically peculiar stars",
        uri: "http://astrothesaurus.org/uat/226",
      },
      {
        value: "Chemically peculiar stars",
        label: "CP stars (Chemically peculiar stars)",
        uri: "http://astrothesaurus.org/uat/226",
      },
      {
        value: "Chemically peculiar stars",
        label: "Metal-rich stars (Chemically peculiar stars)",
        uri: "http://astrothesaurus.org/uat/226",
      },
      {
        value: "Low-density fields",
        label: "Low-density fields",
        uri: "http://astrothesaurus.org/uat/938",
      },
      {
        value: "Critical curve",
        label: "Critical curve",
        uri: "http://astrothesaurus.org/uat/2152",
      },
      {
        value: "Bautz-Morgan type",
        label: "Bautz-Morgan type",
        uri: "http://astrothesaurus.org/uat/141",
      },
      {
        value: "Bautz-Morgan type",
        label: "Bautz-Morgan class (Bautz-Morgan type)",
        uri: "http://astrothesaurus.org/uat/141",
      },
      {
        value: "Phase switching",
        label: "Phase switching",
        uri: "http://astrothesaurus.org/uat/1221",
      },
      {
        value: "Solar radius",
        label: "Solar radius",
        uri: "http://astrothesaurus.org/uat/1488",
      },
      {
        value: "Quenched galaxies",
        label: "Quenched galaxies",
        uri: "http://astrothesaurus.org/uat/2016",
      },
      {
        value: "Gravitational lensing",
        label: "Gravitational lensing",
        uri: "http://astrothesaurus.org/uat/670",
      },
      {
        value: "Gravitational lensing",
        label: "Gravitational lens (Gravitational lensing)",
        uri: "http://astrothesaurus.org/uat/670",
      },
      {
        value: "Relativistic fluid dynamics",
        label: "Relativistic fluid dynamics",
        uri: "http://astrothesaurus.org/uat/1389",
      },
      {
        value: "Voids",
        label: "Voids",
        uri: "http://astrothesaurus.org/uat/1779",
      },
      {
        value: "Voids",
        label: "Galaxy voids (Voids)",
        uri: "http://astrothesaurus.org/uat/1779",
      },
      {
        value: "Voids",
        label: "Intergalactic voids (Voids)",
        uri: "http://astrothesaurus.org/uat/1779",
      },
      {
        value: "Interplanetary physics",
        label: "Interplanetary physics",
        uri: "http://astrothesaurus.org/uat/827",
      },
      {
        value: "AB photometry",
        label: "AB photometry",
        uri: "http://astrothesaurus.org/uat/2168",
      },
      {
        value: "AB photometry",
        label: "AB photometric system (AB photometry)",
        uri: "http://astrothesaurus.org/uat/2168",
      },
      {
        value: "AB photometry",
        label: "AB magnitude (AB photometry)",
        uri: "http://astrothesaurus.org/uat/2168",
      },
      {
        value: "AB photometry",
        label: "AB magnitude system (AB photometry)",
        uri: "http://astrothesaurus.org/uat/2168",
      },
      {
        value: "Non-radial pulsations",
        label: "Non-radial pulsations",
        uri: "http://astrothesaurus.org/uat/1117",
      },
      {
        value: "Non-radial pulsations",
        label: "Nonradial pulsation (Non-radial pulsations)",
        uri: "http://astrothesaurus.org/uat/1117",
      },
      {
        value: "Oort cloud objects",
        label: "Oort cloud objects",
        uri: "http://astrothesaurus.org/uat/1158",
      },
      {
        value: "Oort cloud objects",
        label: "OCOs (Oort cloud objects)",
        uri: "http://astrothesaurus.org/uat/1158",
      },
      {
        value: "Dense interstellar clouds",
        label: "Dense interstellar clouds",
        uri: "http://astrothesaurus.org/uat/371",
      },
      {
        value: "Dense interstellar clouds",
        label: "Dense clouds (Dense interstellar clouds)",
        uri: "http://astrothesaurus.org/uat/371",
      },
      {
        value: "Technosignatures",
        label: "Technosignatures",
        uri: "http://astrothesaurus.org/uat/2128",
      },
      {
        value: "BL Lacertae objects",
        label: "BL Lacertae objects",
        uri: "http://astrothesaurus.org/uat/158",
      },
      {
        value: "BL Lacertae objects",
        label: "BL Lac objects (BL Lacertae objects)",
        uri: "http://astrothesaurus.org/uat/158",
      },
      {
        value: "Computational astronomy",
        label: "Computational astronomy",
        uri: "http://astrothesaurus.org/uat/293",
      },
      {
        value: "Cosmic ray detectors",
        label: "Cosmic ray detectors",
        uri: "http://astrothesaurus.org/uat/325",
      },
      {
        value: "BL Herculis variable stars",
        label: "BL Herculis variable stars",
        uri: "http://astrothesaurus.org/uat/157",
      },
      {
        value: "BL Herculis variable stars",
        label: "BL Herculis stars (BL Herculis variable stars)",
        uri: "http://astrothesaurus.org/uat/157",
      },
      {
        value: "Astrophysicists",
        label: "Astrophysicists",
        uri: "http://astrothesaurus.org/uat/105",
      },
      {
        value: "R-process",
        label: "R-process",
        uri: "http://astrothesaurus.org/uat/1324",
      },
      {
        value: "Mixture model",
        label: "Mixture model",
        uri: "http://astrothesaurus.org/uat/1932",
      },
      {
        value: "Galaxy collisions",
        label: "Galaxy collisions",
        uri: "http://astrothesaurus.org/uat/585",
      },
      {
        value: "Galaxy collisions",
        label: "Galactic collisions (Galaxy collisions)",
        uri: "http://astrothesaurus.org/uat/585",
      },
      {
        value: "Delta Delphini variable stars",
        label: "Delta Delphini variable stars",
        uri: "http://astrothesaurus.org/uat/369",
      },
      {
        value: "WCN stars",
        label: "WCN stars",
        uri: "http://astrothesaurus.org/uat/1794",
      },
      {
        value: "WCN stars",
        label: "WCN-type stars (WCN stars)",
        uri: "http://astrothesaurus.org/uat/1794",
      },
      {
        value: "Supermassive black holes",
        label: "Supermassive black holes",
        uri: "http://astrothesaurus.org/uat/1663",
      },
      {
        value: "Neutrino astronomy",
        label: "Neutrino astronomy",
        uri: "http://astrothesaurus.org/uat/1100",
      },
      {
        value: "Asteroid dynamics",
        label: "Asteroid dynamics",
        uri: "http://astrothesaurus.org/uat/2210",
      },
      {
        value: "Hubble Space Telescope",
        label: "Hubble Space Telescope",
        uri: "http://astrothesaurus.org/uat/761",
      },
      {
        value: "Hubble Space Telescope",
        label: "HST (Hubble Space Telescope)",
        uri: "http://astrothesaurus.org/uat/761",
      },
      {
        value: "Extrasolar radiation",
        label: "Extrasolar radiation",
        uri: "http://astrothesaurus.org/uat/510",
      },
      {
        value: "Extrasolar radiation",
        label:
          "Unidentified sources of radiation outside the Solar System (Extrasolar radiation)",
        uri: "http://astrothesaurus.org/uat/510",
      },
      {
        value: "Bolometric correction",
        label: "Bolometric correction",
        uri: "http://astrothesaurus.org/uat/173",
      },
      {
        value: "Magellanic Stream",
        label: "Magellanic Stream",
        uri: "http://astrothesaurus.org/uat/991",
      },
      {
        value: "Emerging flux tubes",
        label: "Emerging flux tubes",
        uri: "http://astrothesaurus.org/uat/458",
      },
      {
        value: "Natural satellite dynamics",
        label: "Natural satellite dynamics",
        uri: "http://astrothesaurus.org/uat/2212",
      },
      {
        value: "Solar gamma-ray emission",
        label: "Solar gamma-ray emission",
        uri: "http://astrothesaurus.org/uat/1497",
      },
      {
        value: "Solar gamma-ray emission",
        label: "Solar Î³-ray emission (Solar gamma-ray emission)",
        uri: "http://astrothesaurus.org/uat/1497",
      },
      {
        value: "Solar gamma-ray emission",
        label: "Solar gamma ray emission (Solar gamma-ray emission)",
        uri: "http://astrothesaurus.org/uat/1497",
      },
      {
        value: "Hydrogen burning",
        label: "Hydrogen burning",
        uri: "http://astrothesaurus.org/uat/768",
      },
      {
        value: "Gegenschein",
        label: "Gegenschein",
        uri: "http://astrothesaurus.org/uat/640",
      },
      {
        value: "Gegenschein",
        label: "Counterglow (Gegenschein)",
        uri: "http://astrothesaurus.org/uat/640",
      },
      {
        value: "Classical T Tauri stars",
        label: "Classical T Tauri stars",
        uri: "http://astrothesaurus.org/uat/252",
      },
      {
        value: "Classical T Tauri stars",
        label: "C tt s (Classical T Tauri stars)",
        uri: "http://astrothesaurus.org/uat/252",
      },
      {
        value: "Large-scale structure of the universe",
        label: "Large-scale structure of the universe",
        uri: "http://astrothesaurus.org/uat/902",
      },
      {
        value: "Large-scale structure of the universe",
        label:
          "Large scale structure of the universe (Large-scale structure of the universe)",
        uri: "http://astrothesaurus.org/uat/902",
      },
      {
        value: "Large-scale structure of the universe",
        label:
          "Large scale structure of the cosmos (Large-scale structure of the universe)",
        uri: "http://astrothesaurus.org/uat/902",
      },
      {
        value: "Large-scale structure of the universe",
        label:
          "Large-scale structure of the cosmos (Large-scale structure of the universe)",
        uri: "http://astrothesaurus.org/uat/902",
      },
      {
        value: "Stellar inner cores",
        label: "Stellar inner cores",
        uri: "http://astrothesaurus.org/uat/1605",
      },
      {
        value: "Michelson interferometry",
        label: "Michelson interferometry",
        uri: "http://astrothesaurus.org/uat/1045",
      },
      {
        value: "K stars",
        label: "K stars",
        uri: "http://astrothesaurus.org/uat/878",
      },
      {
        value: "K stars",
        label: "K-type stars (K stars)",
        uri: "http://astrothesaurus.org/uat/878",
      },
      {
        value: "K stars",
        label: "Class K stars (K stars)",
        uri: "http://astrothesaurus.org/uat/878",
      },
      {
        value: "Microlensing optical depth",
        label: "Microlensing optical depth",
        uri: "http://astrothesaurus.org/uat/2145",
      },
      {
        value: "Stellar properties",
        label: "Stellar properties",
        uri: "http://astrothesaurus.org/uat/1624",
      },
      {
        value: "Stellar properties",
        label: "Stellar characteristics (Stellar properties)",
        uri: "http://astrothesaurus.org/uat/1624",
      },
      {
        value: "Stellar properties",
        label: "Stellar magnitude (Stellar properties)",
        uri: "http://astrothesaurus.org/uat/1624",
      },
      {
        value: "Lunar occultation",
        label: "Lunar occultation",
        uri: "http://astrothesaurus.org/uat/965",
      },
      {
        value: "Constellations",
        label: "Constellations",
        uri: "http://astrothesaurus.org/uat/296",
      },
      {
        value: "Phase effect",
        label: "Phase effect",
        uri: "http://astrothesaurus.org/uat/1219",
      },
      {
        value: "Detached objects",
        label: "Detached objects",
        uri: "http://astrothesaurus.org/uat/376",
      },
      {
        value: "Submillimeter astronomy",
        label: "Submillimeter astronomy",
        uri: "http://astrothesaurus.org/uat/1647",
      },
      {
        value: "Stratosphere",
        label: "Stratosphere",
        uri: "http://astrothesaurus.org/uat/1640",
      },
      {
        value: "Radiative processes",
        label: "Radiative processes",
        uri: "http://astrothesaurus.org/uat/2055",
      },
      {
        value: "LINER galaxies",
        label: "LINER galaxies",
        uri: "http://astrothesaurus.org/uat/925",
      },
      {
        value: "Galaxy anticenters",
        label: "Galaxy anticenters",
        uri: "http://astrothesaurus.org/uat/577",
      },
      {
        value: "Galaxy anticenters",
        label: "Anticenter (Galaxy anticenters)",
        uri: "http://astrothesaurus.org/uat/577",
      },
      {
        value: "Solar radio telescopes",
        label: "Solar radio telescopes",
        uri: "http://astrothesaurus.org/uat/1523",
      },
      {
        value: "Outlier detection",
        label: "Outlier detection",
        uri: "http://astrothesaurus.org/uat/1934",
      },
      {
        value: "Surface variability",
        label: "Surface variability",
        uri: "http://astrothesaurus.org/uat/2114",
      },
      {
        value: "Surface variability",
        label: "Planetary surface variability (Surface variability)",
        uri: "http://astrothesaurus.org/uat/2114",
      },
      {
        value: "Baryonic dark matter",
        label: "Baryonic dark matter",
        uri: "http://astrothesaurus.org/uat/140",
      },
      {
        value: "Brightest cluster galaxies",
        label: "Brightest cluster galaxies",
        uri: "http://astrothesaurus.org/uat/181",
      },
      {
        value: "Planetary atmospheres",
        label: "Planetary atmospheres",
        uri: "http://astrothesaurus.org/uat/1244",
      },
      {
        value: "Gaussian mixture model",
        label: "Gaussian mixture model",
        uri: "http://astrothesaurus.org/uat/1937",
      },
      {
        value: "Centaur group",
        label: "Centaur group",
        uri: "http://astrothesaurus.org/uat/215",
      },
      {
        value: "Centaur group",
        label: "Centaur asteroids (Centaur group)",
        uri: "http://astrothesaurus.org/uat/215",
      },
      {
        value: "Centaur group",
        label: "Centaurs (Centaur group)",
        uri: "http://astrothesaurus.org/uat/215",
      },
      {
        value: "Galaxy jets",
        label: "Galaxy jets",
        uri: "http://astrothesaurus.org/uat/601",
      },
      {
        value: "Heliostats",
        label: "Heliostats",
        uri: "http://astrothesaurus.org/uat/712",
      },
      {
        value: "Reddened stars",
        label: "Reddened stars",
        uri: "http://astrothesaurus.org/uat/1376",
      },
      {
        value: "Plasma jets",
        label: "Plasma jets",
        uri: "http://astrothesaurus.org/uat/1263",
      },
      {
        value: "X-ray astronomy",
        label: "X-ray astronomy",
        uri: "http://astrothesaurus.org/uat/1810",
      },
      {
        value: "X-ray astronomy",
        label: "X-ray galaxies (X-ray astronomy)",
        uri: "http://astrothesaurus.org/uat/1810",
      },
      {
        value: "Annual microlensing parallax",
        label: "Annual microlensing parallax",
        uri: "http://astrothesaurus.org/uat/2149",
      },
      {
        value: "Annual microlensing parallax",
        label: "Orbital microlensing parallax (Annual microlensing parallax)",
        uri: "http://astrothesaurus.org/uat/2149",
      },
      {
        value: "Orbits",
        label: "Orbits",
        uri: "http://astrothesaurus.org/uat/1184",
      },
      {
        value: "Orbits",
        label: "Orbital dynamics (Orbits)",
        uri: "http://astrothesaurus.org/uat/1184",
      },
      {
        value: "X-ray point sources",
        label: "X-ray point sources",
        uri: "http://astrothesaurus.org/uat/1270",
      },
      {
        value: "Telescopes",
        label: "Telescopes",
        uri: "http://astrothesaurus.org/uat/1689",
      },
      {
        value: "Virgo Cluster",
        label: "Virgo Cluster",
        uri: "http://astrothesaurus.org/uat/1772",
      },
      {
        value: "Urca process",
        label: "Urca process",
        uri: "http://astrothesaurus.org/uat/1752",
      },
      {
        value: "K dwarf stars",
        label: "K dwarf stars",
        uri: "http://astrothesaurus.org/uat/876",
      },
      {
        value: "K dwarf stars",
        label: "K-type dwarf stars (K dwarf stars)",
        uri: "http://astrothesaurus.org/uat/876",
      },
      {
        value: "K dwarf stars",
        label: "K-type dwarfs (K dwarf stars)",
        uri: "http://astrothesaurus.org/uat/876",
      },
      {
        value: "K dwarf stars",
        label: "K dwarfs (K dwarf stars)",
        uri: "http://astrothesaurus.org/uat/876",
      },
      {
        value: "K dwarf stars",
        label: "K-type main sequence stars (K dwarf stars)",
        uri: "http://astrothesaurus.org/uat/876",
      },
      {
        value: "Stellar granulation",
        label: "Stellar granulation",
        uri: "http://astrothesaurus.org/uat/2102",
      },
      {
        value: "Solar analogs",
        label: "Solar analogs",
        uri: "http://astrothesaurus.org/uat/1941",
      },
      {
        value: "Solar analogs",
        label: "Solar-type stars (Solar analogs)",
        uri: "http://astrothesaurus.org/uat/1941",
      },
      {
        value: "Solar analogs",
        label: "Solar-like star (Solar analogs)",
        uri: "http://astrothesaurus.org/uat/1941",
      },
      {
        value: "Solar analogs",
        label: "Sun-like stars (Solar analogs)",
        uri: "http://astrothesaurus.org/uat/1941",
      },
      {
        value: "Ellerman Bombs",
        label: "Ellerman Bombs",
        uri: "http://astrothesaurus.org/uat/1985",
      },
      {
        value: "Stellar classification",
        label: "Stellar classification",
        uri: "http://astrothesaurus.org/uat/1589",
      },
      {
        value: "Stellar classification",
        label: "Spectra classification (Stellar classification)",
        uri: "http://astrothesaurus.org/uat/1589",
      },
      {
        value: "Stellar classification",
        label: "Spectral classification (Stellar classification)",
        uri: "http://astrothesaurus.org/uat/1589",
      },
      {
        value: "Stellar classification",
        label: "Spectrum classification (Stellar classification)",
        uri: "http://astrothesaurus.org/uat/1589",
      },
      {
        value: "Stellar classification",
        label: "Spectral type (Stellar classification)",
        uri: "http://astrothesaurus.org/uat/1589",
      },
      {
        value: "Stellar classification",
        label: "Stellar spectral classification (Stellar classification)",
        uri: "http://astrothesaurus.org/uat/1589",
      },
      {
        value: "Stellar classification",
        label: "Stellar spectrum classification (Stellar classification)",
        uri: "http://astrothesaurus.org/uat/1589",
      },
      {
        value: "Giant branch",
        label: "Giant branch",
        uri: "http://astrothesaurus.org/uat/650",
      },
      {
        value: "Giant branch",
        label: "Giant branches (Giant branch)",
        uri: "http://astrothesaurus.org/uat/650",
      },
      {
        value: "Spectroscopy",
        label: "Spectroscopy",
        uri: "http://astrothesaurus.org/uat/1558",
      },
      {
        value: "Spectroscopy",
        label: "Astronomical spectroscopy (Spectroscopy)",
        uri: "http://astrothesaurus.org/uat/1558",
      },
      {
        value: "Venus",
        label: "Venus",
        uri: "http://astrothesaurus.org/uat/1763",
      },
      {
        value: "Rotating black holes",
        label: "Rotating black holes",
        uri: "http://astrothesaurus.org/uat/1406",
      },
      {
        value: "Galaxy kinematics",
        label: "Galaxy kinematics",
        uri: "http://astrothesaurus.org/uat/602",
      },
      {
        value: "Limiting magnitude",
        label: "Limiting magnitude",
        uri: "http://astrothesaurus.org/uat/923",
      },
      {
        value: "Superclusters",
        label: "Superclusters",
        uri: "http://astrothesaurus.org/uat/1657",
      },
      {
        value: "Alpha Cygni variable stars",
        label: "Alpha Cygni variable stars",
        uri: "http://astrothesaurus.org/uat/2122",
      },
      {
        value: "Alpha Cygni variable stars",
        label: "A Cyg variables (Alpha Cygni variable stars)",
        uri: "http://astrothesaurus.org/uat/2122",
      },
      {
        value: "Alpha Cygni variable stars",
        label: "Î± cyngi variable stars (Alpha Cygni variable stars)",
        uri: "http://astrothesaurus.org/uat/2122",
      },
      {
        value: "Alpha Cygni variable stars",
        label: "Alpha Cygni variables (Alpha Cygni variable stars)",
        uri: "http://astrothesaurus.org/uat/2122",
      },
      {
        value: "Dark interstellar clouds",
        label: "Dark interstellar clouds",
        uri: "http://astrothesaurus.org/uat/352",
      },
      {
        value: "Dark interstellar clouds",
        label: "Absorption nebula (Dark interstellar clouds)",
        uri: "http://astrothesaurus.org/uat/352",
      },
      {
        value: "Dark interstellar clouds",
        label: "Dark nebulae (Dark interstellar clouds)",
        uri: "http://astrothesaurus.org/uat/352",
      },
      {
        value: "Dark interstellar clouds",
        label: "Dark clouds (Dark interstellar clouds)",
        uri: "http://astrothesaurus.org/uat/352",
      },
      {
        value: "Dark interstellar clouds",
        label: "Absorption nebulae (Dark interstellar clouds)",
        uri: "http://astrothesaurus.org/uat/352",
      },
      {
        value: "Dark interstellar clouds",
        label: "Dark nebula (Dark interstellar clouds)",
        uri: "http://astrothesaurus.org/uat/352",
      },
      {
        value: "Galaxy counts",
        label: "Galaxy counts",
        uri: "http://astrothesaurus.org/uat/588",
      },
      {
        value: "Carbon dioxide",
        label: "Carbon dioxide",
        uri: "http://astrothesaurus.org/uat/196",
      },
      {
        value: "Carbon dioxide",
        label: "CO_2 (Carbon dioxide)",
        uri: "http://astrothesaurus.org/uat/196",
      },
      {
        value: "Carbon dioxide",
        label: "CO2 (Carbon dioxide)",
        uri: "http://astrothesaurus.org/uat/196",
      },
      {
        value: "Stellar colors",
        label: "Stellar colors",
        uri: "http://astrothesaurus.org/uat/1590",
      },
      {
        value: "Stellar colors",
        label: "Stellar colours (Stellar colors)",
        uri: "http://astrothesaurus.org/uat/1590",
      },
      {
        value: "Shell burning",
        label: "Shell burning",
        uri: "http://astrothesaurus.org/uat/1450",
      },
      {
        value: "Active solar chromosphere",
        label: "Active solar chromosphere",
        uri: "http://astrothesaurus.org/uat/1980",
      },
      {
        value: "Comet volatiles ",
        label: "Comet volatiles ",
        uri: "http://astrothesaurus.org/uat/2162",
      },
      {
        value: "Cold dark matter",
        label: "Cold dark matter",
        uri: "http://astrothesaurus.org/uat/265",
      },
      {
        value: "Photometric systems",
        label: "Photometric systems",
        uri: "http://astrothesaurus.org/uat/1233",
      },
      {
        value: "Photometric systems",
        label: "Magnitude systems (Photometric systems)",
        uri: "http://astrothesaurus.org/uat/1233",
      },
      {
        value: "Light year",
        label: "Light year",
        uri: "http://astrothesaurus.org/uat/919",
      },
      {
        value: "Light year",
        label: "Light-year (Light year)",
        uri: "http://astrothesaurus.org/uat/919",
      },
      {
        value: "Light year",
        label: "Lightyear (Light year)",
        uri: "http://astrothesaurus.org/uat/919",
      },
      {
        value: "Transition probabilities",
        label: "Transition probabilities",
        uri: "http://astrothesaurus.org/uat/2074",
      },
      {
        value: "Near-Earth objects",
        label: "Near-Earth objects",
        uri: "http://astrothesaurus.org/uat/1092",
      },
      {
        value: "Near-Earth objects",
        label: "Near Earth objects (Near-Earth objects)",
        uri: "http://astrothesaurus.org/uat/1092",
      },
      {
        value: "Near-Earth objects",
        label: "NEOs (Near-Earth objects)",
        uri: "http://astrothesaurus.org/uat/1092",
      },
      {
        value: "Near-Earth objects",
        label: "Near-Earth comets (Near-Earth objects)",
        uri: "http://astrothesaurus.org/uat/1092",
      },
      {
        value: "Near-Earth objects",
        label: "Near-Earth asteroids (Near-Earth objects)",
        uri: "http://astrothesaurus.org/uat/1092",
      },
      {
        value: "Near-Earth objects",
        label: "NECs (Near-Earth objects)",
        uri: "http://astrothesaurus.org/uat/1092",
      },
      {
        value: "Ecliptic longitude",
        label: "Ecliptic longitude",
        uri: "http://astrothesaurus.org/uat/447",
      },
      {
        value: "Neptune trojans",
        label: "Neptune trojans",
        uri: "http://astrothesaurus.org/uat/1097",
      },
      {
        value: "Stellar interiors",
        label: "Stellar interiors",
        uri: "http://astrothesaurus.org/uat/1606",
      },
      {
        value: "Kinematic parallax",
        label: "Kinematic parallax",
        uri: "http://astrothesaurus.org/uat/888",
      },
      {
        value: "Quantum gravity",
        label: "Quantum gravity",
        uri: "http://astrothesaurus.org/uat/1314",
      },
      {
        value: "Compact radiation sources",
        label: "Compact radiation sources",
        uri: "http://astrothesaurus.org/uat/289",
      },
      {
        value: "A subdwarf stars",
        label: "A subdwarf stars",
        uri: "http://astrothesaurus.org/uat/6",
      },
      {
        value: "A subdwarf stars",
        label: "A subdwarfs (A subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/6",
      },
      {
        value: "A subdwarf stars",
        label: "A-type subdwarfs (A subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/6",
      },
      {
        value: "A subdwarf stars",
        label: "A-type subdwarf stars (A subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/6",
      },
      {
        value: "Interplanetary medium",
        label: "Interplanetary medium",
        uri: "http://astrothesaurus.org/uat/825",
      },
      {
        value: "Interplanetary medium",
        label: "Interplanetary material (Interplanetary medium)",
        uri: "http://astrothesaurus.org/uat/825",
      },
      {
        value: "Interplanetary medium",
        label: "Interplanetary matter (Interplanetary medium)",
        uri: "http://astrothesaurus.org/uat/825",
      },
      {
        value: "Astronomical sextants",
        label: "Astronomical sextants",
        uri: "http://astrothesaurus.org/uat/93",
      },
      {
        value: "Astronomical sextants",
        label: "Mural sextants (Astronomical sextants)",
        uri: "http://astrothesaurus.org/uat/93",
      },
      {
        value: "Astronomical sextants",
        label: "Astronomer's sextants (Astronomical sextants)",
        uri: "http://astrothesaurus.org/uat/93",
      },
      {
        value: "Astronomical sextants",
        label: "Framed sextants (Astronomical sextants)",
        uri: "http://astrothesaurus.org/uat/93",
      },
      {
        value: "Cataclysmic variable stars",
        label: "Cataclysmic variable stars",
        uri: "http://astrothesaurus.org/uat/203",
      },
      {
        value: "Cataclysmic variable stars",
        label: "Cataclysmic binary stars (Cataclysmic variable stars)",
        uri: "http://astrothesaurus.org/uat/203",
      },
      {
        value: "Cataclysmic variable stars",
        label: "Cataclysmic binaries (Cataclysmic variable stars)",
        uri: "http://astrothesaurus.org/uat/203",
      },
      {
        value: "Cataclysmic variable stars",
        label: "Cataclysmic variables (Cataclysmic variable stars)",
        uri: "http://astrothesaurus.org/uat/203",
      },
      {
        value: "Astrometric microlensing effect",
        label: "Astrometric microlensing effect",
        uri: "http://astrothesaurus.org/uat/2140",
      },
      {
        value: "Galaxies",
        label: "Galaxies",
        uri: "http://astrothesaurus.org/uat/573",
      },
      {
        value: "Solar mottles",
        label: "Solar mottles",
        uri: "http://astrothesaurus.org/uat/1074",
      },
      {
        value: "Degenerate matter",
        label: "Degenerate matter",
        uri: "http://astrothesaurus.org/uat/367",
      },
      {
        value: "Initial conditions of the universe",
        label: "Initial conditions of the universe",
        uri: "http://astrothesaurus.org/uat/795",
      },
      {
        value: "Mass ratio",
        label: "Mass ratio",
        uri: "http://astrothesaurus.org/uat/1012",
      },
      {
        value: "Mass ratio",
        label: "Mass-ratio (Mass ratio)",
        uri: "http://astrothesaurus.org/uat/1012",
      },
      {
        value: "Spectropolarimetry",
        label: "Spectropolarimetry",
        uri: "http://astrothesaurus.org/uat/1973",
      },
      {
        value: "Spectropolarimetry",
        label: "Spectro-polarimetry (Spectropolarimetry)",
        uri: "http://astrothesaurus.org/uat/1973",
      },
      {
        value: "Manganese stars",
        label: "Manganese stars",
        uri: "http://astrothesaurus.org/uat/1004",
      },
      {
        value: "Solar system astronomy",
        label: "Solar system astronomy",
        uri: "http://astrothesaurus.org/uat/1529",
      },
      {
        value: "Solar system astronomy",
        label: "Planetary astronomy (Solar system astronomy)",
        uri: "http://astrothesaurus.org/uat/1529",
      },
      {
        value: "Ring galaxies",
        label: "Ring galaxies",
        uri: "http://astrothesaurus.org/uat/1400",
      },
      {
        value: "Space telescopes",
        label: "Space telescopes",
        uri: "http://astrothesaurus.org/uat/1547",
      },
      {
        value: "Space telescopes",
        label: "Space-based telescopes (Space telescopes)",
        uri: "http://astrothesaurus.org/uat/1547",
      },
      {
        value: "Space telescopes",
        label: "Space based telescopes (Space telescopes)",
        uri: "http://astrothesaurus.org/uat/1547",
      },
      {
        value: "Haro galaxies",
        label: "Haro galaxies",
        uri: "http://astrothesaurus.org/uat/701",
      },
      {
        value: "Milky Way dark matter halo",
        label: "Milky Way dark matter halo",
        uri: "http://astrothesaurus.org/uat/1049",
      },
      {
        value: "Relativistic aberration",
        label: "Relativistic aberration",
        uri: "http://astrothesaurus.org/uat/1385",
      },
      {
        value: "Blue compact dwarf galaxies",
        label: "Blue compact dwarf galaxies",
        uri: "http://astrothesaurus.org/uat/165",
      },
      {
        value: "Stellar tracking devices",
        label: "Stellar tracking devices",
        uri: "http://astrothesaurus.org/uat/1633",
      },
      {
        value: "Pulsating variable stars",
        label: "Pulsating variable stars",
        uri: "http://astrothesaurus.org/uat/1307",
      },
      {
        value: "Pulsating variable stars",
        label: "Pulsating stars (Pulsating variable stars)",
        uri: "http://astrothesaurus.org/uat/1307",
      },
      {
        value: "Helmholtz-Kelvin contraction",
        label: "Helmholtz-Kelvin contraction",
        uri: "http://astrothesaurus.org/uat/718",
      },
      {
        value: "Helmholtz-Kelvin contraction",
        label: "Kelvin-Helmholtz contraction (Helmholtz-Kelvin contraction)",
        uri: "http://astrothesaurus.org/uat/718",
      },
      {
        value: "Helmholtz-Kelvin contraction",
        label: "Helmholtz Kelvin contraction (Helmholtz-Kelvin contraction)",
        uri: "http://astrothesaurus.org/uat/718",
      },
      {
        value: "Helmholtz-Kelvin contraction",
        label: "Helmholtz-Kelvin mechanism (Helmholtz-Kelvin contraction)",
        uri: "http://astrothesaurus.org/uat/718",
      },
      {
        value: "Barium stars",
        label: "Barium stars",
        uri: "http://astrothesaurus.org/uat/135",
      },
      {
        value: "Barium stars",
        label: "Ba II stars (Barium stars)",
        uri: "http://astrothesaurus.org/uat/135",
      },
      {
        value: "Stellar magnetic fields",
        label: "Stellar magnetic fields",
        uri: "http://astrothesaurus.org/uat/1610",
      },
      {
        value: "Stellar magnetic fields",
        label: "Stellar magnetospheres (Stellar magnetic fields)",
        uri: "http://astrothesaurus.org/uat/1610",
      },
      {
        value: "T Tauri stars",
        label: "T Tauri stars",
        uri: "http://astrothesaurus.org/uat/1681",
      },
      {
        value: "T Tauri stars",
        label: "TT (T Tauri stars)",
        uri: "http://astrothesaurus.org/uat/1681",
      },
      {
        value: "Lagrangian points",
        label: "Lagrangian points",
        uri: "http://astrothesaurus.org/uat/897",
      },
      {
        value: "Lagrangian points",
        label: "L-points (Lagrangian points)",
        uri: "http://astrothesaurus.org/uat/897",
      },
      {
        value: "Lagrangian points",
        label: "Lagrange points (Lagrangian points)",
        uri: "http://astrothesaurus.org/uat/897",
      },
      {
        value: "Lagrangian points",
        label: "Libration points (Lagrangian points)",
        uri: "http://astrothesaurus.org/uat/897",
      },
      {
        value: "Photodissociation regions",
        label: "Photodissociation regions",
        uri: "http://astrothesaurus.org/uat/1223",
      },
      {
        value: "Photodissociation regions",
        label: "PDRs (Photodissociation regions)",
        uri: "http://astrothesaurus.org/uat/1223",
      },
      {
        value: "Heterodyne receivers",
        label: "Heterodyne receivers",
        uri: "http://astrothesaurus.org/uat/727",
      },
      {
        value: "Heterodyne receivers",
        label: "Superhet (Heterodyne receivers)",
        uri: "http://astrothesaurus.org/uat/727",
      },
      {
        value: "Heterodyne receivers",
        label: "Superheterodyne receivers (Heterodyne receivers)",
        uri: "http://astrothesaurus.org/uat/727",
      },
      {
        value: "Galactic winds",
        label: "Galactic winds",
        uri: "http://astrothesaurus.org/uat/572",
      },
      {
        value: "Galactic winds",
        label: "Milky Way Galaxy winds (Galactic winds)",
        uri: "http://astrothesaurus.org/uat/572",
      },
      {
        value: "Galactic winds",
        label: "Milky Way galactic winds (Galactic winds)",
        uri: "http://astrothesaurus.org/uat/572",
      },
      {
        value: "Galactic winds",
        label: "Galactic winds in the Milky Way (Galactic winds)",
        uri: "http://astrothesaurus.org/uat/572",
      },
      {
        value: "Solar ultraviolet emission",
        label: "Solar ultraviolet emission",
        uri: "http://astrothesaurus.org/uat/1533",
      },
      {
        value: "Solar ultraviolet emission",
        label: "Solar UV emission (Solar ultraviolet emission)",
        uri: "http://astrothesaurus.org/uat/1533",
      },
      {
        value: "Bayes factor",
        label: "Bayes factor",
        uri: "http://astrothesaurus.org/uat/1919",
      },
      {
        value: "Pluto",
        label: "Pluto",
        uri: "http://astrothesaurus.org/uat/1267",
      },
      {
        value: "Pluto",
        label: "134340 Pluto (Pluto)",
        uri: "http://astrothesaurus.org/uat/1267",
      },
      {
        value: "Pluto",
        label: "(134340) Pluto (Pluto)",
        uri: "http://astrothesaurus.org/uat/1267",
      },
      {
        value: "Astronomical radiation sources",
        label: "Astronomical radiation sources",
        uri: "http://astrothesaurus.org/uat/89",
      },
      {
        value: "Astronomical radiation sources",
        label: "Cosmic radiation sources (Astronomical radiation sources)",
        uri: "http://astrothesaurus.org/uat/89",
      },
      {
        value: "High-luminosity active galactic nuclei",
        label: "High-luminosity active galactic nuclei",
        uri: "http://astrothesaurus.org/uat/2034",
      },
      {
        value: "High-luminosity active galactic nuclei",
        label: "High-luminosity AGN (High-luminosity active galactic nuclei)",
        uri: "http://astrothesaurus.org/uat/2034",
      },
      {
        value: "Milky Way Galaxy physics",
        label: "Milky Way Galaxy physics",
        uri: "http://astrothesaurus.org/uat/1056",
      },
      {
        value: "Active sun",
        label: "Active sun",
        uri: "http://astrothesaurus.org/uat/18",
      },
      {
        value: "Solar neutrinos",
        label: "Solar neutrinos",
        uri: "http://astrothesaurus.org/uat/1511",
      },
      {
        value: "Flat-spectrum radio quasars",
        label: "Flat-spectrum radio quasars",
        uri: "http://astrothesaurus.org/uat/2163",
      },
      {
        value: "Flat-spectrum radio quasars",
        label: "FSRQ (Flat-spectrum radio quasars)",
        uri: "http://astrothesaurus.org/uat/2163",
      },
      {
        value: "Flat-spectrum radio quasars",
        label: "Core-dominated quasar (Flat-spectrum radio quasars)",
        uri: "http://astrothesaurus.org/uat/2163",
      },
      {
        value: "Flat-spectrum radio quasars",
        label: "CDQ (Flat-spectrum radio quasars)",
        uri: "http://astrothesaurus.org/uat/2163",
      },
      {
        value: "Flat-spectrum radio quasars",
        label: "OVV quasars (Flat-spectrum radio quasars)",
        uri: "http://astrothesaurus.org/uat/2163",
      },
      {
        value: "Flat-spectrum radio quasars",
        label: "Optically violent variable quasars (Flat-spectrum radio quasars)",
        uri: "http://astrothesaurus.org/uat/2163",
      },
      {
        value: "Flat-spectrum radio quasars",
        label: "Optically violent variable quasar (Flat-spectrum radio quasars)",
        uri: "http://astrothesaurus.org/uat/2163",
      },
      {
        value: "Flat-spectrum radio quasars",
        label: "HPQ (Flat-spectrum radio quasars)",
        uri: "http://astrothesaurus.org/uat/2163",
      },
      {
        value: "Flat-spectrum radio quasars",
        label: "Core-dominated quasars (Flat-spectrum radio quasars)",
        uri: "http://astrothesaurus.org/uat/2163",
      },
      {
        value: "Flat-spectrum radio quasars",
        label: "OVV quasar (Flat-spectrum radio quasars)",
        uri: "http://astrothesaurus.org/uat/2163",
      },
      {
        value: "Flat-spectrum radio quasars",
        label: "Highly polarized quasar (Flat-spectrum radio quasars)",
        uri: "http://astrothesaurus.org/uat/2163",
      },
      {
        value: "Flat-spectrum radio quasars",
        label: "Highly polarized quasars (Flat-spectrum radio quasars)",
        uri: "http://astrothesaurus.org/uat/2163",
      },
      {
        value: "Observational cosmology",
        label: "Observational cosmology",
        uri: "http://astrothesaurus.org/uat/1146",
      },
      {
        value: "Interstellar line absorption",
        label: "Interstellar line absorption",
        uri: "http://astrothesaurus.org/uat/843",
      },
      {
        value: "Planetary probes",
        label: "Planetary probes",
        uri: "http://astrothesaurus.org/uat/1252",
      },
      {
        value: "Dwarf spheroidal galaxies",
        label: "Dwarf spheroidal galaxies",
        uri: "http://astrothesaurus.org/uat/420",
      },
      {
        value: "Dwarf spheroidal galaxies",
        label: "Dwarf spheroidals (Dwarf spheroidal galaxies)",
        uri: "http://astrothesaurus.org/uat/420",
      },
      {
        value: "Astrophysical dust processes",
        label: "Astrophysical dust processes",
        uri: "http://astrothesaurus.org/uat/99",
      },
      {
        value: "Apsidal motion",
        label: "Apsidal motion",
        uri: "http://astrothesaurus.org/uat/62",
      },
      {
        value: "Pulsars",
        label: "Pulsars",
        uri: "http://astrothesaurus.org/uat/1306",
      },
      {
        value: "Volcanoes",
        label: "Volcanoes",
        uri: "http://astrothesaurus.org/uat/1780",
      },
      {
        value: "Volcanoes",
        label: "Volcano (Volcanoes)",
        uri: "http://astrothesaurus.org/uat/1780",
      },
      {
        value: "Cosmic abundances",
        label: "Cosmic abundances",
        uri: "http://astrothesaurus.org/uat/315",
      },
      {
        value: "Bipolar sunspot groups",
        label: "Bipolar sunspot groups",
        uri: "http://astrothesaurus.org/uat/156",
      },
      {
        value: "Alt-azimuth mounts",
        label: "Alt-azimuth mounts",
        uri: "http://astrothesaurus.org/uat/28",
      },
      {
        value: "Alt-azimuth mounts",
        label: "Altazimuth (Alt-azimuth mounts)",
        uri: "http://astrothesaurus.org/uat/28",
      },
      {
        value: "Alt-azimuth mounts",
        label: "Altitude-elevation mounts (Alt-azimuth mounts)",
        uri: "http://astrothesaurus.org/uat/28",
      },
      {
        value: "Alt-azimuth mounts",
        label: "Azimuth mounting (Alt-azimuth mounts)",
        uri: "http://astrothesaurus.org/uat/28",
      },
      {
        value: "Alt-azimuth mounts",
        label: "Altazimuth mounts (Alt-azimuth mounts)",
        uri: "http://astrothesaurus.org/uat/28",
      },
      {
        value: "Alt-azimuth mounts",
        label: "Alt-azimuth mounting (Alt-azimuth mounts)",
        uri: "http://astrothesaurus.org/uat/28",
      },
      {
        value: "Alt-azimuth mounts",
        label: "Altitude-azimuth (Alt-azimuth mounts)",
        uri: "http://astrothesaurus.org/uat/28",
      },
      {
        value: "Alt-azimuth mounts",
        label: "Altazimuth mountings (Alt-azimuth mounts)",
        uri: "http://astrothesaurus.org/uat/28",
      },
      {
        value: "Helioseismology",
        label: "Helioseismology",
        uri: "http://astrothesaurus.org/uat/709",
      },
      {
        value: "Stellar structures",
        label: "Stellar structures",
        uri: "http://astrothesaurus.org/uat/1631",
      },
      {
        value: "Atmospheric tides",
        label: "Atmospheric tides",
        uri: "http://astrothesaurus.org/uat/118",
      },
      {
        value: "Star counts",
        label: "Star counts",
        uri: "http://astrothesaurus.org/uat/1568",
      },
      {
        value: "Star counts",
        label: "Stellar statistics (Star counts)",
        uri: "http://astrothesaurus.org/uat/1568",
      },
      {
        value: "Star counts",
        label: "Star distribution (Star counts)",
        uri: "http://astrothesaurus.org/uat/1568",
      },
      {
        value: "Computational methods",
        label: "Computational methods",
        uri: "http://astrothesaurus.org/uat/1965",
      },
      {
        value: "Neutron star cores",
        label: "Neutron star cores",
        uri: "http://astrothesaurus.org/uat/1107",
      },
      {
        value: "Neutron star cores",
        label: "Neutron star core (Neutron star cores)",
        uri: "http://astrothesaurus.org/uat/1107",
      },
      {
        value: "Abell clusters",
        label: "Abell clusters",
        uri: "http://astrothesaurus.org/uat/9",
      },
      {
        value: "Maksutov telescopes",
        label: "Maksutov telescopes",
        uri: "http://astrothesaurus.org/uat/1003",
      },
      {
        value: "Photographic photometry",
        label: "Photographic photometry",
        uri: "http://astrothesaurus.org/uat/1229",
      },
      {
        value: "Blazhko effect",
        label: "Blazhko effect",
        uri: "http://astrothesaurus.org/uat/2110",
      },
      {
        value: "Flash spectra",
        label: "Flash spectra",
        uri: "http://astrothesaurus.org/uat/541",
      },
      {
        value: "Flash spectra",
        label: "Flash spectrum (Flash spectra)",
        uri: "http://astrothesaurus.org/uat/541",
      },
      {
        value: "Stellar abundances",
        label: "Stellar abundances",
        uri: "http://astrothesaurus.org/uat/1577",
      },
      {
        value: "Bipolar nebulae",
        label: "Bipolar nebulae",
        uri: "http://astrothesaurus.org/uat/155",
      },
      {
        value: "Bipolar nebulae",
        label: "Bipolar nebula (Bipolar nebulae)",
        uri: "http://astrothesaurus.org/uat/155",
      },
      {
        value: "Surface processes",
        label: "Surface processes",
        uri: "http://astrothesaurus.org/uat/2116",
      },
      {
        value: "Surface processes",
        label: "Planetary surface processes (Surface processes)",
        uri: "http://astrothesaurus.org/uat/2116",
      },
      {
        value: "Titan",
        label: "Titan",
        uri: "http://astrothesaurus.org/uat/2186",
      },
      {
        value: "Cosmological phase transitions",
        label: "Cosmological phase transitions",
        uri: "http://astrothesaurus.org/uat/342",
      },
      {
        value: "Plutinos",
        label: "Plutinos",
        uri: "http://astrothesaurus.org/uat/1266",
      },
      {
        value: "Intergalactic medium",
        label: "Intergalactic medium",
        uri: "http://astrothesaurus.org/uat/813",
      },
      {
        value: "Intergalactic medium",
        label: "IGM (Intergalactic medium)",
        uri: "http://astrothesaurus.org/uat/813",
      },
      {
        value: "Intergalactic medium",
        label: "Intergalactic matter (Intergalactic medium)",
        uri: "http://astrothesaurus.org/uat/813",
      },
      {
        value: "Cosmological models",
        label: "Cosmological models",
        uri: "http://astrothesaurus.org/uat/337",
      },
      {
        value: "Cosmological models",
        label: "Classical tests of cosmology (Cosmological models)",
        uri: "http://astrothesaurus.org/uat/337",
      },
      {
        value: "Planetary structure",
        label: "Planetary structure",
        uri: "http://astrothesaurus.org/uat/1256",
      },
      {
        value: "Red giant bump",
        label: "Red giant bump",
        uri: "http://astrothesaurus.org/uat/1369",
      },
      {
        value: "Red giant bump",
        label: "Red bump (Red giant bump)",
        uri: "http://astrothesaurus.org/uat/1369",
      },
      {
        value: "X-ray novae",
        label: "X-ray novae",
        uri: "http://astrothesaurus.org/uat/1818",
      },
      {
        value: "Gamma-ray bursters",
        label: "Gamma-ray bursters",
        uri: "http://astrothesaurus.org/uat/1878",
      },
      {
        value: "Neutron interferometry",
        label: "Neutron interferometry",
        uri: "http://astrothesaurus.org/uat/1106",
      },
      {
        value: "Photovisual magnitude",
        label: "Photovisual magnitude",
        uri: "http://astrothesaurus.org/uat/1238",
      },
      {
        value: "Herbig-Haro objects",
        label: "Herbig-Haro objects",
        uri: "http://astrothesaurus.org/uat/722",
      },
      {
        value: "Herbig-Haro objects",
        label: "HH-object (Herbig-Haro objects)",
        uri: "http://astrothesaurus.org/uat/722",
      },
      {
        value: "Herbig-Haro objects",
        label: "Herbigâ€“Haro object (Herbig-Haro objects)",
        uri: "http://astrothesaurus.org/uat/722",
      },
      {
        value: "Herbig-Haro objects",
        label: "HH objects (Herbig-Haro objects)",
        uri: "http://astrothesaurus.org/uat/722",
      },
      {
        value: "Herbig-Haro objects",
        label: "Herbig Haro objects (Herbig-Haro objects)",
        uri: "http://astrothesaurus.org/uat/722",
      },
      {
        value: "Gibbs Sampler",
        label: "Gibbs Sampler",
        uri: "http://astrothesaurus.org/uat/1891",
      },
      {
        value: "Extreme carbon stars",
        label: "Extreme carbon stars",
        uri: "http://astrothesaurus.org/uat/512",
      },
      {
        value: "Surveys",
        label: "Surveys",
        uri: "http://astrothesaurus.org/uat/1671",
      },
      {
        value: "M supergiant stars",
        label: "M supergiant stars",
        uri: "http://astrothesaurus.org/uat/988",
      },
      {
        value: "M supergiant stars",
        label: "M-type supergiant stars (M supergiant stars)",
        uri: "http://astrothesaurus.org/uat/988",
      },
      {
        value: "M supergiant stars",
        label: "M-type supergiants (M supergiant stars)",
        uri: "http://astrothesaurus.org/uat/988",
      },
      {
        value: "M supergiant stars",
        label: "M supergiants (M supergiant stars)",
        uri: "http://astrothesaurus.org/uat/988",
      },
      {
        value: "Emission line stars",
        label: "Emission line stars",
        uri: "http://astrothesaurus.org/uat/460",
      },
      {
        value: "Galaxy mass distribution",
        label: "Galaxy mass distribution",
        uri: "http://astrothesaurus.org/uat/606",
      },
      {
        value: "Quiet solar corona",
        label: "Quiet solar corona",
        uri: "http://astrothesaurus.org/uat/1992",
      },
      {
        value: "Expanding stellar envelopes",
        label: "Expanding stellar envelopes",
        uri: "http://astrothesaurus.org/uat/501",
      },
      {
        value: "Few-body systems",
        label: "Few-body systems",
        uri: "http://astrothesaurus.org/uat/531",
      },
      {
        value: "Gravastars",
        label: "Gravastars",
        uri: "http://astrothesaurus.org/uat/660",
      },
      {
        value: "Gravastars",
        label: "Gravitational condensate stars (Gravastars)",
        uri: "http://astrothesaurus.org/uat/660",
      },
      {
        value: "Circumstellar matter",
        label: "Circumstellar matter",
        uri: "http://astrothesaurus.org/uat/241",
      },
      {
        value: "Black hole spin-flip",
        label: "Black hole spin-flip",
        uri: "http://astrothesaurus.org/uat/160",
      },
      {
        value: "Black hole spin-flip",
        label: "Spin-flip (Black hole spin-flip)",
        uri: "http://astrothesaurus.org/uat/160",
      },
      {
        value: "Scalar-tensor-vector gravity",
        label: "Scalar-tensor-vector gravity",
        uri: "http://astrothesaurus.org/uat/1428",
      },
      {
        value: "Scalar-tensor-vector gravity",
        label: "STVG (Scalar-tensor-vector gravity)",
        uri: "http://astrothesaurus.org/uat/1428",
      },
      {
        value: "Scalar-tensor-vector gravity",
        label: "Modified gravity (Scalar-tensor-vector gravity)",
        uri: "http://astrothesaurus.org/uat/1428",
      },
      {
        value: "Twotinos",
        label: "Twotinos",
        uri: "http://astrothesaurus.org/uat/1727",
      },
      {
        value: "Compact H II region",
        label: "Compact H II region",
        uri: "http://astrothesaurus.org/uat/286",
      },
      {
        value: "Theoretical models",
        label: "Theoretical models",
        uri: "http://astrothesaurus.org/uat/2107",
      },
      {
        value: "FK catalog",
        label: "FK catalog",
        uri: "http://astrothesaurus.org/uat/539",
      },
      {
        value: "FK catalog",
        label: "Fundamental Katalog (FK catalog)",
        uri: "http://astrothesaurus.org/uat/539",
      },
      {
        value: "Zenith",
        label: "Zenith",
        uri: "http://astrothesaurus.org/uat/1838",
      },
      {
        value: "X-ray sources",
        label: "X-ray sources",
        uri: "http://astrothesaurus.org/uat/1822",
      },
      {
        value: "Semi-barium stars",
        label: "Semi-barium stars",
        uri: "http://astrothesaurus.org/uat/1442",
      },
      {
        value: "Semi-barium stars",
        label: "Semibarium stars (Semi-barium stars)",
        uri: "http://astrothesaurus.org/uat/1442",
      },
      {
        value: "Interstellar clouds",
        label: "Interstellar clouds",
        uri: "http://astrothesaurus.org/uat/834",
      },
      {
        value: "Interstellar clouds",
        label: "Interstellar globules (Interstellar clouds)",
        uri: "http://astrothesaurus.org/uat/834",
      },
      {
        value: "Kirkwood gaps",
        label: "Kirkwood gaps",
        uri: "http://astrothesaurus.org/uat/889",
      },
      {
        value: "Kirkwood gaps",
        label: "Kirkwood gap (Kirkwood gaps)",
        uri: "http://astrothesaurus.org/uat/889",
      },
      {
        value: "Tailed radio galaxies",
        label: "Tailed radio galaxies",
        uri: "http://astrothesaurus.org/uat/1682",
      },
      {
        value: "Tailed radio galaxies",
        label: "Head tail galaxies (Tailed radio galaxies)",
        uri: "http://astrothesaurus.org/uat/1682",
      },
      {
        value: "Tailed radio galaxies",
        label: "Head-tail galaxies (Tailed radio galaxies)",
        uri: "http://astrothesaurus.org/uat/1682",
      },
      {
        value: "Astronomy data reduction",
        label: "Astronomy data reduction",
        uri: "http://astrothesaurus.org/uat/1861",
      },
      {
        value: "Drift scan imaging",
        label: "Drift scan imaging",
        uri: "http://astrothesaurus.org/uat/410",
      },
      {
        value: "Drift scan imaging",
        label: "Drift scans (Drift scan imaging)",
        uri: "http://astrothesaurus.org/uat/410",
      },
      {
        value: "Geneva photometry",
        label: "Geneva photometry",
        uri: "http://astrothesaurus.org/uat/642",
      },
      {
        value: "Geneva photometry",
        label: "Geneva photometric system (Geneva photometry)",
        uri: "http://astrothesaurus.org/uat/642",
      },
      {
        value: "Geneva photometry",
        label: "Ubvgri photometry (Geneva photometry)",
        uri: "http://astrothesaurus.org/uat/642",
      },
      {
        value: "PG 1159 stars",
        label: "PG 1159 stars",
        uri: "http://astrothesaurus.org/uat/1216",
      },
      {
        value: "PG 1159 stars",
        label: "GW Virginis stars (PG 1159 stars)",
        uri: "http://astrothesaurus.org/uat/1216",
      },
      {
        value: "PG 1159 stars",
        label: "Pg 1159-35 stars (PG 1159 stars)",
        uri: "http://astrothesaurus.org/uat/1216",
      },
      {
        value: "Moving cluster parallax",
        label: "Moving cluster parallax",
        uri: "http://astrothesaurus.org/uat/1075",
      },
      {
        value: "Moving cluster parallax",
        label: "Cluster parallax (Moving cluster parallax)",
        uri: "http://astrothesaurus.org/uat/1075",
      },
      {
        value: "Big Bang nucleosynthesis",
        label: "Big Bang nucleosynthesis",
        uri: "http://astrothesaurus.org/uat/151",
      },
      {
        value: "Big Bang nucleosynthesis",
        label: "Nucleogenesis (Big Bang nucleosynthesis)",
        uri: "http://astrothesaurus.org/uat/151",
      },
      {
        value: "Stellar wind bubbles",
        label: "Stellar wind bubbles",
        uri: "http://astrothesaurus.org/uat/1635",
      },
      {
        value: "Stellar wind bubbles",
        label: "Stellar-wind bubbles (Stellar wind bubbles)",
        uri: "http://astrothesaurus.org/uat/1635",
      },
      {
        value: "Stellar wind bubbles",
        label: "Interstellar bubbles (Stellar wind bubbles)",
        uri: "http://astrothesaurus.org/uat/1635",
      },
      {
        value: "Milky Way mass",
        label: "Milky Way mass",
        uri: "http://astrothesaurus.org/uat/1058",
      },
      {
        value: "Milky Way mass",
        label: "Mass of the Milky Way (Milky Way mass)",
        uri: "http://astrothesaurus.org/uat/1058",
      },
      {
        value: "Milky Way mass",
        label: "Milky Way Galaxy mass (Milky Way mass)",
        uri: "http://astrothesaurus.org/uat/1058",
      },
      {
        value: "Asteroseismology",
        label: "Asteroseismology",
        uri: "http://astrothesaurus.org/uat/73",
      },
      {
        value: "Asteroseismology",
        label: "Stellar seismology (Asteroseismology)",
        uri: "http://astrothesaurus.org/uat/73",
      },
      {
        value: "Asteroseismology",
        label: "Astroseismology (Asteroseismology)",
        uri: "http://astrothesaurus.org/uat/73",
      },
      {
        value: "Close binary stars",
        label: "Close binary stars",
        uri: "http://astrothesaurus.org/uat/254",
      },
      {
        value: "Close binary stars",
        label: "Close binaries (Close binary stars)",
        uri: "http://astrothesaurus.org/uat/254",
      },
      {
        value: "Non-Gaussianity",
        label: "Non-Gaussianity",
        uri: "http://astrothesaurus.org/uat/1116",
      },
      {
        value: "Upper atmosphere",
        label: "Upper atmosphere",
        uri: "http://astrothesaurus.org/uat/1748",
      },
      {
        value: "Chemical enrichment",
        label: "Chemical enrichment",
        uri: "http://astrothesaurus.org/uat/225",
      },
      {
        value: "Publicly available software",
        label: "Publicly available software",
        uri: "http://astrothesaurus.org/uat/1864",
      },
      {
        value: "Gregorian telescopes",
        label: "Gregorian telescopes",
        uri: "http://astrothesaurus.org/uat/685",
      },
      {
        value: "DA stars",
        label: "DA stars",
        uri: "http://astrothesaurus.org/uat/348",
      },
      {
        value: "DA stars",
        label: "DA white dwarf (DA stars)",
        uri: "http://astrothesaurus.org/uat/348",
      },
      {
        value: "DA stars",
        label: "DA white dwarf stars (DA stars)",
        uri: "http://astrothesaurus.org/uat/348",
      },
      {
        value: "Post-starburst galaxies",
        label: "Post-starburst galaxies",
        uri: "http://astrothesaurus.org/uat/2176",
      },
      {
        value: "Post-starburst galaxies",
        label: "Post starburst galaxy (Post-starburst galaxies)",
        uri: "http://astrothesaurus.org/uat/2176",
      },
      {
        value: "Post-starburst galaxies",
        label: "PSB (Post-starburst galaxies)",
        uri: "http://astrothesaurus.org/uat/2176",
      },
      {
        value: "Post-starburst galaxies",
        label: "Post starburst galaxies (Post-starburst galaxies)",
        uri: "http://astrothesaurus.org/uat/2176",
      },
      {
        value: "Post-starburst galaxies",
        label: "Post-starburst galaxy (Post-starburst galaxies)",
        uri: "http://astrothesaurus.org/uat/2176",
      },
      {
        value: "G giant stars",
        label: "G giant stars",
        uri: "http://astrothesaurus.org/uat/557",
      },
      {
        value: "G giant stars",
        label: "G-type giants (G giant stars)",
        uri: "http://astrothesaurus.org/uat/557",
      },
      {
        value: "G giant stars",
        label: "G giants (G giant stars)",
        uri: "http://astrothesaurus.org/uat/557",
      },
      {
        value: "G giant stars",
        label: "G-type giant stars (G giant stars)",
        uri: "http://astrothesaurus.org/uat/557",
      },
      {
        value: "Galaxy evolution",
        label: "Galaxy evolution",
        uri: "http://astrothesaurus.org/uat/594",
      },
      {
        value: "Galaxy evolution",
        label: "Evolution of galaxies (Galaxy evolution)",
        uri: "http://astrothesaurus.org/uat/594",
      },
      {
        value: "Galaxy evolution",
        label: "Galaxial evolution (Galaxy evolution)",
        uri: "http://astrothesaurus.org/uat/594",
      },
      {
        value: "Laser interferometry",
        label: "Laser interferometry",
        uri: "http://astrothesaurus.org/uat/905",
      },
      {
        value: "Hour angle",
        label: "Hour angle",
        uri: "http://astrothesaurus.org/uat/755",
      },
      {
        value: "Catadioptric telescopes",
        label: "Catadioptric telescopes",
        uri: "http://astrothesaurus.org/uat/204",
      },
      {
        value: "Lunar surface",
        label: "Lunar surface",
        uri: "http://astrothesaurus.org/uat/974",
      },
      {
        value: "Direct imaging",
        label: "Direct imaging",
        uri: "http://astrothesaurus.org/uat/387",
      },
      {
        value: "Cosmic electrodynamics",
        label: "Cosmic electrodynamics",
        uri: "http://astrothesaurus.org/uat/318",
      },
      {
        value: "Cosmic electrodynamics",
        label: "Cosmical electrodynamics (Cosmic electrodynamics)",
        uri: "http://astrothesaurus.org/uat/318",
      },
      {
        value: "Amorphous irregular galaxies",
        label: "Amorphous irregular galaxies",
        uri: "http://astrothesaurus.org/uat/37",
      },
      {
        value: "Amorphous irregular galaxies",
        label: "Irregular II galaxies (Amorphous irregular galaxies)",
        uri: "http://astrothesaurus.org/uat/37",
      },
      {
        value: "Amorphous irregular galaxies",
        label: "Type II irregular galaxies (Amorphous irregular galaxies)",
        uri: "http://astrothesaurus.org/uat/37",
      },
      {
        value: "BW stars",
        label: "BW stars",
        uri: "http://astrothesaurus.org/uat/189",
      },
      {
        value: "BW stars",
        label: "BW-type stars (BW stars)",
        uri: "http://astrothesaurus.org/uat/189",
      },
      {
        value: "Milky Way evolution",
        label: "Milky Way evolution",
        uri: "http://astrothesaurus.org/uat/1052",
      },
      {
        value: "Milky Way evolution",
        label: "Milky Way Galaxy evolution (Milky Way evolution)",
        uri: "http://astrothesaurus.org/uat/1052",
      },
      {
        value: "Milky Way evolution",
        label: "Evolution of the Milky Way (Milky Way evolution)",
        uri: "http://astrothesaurus.org/uat/1052",
      },
      {
        value: "The Moon",
        label: "The Moon",
        uri: "http://astrothesaurus.org/uat/1692",
      },
      {
        value: "The Moon",
        label: "Earth's Moon (The Moon)",
        uri: "http://astrothesaurus.org/uat/1692",
      },
      {
        value: "The Moon",
        label: "Luna (The Moon)",
        uri: "http://astrothesaurus.org/uat/1692",
      },
      {
        value: "SU Ursae Majoris stars",
        label: "SU Ursae Majoris stars",
        uri: "http://astrothesaurus.org/uat/1645",
      },
      {
        value: "Tidal distortion",
        label: "Tidal distortion",
        uri: "http://astrothesaurus.org/uat/1697",
      },
      {
        value: "Tidal distortion",
        label: "Tidal bulge (Tidal distortion)",
        uri: "http://astrothesaurus.org/uat/1697",
      },
      {
        value: "Planetary science",
        label: "Planetary science",
        uri: "http://astrothesaurus.org/uat/1255",
      },
      {
        value: "Planetary science",
        label: "Planetology (Planetary science)",
        uri: "http://astrothesaurus.org/uat/1255",
      },
      {
        value: "Habitable planets",
        label: "Habitable planets",
        uri: "http://astrothesaurus.org/uat/695",
      },
      {
        value: "Pointing accuracy",
        label: "Pointing accuracy",
        uri: "http://astrothesaurus.org/uat/1271",
      },
      {
        value: "Supergalactic latitude",
        label: "Supergalactic latitude",
        uri: "http://astrothesaurus.org/uat/1659",
      },
      {
        value: "F dwarf stars",
        label: "F dwarf stars",
        uri: "http://astrothesaurus.org/uat/516",
      },
      {
        value: "F dwarf stars",
        label: "F-type dwarfs (F dwarf stars)",
        uri: "http://astrothesaurus.org/uat/516",
      },
      {
        value: "F dwarf stars",
        label: "F dwarfs (F dwarf stars)",
        uri: "http://astrothesaurus.org/uat/516",
      },
      {
        value: "F dwarf stars",
        label: "F-type dwarf stars (F dwarf stars)",
        uri: "http://astrothesaurus.org/uat/516",
      },
      {
        value: "Chthonian planets",
        label: "Chthonian planets",
        uri: "http://astrothesaurus.org/uat/231",
      },
      {
        value: "Chthonian planets",
        label: "Cthonian planets (Chthonian planets)",
        uri: "http://astrothesaurus.org/uat/231",
      },
      {
        value: "Solar mass",
        label: "Solar mass",
        uri: "http://astrothesaurus.org/uat/1506",
      },
      {
        value: "Perturbation methods",
        label: "Perturbation methods",
        uri: "http://astrothesaurus.org/uat/1215",
      },
      {
        value: "Perturbation methods",
        label: "Perturbation theory (Perturbation methods)",
        uri: "http://astrothesaurus.org/uat/1215",
      },
      {
        value: "Mira variable stars",
        label: "Mira variable stars",
        uri: "http://astrothesaurus.org/uat/1066",
      },
      {
        value: "Mira variable stars",
        label: "Omicron ceti stars (Mira variable stars)",
        uri: "http://astrothesaurus.org/uat/1066",
      },
      {
        value: "Mira variable stars",
        label: "Mira variables (Mira variable stars)",
        uri: "http://astrothesaurus.org/uat/1066",
      },
      {
        value: "Mira variable stars",
        label: "Zeta aurigae stars (Mira variable stars)",
        uri: "http://astrothesaurus.org/uat/1066",
      },
      {
        value: "Mira variable stars",
        label: "Miras (Mira variable stars)",
        uri: "http://astrothesaurus.org/uat/1066",
      },
      {
        value: "Michelson interferometers",
        label: "Michelson interferometers",
        uri: "http://astrothesaurus.org/uat/1044",
      },
      {
        value: "Schmidt-Cassegrain telescopes",
        label: "Schmidt-Cassegrain telescopes",
        uri: "http://astrothesaurus.org/uat/1431",
      },
      {
        value: "Mercury-manganese stars",
        label: "Mercury-manganese stars",
        uri: "http://astrothesaurus.org/uat/1025",
      },
      {
        value: "Mercury-manganese stars",
        label: "Mercury manganese stars (Mercury-manganese stars)",
        uri: "http://astrothesaurus.org/uat/1025",
      },
      {
        value: "Gunn photometry",
        label: "Gunn photometry",
        uri: "http://astrothesaurus.org/uat/688",
      },
      {
        value: "Gunn photometry",
        label: "Gunn g,r,i,z photometry (Gunn photometry)",
        uri: "http://astrothesaurus.org/uat/688",
      },
      {
        value: "Radio interferometry",
        label: "Radio interferometry",
        uri: "http://astrothesaurus.org/uat/1346",
      },
      {
        value: "Micrometeorites",
        label: "Micrometeorites",
        uri: "http://astrothesaurus.org/uat/1047",
      },
      {
        value: "Posterior distribution",
        label: "Posterior distribution",
        uri: "http://astrothesaurus.org/uat/1926",
      },
      {
        value: "Stellar coronal holes",
        label: "Stellar coronal holes",
        uri: "http://astrothesaurus.org/uat/307",
      },
      {
        value: "Stellar coronal holes",
        label: "Stellar M coronal regions (Stellar coronal holes)",
        uri: "http://astrothesaurus.org/uat/307",
      },
      {
        value: "Two-dimensional gravity",
        label: "Two-dimensional gravity",
        uri: "http://astrothesaurus.org/uat/1725",
      },
      {
        value: "Two-dimensional gravity",
        label: "Two dimensional gravity (Two-dimensional gravity)",
        uri: "http://astrothesaurus.org/uat/1725",
      },
      {
        value: "Two-dimensional gravity",
        label: "2D gravity (Two-dimensional gravity)",
        uri: "http://astrothesaurus.org/uat/1725",
      },
      {
        value: "Symbiotic novae",
        label: "Symbiotic novae",
        uri: "http://astrothesaurus.org/uat/1675",
      },
      {
        value: "Stellar parallax",
        label: "Stellar parallax",
        uri: "http://astrothesaurus.org/uat/1618",
      },
      {
        value: "Galaxy distances",
        label: "Galaxy distances",
        uri: "http://astrothesaurus.org/uat/590",
      },
      {
        value: "Lyman-alpha galaxies",
        label: "Lyman-alpha galaxies",
        uri: "http://astrothesaurus.org/uat/978",
      },
      {
        value: "Lyman-alpha galaxies",
        label: "Lyman-alpha emitters (Lyman-alpha galaxies)",
        uri: "http://astrothesaurus.org/uat/978",
      },
      {
        value: "Lyman-alpha galaxies",
        label: "LAE (Lyman-alpha galaxies)",
        uri: "http://astrothesaurus.org/uat/978",
      },
      {
        value: "Optical telescopes",
        label: "Optical telescopes",
        uri: "http://astrothesaurus.org/uat/1174",
      },
      {
        value: "South galactic pole",
        label: "South galactic pole",
        uri: "http://astrothesaurus.org/uat/1540",
      },
      {
        value: "South galactic pole",
        label: "S. g. p. (South galactic pole)",
        uri: "http://astrothesaurus.org/uat/1540",
      },
      {
        value: "South galactic pole",
        label: "S g p (South galactic pole)",
        uri: "http://astrothesaurus.org/uat/1540",
      },
      {
        value: "Main sequence stars",
        label: "Main sequence stars",
        uri: "http://astrothesaurus.org/uat/1000",
      },
      {
        value: "Main sequence stars",
        label: "Stars on the main sequence (Main sequence stars)",
        uri: "http://astrothesaurus.org/uat/1000",
      },
      {
        value: "Red supergiant stars",
        label: "Red supergiant stars",
        uri: "http://astrothesaurus.org/uat/1375",
      },
      {
        value: "Red supergiant stars",
        label: "Red supergiants (Red supergiant stars)",
        uri: "http://astrothesaurus.org/uat/1375",
      },
      {
        value: "Solar x-ray flares",
        label: "Solar x-ray flares",
        uri: "http://astrothesaurus.org/uat/1816",
      },
      {
        value: "L subdwarfs",
        label: "L subdwarfs",
        uri: "http://astrothesaurus.org/uat/896",
      },
      {
        value: "L subdwarfs",
        label: "L subdwarf stars (L subdwarfs)",
        uri: "http://astrothesaurus.org/uat/896",
      },
      {
        value: "L subdwarfs",
        label: "L-type brown subdwarfs (L subdwarfs)",
        uri: "http://astrothesaurus.org/uat/896",
      },
      {
        value: "L subdwarfs",
        label: "L brown subdwarfs (L subdwarfs)",
        uri: "http://astrothesaurus.org/uat/896",
      },
      {
        value: "Analytical mathematics",
        label: "Analytical mathematics",
        uri: "http://astrothesaurus.org/uat/38",
      },
      {
        value: "Excitation rates",
        label: "Excitation rates",
        uri: "http://astrothesaurus.org/uat/2067",
      },
      {
        value: "Intergalactic filaments",
        label: "Intergalactic filaments",
        uri: "http://astrothesaurus.org/uat/811",
      },
      {
        value: "Radio spectroscopy",
        label: "Radio spectroscopy",
        uri: "http://astrothesaurus.org/uat/1359",
      },
      {
        value: "Sloan photometry",
        label: "Sloan photometry",
        uri: "http://astrothesaurus.org/uat/1465",
      },
      {
        value: "Sloan photometry",
        label: "S d ss photometry (Sloan photometry)",
        uri: "http://astrothesaurus.org/uat/1465",
      },
      {
        value: "Supergiant stars",
        label: "Supergiant stars",
        uri: "http://astrothesaurus.org/uat/1661",
      },
      {
        value: "Galactic anticenter",
        label: "Galactic anticenter",
        uri: "http://astrothesaurus.org/uat/564",
      },
      {
        value: "Orreries",
        label: "Orreries",
        uri: "http://astrothesaurus.org/uat/1187",
      },
      {
        value: "Orreries",
        label: "Orrery (Orreries)",
        uri: "http://astrothesaurus.org/uat/1187",
      },
      {
        value: "Lambda Eridani stars",
        label: "Lambda Eridani stars",
        uri: "http://astrothesaurus.org/uat/899",
      },
      {
        value: "Novae",
        label: "Novae",
        uri: "http://astrothesaurus.org/uat/1127",
      },
      {
        value: "Stellar occultation",
        label: "Stellar occultation",
        uri: "http://astrothesaurus.org/uat/2135",
      },
      {
        value: "Aerolites",
        label: "Aerolites",
        uri: "http://astrothesaurus.org/uat/21",
      },
      {
        value: "Bayesian statistics",
        label: "Bayesian statistics",
        uri: "http://astrothesaurus.org/uat/1900",
      },
      {
        value: "Curved space",
        label: "Curved space",
        uri: "http://astrothesaurus.org/uat/345",
      },
      {
        value: "Fornax dwarf spheroidal galaxy",
        label: "Fornax dwarf spheroidal galaxy",
        uri: "http://astrothesaurus.org/uat/548",
      },
      {
        value: "X-ray quasars",
        label: "X-ray quasars",
        uri: "http://astrothesaurus.org/uat/1821",
      },
      {
        value: "Red sequence galaxies",
        label: "Red sequence galaxies",
        uri: "http://astrothesaurus.org/uat/1373",
      },
      {
        value: "Flux calibration",
        label: "Flux calibration",
        uri: "http://astrothesaurus.org/uat/544",
      },
      {
        value: "Sunspot groups",
        label: "Sunspot groups",
        uri: "http://astrothesaurus.org/uat/1651",
      },
      {
        value: "Astronomical reference materials",
        label: "Astronomical reference materials",
        uri: "http://astrothesaurus.org/uat/90",
      },
      {
        value: "Red giant stars",
        label: "Red giant stars",
        uri: "http://astrothesaurus.org/uat/1372",
      },
      {
        value: "Red giant stars",
        label: "Red giants (Red giant stars)",
        uri: "http://astrothesaurus.org/uat/1372",
      },
      {
        value: "Red giant stars",
        label: "Red giant branch stars (Red giant stars)",
        uri: "http://astrothesaurus.org/uat/1372",
      },
      {
        value: "Coelostats",
        label: "Coelostats",
        uri: "http://astrothesaurus.org/uat/264",
      },
      {
        value: "Primordial galaxies",
        label: "Primordial galaxies",
        uri: "http://astrothesaurus.org/uat/1293",
      },
      {
        value: "Comet tails",
        label: "Comet tails",
        uri: "http://astrothesaurus.org/uat/274",
      },
      {
        value: "Open source software",
        label: "Open source software",
        uri: "http://astrothesaurus.org/uat/1866",
      },
      {
        value: "Meteorites",
        label: "Meteorites",
        uri: "http://astrothesaurus.org/uat/1038",
      },
      {
        value: "Metal line absorbers",
        label: "Metal line absorbers",
        uri: "http://astrothesaurus.org/uat/1032",
      },
      {
        value: "Jupiter trojans",
        label: "Jupiter trojans",
        uri: "http://astrothesaurus.org/uat/874",
      },
      {
        value: "Lyman-break galaxies",
        label: "Lyman-break galaxies",
        uri: "http://astrothesaurus.org/uat/979",
      },
      {
        value: "Interstellar synchrotron emission",
        label: "Interstellar synchrotron emission",
        uri: "http://astrothesaurus.org/uat/856",
      },
      {
        value: "Interstellar synchrotron emission",
        label: "Synchrotron emission (Interstellar synchrotron emission)",
        uri: "http://astrothesaurus.org/uat/856",
      },
      {
        value: "History of astronomy",
        label: "History of astronomy",
        uri: "http://astrothesaurus.org/uat/1868",
      },
      {
        value: "Compact objects",
        label: "Compact objects",
        uri: "http://astrothesaurus.org/uat/288",
      },
      {
        value: "Compact objects",
        label: "Compact stars (Compact objects)",
        uri: "http://astrothesaurus.org/uat/288",
      },
      {
        value: "S Doradus stars",
        label: "S Doradus stars",
        uri: "http://astrothesaurus.org/uat/1420",
      },
      {
        value: "S Doradus stars",
        label: "P Cygni stars (S Doradus stars)",
        uri: "http://astrothesaurus.org/uat/1420",
      },
      {
        value: "Dwarf irregular galaxies",
        label: "Dwarf irregular galaxies",
        uri: "http://astrothesaurus.org/uat/417",
      },
      {
        value: "Dwarf irregular galaxies",
        label: "Dwarf irregulars (Dwarf irregular galaxies)",
        uri: "http://astrothesaurus.org/uat/417",
      },
      {
        value: "Dwarf irregular galaxies",
        label: "Dwarf irregular galaxy (Dwarf irregular galaxies)",
        uri: "http://astrothesaurus.org/uat/417",
      },
      {
        value: "Dwarf irregular galaxies",
        label: "Irregular dwarf galaxies (Dwarf irregular galaxies)",
        uri: "http://astrothesaurus.org/uat/417",
      },
      {
        value: "Galactic and extragalactic astronomy",
        label: "Galactic and extragalactic astronomy",
        uri: "http://astrothesaurus.org/uat/563",
      },
      {
        value: "Stellar convection envelopes",
        label: "Stellar convection envelopes",
        uri: "http://astrothesaurus.org/uat/299",
      },
      {
        value: "Stellar convection envelopes",
        label: "Convective envelopes (Stellar convection envelopes)",
        uri: "http://astrothesaurus.org/uat/299",
      },
      {
        value: "Dynamical evolution",
        label: "Dynamical evolution",
        uri: "http://astrothesaurus.org/uat/421",
      },
      {
        value: "Radial velocity",
        label: "Radial velocity",
        uri: "http://astrothesaurus.org/uat/1332",
      },
      {
        value: "Radial velocity",
        label: "Spectroscopic radial velocity (Radial velocity)",
        uri: "http://astrothesaurus.org/uat/1332",
      },
      {
        value: "Radial velocity",
        label: "Radial velocity methods (Radial velocity)",
        uri: "http://astrothesaurus.org/uat/1332",
      },
      {
        value: "Radial velocity",
        label: "Astrometric radial velocity (Radial velocity)",
        uri: "http://astrothesaurus.org/uat/1332",
      },
      {
        value: "Radial velocity",
        label: "Radial-velocity method (Radial velocity)",
        uri: "http://astrothesaurus.org/uat/1332",
      },
      {
        value: "Greenhouse gases",
        label: "Greenhouse gases",
        uri: "http://astrothesaurus.org/uat/684",
      },
      {
        value: "Molecular gas",
        label: "Molecular gas",
        uri: "http://astrothesaurus.org/uat/1073",
      },
      {
        value: "Extrinsic variable stars",
        label: "Extrinsic variable stars",
        uri: "http://astrothesaurus.org/uat/514",
      },
      {
        value: "Solar coronal waves",
        label: "Solar coronal waves",
        uri: "http://astrothesaurus.org/uat/1995",
      },
      {
        value: "Y dwarfs",
        label: "Y dwarfs",
        uri: "http://astrothesaurus.org/uat/1827",
      },
      {
        value: "Y dwarfs",
        label: "Y dwarf stars (Y dwarfs)",
        uri: "http://astrothesaurus.org/uat/1827",
      },
      {
        value: "Y dwarfs",
        label: "Y brown dwarfs (Y dwarfs)",
        uri: "http://astrothesaurus.org/uat/1827",
      },
      {
        value: "Y dwarfs",
        label: "Y-type brown dwarfs (Y dwarfs)",
        uri: "http://astrothesaurus.org/uat/1827",
      },
      {
        value: "True position",
        label: "True position",
        uri: "http://astrothesaurus.org/uat/1720",
      },
      {
        value: "Heliosphere",
        label: "Heliosphere",
        uri: "http://astrothesaurus.org/uat/711",
      },
      {
        value: "Strong gravitational lensing",
        label: "Strong gravitational lensing",
        uri: "http://astrothesaurus.org/uat/1643",
      },
      {
        value: "Gamma-ray astronomy",
        label: "Gamma-ray astronomy",
        uri: "http://astrothesaurus.org/uat/628",
      },
      {
        value: "Gamma-ray astronomy",
        label: "Gamma ray astronomical observations (Gamma-ray astronomy)",
        uri: "http://astrothesaurus.org/uat/628",
      },
      {
        value: "Gamma-ray astronomy",
        label: "Gamma ray astronomy (Gamma-ray astronomy)",
        uri: "http://astrothesaurus.org/uat/628",
      },
      {
        value: "Gamma-ray astronomy",
        label: "Î³-ray astronomy (Gamma-ray astronomy)",
        uri: "http://astrothesaurus.org/uat/628",
      },
      {
        value: "Gamma-ray astronomy",
        label: "Gamma-ray astronomical observations (Gamma-ray astronomy)",
        uri: "http://astrothesaurus.org/uat/628",
      },
      {
        value: "Gamma-ray astronomy",
        label: "Gamma astronomy (Gamma-ray astronomy)",
        uri: "http://astrothesaurus.org/uat/628",
      },
      {
        value: "Blue cloud galaxies",
        label: "Blue cloud galaxies",
        uri: "http://astrothesaurus.org/uat/166",
      },
      {
        value: "Special relativity",
        label: "Special relativity",
        uri: "http://astrothesaurus.org/uat/1551",
      },
      {
        value: "Special relativity",
        label: "Special theory of relativity (Special relativity)",
        uri: "http://astrothesaurus.org/uat/1551",
      },
      {
        value: "Circumgalactic medium",
        label: "Circumgalactic medium",
        uri: "http://astrothesaurus.org/uat/1879",
      },
      {
        value: "Circumgalactic medium",
        label: "Gaseous galaxy halo (Circumgalactic medium)",
        uri: "http://astrothesaurus.org/uat/1879",
      },
      {
        value: "Newtonian cosmology",
        label: "Newtonian cosmology",
        uri: "http://astrothesaurus.org/uat/1109",
      },
      {
        value: "Gravitational energy",
        label: "Gravitational energy",
        uri: "http://astrothesaurus.org/uat/665",
      },
      {
        value: "Infrared astronomy",
        label: "Infrared astronomy",
        uri: "http://astrothesaurus.org/uat/786",
      },
      {
        value: "Dirty snowball model",
        label: "Dirty snowball model",
        uri: "http://astrothesaurus.org/uat/388",
      },
      {
        value: "Dirty snowball model",
        label: "Dirty iceball model (Dirty snowball model)",
        uri: "http://astrothesaurus.org/uat/388",
      },
      {
        value: "Dirty snowball model",
        label: "Dirty snowball theory (Dirty snowball model)",
        uri: "http://astrothesaurus.org/uat/388",
      },
      {
        value: "Parabolic orbit",
        label: "Parabolic orbit",
        uri: "http://astrothesaurus.org/uat/1196",
      },
      {
        value: "Blue large-amplitude pulsators",
        label: "Blue large-amplitude pulsators",
        uri: "http://astrothesaurus.org/uat/2112",
      },
      {
        value: "Blue large-amplitude pulsators",
        label: "BLAPs (Blue large-amplitude pulsators)",
        uri: "http://astrothesaurus.org/uat/2112",
      },
      {
        value: "Blue large-amplitude pulsators",
        label: "BLAP (Blue large-amplitude pulsators)",
        uri: "http://astrothesaurus.org/uat/2112",
      },
      {
        value: "Blue large-amplitude pulsators",
        label:
          "Blue large-amplitude pulsating stars (Blue large-amplitude pulsators)",
        uri: "http://astrothesaurus.org/uat/2112",
      },
      {
        value: "Density parameters",
        label: "Density parameters",
        uri: "http://astrothesaurus.org/uat/372",
      },
      {
        value: "Solid matter physics",
        label: "Solid matter physics",
        uri: "http://astrothesaurus.org/uat/2090",
      },
      {
        value: "Solid matter physics",
        label: "Dust and ices physics (Solid matter physics)",
        uri: "http://astrothesaurus.org/uat/2090",
      },
      {
        value: "Solid matter physics",
        label: "Dust and ices astrophysics (Solid matter physics)",
        uri: "http://astrothesaurus.org/uat/2090",
      },
      {
        value: "Solar interior",
        label: "Solar interior",
        uri: "http://astrothesaurus.org/uat/1500",
      },
      {
        value: "Nucleosynthesis",
        label: "Nucleosynthesis",
        uri: "http://astrothesaurus.org/uat/1131",
      },
      {
        value: "Nucleosynthesis",
        label: "Formation of elements (Nucleosynthesis)",
        uri: "http://astrothesaurus.org/uat/1131",
      },
      {
        value: "Nucleosynthesis",
        label: "Element formation (Nucleosynthesis)",
        uri: "http://astrothesaurus.org/uat/1131",
      },
      {
        value: "Galactic bulge",
        label: "Galactic bulge",
        uri: "http://astrothesaurus.org/uat/2041",
      },
      {
        value: "Galactic bulge",
        label: "Milky Way bulge (Galactic bulge)",
        uri: "http://astrothesaurus.org/uat/2041",
      },
      {
        value: "Rapid stellar oscillations",
        label: "Rapid stellar oscillations",
        uri: "http://astrothesaurus.org/uat/1363",
      },
      {
        value: "Rapid stellar oscillations",
        label: "RoAp oscillations (Rapid stellar oscillations)",
        uri: "http://astrothesaurus.org/uat/1363",
      },
      {
        value: "Nuclear physics",
        label: "Nuclear physics",
        uri: "http://astrothesaurus.org/uat/2077",
      },
      {
        value: "Libration",
        label: "Libration",
        uri: "http://astrothesaurus.org/uat/917",
      },
      {
        value: "Libration",
        label: "Physical libration (Libration)",
        uri: "http://astrothesaurus.org/uat/917",
      },
      {
        value: "Polarimetry",
        label: "Polarimetry",
        uri: "http://astrothesaurus.org/uat/1278",
      },
      {
        value: "VY Sculpturis stars",
        label: "VY Sculpturis stars",
        uri: "http://astrothesaurus.org/uat/1782",
      },
      {
        value: "Astrostatistics",
        label: "Astrostatistics",
        uri: "http://astrothesaurus.org/uat/1882",
      },
      {
        value: "Galactic radio sources",
        label: "Galactic radio sources",
        uri: "http://astrothesaurus.org/uat/571",
      },
      {
        value: "Irregular galaxies",
        label: "Irregular galaxies",
        uri: "http://astrothesaurus.org/uat/864",
      },
      {
        value: "Supernova remnants",
        label: "Supernova remnants",
        uri: "http://astrothesaurus.org/uat/1667",
      },
      {
        value: "L dwarfs",
        label: "L dwarfs",
        uri: "http://astrothesaurus.org/uat/894",
      },
      {
        value: "L dwarfs",
        label: "L brown dwarfs (L dwarfs)",
        uri: "http://astrothesaurus.org/uat/894",
      },
      {
        value: "L dwarfs",
        label: "L dwarf stars (L dwarfs)",
        uri: "http://astrothesaurus.org/uat/894",
      },
      {
        value: "L dwarfs",
        label: "L-type brown dwarfs (L dwarfs)",
        uri: "http://astrothesaurus.org/uat/894",
      },
      {
        value: "Descending node",
        label: "Descending node",
        uri: "http://astrothesaurus.org/uat/374",
      },
      {
        value: "Descending node",
        label: "South node (Descending node)",
        uri: "http://astrothesaurus.org/uat/374",
      },
      {
        value: "The Sun",
        label: "The Sun",
        uri: "http://astrothesaurus.org/uat/1693",
      },
      {
        value: "Stellar convective shells",
        label: "Stellar convective shells",
        uri: "http://astrothesaurus.org/uat/300",
      },
      {
        value: "Stellar convective shells",
        label: "Convective shells (Stellar convective shells)",
        uri: "http://astrothesaurus.org/uat/300",
      },
      {
        value: "RRd variable stars",
        label: "RRd variable stars",
        uri: "http://astrothesaurus.org/uat/1876",
      },
      {
        value: "RRd variable stars",
        label: "Bailey type d stars (RRd variable stars)",
        uri: "http://astrothesaurus.org/uat/1876",
      },
      {
        value: "RRd variable stars",
        label: "Bailey stars (RRd variable stars)",
        uri: "http://astrothesaurus.org/uat/1876",
      },
      {
        value: "RRd variable stars",
        label: " RR(B) stars (RRd variable stars)",
        uri: "http://astrothesaurus.org/uat/1876",
      },
      {
        value: "RRd variable stars",
        label: "RRd stars (RRd variable stars)",
        uri: "http://astrothesaurus.org/uat/1876",
      },
      {
        value: "Apparent magnitude",
        label: "Apparent magnitude",
        uri: "http://astrothesaurus.org/uat/59",
      },
      {
        value: "Apparent magnitude",
        label: "Visual magnitude (Apparent magnitude)",
        uri: "http://astrothesaurus.org/uat/59",
      },
      {
        value: "Relativistic disks",
        label: "Relativistic disks",
        uri: "http://astrothesaurus.org/uat/1388",
      },
      {
        value: "Relativistic disks",
        label: "Relativistic discs (Relativistic disks)",
        uri: "http://astrothesaurus.org/uat/1388",
      },
      {
        value: "Radiative transfer",
        label: "Radiative transfer",
        uri: "http://astrothesaurus.org/uat/1335",
      },
      {
        value: "Jupiter",
        label: "Jupiter",
        uri: "http://astrothesaurus.org/uat/873",
      },
      {
        value: "Solar rotation",
        label: "Solar rotation",
        uri: "http://astrothesaurus.org/uat/1524",
      },
      {
        value: "Planet hosting stars",
        label: "Planet hosting stars",
        uri: "http://astrothesaurus.org/uat/1242",
      },
      {
        value: "Automated telescopes",
        label: "Automated telescopes",
        uri: "http://astrothesaurus.org/uat/121",
      },
      {
        value: "Automated telescopes",
        label: "Robotic telescope (Automated telescopes)",
        uri: "http://astrothesaurus.org/uat/121",
      },
      {
        value: "Post-asymptotic giant branch",
        label: "Post-asymptotic giant branch",
        uri: "http://astrothesaurus.org/uat/1287",
      },
      {
        value: "Post-asymptotic giant branch",
        label: "Post-AGB (Post-asymptotic giant branch)",
        uri: "http://astrothesaurus.org/uat/1287",
      },
      {
        value: "Zenith tubes",
        label: "Zenith tubes",
        uri: "http://astrothesaurus.org/uat/1841",
      },
      {
        value: "Zenith tubes",
        label: "PZT (Zenith tubes)",
        uri: "http://astrothesaurus.org/uat/1841",
      },
      {
        value: "Zenith tubes",
        label: "Photographic zenith tube (Zenith tubes)",
        uri: "http://astrothesaurus.org/uat/1841",
      },
      {
        value: "Zenith tubes",
        label: "Zenithal tubes (Zenith tubes)",
        uri: "http://astrothesaurus.org/uat/1841",
      },
      {
        value: "Uncertainty bounds",
        label: "Uncertainty bounds",
        uri: "http://astrothesaurus.org/uat/1917",
      },
      {
        value: "Virtual observatories",
        label: "Virtual observatories",
        uri: "http://astrothesaurus.org/uat/1774",
      },
      {
        value: "Polytropes",
        label: "Polytropes",
        uri: "http://astrothesaurus.org/uat/1281",
      },
      {
        value: "Polytropes",
        label: "Polytropic solutions (Polytropes)",
        uri: "http://astrothesaurus.org/uat/1281",
      },
      {
        value: "Polytropes",
        label: "Polytropic stars (Polytropes)",
        uri: "http://astrothesaurus.org/uat/1281",
      },
      {
        value: "Line of sight",
        label: "Line of sight",
        uri: "http://astrothesaurus.org/uat/924",
      },
      {
        value: "Nuclear reaction cross sections",
        label: "Nuclear reaction cross sections",
        uri: "http://astrothesaurus.org/uat/2087",
      },
      {
        value: "Double periodic variable stars",
        label: "Double periodic variable stars",
        uri: "http://astrothesaurus.org/uat/2111",
      },
      {
        value: "Double periodic variable stars",
        label: "Double periodic variables (Double periodic variable stars)",
        uri: "http://astrothesaurus.org/uat/2111",
      },
      {
        value: "Double periodic variable stars",
        label: "DPV (Double periodic variable stars)",
        uri: "http://astrothesaurus.org/uat/2111",
      },
      {
        value: "X-ray binary stars",
        label: "X-ray binary stars",
        uri: "http://astrothesaurus.org/uat/1811",
      },
      {
        value: "X-ray binary stars",
        label: "X-ray binaries (X-ray binary stars)",
        uri: "http://astrothesaurus.org/uat/1811",
      },
      {
        value: "Galaxy dark matter halos",
        label: "Galaxy dark matter halos",
        uri: "http://astrothesaurus.org/uat/1880",
      },
      {
        value: "Galaxy dark matter halos",
        label: "Dark halo (Galaxy dark matter halos)",
        uri: "http://astrothesaurus.org/uat/1880",
      },
      {
        value: "Galaxy dark matter halos",
        label: "Dark matter halos (Galaxy dark matter halos)",
        uri: "http://astrothesaurus.org/uat/1880",
      },
      {
        value: "Galaxy dark matter halos",
        label: "Dark halos (Galaxy dark matter halos)",
        uri: "http://astrothesaurus.org/uat/1880",
      },
      {
        value: "Sagittarius dwarf spheroidal galaxy",
        label: "Sagittarius dwarf spheroidal galaxy",
        uri: "http://astrothesaurus.org/uat/1423",
      },
      {
        value: "Sagittarius dwarf spheroidal galaxy",
        label: "Sag DEG (Sagittarius dwarf spheroidal galaxy)",
        uri: "http://astrothesaurus.org/uat/1423",
      },
      {
        value: "Sagittarius dwarf spheroidal galaxy",
        label: "Sgr dSph (Sagittarius dwarf spheroidal galaxy)",
        uri: "http://astrothesaurus.org/uat/1423",
      },
      {
        value: "Sagittarius dwarf spheroidal galaxy",
        label:
          "Sagittarius dwarf elliptical galaxy (Sagittarius dwarf spheroidal galaxy)",
        uri: "http://astrothesaurus.org/uat/1423",
      },
      {
        value: "Sagittarius dwarf spheroidal galaxy",
        label: "Sgr dE (Sagittarius dwarf spheroidal galaxy)",
        uri: "http://astrothesaurus.org/uat/1423",
      },
      {
        value: "Laboratory astrophysics",
        label: "Laboratory astrophysics",
        uri: "http://astrothesaurus.org/uat/2004",
      },
      {
        value: "Neutron stars",
        label: "Neutron stars",
        uri: "http://astrothesaurus.org/uat/1108",
      },
      {
        value: "Bediasites",
        label: "Bediasites",
        uri: "http://astrothesaurus.org/uat/144",
      },
      {
        value: "Sunskirters",
        label: "Sunskirters",
        uri: "http://astrothesaurus.org/uat/2198",
      },
      {
        value: "Frozen in elements",
        label: "Frozen in elements",
        uri: "http://astrothesaurus.org/uat/552",
      },
      {
        value: "Frozen in elements",
        label: "Frozen-in elements (Frozen in elements)",
        uri: "http://astrothesaurus.org/uat/552",
      },
      {
        value: "Unbarred spiral galaxies",
        label: "Unbarred spiral galaxies",
        uri: "http://astrothesaurus.org/uat/1745",
      },
      {
        value: "Unbarred spiral galaxies",
        label: "SA galaxies (Unbarred spiral galaxies)",
        uri: "http://astrothesaurus.org/uat/1745",
      },
      {
        value: "Aperture synthesis",
        label: "Aperture synthesis",
        uri: "http://astrothesaurus.org/uat/53",
      },
      {
        value: "Aperture synthesis",
        label: "Synthetic aperture (Aperture synthesis)",
        uri: "http://astrothesaurus.org/uat/53",
      },
      {
        value: "Aperture synthesis",
        label: "Synthesis imaging (Aperture synthesis)",
        uri: "http://astrothesaurus.org/uat/53",
      },
      {
        value: "G subdwarf stars",
        label: "G subdwarf stars",
        uri: "http://astrothesaurus.org/uat/559",
      },
      {
        value: "G subdwarf stars",
        label: "G-type subdwarfs (G subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/559",
      },
      {
        value: "G subdwarf stars",
        label: "G subdwarfs (G subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/559",
      },
      {
        value: "G subdwarf stars",
        label: "G-type subdwarf stars (G subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/559",
      },
      {
        value: "Light curves",
        label: "Light curves",
        uri: "http://astrothesaurus.org/uat/918",
      },
      {
        value: "Light curves",
        label: "Lightcurves (Light curves)",
        uri: "http://astrothesaurus.org/uat/918",
      },
      {
        value: "Gravitational collapse",
        label: "Gravitational collapse",
        uri: "http://astrothesaurus.org/uat/662",
      },
      {
        value: "Cool cores",
        label: "Cool cores",
        uri: "http://astrothesaurus.org/uat/302",
      },
      {
        value: "Seasonal phenomena",
        label: "Seasonal phenomena",
        uri: "http://astrothesaurus.org/uat/1437",
      },
      {
        value: "Molecular physics",
        label: "Molecular physics",
        uri: "http://astrothesaurus.org/uat/2058",
      },
      {
        value: "Slow irregular variable stars",
        label: "Slow irregular variable stars",
        uri: "http://astrothesaurus.org/uat/1466",
      },
      {
        value: "Slow irregular variable stars",
        label: "Slow irregular variables (Slow irregular variable stars)",
        uri: "http://astrothesaurus.org/uat/1466",
      },
      {
        value: "Slow irregular variable stars",
        label: "Slow irregulars (Slow irregular variable stars)",
        uri: "http://astrothesaurus.org/uat/1466",
      },
      {
        value: "Hall thrusters",
        label: "Hall thrusters",
        uri: "http://astrothesaurus.org/uat/698",
      },
      {
        value: "Hall thrusters",
        label: "Hall current thrusters (Hall thrusters)",
        uri: "http://astrothesaurus.org/uat/698",
      },
      {
        value: "Hall thrusters",
        label: "Hall effect thrusters (Hall thrusters)",
        uri: "http://astrothesaurus.org/uat/698",
      },
      {
        value: "Conjunction",
        label: "Conjunction",
        uri: "http://astrothesaurus.org/uat/295",
      },
      {
        value: "Reaction catalysts",
        label: "Reaction catalysts",
        uri: "http://astrothesaurus.org/uat/2080",
      },
      {
        value: "Indochinites",
        label: "Indochinites",
        uri: "http://astrothesaurus.org/uat/783",
      },
      {
        value: "Warm-hot intergalactic medium",
        label: "Warm-hot intergalactic medium",
        uri: "http://astrothesaurus.org/uat/1786",
      },
      {
        value: "Warm-hot intergalactic medium",
        label: "Warm hot intergalactic medium (Warm-hot intergalactic medium)",
        uri: "http://astrothesaurus.org/uat/1786",
      },
      {
        value: "Warm-hot intergalactic medium",
        label: "Warm-hot intergalactic matter (Warm-hot intergalactic medium)",
        uri: "http://astrothesaurus.org/uat/1786",
      },
      {
        value: "Warm-hot intergalactic medium",
        label: "WHIM (Warm-hot intergalactic medium)",
        uri: "http://astrothesaurus.org/uat/1786",
      },
      {
        value: "Triton",
        label: "Triton",
        uri: "http://astrothesaurus.org/uat/2187",
      },
      {
        value: "Radio sources",
        label: "Radio sources",
        uri: "http://astrothesaurus.org/uat/1358",
      },
      {
        value: "Radio sources",
        label: "Radio lines (Radio sources)",
        uri: "http://astrothesaurus.org/uat/1358",
      },
      {
        value: "Orbital anomalies",
        label: "Orbital anomalies",
        uri: "http://astrothesaurus.org/uat/1176",
      },
      {
        value: "Orbital anomalies",
        label: "Apparent anomaly (Orbital anomalies)",
        uri: "http://astrothesaurus.org/uat/1176",
      },
      {
        value: "Impact phenomena",
        label: "Impact phenomena",
        uri: "http://astrothesaurus.org/uat/779",
      },
      {
        value: "Astronomical object identification",
        label: "Astronomical object identification",
        uri: "http://astrothesaurus.org/uat/87",
      },
      {
        value: "Fundamental parameters of stars",
        label: "Fundamental parameters of stars",
        uri: "http://astrothesaurus.org/uat/555",
      },
      {
        value: "Fundamental parameters of stars",
        label:
          "Fundamental properties of stars (Fundamental parameters of stars)",
        uri: "http://astrothesaurus.org/uat/555",
      },
      {
        value: "Geostationary satellites",
        label: "Geostationary satellites",
        uri: "http://astrothesaurus.org/uat/647",
      },
      {
        value: "Asteroid occultation",
        label: "Asteroid occultation",
        uri: "http://astrothesaurus.org/uat/71",
      },
      {
        value: "Stellar chromospheres",
        label: "Stellar chromospheres",
        uri: "http://astrothesaurus.org/uat/230",
      },
      {
        value: "Stellar chromospheres",
        label: "Chromospheres (Stellar chromospheres)",
        uri: "http://astrothesaurus.org/uat/230",
      },
      {
        value: "Galaxy spectroscopy",
        label: "Galaxy spectroscopy",
        uri: "http://astrothesaurus.org/uat/2171",
      },
      {
        value: "Photoelectric photometry",
        label: "Photoelectric photometry",
        uri: "http://astrothesaurus.org/uat/1225",
      },
      {
        value: "Radar telescopes",
        label: "Radar telescopes",
        uri: "http://astrothesaurus.org/uat/1330",
      },
      {
        value: "Cosmic inflation",
        label: "Cosmic inflation",
        uri: "http://astrothesaurus.org/uat/319",
      },
      {
        value: "Cosmic inflation",
        label: "Cosmological inflation (Cosmic inflation)",
        uri: "http://astrothesaurus.org/uat/319",
      },
      {
        value: "Cosmic inflation",
        label: "Inflation (cosmology) (Cosmic inflation)",
        uri: "http://astrothesaurus.org/uat/319",
      },
      {
        value: "Lb variable stars",
        label: "Lb variable stars",
        uri: "http://astrothesaurus.org/uat/912",
      },
      {
        value: "Lb variable stars",
        label: "TZ Cassiopeia (Lb variable stars)",
        uri: "http://astrothesaurus.org/uat/912",
      },
      {
        value: "Lb variable stars",
        label: "TZ Cassiopeia stars (Lb variable stars)",
        uri: "http://astrothesaurus.org/uat/912",
      },
      {
        value: "Low-luminosity active galactic nuclei",
        label: "Low-luminosity active galactic nuclei",
        uri: "http://astrothesaurus.org/uat/2033",
      },
      {
        value: "Low-luminosity active galactic nuclei",
        label: "Low-luminosity AGN (Low-luminosity active galactic nuclei)",
        uri: "http://astrothesaurus.org/uat/2033",
      },
      {
        value: "Subdwarf stars",
        label: "Subdwarf stars",
        uri: "http://astrothesaurus.org/uat/2054",
      },
      {
        value: "High energy astrophysics",
        label: "High energy astrophysics",
        uri: "http://astrothesaurus.org/uat/739",
      },
      {
        value: "High energy astrophysics",
        label: "High energy process (High energy astrophysics)",
        uri: "http://astrothesaurus.org/uat/739",
      },
      {
        value: "High energy astrophysics",
        label: "High-energy process (High energy astrophysics)",
        uri: "http://astrothesaurus.org/uat/739",
      },
      {
        value: "High energy astrophysics",
        label: "High energy astronomy (High energy astrophysics)",
        uri: "http://astrothesaurus.org/uat/739",
      },
      {
        value: "High energy astrophysics",
        label: "High-energy astrophysics (High energy astrophysics)",
        uri: "http://astrothesaurus.org/uat/739",
      },
      {
        value: "High energy astrophysics",
        label: "High-energy astronomy (High energy astrophysics)",
        uri: "http://astrothesaurus.org/uat/739",
      },
      {
        value: "Center of mass",
        label: "Center of mass",
        uri: "http://astrothesaurus.org/uat/216",
      },
      {
        value: "Center of mass",
        label: "Centre of mass (Center of mass)",
        uri: "http://astrothesaurus.org/uat/216",
      },
      {
        value: "Center of mass",
        label: "Center of gravity (Center of mass)",
        uri: "http://astrothesaurus.org/uat/216",
      },
      {
        value: "Radio jets",
        label: "Radio jets",
        uri: "http://astrothesaurus.org/uat/1347",
      },
      {
        value: "Solar eclipses",
        label: "Solar eclipses",
        uri: "http://astrothesaurus.org/uat/1489",
      },
      {
        value: "Strontium stars",
        label: "Strontium stars",
        uri: "http://astrothesaurus.org/uat/1644",
      },
      {
        value: "Early universe",
        label: "Early universe",
        uri: "http://astrothesaurus.org/uat/435",
      },
      {
        value: "Osculatory elements",
        label: "Osculatory elements",
        uri: "http://astrothesaurus.org/uat/1190",
      },
      {
        value: "Stellar coronal loops",
        label: "Stellar coronal loops",
        uri: "http://astrothesaurus.org/uat/309",
      },
      {
        value: "Exoplanet surface variability",
        label: "Exoplanet surface variability",
        uri: "http://astrothesaurus.org/uat/2023",
      },
      {
        value: "Relativistic mechanics",
        label: "Relativistic mechanics",
        uri: "http://astrothesaurus.org/uat/1391",
      },
      {
        value: "Kron-Cousins photometry",
        label: "Kron-Cousins photometry",
        uri: "http://astrothesaurus.org/uat/891",
      },
      {
        value: "Kron-Cousins photometry",
        label: "Kron-Cousins RI photometry (Kron-Cousins photometry)",
        uri: "http://astrothesaurus.org/uat/891",
      },
      {
        value: "Kron-Cousins photometry",
        label: "Kron cousins photometry (Kron-Cousins photometry)",
        uri: "http://astrothesaurus.org/uat/891",
      },
      {
        value: "Broad-absorption line quasar",
        label: "Broad-absorption line quasar",
        uri: "http://astrothesaurus.org/uat/183",
      },
      {
        value: "Broad-absorption line quasar",
        label: "BALQSO (Broad-absorption line quasar)",
        uri: "http://astrothesaurus.org/uat/183",
      },
      {
        value: "Semi-detached binary stars",
        label: "Semi-detached binary stars",
        uri: "http://astrothesaurus.org/uat/1443",
      },
      {
        value: "Semi-detached binary stars",
        label: "Semidetached binary stars (Semi-detached binary stars)",
        uri: "http://astrothesaurus.org/uat/1443",
      },
      {
        value: "Space observatories",
        label: "Space observatories",
        uri: "http://astrothesaurus.org/uat/1543",
      },
      {
        value: "Space observatories",
        label: "Orbiting observatory (Space observatories)",
        uri: "http://astrothesaurus.org/uat/1543",
      },
      {
        value: "Star atlases",
        label: "Star atlases",
        uri: "http://astrothesaurus.org/uat/1566",
      },
      {
        value: "Schonberg-Chandrasekhar limit",
        label: "Schonberg-Chandrasekhar limit",
        uri: "http://astrothesaurus.org/uat/2045",
      },
      {
        value: "Schonberg-Chandrasekhar limit",
        label: "Schoenberg-Chandrasekhar limit (Schonberg-Chandrasekhar limit)",
        uri: "http://astrothesaurus.org/uat/2045",
      },
      {
        value: "Schonberg-Chandrasekhar limit",
        label: "Chandrasekhar-Schonberg limit (Schonberg-Chandrasekhar limit)",
        uri: "http://astrothesaurus.org/uat/2045",
      },
      {
        value: "Schonberg-Chandrasekhar limit",
        label: "SchÃ¶nberg-Chandrasekhar limit (Schonberg-Chandrasekhar limit)",
        uri: "http://astrothesaurus.org/uat/2045",
      },
      {
        value: "Supergalactic longitude",
        label: "Supergalactic longitude",
        uri: "http://astrothesaurus.org/uat/1660",
      },
      {
        value: "Solar granulation",
        label: "Solar granulation",
        uri: "http://astrothesaurus.org/uat/1498",
      },
      {
        value: "Lunar impacts",
        label: "Lunar impacts",
        uri: "http://astrothesaurus.org/uat/958",
      },
      {
        value: "Lunar impacts",
        label: "Lunar cratering (Lunar impacts)",
        uri: "http://astrothesaurus.org/uat/958",
      },
      {
        value: "Early-type supergiant stars",
        label: "Early-type supergiant stars",
        uri: "http://astrothesaurus.org/uat/431",
      },
      {
        value: "Early-type supergiant stars",
        label: "Early type supergiant stars (Early-type supergiant stars)",
        uri: "http://astrothesaurus.org/uat/431",
      },
      {
        value: "Early-type supergiant stars",
        label: "Early-type supergiants (Early-type supergiant stars)",
        uri: "http://astrothesaurus.org/uat/431",
      },
      {
        value: "Periapsis",
        label: "Periapsis",
        uri: "http://astrothesaurus.org/uat/1207",
      },
      {
        value: "Periapsis",
        label: "Pericenter (Periapsis)",
        uri: "http://astrothesaurus.org/uat/1207",
      },
      {
        value: "Asteroid rotation",
        label: "Asteroid rotation",
        uri: "http://astrothesaurus.org/uat/2211",
      },
      {
        value: "Corotating streams",
        label: "Corotating streams",
        uri: "http://astrothesaurus.org/uat/314",
      },
      {
        value: "Corotating streams",
        label: "Interplanetary corotating streams (Corotating streams)",
        uri: "http://astrothesaurus.org/uat/314",
      },
      {
        value: "Corotating streams",
        label: "Interplanetary co-rotating streams (Corotating streams)",
        uri: "http://astrothesaurus.org/uat/314",
      },
      {
        value: "Chemical abundances",
        label: "Chemical abundances",
        uri: "http://astrothesaurus.org/uat/224",
      },
      {
        value: "Chemical abundances",
        label: "Element abundance (Chemical abundances)",
        uri: "http://astrothesaurus.org/uat/224",
      },
      {
        value: "Chemical abundances",
        label: "Elemental composition (Chemical abundances)",
        uri: "http://astrothesaurus.org/uat/224",
      },
      {
        value: "Chemical abundances",
        label: "Elemental abundances (Chemical abundances)",
        uri: "http://astrothesaurus.org/uat/224",
      },
      {
        value: "Chemical abundances",
        label: "Chemical abundance (Chemical abundances)",
        uri: "http://astrothesaurus.org/uat/224",
      },
      {
        value: "Chemical abundances",
        label: "Chemical composition (Chemical abundances)",
        uri: "http://astrothesaurus.org/uat/224",
      },
      {
        value: "Meridian",
        label: "Meridian",
        uri: "http://astrothesaurus.org/uat/1026",
      },
      {
        value: "Solar magnetic fields",
        label: "Solar magnetic fields",
        uri: "http://astrothesaurus.org/uat/1503",
      },
      {
        value: "Extrasolar ice giants",
        label: "Extrasolar ice giants",
        uri: "http://astrothesaurus.org/uat/2024",
      },
      {
        value: "Stellar kinematics",
        label: "Stellar kinematics",
        uri: "http://astrothesaurus.org/uat/1608",
      },
      {
        value: "Perseus Cluster",
        label: "Perseus Cluster",
        uri: "http://astrothesaurus.org/uat/1214",
      },
      {
        value: "Lunar transient phenomena",
        label: "Lunar transient phenomena",
        uri: "http://astrothesaurus.org/uat/976",
      },
      {
        value: "Lunar transient phenomena",
        label: "TLP (Lunar transient phenomena)",
        uri: "http://astrothesaurus.org/uat/976",
      },
      {
        value: "Lunar transient phenomena",
        label: "Transient lunar phenomenon (Lunar transient phenomena)",
        uri: "http://astrothesaurus.org/uat/976",
      },
      {
        value: "Astrodynamics",
        label: "Astrodynamics",
        uri: "http://astrothesaurus.org/uat/76",
      },
      {
        value: "Astrodynamics",
        label: "Orbital mechanics (Astrodynamics)",
        uri: "http://astrothesaurus.org/uat/76",
      },
      {
        value: "Sungrazers",
        label: "Sungrazers",
        uri: "http://astrothesaurus.org/uat/2197",
      },
      {
        value: "Solar coronal holes",
        label: "Solar coronal holes",
        uri: "http://astrothesaurus.org/uat/1484",
      },
      {
        value: "Solar coronal holes",
        label: "M regions (Solar coronal holes)",
        uri: "http://astrothesaurus.org/uat/1484",
      },
      {
        value: "Solar coronal holes",
        label: "M region (Solar coronal holes)",
        uri: "http://astrothesaurus.org/uat/1484",
      },
      {
        value: "Solar coronal holes",
        label: "Solar M coronal region (Solar coronal holes)",
        uri: "http://astrothesaurus.org/uat/1484",
      },
      {
        value: "Conical singularities",
        label: "Conical singularities",
        uri: "http://astrothesaurus.org/uat/294",
      },
      {
        value: "Rich galaxy clusters",
        label: "Rich galaxy clusters",
        uri: "http://astrothesaurus.org/uat/2005",
      },
      {
        value: "Rich galaxy clusters",
        label: "Rich clusters (Rich galaxy clusters)",
        uri: "http://astrothesaurus.org/uat/2005",
      },
      {
        value: "Main belt asteroids",
        label: "Main belt asteroids",
        uri: "http://astrothesaurus.org/uat/2036",
      },
      {
        value: "Navarro-Frenk-White profile",
        label: "Navarro-Frenk-White profile",
        uri: "http://astrothesaurus.org/uat/1091",
      },
      {
        value: "Navarro-Frenk-White profile",
        label: "NFW (Navarro-Frenk-White profile)",
        uri: "http://astrothesaurus.org/uat/1091",
      },
      {
        value: "Navarro-Frenk-White profile",
        label: "NFW-profile (Navarro-Frenk-White profile)",
        uri: "http://astrothesaurus.org/uat/1091",
      },
      {
        value: "Navarro-Frenk-White profile",
        label: "NFW profile (Navarro-Frenk-White profile)",
        uri: "http://astrothesaurus.org/uat/1091",
      },
      {
        value: "Visible sources",
        label: "Visible sources",
        uri: "http://astrothesaurus.org/uat/2108",
      },
      {
        value: "Visible sources",
        label: "Visible radiation sources (Visible sources)",
        uri: "http://astrothesaurus.org/uat/2108",
      },
      {
        value: "Visible sources",
        label: "Optical sources (Visible sources)",
        uri: "http://astrothesaurus.org/uat/2108",
      },
      {
        value: "Relaxation time",
        label: "Relaxation time",
        uri: "http://astrothesaurus.org/uat/1394",
      },
      {
        value: "Relaxation time",
        label: "Relaxation (physics) (Relaxation time)",
        uri: "http://astrothesaurus.org/uat/1394",
      },
      {
        value: "Radar astronomy",
        label: "Radar astronomy",
        uri: "http://astrothesaurus.org/uat/1329",
      },
      {
        value: "Astronomical optics",
        label: "Astronomical optics",
        uri: "http://astrothesaurus.org/uat/88",
      },
      {
        value: "Solar chromosphere",
        label: "Solar chromosphere",
        uri: "http://astrothesaurus.org/uat/1479",
      },
      {
        value: "Alternatives to cosmic inflation",
        label: "Alternatives to cosmic inflation",
        uri: "http://astrothesaurus.org/uat/29",
      },
      {
        value: "Alternatives to cosmic inflation",
        label: "Alternatives to inflation (Alternatives to cosmic inflation)",
        uri: "http://astrothesaurus.org/uat/29",
      },
      {
        value: "UX Ursae Majoris stars",
        label: "UX Ursae Majoris stars",
        uri: "http://astrothesaurus.org/uat/1757",
      },
      { value: "Apex", label: "Apex", uri: "http://astrothesaurus.org/uat/54" },
      {
        value: "Apex",
        label: "Solar apex (Apex)",
        uri: "http://astrothesaurus.org/uat/54",
      },
      {
        value: "Radio astrometry",
        label: "Radio astrometry",
        uri: "http://astrothesaurus.org/uat/1337",
      },
      {
        value: "All-sky cameras",
        label: "All-sky cameras",
        uri: "http://astrothesaurus.org/uat/25",
      },
      {
        value: "All-sky cameras",
        label: "All sky camera (All-sky cameras)",
        uri: "http://astrothesaurus.org/uat/25",
      },
      {
        value: "CMBR detectors",
        label: "CMBR detectors",
        uri: "http://astrothesaurus.org/uat/259",
      },
      {
        value: "CMBR detectors",
        label: "Cosmic microwave background radiation detectors (CMBR detectors)",
        uri: "http://astrothesaurus.org/uat/259",
      },
      {
        value: "Late-type supergiant stars",
        label: "Late-type supergiant stars",
        uri: "http://astrothesaurus.org/uat/910",
      },
      {
        value: "Late-type supergiant stars",
        label: "Late-type supergiants (Late-type supergiant stars)",
        uri: "http://astrothesaurus.org/uat/910",
      },
      {
        value: "Late-type supergiant stars",
        label: "Cool supergiant stars (Late-type supergiant stars)",
        uri: "http://astrothesaurus.org/uat/910",
      },
      {
        value: "Astronomical detectors",
        label: "Astronomical detectors",
        uri: "http://astrothesaurus.org/uat/84",
      },
      {
        value: "Filamentary nebulae",
        label: "Filamentary nebulae",
        uri: "http://astrothesaurus.org/uat/535",
      },
      {
        value: "Filamentary nebulae",
        label: "Filamentary nebula (Filamentary nebulae)",
        uri: "http://astrothesaurus.org/uat/535",
      },
      {
        value: "Solar filament eruptions",
        label: "Solar filament eruptions",
        uri: "http://astrothesaurus.org/uat/1981",
      },
      {
        value: "Radio source catalogs",
        label: "Radio source catalogs",
        uri: "http://astrothesaurus.org/uat/1356",
      },
      {
        value: "Radio source catalogs",
        label: "Cambridge Catalogue of Radio Sources (Radio source catalogs)",
        uri: "http://astrothesaurus.org/uat/1356",
      },
      {
        value: "Radio source catalogs",
        label: "MICA ICRF Radio Source Catalog (Radio source catalogs)",
        uri: "http://astrothesaurus.org/uat/1356",
      },
      {
        value: "Radio source catalogs",
        label: "Radio source catalogues (Radio source catalogs)",
        uri: "http://astrothesaurus.org/uat/1356",
      },
      {
        value: "Radio source catalogs",
        label: "RADIO Master Catalog (Radio source catalogs)",
        uri: "http://astrothesaurus.org/uat/1356",
      },
      {
        value: "Ring singularities",
        label: "Ring singularities",
        uri: "http://astrothesaurus.org/uat/1402",
      },
      {
        value: "Planetary boundary layers",
        label: "Planetary boundary layers",
        uri: "http://astrothesaurus.org/uat/1245",
      },
      {
        value: "Telescope mounts",
        label: "Telescope mounts",
        uri: "http://astrothesaurus.org/uat/1688",
      },
      {
        value: "Telescope mounts",
        label: "Telescope mountings (Telescope mounts)",
        uri: "http://astrothesaurus.org/uat/1688",
      },
      {
        value: "Stellar coronal plumes",
        label: "Stellar coronal plumes",
        uri: "http://astrothesaurus.org/uat/311",
      },
      {
        value: "H II regions",
        label: "H II regions",
        uri: "http://astrothesaurus.org/uat/694",
      },
      {
        value: "H II regions",
        label: "H I I regions (H II regions)",
        uri: "http://astrothesaurus.org/uat/694",
      },
      {
        value: "H II regions",
        label: "HII regions (H II regions)",
        uri: "http://astrothesaurus.org/uat/694",
      },
      {
        value: "H II regions",
        label: "H II clouds (H II regions)",
        uri: "http://astrothesaurus.org/uat/694",
      },
      {
        value: "H II regions",
        label: "H I I clouds (H II regions)",
        uri: "http://astrothesaurus.org/uat/694",
      },
      {
        value: "H II regions",
        label: "HII clouds (H II regions)",
        uri: "http://astrothesaurus.org/uat/694",
      },
      {
        value: "Oxygen burning",
        label: "Oxygen burning",
        uri: "http://astrothesaurus.org/uat/1193",
      },
      {
        value: "Circumstellar gas",
        label: "Circumstellar gas",
        uri: "http://astrothesaurus.org/uat/238",
      },
      {
        value: "Lunar geochronology",
        label: "Lunar geochronology",
        uri: "http://astrothesaurus.org/uat/954",
      },
      {
        value: "Parallel field",
        label: "Parallel field",
        uri: "http://astrothesaurus.org/uat/1198",
      },
      {
        value: "Rotation powered pulsars",
        label: "Rotation powered pulsars",
        uri: "http://astrothesaurus.org/uat/1408",
      },
      {
        value: "Rotation powered pulsars",
        label: "Rotation-powered pulsars (Rotation powered pulsars)",
        uri: "http://astrothesaurus.org/uat/1408",
      },
      {
        value: "Astrostatistics strategies",
        label: "Astrostatistics strategies",
        uri: "http://astrothesaurus.org/uat/1885",
      },
      {
        value: "Nebulae",
        label: "Nebulae",
        uri: "http://astrothesaurus.org/uat/1095",
      },
      {
        value: "Nebulae",
        label: "Nebula (Nebulae)",
        uri: "http://astrothesaurus.org/uat/1095",
      },
      {
        value: "Astrophysical masers",
        label: "Astrophysical masers",
        uri: "http://astrothesaurus.org/uat/103",
      },
      {
        value: "Astrophysical masers",
        label: "Superradiant emission (Astrophysical masers)",
        uri: "http://astrothesaurus.org/uat/103",
      },
      {
        value: "Astrophysical masers",
        label: "Super-radiant emission (Astrophysical masers)",
        uri: "http://astrothesaurus.org/uat/103",
      },
      {
        value: "Orbital theory",
        label: "Orbital theory",
        uri: "http://astrothesaurus.org/uat/1182",
      },
      {
        value: "Solar spicules",
        label: "Solar spicules",
        uri: "http://astrothesaurus.org/uat/1525",
      },
      {
        value: "B stars",
        label: "B stars",
        uri: "http://astrothesaurus.org/uat/128",
      },
      {
        value: "B stars",
        label: "B type stars (B stars)",
        uri: "http://astrothesaurus.org/uat/128",
      },
      {
        value: "B stars",
        label: "B-type stars (B stars)",
        uri: "http://astrothesaurus.org/uat/128",
      },
      {
        value: "B stars",
        label: "Class B stars (B stars)",
        uri: "http://astrothesaurus.org/uat/128",
      },
      {
        value: "B stars",
        label: "Type-B stars (B stars)",
        uri: "http://astrothesaurus.org/uat/128",
      },
      {
        value: "Roche limit",
        label: "Roche limit",
        uri: "http://astrothesaurus.org/uat/1404",
      },
      {
        value: "Roche limit",
        label: "Roche radius (Roche limit)",
        uri: "http://astrothesaurus.org/uat/1404",
      },
      {
        value: "Spiral pitch angle",
        label: "Spiral pitch angle",
        uri: "http://astrothesaurus.org/uat/1561",
      },
      {
        value: "Spiral pitch angle",
        label: "Galactic pitch angle (Spiral pitch angle)",
        uri: "http://astrothesaurus.org/uat/1561",
      },
      {
        value: "Ethnoastronomy",
        label: "Ethnoastronomy",
        uri: "http://astrothesaurus.org/uat/477",
      },
      {
        value: "Remote sensing",
        label: "Remote sensing",
        uri: "http://astrothesaurus.org/uat/2191",
      },
      {
        value: "Trojan asteroids",
        label: "Trojan asteroids",
        uri: "http://astrothesaurus.org/uat/1715",
      },
      {
        value: "Trojan asteroids",
        label: "Trojans (Trojan asteroids)",
        uri: "http://astrothesaurus.org/uat/1715",
      },
      {
        value: "Trojan asteroids",
        label: "Trojan group (Trojan asteroids)",
        uri: "http://astrothesaurus.org/uat/1715",
      },
      {
        value: "Helioseismic pulsations",
        label: "Helioseismic pulsations",
        uri: "http://astrothesaurus.org/uat/708",
      },
      {
        value: "Interplanetary scintillation",
        label: "Interplanetary scintillation",
        uri: "http://astrothesaurus.org/uat/828",
      },
      {
        value: "Radiative magnetohydrodynamics",
        label: "Radiative magnetohydrodynamics",
        uri: "http://astrothesaurus.org/uat/2009",
      },
      {
        value: "Radiative magnetohydrodynamics",
        label: "Radiative MHD (Radiative magnetohydrodynamics)",
        uri: "http://astrothesaurus.org/uat/2009",
      },
      {
        value: "Period search ",
        label: "Period search ",
        uri: "http://astrothesaurus.org/uat/1955",
      },
      {
        value: "Limb brightening",
        label: "Limb brightening",
        uri: "http://astrothesaurus.org/uat/921",
      },
      {
        value: "M giant stars",
        label: "M giant stars",
        uri: "http://astrothesaurus.org/uat/983",
      },
      {
        value: "M giant stars",
        label: "M giants (M giant stars)",
        uri: "http://astrothesaurus.org/uat/983",
      },
      {
        value: "M giant stars",
        label: "M-type giants (M giant stars)",
        uri: "http://astrothesaurus.org/uat/983",
      },
      {
        value: "M giant stars",
        label: "M-type giant stars (M giant stars)",
        uri: "http://astrothesaurus.org/uat/983",
      },
      {
        value: "L galaxies",
        label: "L galaxies",
        uri: "http://astrothesaurus.org/uat/895",
      },
      {
        value: "L galaxies",
        label: "L-galaxies (L galaxies)",
        uri: "http://astrothesaurus.org/uat/895",
      },
      {
        value: "Zenith hourly rate",
        label: "Zenith hourly rate",
        uri: "http://astrothesaurus.org/uat/1839",
      },
      {
        value: "Zenith hourly rate",
        label: "Zenith hour rate (Zenith hourly rate)",
        uri: "http://astrothesaurus.org/uat/1839",
      },
      {
        value: "Zenith hourly rate",
        label: "ZHR (Zenith hourly rate)",
        uri: "http://astrothesaurus.org/uat/1839",
      },
      {
        value: "Exozodiacal dust",
        label: "Exozodiacal dust",
        uri: "http://astrothesaurus.org/uat/500",
      },
      {
        value: "Exozodiacal dust",
        label: "Exo-zodiacal dust (Exozodiacal dust)",
        uri: "http://astrothesaurus.org/uat/500",
      },
      {
        value: "cD galaxies",
        label: "cD galaxies",
        uri: "http://astrothesaurus.org/uat/209",
      },
      {
        value: "cD galaxies",
        label: "Type-cD galaxies (cD galaxies)",
        uri: "http://astrothesaurus.org/uat/209",
      },
      {
        value: "cD galaxies",
        label: "cD-type galaxies (cD galaxies)",
        uri: "http://astrothesaurus.org/uat/209",
      },
      {
        value: "Neutrino decoupling",
        label: "Neutrino decoupling",
        uri: "http://astrothesaurus.org/uat/1101",
      },
      {
        value: "Pulsation frequency method",
        label: "Pulsation frequency method",
        uri: "http://astrothesaurus.org/uat/1308",
      },
      {
        value: "Runaway stars",
        label: "Runaway stars",
        uri: "http://astrothesaurus.org/uat/1417",
      },
      {
        value: "Delta Cepheid variable stars",
        label: "Delta Cepheid variable stars",
        uri: "http://astrothesaurus.org/uat/368",
      },
      {
        value: "Delta Cepheid variable stars",
        label: "Delta Cephei stars (Delta Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/368",
      },
      {
        value: "Delta Cepheid variable stars",
        label: "Delta Cepheids (Delta Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/368",
      },
      {
        value: "Delta Cepheid variable stars",
        label: "Delta Cephei variables (Delta Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/368",
      },
      {
        value: "Delta Cepheid variable stars",
        label: "Type I Cepheids (Delta Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/368",
      },
      {
        value: "Delta Cepheid variable stars",
        label: "Population I Cepheids (Delta Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/368",
      },
      {
        value: "Exoplanet migration",
        label: "Exoplanet migration",
        uri: "http://astrothesaurus.org/uat/2205",
      },
      {
        value: "Warm neutral medium",
        label: "Warm neutral medium",
        uri: "http://astrothesaurus.org/uat/1789",
      },
      {
        value: "Warm neutral medium",
        label: "WNM (Warm neutral medium)",
        uri: "http://astrothesaurus.org/uat/1789",
      },
      {
        value: "Hawking radiation",
        label: "Hawking radiation",
        uri: "http://astrothesaurus.org/uat/703",
      },
      {
        value: "Hawking radiation",
        label: "Black hole evaporation (Hawking radiation)",
        uri: "http://astrothesaurus.org/uat/703",
      },
      {
        value: "Space probes",
        label: "Space probes",
        uri: "http://astrothesaurus.org/uat/1545",
      },
      {
        value: "Space probes",
        label: "Probe (Space probes)",
        uri: "http://astrothesaurus.org/uat/1545",
      },
      {
        value: "Millimeter astronomy",
        label: "Millimeter astronomy",
        uri: "http://astrothesaurus.org/uat/1061",
      },
      {
        value: "53 Persei stars",
        label: "53 Persei stars",
        uri: "http://astrothesaurus.org/uat/2",
      },
      {
        value: "Diffuse nebulae",
        label: "Diffuse nebulae",
        uri: "http://astrothesaurus.org/uat/382",
      },
      {
        value: "Diffuse nebulae",
        label: "Diffuse nebula (Diffuse nebulae)",
        uri: "http://astrothesaurus.org/uat/382",
      },
      {
        value: "Galaxy abundances",
        label: "Galaxy abundances",
        uri: "http://astrothesaurus.org/uat/574",
      },
      {
        value: "Galaxy abundances",
        label: "Galaxy chemical composition (Galaxy abundances)",
        uri: "http://astrothesaurus.org/uat/574",
      },
      {
        value: "Interferometry",
        label: "Interferometry",
        uri: "http://astrothesaurus.org/uat/808",
      },
      {
        value: "High-velocity clouds",
        label: "High-velocity clouds",
        uri: "http://astrothesaurus.org/uat/735",
      },
      {
        value: "High-velocity clouds",
        label: "High velocity clouds (High-velocity clouds)",
        uri: "http://astrothesaurus.org/uat/735",
      },
      {
        value: "High-velocity clouds",
        label: "HVC (High-velocity clouds)",
        uri: "http://astrothesaurus.org/uat/735",
      },
      {
        value: "Nonrotating black holes",
        label: "Nonrotating black holes",
        uri: "http://astrothesaurus.org/uat/1121",
      },
      {
        value: "Nonrotating black holes",
        label: "Non-rotating black holes (Nonrotating black holes)",
        uri: "http://astrothesaurus.org/uat/1121",
      },
      {
        value: "Nucleated dwarf galaxies",
        label: "Nucleated dwarf galaxies",
        uri: "http://astrothesaurus.org/uat/1130",
      },
      {
        value: "WN stars",
        label: "WN stars",
        uri: "http://astrothesaurus.org/uat/1805",
      },
      {
        value: "WN stars",
        label: "WN-type stars (WN stars)",
        uri: "http://astrothesaurus.org/uat/1805",
      },
      {
        value: "Eccentricity",
        label: "Eccentricity",
        uri: "http://astrothesaurus.org/uat/441",
      },
      {
        value: "Atmospheric scintillation",
        label: "Atmospheric scintillation",
        uri: "http://astrothesaurus.org/uat/117",
      },
      {
        value: "Atmospheric scintillation",
        label: "Terrestrial scintillation (Atmospheric scintillation)",
        uri: "http://astrothesaurus.org/uat/117",
      },
      {
        value: "Blazars",
        label: "Blazars",
        uri: "http://astrothesaurus.org/uat/164",
      },
      {
        value: "Globular star clusters",
        label: "Globular star clusters",
        uri: "http://astrothesaurus.org/uat/656",
      },
      {
        value: "Globular star clusters",
        label: "Globular clusters (Globular star clusters)",
        uri: "http://astrothesaurus.org/uat/656",
      },
      {
        value: "Gamma Doradus variable stars",
        label: "Gamma Doradus variable stars",
        uri: "http://astrothesaurus.org/uat/2101",
      },
      {
        value: "Gamma Doradus variable stars",
        label: "Î³ Doradus (Gamma Doradus variable stars)",
        uri: "http://astrothesaurus.org/uat/2101",
      },
      {
        value: "Gamma Doradus variable stars",
        label: "Î³ Dor (Gamma Doradus variable stars)",
        uri: "http://astrothesaurus.org/uat/2101",
      },
      {
        value: "Gamma Doradus variable stars",
        label: "Gamma Dor (Gamma Doradus variable stars)",
        uri: "http://astrothesaurus.org/uat/2101",
      },
      {
        value: "Sky brightness",
        label: "Sky brightness",
        uri: "http://astrothesaurus.org/uat/1462",
      },
      {
        value: "Pogson scale",
        label: "Pogson scale",
        uri: "http://astrothesaurus.org/uat/1269",
      },
      {
        value: "Pogson scale",
        label: "Pogson's scale (Pogson scale)",
        uri: "http://astrothesaurus.org/uat/1269",
      },
      {
        value: "Interstellar dust extinction",
        label: "Interstellar dust extinction",
        uri: "http://astrothesaurus.org/uat/837",
      },
      {
        value: "Interstellar dust extinction",
        label: "Interstellar extinction (Interstellar dust extinction)",
        uri: "http://astrothesaurus.org/uat/837",
      },
      {
        value: "Interstellar medium",
        label: "Interstellar medium",
        uri: "http://astrothesaurus.org/uat/847",
      },
      {
        value: "Interstellar medium",
        label: "ISM (Interstellar medium)",
        uri: "http://astrothesaurus.org/uat/847",
      },
      {
        value: "Interstellar medium",
        label: "Interstellar material (Interstellar medium)",
        uri: "http://astrothesaurus.org/uat/847",
      },
      {
        value: "Interstellar medium",
        label: "Interstellar matter (Interstellar medium)",
        uri: "http://astrothesaurus.org/uat/847",
      },
      {
        value: "Interstellar medium",
        label: "Interstellar media (Interstellar medium)",
        uri: "http://astrothesaurus.org/uat/847",
      },
      {
        value: "Cosmic ray sources",
        label: "Cosmic ray sources",
        uri: "http://astrothesaurus.org/uat/328",
      },
      {
        value: "Cosmic ray sources",
        label: "Cosmic ray objects (Cosmic ray sources)",
        uri: "http://astrothesaurus.org/uat/328",
      },
      {
        value: "N-body simulations",
        label: "N-body simulations",
        uri: "http://astrothesaurus.org/uat/1083",
      },
      {
        value: "Late-type dwarf stars",
        label: "Late-type dwarf stars",
        uri: "http://astrothesaurus.org/uat/906",
      },
      {
        value: "Late-type dwarf stars",
        label: "Late-type dwarfs (Late-type dwarf stars)",
        uri: "http://astrothesaurus.org/uat/906",
      },
      {
        value: "Late-type dwarf stars",
        label: "Cool dwarf stars (Late-type dwarf stars)",
        uri: "http://astrothesaurus.org/uat/906",
      },
      {
        value: "Planet formation",
        label: "Planet formation",
        uri: "http://astrothesaurus.org/uat/1241",
      },
      {
        value: "Primordial black holes",
        label: "Primordial black holes",
        uri: "http://astrothesaurus.org/uat/1292",
      },
      {
        value: "Primordial black holes",
        label: "Mini black hole (Primordial black holes)",
        uri: "http://astrothesaurus.org/uat/1292",
      },
      {
        value: "RGB photometry",
        label: "RGB photometry",
        uri: "http://astrothesaurus.org/uat/1397",
      },
      {
        value: "RGB photometry",
        label: "Red-green-blue photometry (RGB photometry)",
        uri: "http://astrothesaurus.org/uat/1397",
      },
      {
        value: "Ground telescopes",
        label: "Ground telescopes",
        uri: "http://astrothesaurus.org/uat/687",
      },
      {
        value: "Ground telescopes",
        label: "Ground-based telescopes (Ground telescopes)",
        uri: "http://astrothesaurus.org/uat/687",
      },
      {
        value: "Ground telescopes",
        label: "Ground based telescopes (Ground telescopes)",
        uri: "http://astrothesaurus.org/uat/687",
      },
      {
        value: "Gamma-ray sources",
        label: "Gamma-ray sources",
        uri: "http://astrothesaurus.org/uat/633",
      },
      {
        value: "Gamma-ray sources",
        label: "Gamma objects (Gamma-ray sources)",
        uri: "http://astrothesaurus.org/uat/633",
      },
      {
        value: "Gamma-ray sources",
        label: "Gamma sources (Gamma-ray sources)",
        uri: "http://astrothesaurus.org/uat/633",
      },
      {
        value: "Gamma-ray sources",
        label: "Gamma ray sources (Gamma-ray sources)",
        uri: "http://astrothesaurus.org/uat/633",
      },
      {
        value: "Gamma-ray sources",
        label: "Gamma-ray objects (Gamma-ray sources)",
        uri: "http://astrothesaurus.org/uat/633",
      },
      {
        value: "Gamma-ray sources",
        label: "Gamma-ray radiation sources (Gamma-ray sources)",
        uri: "http://astrothesaurus.org/uat/633",
      },
      {
        value: "Gravitational lensing shear",
        label: "Gravitational lensing shear",
        uri: "http://astrothesaurus.org/uat/671",
      },
      {
        value: "Habitable zone",
        label: "Habitable zone",
        uri: "http://astrothesaurus.org/uat/696",
      },
      {
        value: "Interstellar dynamics",
        label: "Interstellar dynamics",
        uri: "http://astrothesaurus.org/uat/839",
      },
      {
        value: "Ascending node",
        label: "Ascending node",
        uri: "http://astrothesaurus.org/uat/69",
      },
      {
        value: "Ascending node",
        label: "North node (Ascending node)",
        uri: "http://astrothesaurus.org/uat/69",
      },
      {
        value: "Metallicity",
        label: "Metallicity",
        uri: "http://astrothesaurus.org/uat/1031",
      },
      {
        value: "Metallicity",
        label: "Metal abundances (Metallicity)",
        uri: "http://astrothesaurus.org/uat/1031",
      },
      {
        value: "Galaxy disks",
        label: "Galaxy disks",
        uri: "http://astrothesaurus.org/uat/589",
      },
      {
        value: "Nonparametric hypothesis tests",
        label: "Nonparametric hypothesis tests",
        uri: "http://astrothesaurus.org/uat/1902",
      },
      {
        value: "Line intensities",
        label: "Line intensities",
        uri: "http://astrothesaurus.org/uat/2084",
      },
      {
        value: "Line intensities",
        label: "Line lifetimes (Line intensities)",
        uri: "http://astrothesaurus.org/uat/2084",
      },
      {
        value: "Solar granules",
        label: "Solar granules",
        uri: "http://astrothesaurus.org/uat/1875",
      },
      {
        value: "Solar granules",
        label: "Granule (Solar granules)",
        uri: "http://astrothesaurus.org/uat/1875",
      },
      {
        value: "Solar granules",
        label: "Solar granule (Solar granules)",
        uri: "http://astrothesaurus.org/uat/1875",
      },
      {
        value: "Far infrared astronomy",
        label: "Far infrared astronomy",
        uri: "http://astrothesaurus.org/uat/529",
      },
      {
        value: "Far infrared astronomy",
        label: "FIR astronomy (Far infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/529",
      },
      {
        value: "Far infrared astronomy",
        label: "Far infrared astronomical observations (Far infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/529",
      },
      {
        value: "Far infrared astronomy",
        label: "Far-ir astronomy (Far infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/529",
      },
      {
        value: "Far infrared astronomy",
        label: "Far-infrared astronomical observations (Far infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/529",
      },
      {
        value: "Far infrared astronomy",
        label: "Far ir astronomy (Far infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/529",
      },
      {
        value: "Far infrared astronomy",
        label: "Far-ir astronomical observations (Far infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/529",
      },
      {
        value: "Far infrared astronomy",
        label: "Far ir astronomical observations (Far infrared astronomy)",
        uri: "http://astrothesaurus.org/uat/529",
      },
      {
        value: "Galaxy structure",
        label: "Galaxy structure",
        uri: "http://astrothesaurus.org/uat/622",
      },
      {
        value: "Galaxy structure",
        label: "Galactic structure (Galaxy structure)",
        uri: "http://astrothesaurus.org/uat/622",
      },
      {
        value: "Waveband photometry",
        label: "Waveband photometry",
        uri: "http://astrothesaurus.org/uat/1792",
      },
      {
        value: "Earth-moon system",
        label: "Earth-moon system",
        uri: "http://astrothesaurus.org/uat/436",
      },
      {
        value: "Earth-moon system",
        label: "Earth moon system (Earth-moon system)",
        uri: "http://astrothesaurus.org/uat/436",
      },
      {
        value: "CNO anomaly",
        label: "CNO anomaly",
        uri: "http://astrothesaurus.org/uat/261",
      },
      {
        value: "Roche lobe",
        label: "Roche lobe",
        uri: "http://astrothesaurus.org/uat/1405",
      },
      {
        value: "X-ray telescopes",
        label: "X-ray telescopes",
        uri: "http://astrothesaurus.org/uat/1825",
      },
      {
        value: "De Vaucouleurs Sandage classification",
        label: "De Vaucouleurs Sandage classification",
        uri: "http://astrothesaurus.org/uat/362",
      },
      {
        value: "De Vaucouleurs Sandage classification",
        label:
          "De Vaucouleurs-Sandage classification (De Vaucouleurs Sandage classification)",
        uri: "http://astrothesaurus.org/uat/362",
      },
      {
        value: "De Vaucouleurs Sandage classification",
        label: "De Vaucouleurs system (De Vaucouleurs Sandage classification)",
        uri: "http://astrothesaurus.org/uat/362",
      },
      {
        value: "Gravitational fields",
        label: "Gravitational fields",
        uri: "http://astrothesaurus.org/uat/667",
      },
      {
        value: "Gravitational fields",
        label: "Gravity field (Gravitational fields)",
        uri: "http://astrothesaurus.org/uat/667",
      },
      {
        value: "Holmium stars",
        label: "Holmium stars",
        uri: "http://astrothesaurus.org/uat/744",
      },
      {
        value: "Lunar composition",
        label: "Lunar composition",
        uri: "http://astrothesaurus.org/uat/948",
      },
      {
        value: "Lunar composition",
        label: "Composition of the moon (Lunar composition)",
        uri: "http://astrothesaurus.org/uat/948",
      },
      {
        value: "Cosmological neutrinos",
        label: "Cosmological neutrinos",
        uri: "http://astrothesaurus.org/uat/338",
      },
      {
        value: "A subgiant stars",
        label: "A subgiant stars",
        uri: "http://astrothesaurus.org/uat/7",
      },
      {
        value: "A subgiant stars",
        label: "A subgiants (A subgiant stars)",
        uri: "http://astrothesaurus.org/uat/7",
      },
      {
        value: "A subgiant stars",
        label: "A-type subgiants (A subgiant stars)",
        uri: "http://astrothesaurus.org/uat/7",
      },
      {
        value: "A subgiant stars",
        label: "A-type subgiant stars (A subgiant stars)",
        uri: "http://astrothesaurus.org/uat/7",
      },
      {
        value: "Type Ib supernovae",
        label: "Type Ib supernovae",
        uri: "http://astrothesaurus.org/uat/1729",
      },
      {
        value: "Time domain astronomy",
        label: "Time domain astronomy",
        uri: "http://astrothesaurus.org/uat/2109",
      },
      {
        value: "Akaike information criterion",
        label: "Akaike information criterion",
        uri: "http://astrothesaurus.org/uat/1940",
      },
      {
        value: "Uncharged black holes",
        label: "Uncharged black holes",
        uri: "http://astrothesaurus.org/uat/1746",
      },
      {
        value: "Luminosity classification",
        label: "Luminosity classification",
        uri: "http://astrothesaurus.org/uat/941",
      },
      {
        value: "Luminosity classification",
        label: "Luminosity class (Luminosity classification)",
        uri: "http://astrothesaurus.org/uat/941",
      },
      {
        value: "Collimation",
        label: "Collimation",
        uri: "http://astrothesaurus.org/uat/268",
      },
      {
        value: "Collimation",
        label: "Collimated light (Collimation)",
        uri: "http://astrothesaurus.org/uat/268",
      },
      {
        value: "Educational software",
        label: "Educational software",
        uri: "http://astrothesaurus.org/uat/1870",
      },
      {
        value: "Stellar photometry",
        label: "Stellar photometry",
        uri: "http://astrothesaurus.org/uat/1620",
      },
      {
        value: "Equation of the center",
        label: "Equation of the center",
        uri: "http://astrothesaurus.org/uat/465",
      },
      {
        value: "Equation of the center",
        label: "Equation of the centre (Equation of the center)",
        uri: "http://astrothesaurus.org/uat/465",
      },
      {
        value: "Solar telescopes",
        label: "Solar telescopes",
        uri: "http://astrothesaurus.org/uat/1531",
      },
      {
        value: "Solar telescopes",
        label: "Tower telescope (Solar telescopes)",
        uri: "http://astrothesaurus.org/uat/1531",
      },
      {
        value: "Quiet sun",
        label: "Quiet sun",
        uri: "http://astrothesaurus.org/uat/1322",
      },
      {
        value: "Astronomers",
        label: "Astronomers",
        uri: "http://astrothesaurus.org/uat/81",
      },
      {
        value: "Electron impact ionization",
        label: "Electron impact ionization",
        uri: "http://astrothesaurus.org/uat/2059",
      },
      {
        value: "Earth's clouds",
        label: "Earth's clouds",
        uri: "http://astrothesaurus.org/uat/258",
      },
      {
        value: "Earth's clouds",
        label: "Clouds (Earth's clouds)",
        uri: "http://astrothesaurus.org/uat/258",
      },
      {
        value: "Large Magellanic Cloud",
        label: "Large Magellanic Cloud",
        uri: "http://astrothesaurus.org/uat/903",
      },
      {
        value: "Large Magellanic Cloud",
        label: "LMC (Large Magellanic Cloud)",
        uri: "http://astrothesaurus.org/uat/903",
      },
      {
        value: "Large Magellanic Cloud",
        label: "L m c (Large Magellanic Cloud)",
        uri: "http://astrothesaurus.org/uat/903",
      },
      {
        value: "Magnetospheric radio emissions",
        label: "Magnetospheric radio emissions",
        uri: "http://astrothesaurus.org/uat/998",
      },
      {
        value: "R associations",
        label: "R associations",
        uri: "http://astrothesaurus.org/uat/1325",
      },
      {
        value: "R associations",
        label: "R-association (R associations)",
        uri: "http://astrothesaurus.org/uat/1325",
      },
      {
        value: "Interstellar scintillation",
        label: "Interstellar scintillation",
        uri: "http://astrothesaurus.org/uat/855",
      },
      {
        value: "Great Attractor",
        label: "Great Attractor",
        uri: "http://astrothesaurus.org/uat/682",
      },
      {
        value: "Magnetars",
        label: "Magnetars",
        uri: "http://astrothesaurus.org/uat/992",
      },
      {
        value: "Silicon stars",
        label: "Silicon stars",
        uri: "http://astrothesaurus.org/uat/1459",
      },
      {
        value: "Multiple star evolution",
        label: "Multiple star evolution",
        uri: "http://astrothesaurus.org/uat/2153",
      },
      {
        value: "Comet Halley",
        label: "Comet Halley",
        uri: "http://astrothesaurus.org/uat/2181",
      },
      {
        value: "Comet Halley",
        label: "Halley's comet (Comet Halley)",
        uri: "http://astrothesaurus.org/uat/2181",
      },
      {
        value: "Comet Halley",
        label: "1P/Halley (Comet Halley)",
        uri: "http://astrothesaurus.org/uat/2181",
      },
      {
        value: "Starspots",
        label: "Starspots",
        uri: "http://astrothesaurus.org/uat/1572",
      },
      {
        value: "Starspots",
        label: "Star spots (Starspots)",
        uri: "http://astrothesaurus.org/uat/1572",
      },
      {
        value: "Molecular clouds",
        label: "Molecular clouds",
        uri: "http://astrothesaurus.org/uat/1072",
      },
      {
        value: "Molecular clouds",
        label: "H2 clouds (Molecular clouds)",
        uri: "http://astrothesaurus.org/uat/1072",
      },
      {
        value: "Cosmic rays",
        label: "Cosmic rays",
        uri: "http://astrothesaurus.org/uat/329",
      },
      {
        value: "Cosmic rays",
        label: "Cosmic radiation (Cosmic rays)",
        uri: "http://astrothesaurus.org/uat/329",
      },
      {
        value: "Cosmic rays",
        label: "Primary cosmic ray (Cosmic rays)",
        uri: "http://astrothesaurus.org/uat/329",
      },
      {
        value: "Galaxy physics",
        label: "Galaxy physics",
        uri: "http://astrothesaurus.org/uat/612",
      },
      {
        value: "Galaxy physics",
        label: "Galactic physics (Galaxy physics)",
        uri: "http://astrothesaurus.org/uat/612",
      },
      {
        value: "Astrophysical black holes",
        label: "Astrophysical black holes",
        uri: "http://astrothesaurus.org/uat/98",
      },
      {
        value: "Mascon",
        label: "Mascon",
        uri: "http://astrothesaurus.org/uat/1010",
      },
      {
        value: "Mascon",
        label: "Mass concentration (Mascon)",
        uri: "http://astrothesaurus.org/uat/1010",
      },
      {
        value: "Accretion",
        label: "Accretion",
        uri: "http://astrothesaurus.org/uat/14",
      },
      {
        value: "Accretion",
        label: "Particle accretion (Accretion)",
        uri: "http://astrothesaurus.org/uat/14",
      },
      {
        value: "Lunar evolution",
        label: "Lunar evolution",
        uri: "http://astrothesaurus.org/uat/952",
      },
      {
        value: "Double-mode variable stars",
        label: "Double-mode variable stars",
        uri: "http://astrothesaurus.org/uat/404",
      },
      {
        value: "Double-mode variable stars",
        label: "Double mode variable stars (Double-mode variable stars)",
        uri: "http://astrothesaurus.org/uat/404",
      },
      {
        value: "Photon sphere",
        label: "Photon sphere",
        uri: "http://astrothesaurus.org/uat/1236",
      },
      {
        value: "Draco dwarf galaxy",
        label: "Draco dwarf galaxy",
        uri: "http://astrothesaurus.org/uat/408",
      },
      {
        value: "Heliopause",
        label: "Heliopause",
        uri: "http://astrothesaurus.org/uat/707",
      },
      {
        value: "Lunar phase",
        label: "Lunar phase",
        uri: "http://astrothesaurus.org/uat/968",
      },
      {
        value: "Lunar phase",
        label: "Phase moon (Lunar phase)",
        uri: "http://astrothesaurus.org/uat/968",
      },
      {
        value: "Atmospheric extinction",
        label: "Atmospheric extinction",
        uri: "http://astrothesaurus.org/uat/114",
      },
      {
        value: "Brane cosmology",
        label: "Brane cosmology",
        uri: "http://astrothesaurus.org/uat/179",
      },
      {
        value: "Interferometric correlation",
        label: "Interferometric correlation",
        uri: "http://astrothesaurus.org/uat/807",
      },
      {
        value: "Lunar node regression",
        label: "Lunar node regression",
        uri: "http://astrothesaurus.org/uat/964",
      },
      {
        value: "DQ stars",
        label: "DQ stars",
        uri: "http://astrothesaurus.org/uat/1849",
      },
      {
        value: "DQ stars",
        label: "DQ white dwarf stars (DQ stars)",
        uri: "http://astrothesaurus.org/uat/1849",
      },
      {
        value: "DQ stars",
        label: "DQ white dwarf (DQ stars)",
        uri: "http://astrothesaurus.org/uat/1849",
      },
      {
        value: "Expectation-Maximization Algorithm",
        label: "Expectation-Maximization Algorithm",
        uri: "http://astrothesaurus.org/uat/1888",
      },
      {
        value: "Astrophysical magnetism",
        label: "Astrophysical magnetism",
        uri: "http://astrothesaurus.org/uat/102",
      },
      {
        value: "SRd variable stars",
        label: "SRd variable stars",
        uri: "http://astrothesaurus.org/uat/2013",
      },
      {
        value: "D layer",
        label: "D layer",
        uri: "http://astrothesaurus.org/uat/347",
      },
      {
        value: "D layer",
        label: "D region (D layer)",
        uri: "http://astrothesaurus.org/uat/347",
      },
      {
        value: "Dark energy",
        label: "Dark energy",
        uri: "http://astrothesaurus.org/uat/351",
      },
      {
        value: "O supergiant stars",
        label: "O supergiant stars",
        uri: "http://astrothesaurus.org/uat/1139",
      },
      {
        value: "O supergiant stars",
        label: "O supergiants (O supergiant stars)",
        uri: "http://astrothesaurus.org/uat/1139",
      },
      {
        value: "O supergiant stars",
        label: "O-type supergiants (O supergiant stars)",
        uri: "http://astrothesaurus.org/uat/1139",
      },
      {
        value: "O supergiant stars",
        label: "O-type supergiant stars (O supergiant stars)",
        uri: "http://astrothesaurus.org/uat/1139",
      },
      {
        value: "Siderostats",
        label: "Siderostats",
        uri: "http://astrothesaurus.org/uat/1454",
      },
      {
        value: "Solar fibrils",
        label: "Solar fibrils",
        uri: "http://astrothesaurus.org/uat/532",
      },
      {
        value: "Solar fibrils",
        label: "Fibrills (Solar fibrils)",
        uri: "http://astrothesaurus.org/uat/532",
      },
      {
        value: "H I regions",
        label: "H I regions",
        uri: "http://astrothesaurus.org/uat/693",
      },
      {
        value: "H I regions",
        label: "HI regions (H I regions)",
        uri: "http://astrothesaurus.org/uat/693",
      },
      {
        value: "Distance indicators",
        label: "Distance indicators",
        uri: "http://astrothesaurus.org/uat/394",
      },
      {
        value: "Photoheliographs",
        label: "Photoheliographs",
        uri: "http://astrothesaurus.org/uat/1230",
      },
      {
        value: "Comet tail streamers",
        label: "Comet tail streamers",
        uri: "http://astrothesaurus.org/uat/273",
      },
      {
        value: "Solar spectral irradiance",
        label: "Solar spectral irradiance",
        uri: "http://astrothesaurus.org/uat/1501",
      },
      {
        value: "Solar spectral irradiance",
        label: "SSI (Solar spectral irradiance)",
        uri: "http://astrothesaurus.org/uat/1501",
      },
      {
        value: "Solar spectral irradiance",
        label: "Solar irradiance (Solar spectral irradiance)",
        uri: "http://astrothesaurus.org/uat/1501",
      },
      {
        value: "Standard stars",
        label: "Standard stars",
        uri: "http://astrothesaurus.org/uat/1564",
      },
      {
        value: "Lithosphere",
        label: "Lithosphere",
        uri: "http://astrothesaurus.org/uat/928",
      },
      {
        value: "Extreme ultraviolet astronomy",
        label: "Extreme ultraviolet astronomy",
        uri: "http://astrothesaurus.org/uat/2170",
      },
      {
        value: "Extreme ultraviolet astronomy",
        label: "EUV (Extreme ultraviolet astronomy)",
        uri: "http://astrothesaurus.org/uat/2170",
      },
      {
        value: "Extreme ultraviolet astronomy",
        label: "EUV astronomy (Extreme ultraviolet astronomy)",
        uri: "http://astrothesaurus.org/uat/2170",
      },
      {
        value: "Protoclusters",
        label: "Protoclusters",
        uri: "http://astrothesaurus.org/uat/1297",
      },
      {
        value: "Spatial point processes",
        label: "Spatial point processes",
        uri: "http://astrothesaurus.org/uat/1915",
      },
      {
        value: "Dust nebulae",
        label: "Dust nebulae",
        uri: "http://astrothesaurus.org/uat/413",
      },
      {
        value: "Dust nebulae",
        label: "Dust nebula (Dust nebulae)",
        uri: "http://astrothesaurus.org/uat/413",
      },
      {
        value: "Planetary bow shocks",
        label: "Planetary bow shocks",
        uri: "http://astrothesaurus.org/uat/1246",
      },
      {
        value: "Nova-like variable stars",
        label: "Nova-like variable stars",
        uri: "http://astrothesaurus.org/uat/1126",
      },
      {
        value: "Nova-like variable stars",
        label: "Nova-like variables (Nova-like variable stars)",
        uri: "http://astrothesaurus.org/uat/1126",
      },
      {
        value: "Solar radiative zone",
        label: "Solar radiative zone",
        uri: "http://astrothesaurus.org/uat/1999",
      },
      {
        value: "Fabry-Perot interferometers",
        label: "Fabry-Perot interferometers",
        uri: "http://astrothesaurus.org/uat/524",
      },
      {
        value: "Fabry-Perot interferometers",
        label: "FPI (Fabry-Perot interferometers)",
        uri: "http://astrothesaurus.org/uat/524",
      },
      {
        value: "Fabry-Perot interferometers",
        label: "Etalons (Fabry-Perot interferometers)",
        uri: "http://astrothesaurus.org/uat/524",
      },
      {
        value: "Free floating planets",
        label: "Free floating planets",
        uri: "http://astrothesaurus.org/uat/549",
      },
      {
        value: "Free floating planets",
        label: "Nomad planets (Free floating planets)",
        uri: "http://astrothesaurus.org/uat/549",
      },
      {
        value: "Free floating planets",
        label: "Orphan planets (Free floating planets)",
        uri: "http://astrothesaurus.org/uat/549",
      },
      {
        value: "Free floating planets",
        label: "Interstellar planets (Free floating planets)",
        uri: "http://astrothesaurus.org/uat/549",
      },
      {
        value: "Free floating planets",
        label: "Rogue planets (Free floating planets)",
        uri: "http://astrothesaurus.org/uat/549",
      },
      {
        value: "Free floating planets",
        label: "Free-floating planets (Free floating planets)",
        uri: "http://astrothesaurus.org/uat/549",
      },
      {
        value: "Stellar rings",
        label: "Stellar rings",
        uri: "http://astrothesaurus.org/uat/1628",
      },
      {
        value: "Opposition",
        label: "Opposition",
        uri: "http://astrothesaurus.org/uat/1163",
      },
      {
        value: "Thermosphere",
        label: "Thermosphere",
        uri: "http://astrothesaurus.org/uat/1694",
      },
      {
        value: "N stars",
        label: "N stars",
        uri: "http://astrothesaurus.org/uat/1085",
      },
      {
        value: "N stars",
        label: "N-type stars (N stars)",
        uri: "http://astrothesaurus.org/uat/1085",
      },
      {
        value: "Earth ionosphere",
        label: "Earth ionosphere",
        uri: "http://astrothesaurus.org/uat/860",
      },
      {
        value: "Earth ionosphere",
        label: "Earth's ionosphere (Earth ionosphere)",
        uri: "http://astrothesaurus.org/uat/860",
      },
      {
        value: "Protogalaxies",
        label: "Protogalaxies",
        uri: "http://astrothesaurus.org/uat/1298",
      },
      {
        value: "Field of view",
        label: "Field of view",
        uri: "http://astrothesaurus.org/uat/534",
      },
      {
        value: "Field of view",
        label: "FOV (Field of view)",
        uri: "http://astrothesaurus.org/uat/534",
      },
      {
        value: "Field of view",
        label: "Fields of vision (Field of view)",
        uri: "http://astrothesaurus.org/uat/534",
      },
      {
        value: "Field of view",
        label: "Field of vision (Field of view)",
        uri: "http://astrothesaurus.org/uat/534",
      },
      {
        value: "Field of view",
        label: "Fields of view (Field of view)",
        uri: "http://astrothesaurus.org/uat/534",
      },
      {
        value: "Galaxy ages",
        label: "Galaxy ages",
        uri: "http://astrothesaurus.org/uat/576",
      },
      {
        value: "Galaxy ages",
        label: "Galactic ages (Galaxy ages)",
        uri: "http://astrothesaurus.org/uat/576",
      },
      {
        value: "Galaxy ages",
        label: "Ages of galaxies (Galaxy ages)",
        uri: "http://astrothesaurus.org/uat/576",
      },
      {
        value: "Galaxy ages",
        label: "Galactic age (Galaxy ages)",
        uri: "http://astrothesaurus.org/uat/576",
      },
      {
        value: "O giant stars",
        label: "O giant stars",
        uri: "http://astrothesaurus.org/uat/1136",
      },
      {
        value: "O giant stars",
        label: "O giants (O giant stars)",
        uri: "http://astrothesaurus.org/uat/1136",
      },
      {
        value: "O giant stars",
        label: "O-type giants (O giant stars)",
        uri: "http://astrothesaurus.org/uat/1136",
      },
      {
        value: "O giant stars",
        label: "O-type giant stars (O giant stars)",
        uri: "http://astrothesaurus.org/uat/1136",
      },
      {
        value: "Bekenstein-Hawking entropy",
        label: "Bekenstein-Hawking entropy",
        uri: "http://astrothesaurus.org/uat/145",
      },
      {
        value: "Zenith telescopes",
        label: "Zenith telescopes",
        uri: "http://astrothesaurus.org/uat/1840",
      },
      {
        value: "Zenith telescopes",
        label: "Zenith sectors (Zenith telescopes)",
        uri: "http://astrothesaurus.org/uat/1840",
      },
      {
        value: "Single x-ray stars",
        label: "Single x-ray stars",
        uri: "http://astrothesaurus.org/uat/1461",
      },
      {
        value: "Virgo Supercluster",
        label: "Virgo Supercluster",
        uri: "http://astrothesaurus.org/uat/1773",
      },
      {
        value: "Virgo Supercluster",
        label: "Local Supercluster (Virgo Supercluster)",
        uri: "http://astrothesaurus.org/uat/1773",
      },
      {
        value: "Virgo Supercluster",
        label: "Virgo SC (Virgo Supercluster)",
        uri: "http://astrothesaurus.org/uat/1773",
      },
      {
        value: "Giant elliptical galaxies",
        label: "Giant elliptical galaxies",
        uri: "http://astrothesaurus.org/uat/651",
      },
      {
        value: "Giant elliptical galaxies",
        label: "Giant ellipticals (Giant elliptical galaxies)",
        uri: "http://astrothesaurus.org/uat/651",
      },
      {
        value: "Solar active region velocity fields",
        label: "Solar active region velocity fields",
        uri: "http://astrothesaurus.org/uat/1976",
      },
      {
        value: "Stellar feedback",
        label: "Stellar feedback",
        uri: "http://astrothesaurus.org/uat/1602",
      },
      {
        value: "Cosmic ray astronomy",
        label: "Cosmic ray astronomy",
        uri: "http://astrothesaurus.org/uat/324",
      },
      {
        value: "Event horizons",
        label: "Event horizons",
        uri: "http://astrothesaurus.org/uat/479",
      },
      {
        value: "Newtonian telescopes",
        label: "Newtonian telescopes",
        uri: "http://astrothesaurus.org/uat/1111",
      },
      {
        value: "Cape RI photometry",
        label: "Cape RI photometry",
        uri: "http://astrothesaurus.org/uat/193",
      },
      {
        value: "Light curve classification ",
        label: "Light curve classification ",
        uri: "http://astrothesaurus.org/uat/1954",
      },
      {
        value: "Hierarchical models",
        label: "Hierarchical models",
        uri: "http://astrothesaurus.org/uat/1925",
      },
      {
        value: "Solar cycle",
        label: "Solar cycle",
        uri: "http://astrothesaurus.org/uat/1487",
      },
      {
        value: "Solar cycle",
        label: "Solar activity cycles (Solar cycle)",
        uri: "http://astrothesaurus.org/uat/1487",
      },
      {
        value: "Solar cycle",
        label: "Sun cycles (Solar cycle)",
        uri: "http://astrothesaurus.org/uat/1487",
      },
      {
        value: "Solar cycle",
        label: "Solar cycle variations (Solar cycle)",
        uri: "http://astrothesaurus.org/uat/1487",
      },
      {
        value: "Solar cycle",
        label: "Solar magnetic activity cycle (Solar cycle)",
        uri: "http://astrothesaurus.org/uat/1487",
      },
      {
        value: "Solar cycle",
        label: "Sun cycle (Solar cycle)",
        uri: "http://astrothesaurus.org/uat/1487",
      },
      {
        value: "Distance measure",
        label: "Distance measure",
        uri: "http://astrothesaurus.org/uat/395",
      },
      {
        value: "High latitude field",
        label: "High latitude field",
        uri: "http://astrothesaurus.org/uat/737",
      },
      {
        value: "Solar dynamo",
        label: "Solar dynamo",
        uri: "http://astrothesaurus.org/uat/2001",
      },
      {
        value: "Carbon flashes",
        label: "Carbon flashes",
        uri: "http://astrothesaurus.org/uat/197",
      },
      {
        value: "Carbon flashes",
        label: "Carbon detonation (Carbon flashes)",
        uri: "http://astrothesaurus.org/uat/197",
      },
      {
        value: "Pickup ions",
        label: "Pickup ions",
        uri: "http://astrothesaurus.org/uat/1239",
      },
      {
        value: "Pickup ions",
        label: "Pick-up ions (Pickup ions)",
        uri: "http://astrothesaurus.org/uat/1239",
      },
      {
        value: "Irregular natural satellites (Extrasolar)",
        label: "Irregular natural satellites (Extrasolar)",
        uri: "http://astrothesaurus.org/uat/2025",
      },
      {
        value: "Irregular natural satellites (Extrasolar)",
        label: "Irregular exomoons (Irregular natural satellites (Extrasolar))",
        uri: "http://astrothesaurus.org/uat/2025",
      },
      {
        value: "Irregular natural satellites (Extrasolar)",
        label:
          "Irregular extrasolar natural satellites (Irregular natural satellites (Extrasolar))",
        uri: "http://astrothesaurus.org/uat/2025",
      },
      {
        value: "Irregular natural satellites (Extrasolar)",
        label:
          "Irregular natural extrasolar satellites (Irregular natural satellites (Extrasolar))",
        uri: "http://astrothesaurus.org/uat/2025",
      },
      {
        value: "Irregular natural satellites (Extrasolar)",
        label:
          "Irregular moons (Extrasolar) (Irregular natural satellites (Extrasolar))",
        uri: "http://astrothesaurus.org/uat/2025",
      },
      {
        value: "Stellar mass black holes",
        label: "Stellar mass black holes",
        uri: "http://astrothesaurus.org/uat/1611",
      },
      {
        value: "Stellar mass black holes",
        label: "Stellar black holes (Stellar mass black holes)",
        uri: "http://astrothesaurus.org/uat/1611",
      },
      {
        value: "Observational astronomy",
        label: "Observational astronomy",
        uri: "http://astrothesaurus.org/uat/1145",
      },
      {
        value: "Observational astronomy",
        label: "Imaging of stars (Observational astronomy)",
        uri: "http://astrothesaurus.org/uat/1145",
      },
      {
        value: "Observational astronomy",
        label: "Stellar imaging (Observational astronomy)",
        uri: "http://astrothesaurus.org/uat/1145",
      },
      {
        value: "Upsilon Sagittarii stars",
        label: "Upsilon Sagittarii stars",
        uri: "http://astrothesaurus.org/uat/1749",
      },
      {
        value: "Stellar oscillations",
        label: "Stellar oscillations",
        uri: "http://astrothesaurus.org/uat/1617",
      },
      {
        value: "Galaxy masses",
        label: "Galaxy masses",
        uri: "http://astrothesaurus.org/uat/607",
      },
      {
        value: "Pre-main sequence stars",
        label: "Pre-main sequence stars",
        uri: "http://astrothesaurus.org/uat/1290",
      },
      {
        value: "Pre-main sequence stars",
        label: "PMS objects (Pre-main sequence stars)",
        uri: "http://astrothesaurus.org/uat/1290",
      },
      {
        value: "Pre-main sequence stars",
        label: "PMS stars (Pre-main sequence stars)",
        uri: "http://astrothesaurus.org/uat/1290",
      },
      {
        value: "Pre-main sequence stars",
        label: "Pre-main sequence objects (Pre-main sequence stars)",
        uri: "http://astrothesaurus.org/uat/1290",
      },
      {
        value: "Pre-main sequence stars",
        label: "Pre main sequence objects (Pre-main sequence stars)",
        uri: "http://astrothesaurus.org/uat/1290",
      },
      {
        value: "Heliosheath",
        label: "Heliosheath",
        uri: "http://astrothesaurus.org/uat/710",
      },
      {
        value: "Solar system formation",
        label: "Solar system formation",
        uri: "http://astrothesaurus.org/uat/1530",
      },
      {
        value: "Gaussian Processes regression",
        label: "Gaussian Processes regression",
        uri: "http://astrothesaurus.org/uat/1930",
      },
      {
        value: "Main-belt comets",
        label: "Main-belt comets",
        uri: "http://astrothesaurus.org/uat/2131",
      },
      {
        value: "Galactic poles",
        label: "Galactic poles",
        uri: "http://astrothesaurus.org/uat/570",
      },
      {
        value: "Interstellar scattering",
        label: "Interstellar scattering",
        uri: "http://astrothesaurus.org/uat/854",
      },
      {
        value: "BY Draconis stars",
        label: "BY Draconis stars",
        uri: "http://astrothesaurus.org/uat/190",
      },
      {
        value: "Disk flaring",
        label: "Disk flaring",
        uri: "http://astrothesaurus.org/uat/390",
      },
      {
        value: "Disk flaring",
        label: "Disc flaring (Disk flaring)",
        uri: "http://astrothesaurus.org/uat/390",
      },
      {
        value: "X-ray observatories",
        label: "X-ray observatories",
        uri: "http://astrothesaurus.org/uat/1819",
      },
      {
        value: "Solar atmospheric motions",
        label: "Solar atmospheric motions",
        uri: "http://astrothesaurus.org/uat/1478",
      },
      {
        value: "Ganymede",
        label: "Ganymede",
        uri: "http://astrothesaurus.org/uat/2188",
      },
      {
        value: "Ganymede",
        label: "Jupiter III (Ganymede)",
        uri: "http://astrothesaurus.org/uat/2188",
      },
      {
        value: "Solar coronal streamers",
        label: "Solar coronal streamers",
        uri: "http://astrothesaurus.org/uat/1486",
      },
      {
        value: "Baily's beads",
        label: "Baily's beads",
        uri: "http://astrothesaurus.org/uat/133",
      },
      {
        value: "Baily's beads",
        label: "Bailys beads (Baily's beads)",
        uri: "http://astrothesaurus.org/uat/133",
      },
      {
        value: "Radio lobes",
        label: "Radio lobes",
        uri: "http://astrothesaurus.org/uat/1348",
      },
      {
        value: "Exoplanet atmospheric composition ",
        label: "Exoplanet atmospheric composition ",
        uri: "http://astrothesaurus.org/uat/2021",
      },
      {
        value: "Spectral index",
        label: "Spectral index",
        uri: "http://astrothesaurus.org/uat/1553",
      },
      {
        value: "Interstellar cyclotron emission",
        label: "Interstellar cyclotron emission",
        uri: "http://astrothesaurus.org/uat/835",
      },
      {
        value: "Interstellar cyclotron emission",
        label:
          "Interstellar cyclotron radiation (Interstellar cyclotron emission)",
        uri: "http://astrothesaurus.org/uat/835",
      },
      {
        value: "Horizontal coordinate system",
        label: "Horizontal coordinate system",
        uri: "http://astrothesaurus.org/uat/747",
      },
      {
        value: "Horizontal coordinate system",
        label: "az/el coordinate system (Horizontal coordinate system)",
        uri: "http://astrothesaurus.org/uat/747",
      },
      {
        value: "Horizontal coordinate system",
        label:
          "Horizon (horizon coordinate system) (Horizontal coordinate system)",
        uri: "http://astrothesaurus.org/uat/747",
      },
      {
        value: "Horizontal coordinate system",
        label: "Horizon coordinate system (Horizontal coordinate system)",
        uri: "http://astrothesaurus.org/uat/747",
      },
      {
        value: "Horizontal coordinate system",
        label: "Alt/Az coordinate system (Horizontal coordinate system)",
        uri: "http://astrothesaurus.org/uat/747",
      },
      {
        value: "Mean anomaly",
        label: "Mean anomaly",
        uri: "http://astrothesaurus.org/uat/1019",
      },
      {
        value: "Micrometeoroids",
        label: "Micrometeoroids",
        uri: "http://astrothesaurus.org/uat/1048",
      },
      {
        value: "Yellow hypergiant stars",
        label: "Yellow hypergiant stars",
        uri: "http://astrothesaurus.org/uat/1828",
      },
      {
        value: "Yellow hypergiant stars",
        label: "Rho Cassiopeiae (Yellow hypergiant stars)",
        uri: "http://astrothesaurus.org/uat/1828",
      },
      {
        value: "Yellow hypergiant stars",
        label: "Rho cas stars (Yellow hypergiant stars)",
        uri: "http://astrothesaurus.org/uat/1828",
      },
      {
        value: "True anomaly",
        label: "True anomaly",
        uri: "http://astrothesaurus.org/uat/1719",
      },
      {
        value: "X-ray stars",
        label: "X-ray stars",
        uri: "http://astrothesaurus.org/uat/1823",
      },
      {
        value: "Ram pressure stripped tails",
        label: "Ram pressure stripped tails",
        uri: "http://astrothesaurus.org/uat/2126",
      },
      {
        value: "Hubble-Lemaitre law",
        label: "Hubble-Lemaitre law",
        uri: "http://astrothesaurus.org/uat/763",
      },
      {
        value: "Hubble-Lemaitre law",
        label: "Hubble's law (Hubble-Lemaitre law)",
        uri: "http://astrothesaurus.org/uat/763",
      },
      {
        value: "Hubble-Lemaitre law",
        label: "Hubble law (Hubble-Lemaitre law)",
        uri: "http://astrothesaurus.org/uat/763",
      },
      {
        value: "Gravity anomaly",
        label: "Gravity anomaly",
        uri: "http://astrothesaurus.org/uat/679",
      },
      {
        value: "Beta Lyrae stars",
        label: "Beta Lyrae stars",
        uri: "http://astrothesaurus.org/uat/149",
      },
      {
        value: "Beta Lyrae stars",
        label: "Beta Lyrae variable stars (Beta Lyrae stars)",
        uri: "http://astrothesaurus.org/uat/149",
      },
      {
        value: "Solar physics",
        label: "Solar physics",
        uri: "http://astrothesaurus.org/uat/1476",
      },
      {
        value: "Solar physics",
        label: "Solar astronomy (Solar physics)",
        uri: "http://astrothesaurus.org/uat/1476",
      },
      {
        value: "Solar physics",
        label: "Astrophysics of the sun (Solar physics)",
        uri: "http://astrothesaurus.org/uat/1476",
      },
      {
        value: "Solar physics",
        label: "Solar astrophysics (Solar physics)",
        uri: "http://astrothesaurus.org/uat/1476",
      },
      {
        value: "Circumstellar masers",
        label: "Circumstellar masers",
        uri: "http://astrothesaurus.org/uat/240",
      },
      {
        value: "Magnetohydrodynamical simulations",
        label: "Magnetohydrodynamical simulations",
        uri: "http://astrothesaurus.org/uat/1966",
      },
      {
        value: "Galaxy classification systems",
        label: "Galaxy classification systems",
        uri: "http://astrothesaurus.org/uat/582",
      },
      {
        value: "Galaxy classification systems",
        label: "Galactic morphology (Galaxy classification systems)",
        uri: "http://astrothesaurus.org/uat/582",
      },
      {
        value: "Galaxy classification systems",
        label:
          "Galaxy morphological classification (Galaxy classification systems)",
        uri: "http://astrothesaurus.org/uat/582",
      },
      {
        value: "Galaxy classification systems",
        label: "Galaxy morphology (Galaxy classification systems)",
        uri: "http://astrothesaurus.org/uat/582",
      },
      {
        value: "Galaxy classification systems",
        label: "Classification of galaxies (Galaxy classification systems)",
        uri: "http://astrothesaurus.org/uat/582",
      },
      {
        value: "Galaxy classification systems",
        label: "Galaxy classification (Galaxy classification systems)",
        uri: "http://astrothesaurus.org/uat/582",
      },
      {
        value: "Astrographic catalogs",
        label: "Astrographic catalogs",
        uri: "http://astrothesaurus.org/uat/77",
      },
      {
        value: "Astrographic catalogs",
        label: "Astrographic catalogues (Astrographic catalogs)",
        uri: "http://astrothesaurus.org/uat/77",
      },
      {
        value: "Dynamical friction",
        label: "Dynamical friction",
        uri: "http://astrothesaurus.org/uat/422",
      },
      {
        value: "Dynamical friction",
        label: "Gravitational drag (Dynamical friction)",
        uri: "http://astrothesaurus.org/uat/422",
      },
      {
        value: "Astrostatistics techniques",
        label: "Astrostatistics techniques",
        uri: "http://astrothesaurus.org/uat/1886",
      },
      {
        value: "Transit photometry",
        label: "Transit photometry",
        uri: "http://astrothesaurus.org/uat/1709",
      },
      {
        value: "Chondrules",
        label: "Chondrules",
        uri: "http://astrothesaurus.org/uat/229",
      },
      {
        value: "Exosphere",
        label: "Exosphere",
        uri: "http://astrothesaurus.org/uat/499",
      },
      {
        value: "Astronomy data analysis",
        label: "Astronomy data analysis",
        uri: "http://astrothesaurus.org/uat/1858",
      },
      {
        value: "Nonclassical interferometry",
        label: "Nonclassical interferometry",
        uri: "http://astrothesaurus.org/uat/1120",
      },
      {
        value: "Nonclassical interferometry",
        label: "Non-classical interferometry (Nonclassical interferometry)",
        uri: "http://astrothesaurus.org/uat/1120",
      },
      {
        value: "Radio cores",
        label: "Radio cores",
        uri: "http://astrothesaurus.org/uat/1341",
      },
      {
        value: "Bp stars",
        label: "Bp stars",
        uri: "http://astrothesaurus.org/uat/178",
      },
      {
        value: "Bp stars",
        label: "Bp-type stars (Bp stars)",
        uri: "http://astrothesaurus.org/uat/178",
      },
      {
        value: "Robust regression",
        label: "Robust regression",
        uri: "http://astrothesaurus.org/uat/1949",
      },
      {
        value: "Lunar seismology",
        label: "Lunar seismology",
        uri: "http://astrothesaurus.org/uat/973",
      },
      {
        value: "Magellanic irregular galaxies",
        label: "Magellanic irregular galaxies",
        uri: "http://astrothesaurus.org/uat/1877",
      },
      {
        value: "Magellanic irregular galaxies",
        label: "Irregular I galaxies (Magellanic irregular galaxies)",
        uri: "http://astrothesaurus.org/uat/1877",
      },
      {
        value: "Magellanic irregular galaxies",
        label: "Type I irregular galaxies (Magellanic irregular galaxies)",
        uri: "http://astrothesaurus.org/uat/1877",
      },
      {
        value: "Molecular spectroscopy",
        label: "Molecular spectroscopy",
        uri: "http://astrothesaurus.org/uat/2095",
      },
      {
        value: "Asymptotic giant branch",
        label: "Asymptotic giant branch",
        uri: "http://astrothesaurus.org/uat/108",
      },
      {
        value: "Asymptotic giant branch",
        label: "AGB (Asymptotic giant branch)",
        uri: "http://astrothesaurus.org/uat/108",
      },
      {
        value: "Warm dark matter",
        label: "Warm dark matter",
        uri: "http://astrothesaurus.org/uat/1787",
      },
      {
        value: "Warm dark matter",
        label: "WDM (Warm dark matter)",
        uri: "http://astrothesaurus.org/uat/1787",
      },
      {
        value: "Galaxy luminosities",
        label: "Galaxy luminosities",
        uri: "http://astrothesaurus.org/uat/603",
      },
      {
        value: "Galaxy luminosities",
        label: "Galaxy luminosity (Galaxy luminosities)",
        uri: "http://astrothesaurus.org/uat/603",
      },
      {
        value: "Solar optical telescopes",
        label: "Solar optical telescopes",
        uri: "http://astrothesaurus.org/uat/1514",
      },
      {
        value: "Direct detection interferometry",
        label: "Direct detection interferometry",
        uri: "http://astrothesaurus.org/uat/386",
      },
      {
        value: "Direct detection interferometry",
        label:
          "Direct-detection interferometry (Direct detection interferometry)",
        uri: "http://astrothesaurus.org/uat/386",
      },
      {
        value: "Iron meteorites",
        label: "Iron meteorites",
        uri: "http://astrothesaurus.org/uat/863",
      },
      {
        value: "Water vapor",
        label: "Water vapor",
        uri: "http://astrothesaurus.org/uat/1791",
      },
      {
        value: "Water vapor",
        label: "Water vapour (Water vapor)",
        uri: "http://astrothesaurus.org/uat/1791",
      },
      {
        value: "Water vapor",
        label: "Aqueous vapour (Water vapor)",
        uri: "http://astrothesaurus.org/uat/1791",
      },
      {
        value: "Water vapor",
        label: "Aqueous vapor (Water vapor)",
        uri: "http://astrothesaurus.org/uat/1791",
      },
      {
        value: "Minimum spanning tree",
        label: "Minimum spanning tree",
        uri: "http://astrothesaurus.org/uat/1950",
      },
      {
        value: "Zeeman-Doppler imaging",
        label: "Zeeman-Doppler imaging",
        uri: "http://astrothesaurus.org/uat/1837",
      },
      {
        value: "Zeeman-Doppler imaging",
        label: "Zeeman Doppler imaging (Zeeman-Doppler imaging)",
        uri: "http://astrothesaurus.org/uat/1837",
      },
      {
        value: "Zeeman-Doppler imaging",
        label: "ZDI (Zeeman-Doppler imaging)",
        uri: "http://astrothesaurus.org/uat/1837",
      },
      {
        value: "Quasinormal modes",
        label: "Quasinormal modes",
        uri: "http://astrothesaurus.org/uat/1320",
      },
      {
        value: "K supergiant stars",
        label: "K supergiant stars",
        uri: "http://astrothesaurus.org/uat/881",
      },
      {
        value: "K supergiant stars",
        label: "K-type supergiant stars (K supergiant stars)",
        uri: "http://astrothesaurus.org/uat/881",
      },
      {
        value: "K supergiant stars",
        label: "K-type supergiants (K supergiant stars)",
        uri: "http://astrothesaurus.org/uat/881",
      },
      {
        value: "K supergiant stars",
        label: "K supergiants (K supergiant stars)",
        uri: "http://astrothesaurus.org/uat/881",
      },
      {
        value: "Comae",
        label: "Comae",
        uri: "http://astrothesaurus.org/uat/271",
      },
      {
        value: "Comae",
        label: "Comet atmospheres (Comae)",
        uri: "http://astrothesaurus.org/uat/271",
      },
      {
        value: "Comae",
        label: "Comas (Comae)",
        uri: "http://astrothesaurus.org/uat/271",
      },
      {
        value: "Comae",
        label: "Cometary atmospheres (Comae)",
        uri: "http://astrothesaurus.org/uat/271",
      },
      {
        value: "SX Phoenicis variable stars",
        label: "SX Phoenicis variable stars",
        uri: "http://astrothesaurus.org/uat/1673",
      },
      {
        value: "SX Phoenicis variable stars",
        label: "SX Phoenicis variables (SX Phoenicis variable stars)",
        uri: "http://astrothesaurus.org/uat/1673",
      },
      {
        value: "SX Phoenicis variable stars",
        label: "SX-Phoenicis variables (SX Phoenicis variable stars)",
        uri: "http://astrothesaurus.org/uat/1673",
      },
      {
        value: "SX Phoenicis variable stars",
        label: "SX Phoenicis stars (SX Phoenicis variable stars)",
        uri: "http://astrothesaurus.org/uat/1673",
      },
      {
        value: "Luminous blue variable stars",
        label: "Luminous blue variable stars",
        uri: "http://astrothesaurus.org/uat/944",
      },
      {
        value: "Luminous blue variable stars",
        label: "LBV (Luminous blue variable stars)",
        uri: "http://astrothesaurus.org/uat/944",
      },
      {
        value: "Luminous blue variable stars",
        label: "Luminous blue variables (Luminous blue variable stars)",
        uri: "http://astrothesaurus.org/uat/944",
      },
      {
        value: "Classical novae",
        label: "Classical novae",
        uri: "http://astrothesaurus.org/uat/251",
      },
      {
        value: "Classical novae",
        label: "Classical nova (Classical novae)",
        uri: "http://astrothesaurus.org/uat/251",
      },
      {
        value: "Galactic center",
        label: "Galactic center",
        uri: "http://astrothesaurus.org/uat/565",
      },
      {
        value: "Galactic center",
        label: "Milky Way Galaxy nucleus (Galactic center)",
        uri: "http://astrothesaurus.org/uat/565",
      },
      {
        value: "Galactic center",
        label: "Galactic Centre (Galactic center)",
        uri: "http://astrothesaurus.org/uat/565",
      },
      {
        value: "Galactic center",
        label: "Milky Way center (Galactic center)",
        uri: "http://astrothesaurus.org/uat/565",
      },
      {
        value: "Galactic center",
        label: "Center of the Milky Way (Galactic center)",
        uri: "http://astrothesaurus.org/uat/565",
      },
      {
        value: "Red straggler stars",
        label: "Red straggler stars",
        uri: "http://astrothesaurus.org/uat/1374",
      },
      {
        value: "Red straggler stars",
        label: "Red stragglers (Red straggler stars)",
        uri: "http://astrothesaurus.org/uat/1374",
      },
      {
        value: "Red straggler stars",
        label: "Red-straggler stars (Red straggler stars)",
        uri: "http://astrothesaurus.org/uat/1374",
      },
      {
        value: "Planetary surfaces",
        label: "Planetary surfaces",
        uri: "http://astrothesaurus.org/uat/2113",
      },
      {
        value: "Planetary surfaces",
        label: "Planetary surface (Planetary surfaces)",
        uri: "http://astrothesaurus.org/uat/2113",
      },
      {
        value: "Finite-source photometric effect",
        label: "Finite-source photometric effect",
        uri: "http://astrothesaurus.org/uat/2142",
      },
      {
        value: "Vernal equinox",
        label: "Vernal equinox",
        uri: "http://astrothesaurus.org/uat/1764",
      },
      {
        value: "Solar wind",
        label: "Solar wind",
        uri: "http://astrothesaurus.org/uat/1534",
      },
      {
        value: "Satellite microlensing parallax",
        label: "Satellite microlensing parallax",
        uri: "http://astrothesaurus.org/uat/2148",
      },
      {
        value: "Absolute magnitude",
        label: "Absolute magnitude",
        uri: "http://astrothesaurus.org/uat/10",
      },
      {
        value: "Expanding universe",
        label: "Expanding universe",
        uri: "http://astrothesaurus.org/uat/502",
      },
      {
        value: "Galaxy radial velocities",
        label: "Galaxy radial velocities",
        uri: "http://astrothesaurus.org/uat/616",
      },
      {
        value: "Sunspot number",
        label: "Sunspot number",
        uri: "http://astrothesaurus.org/uat/1652",
      },
      {
        value: "Sunspot number",
        label: "Relative sunspot number (Sunspot number)",
        uri: "http://astrothesaurus.org/uat/1652",
      },
      {
        value: "Sunspot number",
        label: "Wolf number (Sunspot number)",
        uri: "http://astrothesaurus.org/uat/1652",
      },
      {
        value: "Sunspot number",
        label: "SSN (Sunspot number)",
        uri: "http://astrothesaurus.org/uat/1652",
      },
      {
        value: "Pre-biotic astrochemistry",
        label: "Pre-biotic astrochemistry",
        uri: "http://astrothesaurus.org/uat/2079",
      },
      {
        value: "Pre-biotic astrochemistry",
        label: "Prebiotic chemistry (Pre-biotic astrochemistry)",
        uri: "http://astrothesaurus.org/uat/2079",
      },
      {
        value: "Pre-biotic astrochemistry",
        label: "Pre-biotic chemistry (Pre-biotic astrochemistry)",
        uri: "http://astrothesaurus.org/uat/2079",
      },
      {
        value: "Pre-biotic astrochemistry",
        label: "Prebiotic astrochemistry (Pre-biotic astrochemistry)",
        uri: "http://astrothesaurus.org/uat/2079",
      },
      {
        value: "Apparent superluminal motion",
        label: "Apparent superluminal motion",
        uri: "http://astrothesaurus.org/uat/61",
      },
      {
        value: "Apparent superluminal motion",
        label: "Faster than light (Apparent superluminal motion)",
        uri: "http://astrothesaurus.org/uat/61",
      },
      {
        value: "Apparent superluminal motion",
        label: "Effective FTL (Apparent superluminal motion)",
        uri: "http://astrothesaurus.org/uat/61",
      },
      {
        value: "Apparent superluminal motion",
        label: "Superluminal motion (Apparent superluminal motion)",
        uri: "http://astrothesaurus.org/uat/61",
      },
      {
        value: "Apparent superluminal motion",
        label: "Fast-than-light (Apparent superluminal motion)",
        uri: "http://astrothesaurus.org/uat/61",
      },
      {
        value: "Apparent superluminal motion",
        label: "Apparent FTL (Apparent superluminal motion)",
        uri: "http://astrothesaurus.org/uat/61",
      },
      {
        value: "Alfven waves",
        label: "Alfven waves",
        uri: "http://astrothesaurus.org/uat/23",
      },
      {
        value: "Alfven waves",
        label: "AlfvÃ©n surface waves (Alfven waves)",
        uri: "http://astrothesaurus.org/uat/23",
      },
      {
        value: "Alfven waves",
        label: "Alfven surface waves (Alfven waves)",
        uri: "http://astrothesaurus.org/uat/23",
      },
      {
        value: "Alfven waves",
        label: "AlfvÃ©n waves (Alfven waves)",
        uri: "http://astrothesaurus.org/uat/23",
      },
      {
        value: "Zirconium stars",
        label: "Zirconium stars",
        uri: "http://astrothesaurus.org/uat/1844",
      },
      {
        value: "Occultation",
        label: "Occultation",
        uri: "http://astrothesaurus.org/uat/1148",
      },
      {
        value: "Orbiters",
        label: "Orbiters",
        uri: "http://astrothesaurus.org/uat/1183",
      },
      {
        value: "Infrared excess galaxies",
        label: "Infrared excess galaxies",
        uri: "http://astrothesaurus.org/uat/789",
      },
      {
        value: "Infrared excess galaxies",
        label: "IR-excess galaxies (Infrared excess galaxies)",
        uri: "http://astrothesaurus.org/uat/789",
      },
      {
        value: "Infrared excess galaxies",
        label: "IR-excess galaxy (Infrared excess galaxies)",
        uri: "http://astrothesaurus.org/uat/789",
      },
      {
        value: "Infrared excess galaxies",
        label: "IR excess galaxy (Infrared excess galaxies)",
        uri: "http://astrothesaurus.org/uat/789",
      },
      {
        value: "Infrared excess galaxies",
        label: "IR excess galaxies (Infrared excess galaxies)",
        uri: "http://astrothesaurus.org/uat/789",
      },
      {
        value: "Infrared excess galaxies",
        label: "Infrared excess galaxy (Infrared excess galaxies)",
        uri: "http://astrothesaurus.org/uat/789",
      },
      {
        value: "Neutral hydrogen clouds",
        label: "Neutral hydrogen clouds",
        uri: "http://astrothesaurus.org/uat/1099",
      },
      {
        value: "Neutral hydrogen clouds",
        label: "HI clouds (Neutral hydrogen clouds)",
        uri: "http://astrothesaurus.org/uat/1099",
      },
      {
        value: "Neutral hydrogen clouds",
        label: "Neutral atomic hydrogen clouds (Neutral hydrogen clouds)",
        uri: "http://astrothesaurus.org/uat/1099",
      },
      {
        value: "Autumnal equinox",
        label: "Autumnal equinox",
        uri: "http://astrothesaurus.org/uat/123",
      },
      {
        value: "DDO classification",
        label: "DDO classification",
        uri: "http://astrothesaurus.org/uat/359",
      },
      {
        value: "DDO classification",
        label: "Van den Bergh classification (DDO classification)",
        uri: "http://astrothesaurus.org/uat/359",
      },
      {
        value: "DDO classification",
        label: "Van den Bergh classification of galaxies (DDO classification)",
        uri: "http://astrothesaurus.org/uat/359",
      },
      {
        value: "E+A galaxies",
        label: "E+A galaxies",
        uri: "http://astrothesaurus.org/uat/424",
      },
      {
        value: "Oblateness",
        label: "Oblateness",
        uri: "http://astrothesaurus.org/uat/1143",
      },
      {
        value: "Oblateness",
        label: "Ellipticity (Oblateness)",
        uri: "http://astrothesaurus.org/uat/1143",
      },
      {
        value: "Oblateness",
        label: "Flattening (Oblateness)",
        uri: "http://astrothesaurus.org/uat/1143",
      },
      {
        value: "Humidity",
        label: "Humidity",
        uri: "http://astrothesaurus.org/uat/764",
      },
      {
        value: "Sunyaev-Zeldovich effect",
        label: "Sunyaev-Zeldovich effect",
        uri: "http://astrothesaurus.org/uat/1654",
      },
      {
        value: "Sunyaev-Zeldovich effect",
        label: "SZ effect (Sunyaev-Zeldovich effect)",
        uri: "http://astrothesaurus.org/uat/1654",
      },
      {
        value: "Stellar luminosities",
        label: "Stellar luminosities",
        uri: "http://astrothesaurus.org/uat/1609",
      },
      {
        value: "Stellar luminosities",
        label: "Stellar luminosity (Stellar luminosities)",
        uri: "http://astrothesaurus.org/uat/1609",
      },
      {
        value: "Stellar luminosities",
        label: "Salpeter function (Stellar luminosities)",
        uri: "http://astrothesaurus.org/uat/1609",
      },
      {
        value: "Stellar luminosities",
        label: "Salpeter IMF (Stellar luminosities)",
        uri: "http://astrothesaurus.org/uat/1609",
      },
      {
        value: "Diffuse interstellar bands",
        label: "Diffuse interstellar bands",
        uri: "http://astrothesaurus.org/uat/379",
      },
      {
        value: "Delta sunspots",
        label: "Delta sunspots",
        uri: "http://astrothesaurus.org/uat/1979",
      },
      {
        value: "GPU computing",
        label: "GPU computing",
        uri: "http://astrothesaurus.org/uat/1969",
      },
      {
        value: "DDO photometry",
        label: "DDO photometry",
        uri: "http://astrothesaurus.org/uat/360",
      },
      {
        value: "DDO photometry",
        label: "DDO photometric system (DDO photometry)",
        uri: "http://astrothesaurus.org/uat/360",
      },
      {
        value: "Solar chromospheric heating",
        label: "Solar chromospheric heating",
        uri: "http://astrothesaurus.org/uat/1987",
      },
      {
        value: "Aten group",
        label: "Aten group",
        uri: "http://astrothesaurus.org/uat/110",
      },
      {
        value: "Aten group",
        label: "Atens (Aten group)",
        uri: "http://astrothesaurus.org/uat/110",
      },
      {
        value: "Aten group",
        label: "Aten asteroids (Aten group)",
        uri: "http://astrothesaurus.org/uat/110",
      },
      {
        value: "Gravitational disruption",
        label: "Gravitational disruption",
        uri: "http://astrothesaurus.org/uat/664",
      },
      {
        value: "Asteroids",
        label: "Asteroids",
        uri: "http://astrothesaurus.org/uat/72",
      },
      {
        value: "Asteroids",
        label: "Asteroid (Asteroids)",
        uri: "http://astrothesaurus.org/uat/72",
      },
      {
        value: "Asteroids",
        label: "Minor planets (Asteroids)",
        uri: "http://astrothesaurus.org/uat/72",
      },
      {
        value: "Stellar mass functions",
        label: "Stellar mass functions",
        uri: "http://astrothesaurus.org/uat/1612",
      },
      {
        value: "Stellar mass functions",
        label: "IMF (Stellar mass functions)",
        uri: "http://astrothesaurus.org/uat/1612",
      },
      {
        value: "Coma dust",
        label: "Coma dust",
        uri: "http://astrothesaurus.org/uat/2159",
      },
      {
        value: "Exoplanet systems",
        label: "Exoplanet systems",
        uri: "http://astrothesaurus.org/uat/484",
      },
      {
        value: "Accelerating universe",
        label: "Accelerating universe",
        uri: "http://astrothesaurus.org/uat/12",
      },
      {
        value: "Dumbbell galaxies",
        label: "Dumbbell galaxies",
        uri: "http://astrothesaurus.org/uat/411",
      },
      {
        value: "Two-point correlation function",
        label: "Two-point correlation function",
        uri: "http://astrothesaurus.org/uat/1951",
      },
      {
        value: "Stellar pulsations",
        label: "Stellar pulsations",
        uri: "http://astrothesaurus.org/uat/1625",
      },
      {
        value: "Protostars",
        label: "Protostars",
        uri: "http://astrothesaurus.org/uat/1302",
      },
      {
        value: "H beta photometry",
        label: "H beta photometry",
        uri: "http://astrothesaurus.org/uat/692",
      },
      {
        value: "Fanaroff-Riley radio galaxies",
        label: "Fanaroff-Riley radio galaxies",
        uri: "http://astrothesaurus.org/uat/526",
      },
      {
        value: "Fanaroff-Riley radio galaxies",
        label: "Fanaroff Riley class II (Fanaroff-Riley radio galaxies)",
        uri: "http://astrothesaurus.org/uat/526",
      },
      {
        value: "Fanaroff-Riley radio galaxies",
        label: "Fanaroff Riley class I (Fanaroff-Riley radio galaxies)",
        uri: "http://astrothesaurus.org/uat/526",
      },
      {
        value: "Fanaroff-Riley radio galaxies",
        label: "Fanaroff-Riley class I (Fanaroff-Riley radio galaxies)",
        uri: "http://astrothesaurus.org/uat/526",
      },
      {
        value: "Fanaroff-Riley radio galaxies",
        label: "Fanaroff-Riley class II (Fanaroff-Riley radio galaxies)",
        uri: "http://astrothesaurus.org/uat/526",
      },
      {
        value: "Field galaxies",
        label: "Field galaxies",
        uri: "http://astrothesaurus.org/uat/533",
      },
      {
        value: "Astronomical site protection",
        label: "Astronomical site protection",
        uri: "http://astrothesaurus.org/uat/94",
      },
      {
        value: "Lunar highlands",
        label: "Lunar highlands",
        uri: "http://astrothesaurus.org/uat/957",
      },
      {
        value: "Milky Way rotation",
        label: "Milky Way rotation",
        uri: "http://astrothesaurus.org/uat/1059",
      },
      {
        value: "Milky Way rotation",
        label: "Rotation of the Milky Way (Milky Way rotation)",
        uri: "http://astrothesaurus.org/uat/1059",
      },
      {
        value: "Milky Way rotation",
        label: "Milky Way Galaxy rotation (Milky Way rotation)",
        uri: "http://astrothesaurus.org/uat/1059",
      },
      {
        value: "Substellar companion stars",
        label: "Substellar companion stars",
        uri: "http://astrothesaurus.org/uat/1648",
      },
      {
        value: "Substellar companion stars",
        label: "Sub-stellar companions (Substellar companion stars)",
        uri: "http://astrothesaurus.org/uat/1648",
      },
      {
        value: "Substellar companion stars",
        label: "Sub-stellar companion stars (Substellar companion stars)",
        uri: "http://astrothesaurus.org/uat/1648",
      },
      {
        value: "Substellar companion stars",
        label: "Substellar companions (Substellar companion stars)",
        uri: "http://astrothesaurus.org/uat/1648",
      },
      {
        value: "Optical flares",
        label: "Optical flares",
        uri: "http://astrothesaurus.org/uat/1166",
      },
      {
        value: "Europa",
        label: "Europa",
        uri: "http://astrothesaurus.org/uat/2189",
      },
      {
        value: "Europa",
        label: "Jupiter II (Europa)",
        uri: "http://astrothesaurus.org/uat/2189",
      },
      {
        value: "Periodic variable stars",
        label: "Periodic variable stars",
        uri: "http://astrothesaurus.org/uat/1213",
      },
      {
        value: "Saturnian satellites",
        label: "Saturnian satellites",
        uri: "http://astrothesaurus.org/uat/1427",
      },
      {
        value: "Saturnian satellites",
        label: "Moons of Saturn (Saturnian satellites)",
        uri: "http://astrothesaurus.org/uat/1427",
      },
      {
        value: "Saturnian satellites",
        label: "Saturnian moons (Saturnian satellites)",
        uri: "http://astrothesaurus.org/uat/1427",
      },
      {
        value: "Saturnian satellites",
        label: "Enceladus (Saturnian satellites)",
        uri: "http://astrothesaurus.org/uat/1427",
      },
      {
        value: "Saturnian satellites",
        label: "Ring shepherds (Saturnian satellites)",
        uri: "http://astrothesaurus.org/uat/1427",
      },
      {
        value: "Gould Belt",
        label: "Gould Belt",
        uri: "http://astrothesaurus.org/uat/658",
      },
      {
        value: "Gould Belt",
        label: "Gould's Belt (Gould Belt)",
        uri: "http://astrothesaurus.org/uat/658",
      },
      {
        value: "Gould Belt",
        label: "Goulds belt (Gould Belt)",
        uri: "http://astrothesaurus.org/uat/658",
      },
      {
        value: "Cosmological constant experiments",
        label: "Cosmological constant experiments",
        uri: "http://astrothesaurus.org/uat/335",
      },
      {
        value: "Photographic astrometry",
        label: "Photographic astrometry",
        uri: "http://astrothesaurus.org/uat/1227",
      },
      {
        value: "Triple lens microlensing",
        label: "Triple lens microlensing",
        uri: "http://astrothesaurus.org/uat/2137",
      },
      {
        value: "Ephemerides",
        label: "Ephemerides",
        uri: "http://astrothesaurus.org/uat/464",
      },
      {
        value: "Helium burning",
        label: "Helium burning",
        uri: "http://astrothesaurus.org/uat/716",
      },
      {
        value: "Radio loud quasars",
        label: "Radio loud quasars",
        uri: "http://astrothesaurus.org/uat/1349",
      },
      {
        value: "Radio loud quasars",
        label: "Radio-loud quasars (Radio loud quasars)",
        uri: "http://astrothesaurus.org/uat/1349",
      },
      {
        value: "Horizontal branch",
        label: "Horizontal branch",
        uri: "http://astrothesaurus.org/uat/2048",
      },
      {
        value: "Johnson photometry",
        label: "Johnson photometry",
        uri: "http://astrothesaurus.org/uat/871",
      },
      {
        value: "Johnson photometry",
        label: "UBV photometry (Johnson photometry)",
        uri: "http://astrothesaurus.org/uat/871",
      },
      {
        value: "Johnson photometry",
        label: "Johnson-Morgan filter system (Johnson photometry)",
        uri: "http://astrothesaurus.org/uat/871",
      },
      {
        value: "Johnson photometry",
        label: "UBV RI photometry (Johnson photometry)",
        uri: "http://astrothesaurus.org/uat/871",
      },
      {
        value: "Johnson photometry",
        label: "UBV RI jkl photometry (Johnson photometry)",
        uri: "http://astrothesaurus.org/uat/871",
      },
      {
        value: "Johnson photometry",
        label: "Three-color photometry (Johnson photometry)",
        uri: "http://astrothesaurus.org/uat/871",
      },
      {
        value: "Optical observatories",
        label: "Optical observatories",
        uri: "http://astrothesaurus.org/uat/1170",
      },
      {
        value: "Hungaria group",
        label: "Hungaria group",
        uri: "http://astrothesaurus.org/uat/765",
      },
      {
        value: "Astrostatistics distributions",
        label: "Astrostatistics distributions",
        uri: "http://astrothesaurus.org/uat/1884",
      },
      {
        value: "Brown dwarfs",
        label: "Brown dwarfs",
        uri: "http://astrothesaurus.org/uat/185",
      },
      {
        value: "Brown dwarfs",
        label: "Brown dwarf stars (Brown dwarfs)",
        uri: "http://astrothesaurus.org/uat/185",
      },
      {
        value: "Brown dwarfs",
        label: "Brown dwarf (Brown dwarfs)",
        uri: "http://astrothesaurus.org/uat/185",
      },
      {
        value: "Likelihood ratio test",
        label: "Likelihood ratio test",
        uri: "http://astrothesaurus.org/uat/1942",
      },
      {
        value: "Molecule formation",
        label: "Molecule formation",
        uri: "http://astrothesaurus.org/uat/2076",
      },
      {
        value: "Carbon planets",
        label: "Carbon planets",
        uri: "http://astrothesaurus.org/uat/198",
      },
      {
        value: "Trans-Planckian physics",
        label: "Trans-Planckian physics",
        uri: "http://astrothesaurus.org/uat/1706",
      },
      {
        value: "Infrared sources",
        label: "Infrared sources",
        uri: "http://astrothesaurus.org/uat/793",
      },
      {
        value: "Infrared sources",
        label: "IR sources (Infrared sources)",
        uri: "http://astrothesaurus.org/uat/793",
      },
      {
        value: "Reionization",
        label: "Reionization",
        uri: "http://astrothesaurus.org/uat/1383",
      },
      {
        value: "Reionization",
        label: "Re-ionisation (Reionization)",
        uri: "http://astrothesaurus.org/uat/1383",
      },
      {
        value: "Reionization",
        label: "Re-ionization (Reionization)",
        uri: "http://astrothesaurus.org/uat/1383",
      },
      {
        value: "Reionization",
        label: "Reionisation (Reionization)",
        uri: "http://astrothesaurus.org/uat/1383",
      },
      {
        value: "Stellar flares",
        label: "Stellar flares",
        uri: "http://astrothesaurus.org/uat/1603",
      },
      {
        value: "Detached binary stars",
        label: "Detached binary stars",
        uri: "http://astrothesaurus.org/uat/375",
      },
      {
        value: "Public domain software",
        label: "Public domain software",
        uri: "http://astrothesaurus.org/uat/1863",
      },
      {
        value: "Early astronomical instruments",
        label: "Early astronomical instruments",
        uri: "http://astrothesaurus.org/uat/433",
      },
      {
        value: "Early astronomical instruments",
        label:
          "Early astronomical instrumentation (Early astronomical instruments)",
        uri: "http://astrothesaurus.org/uat/433",
      },
      {
        value: "Gravitational microlensing",
        label: "Gravitational microlensing",
        uri: "http://astrothesaurus.org/uat/672",
      },
      {
        value: "Gravitational microlensing",
        label: "Microlensing (Gravitational microlensing)",
        uri: "http://astrothesaurus.org/uat/672",
      },
      {
        value: "Gravitational microlensing",
        label: "Gravitational microlens (Gravitational microlensing)",
        uri: "http://astrothesaurus.org/uat/672",
      },
      {
        value: "Gravitational microlensing",
        label: "Planetary microlensing (Gravitational microlensing)",
        uri: "http://astrothesaurus.org/uat/672",
      },
      {
        value: "Kuiper belt",
        label: "Kuiper belt",
        uri: "http://astrothesaurus.org/uat/893",
      },
      {
        value: "Kuiper belt",
        label: "Edgeworthâ€“Kuiper belt (Kuiper belt)",
        uri: "http://astrothesaurus.org/uat/893",
      },
      {
        value: "Kuiper belt",
        label: "Edgeworth-Kuiper belt (Kuiper belt)",
        uri: "http://astrothesaurus.org/uat/893",
      },
      {
        value: "Astrobiology",
        label: "Astrobiology",
        uri: "http://astrothesaurus.org/uat/74",
      },
      {
        value: "Astrobiology",
        label: "Extraterrestrial life (Astrobiology)",
        uri: "http://astrothesaurus.org/uat/74",
      },
      {
        value: "Astrobiology",
        label: "Space biology (Astrobiology)",
        uri: "http://astrothesaurus.org/uat/74",
      },
      {
        value: "Astrobiology",
        label: "Exobiology (Astrobiology)",
        uri: "http://astrothesaurus.org/uat/74",
      },
      {
        value: "Astronomy software",
        label: "Astronomy software",
        uri: "http://astrothesaurus.org/uat/1855",
      },
      {
        value: "Solar nebulae",
        label: "Solar nebulae",
        uri: "http://astrothesaurus.org/uat/1508",
      },
      {
        value: "Solar nebulae",
        label: "Solar nebula (Solar nebulae)",
        uri: "http://astrothesaurus.org/uat/1508",
      },
      {
        value: "Main sequence",
        label: "Main sequence",
        uri: "http://astrothesaurus.org/uat/2047",
      },
      {
        value: "Lyman alpha forest",
        label: "Lyman alpha forest",
        uri: "http://astrothesaurus.org/uat/980",
      },
      {
        value: "Lyman alpha forest",
        label: "LyÎ± forest (Lyman alpha forest)",
        uri: "http://astrothesaurus.org/uat/980",
      },
      {
        value: "Lyman alpha forest",
        label: "Lyman forest (Lyman alpha forest)",
        uri: "http://astrothesaurus.org/uat/980",
      },
      {
        value: "Lyman alpha forest",
        label: "Lyman-alpha forest (Lyman alpha forest)",
        uri: "http://astrothesaurus.org/uat/980",
      },
      {
        value: "Lyman alpha forest",
        label: "Ly-Î± forest (Lyman alpha forest)",
        uri: "http://astrothesaurus.org/uat/980",
      },
      {
        value: "Standard candles",
        label: "Standard candles",
        uri: "http://astrothesaurus.org/uat/1563",
      },
      {
        value: "Orbital resonances",
        label: "Orbital resonances",
        uri: "http://astrothesaurus.org/uat/1181",
      },
      {
        value: "Orbital resonances",
        label: "Orbital resonance gaps (Orbital resonances)",
        uri: "http://astrothesaurus.org/uat/1181",
      },
      {
        value: "Galaxy tides",
        label: "Galaxy tides",
        uri: "http://astrothesaurus.org/uat/623",
      },
      {
        value: "Galaxy tides",
        label: "Galaxial tides (Galaxy tides)",
        uri: "http://astrothesaurus.org/uat/623",
      },
      {
        value: "Galaxy tides",
        label: "Galactic tides (Galaxy tides)",
        uri: "http://astrothesaurus.org/uat/623",
      },
      {
        value: "Galaxy tides",
        label: "Galaxial tidal interactions (Galaxy tides)",
        uri: "http://astrothesaurus.org/uat/623",
      },
      {
        value: "Galaxy tides",
        label: "Galaxy tidal interactions (Galaxy tides)",
        uri: "http://astrothesaurus.org/uat/623",
      },
      {
        value: "Galaxy tides",
        label: "Galactic tidal interactions (Galaxy tides)",
        uri: "http://astrothesaurus.org/uat/623",
      },
      {
        value: "Disk galaxies",
        label: "Disk galaxies",
        uri: "http://astrothesaurus.org/uat/391",
      },
      {
        value: "Disk galaxies",
        label: "Disc galaxies (Disk galaxies)",
        uri: "http://astrothesaurus.org/uat/391",
      },
      {
        value: "Photon decoupling",
        label: "Photon decoupling",
        uri: "http://astrothesaurus.org/uat/1235",
      },
      {
        value: "Uranus",
        label: "Uranus",
        uri: "http://astrothesaurus.org/uat/1751",
      },
      {
        value: "Time series analysis",
        label: "Time series analysis",
        uri: "http://astrothesaurus.org/uat/1916",
      },
      {
        value: "Galactic coordinate system",
        label: "Galactic coordinate system",
        uri: "http://astrothesaurus.org/uat/566",
      },
      {
        value: "Magellanic Clouds",
        label: "Magellanic Clouds",
        uri: "http://astrothesaurus.org/uat/990",
      },
      {
        value: "Magellanic Clouds",
        label: "Nubeculae Magellani (Magellanic Clouds)",
        uri: "http://astrothesaurus.org/uat/990",
      },
      {
        value: "Early-type emission stars",
        label: "Early-type emission stars",
        uri: "http://astrothesaurus.org/uat/428",
      },
      {
        value: "Early-type emission stars",
        label: "Early type emission stars (Early-type emission stars)",
        uri: "http://astrothesaurus.org/uat/428",
      },
      {
        value: "Annular eclipses",
        label: "Annular eclipses",
        uri: "http://astrothesaurus.org/uat/43",
      },
      {
        value: "Astronomical simulations",
        label: "Astronomical simulations",
        uri: "http://astrothesaurus.org/uat/1857",
      },
      {
        value: "Astronomical simulations",
        label: "Astronomy simulations (Astronomical simulations)",
        uri: "http://astrothesaurus.org/uat/1857",
      },
      {
        value: "Ae stars",
        label: "Ae stars",
        uri: "http://astrothesaurus.org/uat/20",
      },
      {
        value: "Ae stars",
        label: "Ae-type stars (Ae stars)",
        uri: "http://astrothesaurus.org/uat/20",
      },
      {
        value: "Helium-weak stars",
        label: "Helium-weak stars",
        uri: "http://astrothesaurus.org/uat/717",
      },
      {
        value: "Helium-weak stars",
        label: "Helium poor stars (Helium-weak stars)",
        uri: "http://astrothesaurus.org/uat/717",
      },
      {
        value: "Helium-weak stars",
        label: "CP4 (Helium-weak stars)",
        uri: "http://astrothesaurus.org/uat/717",
      },
      {
        value: "Helium-weak stars",
        label: "He-weak stars (Helium-weak stars)",
        uri: "http://astrothesaurus.org/uat/717",
      },
      {
        value: "Helium-weak stars",
        label: "Helium-poor stars (Helium-weak stars)",
        uri: "http://astrothesaurus.org/uat/717",
      },
      {
        value: "Helium-weak stars",
        label: "Helium weak stars (Helium-weak stars)",
        uri: "http://astrothesaurus.org/uat/717",
      },
      {
        value: "Solar active regions",
        label: "Solar active regions",
        uri: "http://astrothesaurus.org/uat/1974",
      },
      {
        value: "Solar active regions",
        label: "Active solar regions (Solar active regions)",
        uri: "http://astrothesaurus.org/uat/1974",
      },
      {
        value: "Solar radio flares",
        label: "Solar radio flares",
        uri: "http://astrothesaurus.org/uat/1342",
      },
      {
        value: "Solar coronal mass ejection shocks",
        label: "Solar coronal mass ejection shocks",
        uri: "http://astrothesaurus.org/uat/1997",
      },
      {
        value: "Solar coronal mass ejection shocks",
        label: "Solar CME shocks (Solar coronal mass ejection shocks)",
        uri: "http://astrothesaurus.org/uat/1997",
      },
      {
        value: "Exoplanet plate tectonics",
        label: "Exoplanet plate tectonics",
        uri: "http://astrothesaurus.org/uat/493",
      },
      {
        value: "Young star clusters",
        label: "Young star clusters",
        uri: "http://astrothesaurus.org/uat/1833",
      },
      {
        value: "Mass-to-light ratio",
        label: "Mass-to-light ratio",
        uri: "http://astrothesaurus.org/uat/1011",
      },
      {
        value: "Ground-based astronomy",
        label: "Ground-based astronomy",
        uri: "http://astrothesaurus.org/uat/686",
      },
      {
        value: "Ground-based astronomy",
        label: "Ground based astronomy (Ground-based astronomy)",
        uri: "http://astrothesaurus.org/uat/686",
      },
      {
        value: "Transmission spectroscopy",
        label: "Transmission spectroscopy",
        uri: "http://astrothesaurus.org/uat/2133",
      },
      {
        value: "Transmission spectroscopy",
        label: "Atmospheric transmission (Transmission spectroscopy)",
        uri: "http://astrothesaurus.org/uat/2133",
      },
      {
        value: "Reddening law",
        label: "Reddening law",
        uri: "http://astrothesaurus.org/uat/1377",
      },
      {
        value: "High-redshift galaxies",
        label: "High-redshift galaxies",
        uri: "http://astrothesaurus.org/uat/734",
      },
      {
        value: "Single-dish antennas",
        label: "Single-dish antennas",
        uri: "http://astrothesaurus.org/uat/1460",
      },
      {
        value: "CO line emission",
        label: "CO line emission",
        uri: "http://astrothesaurus.org/uat/262",
      },
      {
        value: "Cepheid distance",
        label: "Cepheid distance",
        uri: "http://astrothesaurus.org/uat/217",
      },
      {
        value: "B dwarf stars",
        label: "B dwarf stars",
        uri: "http://astrothesaurus.org/uat/126",
      },
      {
        value: "B dwarf stars",
        label: "B-type dwarfs (B dwarf stars)",
        uri: "http://astrothesaurus.org/uat/126",
      },
      {
        value: "B dwarf stars",
        label: "B-type dwarf stars (B dwarf stars)",
        uri: "http://astrothesaurus.org/uat/126",
      },
      {
        value: "B dwarf stars",
        label: "B dwarfs (B dwarf stars)",
        uri: "http://astrothesaurus.org/uat/126",
      },
      {
        value: "Intermediate-mass black holes",
        label: "Intermediate-mass black holes",
        uri: "http://astrothesaurus.org/uat/816",
      },
      {
        value: "Stellar x-ray flares",
        label: "Stellar x-ray flares",
        uri: "http://astrothesaurus.org/uat/1637",
      },
      {
        value: "Flyby missions",
        label: "Flyby missions",
        uri: "http://astrothesaurus.org/uat/545",
      },
      {
        value: "Pointing error",
        label: "Pointing error",
        uri: "http://astrothesaurus.org/uat/1272",
      },
      {
        value: "Extrasolar rocky planets",
        label: "Extrasolar rocky planets",
        uri: "http://astrothesaurus.org/uat/511",
      },
      {
        value: "Extrasolar rocky planets",
        label: "Rocky planets (Extrasolar rocky planets)",
        uri: "http://astrothesaurus.org/uat/511",
      },
      {
        value: "Ultra-high-energy cosmic radiation",
        label: "Ultra-high-energy cosmic radiation",
        uri: "http://astrothesaurus.org/uat/1733",
      },
      {
        value: "Ultra-high-energy cosmic radiation",
        label:
          "Ultra high energy cosmic rays (Ultra-high-energy cosmic radiation)",
        uri: "http://astrothesaurus.org/uat/1733",
      },
      {
        value: "Ultra-high-energy cosmic radiation",
        label:
          "Ultra high energy cosmic radiation (Ultra-high-energy cosmic radiation)",
        uri: "http://astrothesaurus.org/uat/1733",
      },
      {
        value: "Ultra-high-energy cosmic radiation",
        label:
          "Ultra-high-energy-cosmic rays (Ultra-high-energy cosmic radiation)",
        uri: "http://astrothesaurus.org/uat/1733",
      },
      {
        value: "Red noise",
        label: "Red noise",
        uri: "http://astrothesaurus.org/uat/1956",
      },
      {
        value: "Sunspots",
        label: "Sunspots",
        uri: "http://astrothesaurus.org/uat/1653",
      },
      {
        value: "Sunspots",
        label: "Sun spots (Sunspots)",
        uri: "http://astrothesaurus.org/uat/1653",
      },
      {
        value: "Solar activity",
        label: "Solar activity",
        uri: "http://astrothesaurus.org/uat/1475",
      },
      {
        value: "Right ascension",
        label: "Right ascension",
        uri: "http://astrothesaurus.org/uat/1399",
      },
      {
        value: "Right ascension",
        label: "Celestial longitude (Right ascension)",
        uri: "http://astrothesaurus.org/uat/1399",
      },
      {
        value: "Galaxy cluster counts",
        label: "Galaxy cluster counts",
        uri: "http://astrothesaurus.org/uat/583",
      },
      {
        value: "Galaxy cluster counts",
        label: "Galaxy cluster counting (Galaxy cluster counts)",
        uri: "http://astrothesaurus.org/uat/583",
      },
      {
        value: "Baker-Nunn cameras",
        label: "Baker-Nunn cameras",
        uri: "http://astrothesaurus.org/uat/134",
      },
      {
        value: "Green valley galaxies",
        label: "Green valley galaxies",
        uri: "http://astrothesaurus.org/uat/683",
      },
      {
        value: "Phase defect",
        label: "Phase defect",
        uri: "http://astrothesaurus.org/uat/1218",
      },
      {
        value: "Telescope focal plane photography",
        label: "Telescope focal plane photography",
        uri: "http://astrothesaurus.org/uat/1687",
      },
      {
        value: "Dimensionality reduction",
        label: "Dimensionality reduction",
        uri: "http://astrothesaurus.org/uat/1943",
      },
      {
        value: "Very long baseline interferometers",
        label: "Very long baseline interferometers",
        uri: "http://astrothesaurus.org/uat/1768",
      },
      {
        value: "Very long baseline interferometers",
        label: "VLB arrays (Very long baseline interferometers)",
        uri: "http://astrothesaurus.org/uat/1768",
      },
      {
        value: "Stellar remnants",
        label: "Stellar remnants",
        uri: "http://astrothesaurus.org/uat/1627",
      },
      {
        value: "Stellar remnants",
        label: "Late stages of stellar evolution (Stellar remnants)",
        uri: "http://astrothesaurus.org/uat/1627",
      },
      {
        value: "Stellar remnants",
        label: "Late stage stellar evolution (Stellar remnants)",
        uri: "http://astrothesaurus.org/uat/1627",
      },
      {
        value: "Stellar remnants",
        label: "Late-stage stellar evolution (Stellar remnants)",
        uri: "http://astrothesaurus.org/uat/1627",
      },
      {
        value: "Stellar photospheres",
        label: "Stellar photospheres",
        uri: "http://astrothesaurus.org/uat/1237",
      },
      {
        value: "Stellar photospheres",
        label: "Photospheres (Stellar photospheres)",
        uri: "http://astrothesaurus.org/uat/1237",
      },
      {
        value: "Credible region",
        label: "Credible region",
        uri: "http://astrothesaurus.org/uat/1962",
      },
      {
        value: "Sigma8",
        label: "Sigma8",
        uri: "http://astrothesaurus.org/uat/1455",
      },
      {
        value: "Sigma8",
        label: "Sigma 8 (Sigma8)",
        uri: "http://astrothesaurus.org/uat/1455",
      },
      {
        value: "Sigma8",
        label: "Sigma-8 (Sigma8)",
        uri: "http://astrothesaurus.org/uat/1455",
      },
      {
        value: "Galaxy stellar disks",
        label: "Galaxy stellar disks",
        uri: "http://astrothesaurus.org/uat/1594",
      },
      {
        value: "Galaxy stellar disks",
        label: "Stellar disks (Galaxy stellar disks)",
        uri: "http://astrothesaurus.org/uat/1594",
      },
      {
        value: "Einstein field equations",
        label: "Einstein field equations",
        uri: "http://astrothesaurus.org/uat/450",
      },
      {
        value: "Lenticular galaxies",
        label: "Lenticular galaxies",
        uri: "http://astrothesaurus.org/uat/915",
      },
      {
        value: "Lenticular galaxies",
        label: "S0 galaxies (Lenticular galaxies)",
        uri: "http://astrothesaurus.org/uat/915",
      },
      {
        value: "Isothermal sphere profile",
        label: "Isothermal sphere profile",
        uri: "http://astrothesaurus.org/uat/866",
      },
      {
        value: "Astrometric binary stars",
        label: "Astrometric binary stars",
        uri: "http://astrothesaurus.org/uat/79",
      },
      {
        value: "Astrometric binary stars",
        label: "Astrometric binaries (Astrometric binary stars)",
        uri: "http://astrothesaurus.org/uat/79",
      },
      {
        value: "Initial mass function",
        label: "Initial mass function",
        uri: "http://astrothesaurus.org/uat/796",
      },
      {
        value: "X-ray detectors",
        label: "X-ray detectors",
        uri: "http://astrothesaurus.org/uat/1815",
      },
      {
        value: "Galaxy stellar content",
        label: "Galaxy stellar content",
        uri: "http://astrothesaurus.org/uat/621",
      },
      {
        value: "Galaxy stellar content",
        label: "Galactic stellar populations (Galaxy stellar content)",
        uri: "http://astrothesaurus.org/uat/621",
      },
      {
        value: "Oort constants",
        label: "Oort constants",
        uri: "http://astrothesaurus.org/uat/1159",
      },
      {
        value: "Spectral energy distribution",
        label: "Spectral energy distribution",
        uri: "http://astrothesaurus.org/uat/2129",
      },
      {
        value: "Spectral energy distribution",
        label: "SED (Spectral energy distribution)",
        uri: "http://astrothesaurus.org/uat/2129",
      },
      {
        value: "Baryogenesis",
        label: "Baryogenesis",
        uri: "http://astrothesaurus.org/uat/137",
      },
      {
        value: "Baryogenesis",
        label: "Matter-antimatter asymmetry (Baryogenesis)",
        uri: "http://astrothesaurus.org/uat/137",
      },
      {
        value: "Penrose process",
        label: "Penrose process",
        uri: "http://astrothesaurus.org/uat/1204",
      },
      {
        value: "Penrose process",
        label: "Penrose mechanism (Penrose process)",
        uri: "http://astrothesaurus.org/uat/1204",
      },
      {
        value: "Radiative braking",
        label: "Radiative braking",
        uri: "http://astrothesaurus.org/uat/1334",
      },
      {
        value: "Very Large Array",
        label: "Very Large Array",
        uri: "http://astrothesaurus.org/uat/1766",
      },
      {
        value: "Very Large Array",
        label: "VLA (Very Large Array)",
        uri: "http://astrothesaurus.org/uat/1766",
      },
      {
        value: "Gamma-ray lines",
        label: "Gamma-ray lines",
        uri: "http://astrothesaurus.org/uat/631",
      },
      {
        value: "Gamma-ray lines",
        label: "Gamma ray line (Gamma-ray lines)",
        uri: "http://astrothesaurus.org/uat/631",
      },
      {
        value: "Gamma-ray lines",
        label: "Gamma ray lines (Gamma-ray lines)",
        uri: "http://astrothesaurus.org/uat/631",
      },
      {
        value: "Hayashi track",
        label: "Hayashi track",
        uri: "http://astrothesaurus.org/uat/704",
      },
      {
        value: "Small Solar System bodies",
        label: "Small Solar System bodies",
        uri: "http://astrothesaurus.org/uat/1469",
      },
      {
        value: "Small Solar System bodies",
        label: "SSSB (Small Solar System bodies)",
        uri: "http://astrothesaurus.org/uat/1469",
      },
      {
        value: "Small Solar System bodies",
        label: "Small Solar System body (Small Solar System bodies)",
        uri: "http://astrothesaurus.org/uat/1469",
      },
      {
        value: "Small Solar System bodies",
        label: "SSSBs (Small Solar System bodies)",
        uri: "http://astrothesaurus.org/uat/1469",
      },
      {
        value: "Small Solar System bodies",
        label: "Minor planets (Small Solar System bodies)",
        uri: "http://astrothesaurus.org/uat/1469",
      },
      {
        value: "WZ Sagittae stars",
        label: "WZ Sagittae stars",
        uri: "http://astrothesaurus.org/uat/1809",
      },
      {
        value: "WZ Sagittae stars",
        label: "WZ Sge stars (WZ Sagittae stars)",
        uri: "http://astrothesaurus.org/uat/1809",
      },
      {
        value: "S-process",
        label: "S-process",
        uri: "http://astrothesaurus.org/uat/1419",
      },
      {
        value: "S-process",
        label: "Slow-neutron-capture process (S-process)",
        uri: "http://astrothesaurus.org/uat/1419",
      },
      {
        value: "S-process",
        label: "S process (S-process)",
        uri: "http://astrothesaurus.org/uat/1419",
      },
      {
        value: "Solar flares",
        label: "Solar flares",
        uri: "http://astrothesaurus.org/uat/1496",
      },
      {
        value: "Stellar dynamics",
        label: "Stellar dynamics",
        uri: "http://astrothesaurus.org/uat/1596",
      },
      {
        value: "Troposphere",
        label: "Troposphere",
        uri: "http://astrothesaurus.org/uat/1718",
      },
      {
        value: "Ultraviolet astronomy",
        label: "Ultraviolet astronomy",
        uri: "http://astrothesaurus.org/uat/1736",
      },
      {
        value: "Ultraviolet astronomy",
        label: "UV astronomy (Ultraviolet astronomy)",
        uri: "http://astrothesaurus.org/uat/1736",
      },
      {
        value: "Earth atmosphere",
        label: "Earth atmosphere",
        uri: "http://astrothesaurus.org/uat/437",
      },
      {
        value: "Earth atmosphere",
        label: "Terrestrial atmosphere (Earth atmosphere)",
        uri: "http://astrothesaurus.org/uat/437",
      },
      {
        value: "Stellar atmospheres",
        label: "Stellar atmospheres",
        uri: "http://astrothesaurus.org/uat/1584",
      },
      {
        value: "Naked singularities",
        label: "Naked singularities",
        uri: "http://astrothesaurus.org/uat/1087",
      },
      {
        value: "Cold Neptunes",
        label: "Cold Neptunes",
        uri: "http://astrothesaurus.org/uat/2132",
      },
      {
        value: "Ptolemy stones",
        label: "Ptolemy stones",
        uri: "http://astrothesaurus.org/uat/1303",
      },
      {
        value: "Intergalactic abundances",
        label: "Intergalactic abundances",
        uri: "http://astrothesaurus.org/uat/2003",
      },
      {
        value: "Spiral galaxies",
        label: "Spiral galaxies",
        uri: "http://astrothesaurus.org/uat/1560",
      },
      {
        value: "Spiral galaxies",
        label: "S galaxies (Spiral galaxies)",
        uri: "http://astrothesaurus.org/uat/1560",
      },
      {
        value: "North galactic pole",
        label: "North galactic pole",
        uri: "http://astrothesaurus.org/uat/1125",
      },
      {
        value: "North galactic pole",
        label: "N.G.P. (North galactic pole)",
        uri: "http://astrothesaurus.org/uat/1125",
      },
      {
        value: "North galactic pole",
        label: "NGP (North galactic pole)",
        uri: "http://astrothesaurus.org/uat/1125",
      },
      {
        value: "Lunar atmosphere",
        label: "Lunar atmosphere",
        uri: "http://astrothesaurus.org/uat/947",
      },
      {
        value: "Ceres",
        label: "Ceres",
        uri: "http://astrothesaurus.org/uat/219",
      },
      {
        value: "Ceres",
        label: "(1) Ceres (Ceres)",
        uri: "http://astrothesaurus.org/uat/219",
      },
      {
        value: "Ceres",
        label: "Asteroid Ceres (Ceres)",
        uri: "http://astrothesaurus.org/uat/219",
      },
      {
        value: "Ceres",
        label: "1 Ceres (Ceres)",
        uri: "http://astrothesaurus.org/uat/219",
      },
      {
        value: "A dwarf stars",
        label: "A dwarf stars",
        uri: "http://astrothesaurus.org/uat/3",
      },
      {
        value: "A dwarf stars",
        label: "A dwarfs (A dwarf stars)",
        uri: "http://astrothesaurus.org/uat/3",
      },
      {
        value: "A dwarf stars",
        label: "A-type dwarf stars (A dwarf stars)",
        uri: "http://astrothesaurus.org/uat/3",
      },
      {
        value: "A dwarf stars",
        label: "A-type dwarfs (A dwarf stars)",
        uri: "http://astrothesaurus.org/uat/3",
      },
      {
        value: "GÃ¶del universe",
        label: "GÃ¶del universe",
        uri: "http://astrothesaurus.org/uat/657",
      },
      {
        value: "GÃ¶del universe",
        label: "Goedel universe (GÃ¶del universe)",
        uri: "http://astrothesaurus.org/uat/657",
      },
      {
        value: "GÃ¶del universe",
        label: "Godel universe (GÃ¶del universe)",
        uri: "http://astrothesaurus.org/uat/657",
      },
      {
        value: "GÃ¶del universe",
        label: "Constructible universe (GÃ¶del universe)",
        uri: "http://astrothesaurus.org/uat/657",
      },
      {
        value: "Gravity darkening",
        label: "Gravity darkening",
        uri: "http://astrothesaurus.org/uat/680",
      },
      {
        value: "Gravity darkening",
        label: "Gravity brightening (Gravity darkening)",
        uri: "http://astrothesaurus.org/uat/680",
      },
      {
        value: "South ecliptic pole",
        label: "South ecliptic pole",
        uri: "http://astrothesaurus.org/uat/1539",
      },
      {
        value: "South ecliptic pole",
        label: "S. e. p. (South ecliptic pole)",
        uri: "http://astrothesaurus.org/uat/1539",
      },
      {
        value: "South ecliptic pole",
        label: "S e p (South ecliptic pole)",
        uri: "http://astrothesaurus.org/uat/1539",
      },
      {
        value: "Solar oscillations",
        label: "Solar oscillations",
        uri: "http://astrothesaurus.org/uat/1515",
      },
      {
        value: "Circular orbits",
        label: "Circular orbits",
        uri: "http://astrothesaurus.org/uat/233",
      },
      {
        value: "Circular orbits",
        label: "Circular orbit (Circular orbits)",
        uri: "http://astrothesaurus.org/uat/233",
      },
      {
        value: "F giant stars",
        label: "F giant stars",
        uri: "http://astrothesaurus.org/uat/517",
      },
      {
        value: "F giant stars",
        label: "F-type giant stars (F giant stars)",
        uri: "http://astrothesaurus.org/uat/517",
      },
      {
        value: "F giant stars",
        label: "F giants (F giant stars)",
        uri: "http://astrothesaurus.org/uat/517",
      },
      {
        value: "F giant stars",
        label: "F-type giants (F giant stars)",
        uri: "http://astrothesaurus.org/uat/517",
      },
      {
        value: "Radio transient sources",
        label: "Radio transient sources",
        uri: "http://astrothesaurus.org/uat/2008",
      },
      {
        value: "Radio transient sources",
        label: "Fast radio bursts (Radio transient sources)",
        uri: "http://astrothesaurus.org/uat/2008",
      },
      {
        value: "Radio transient sources",
        label: "FRB (Radio transient sources)",
        uri: "http://astrothesaurus.org/uat/2008",
      },
      {
        value: "Radio transient sources",
        label: "Lorimer Burst (Radio transient sources)",
        uri: "http://astrothesaurus.org/uat/2008",
      },
      {
        value: "Radio transient sources",
        label: "Fast radio burst (Radio transient sources)",
        uri: "http://astrothesaurus.org/uat/2008",
      },
      {
        value: "Radio transient sources",
        label: "FRBs (Radio transient sources)",
        uri: "http://astrothesaurus.org/uat/2008",
      },
      {
        value: "Lyman-alpha forest clouds",
        label: "Lyman-alpha forest clouds",
        uri: "http://astrothesaurus.org/uat/977",
      },
      {
        value: "Lyman-alpha forest clouds",
        label: "Lyman alpha forest clouds (Lyman-alpha forest clouds)",
        uri: "http://astrothesaurus.org/uat/977",
      },
      {
        value: "Proper motions",
        label: "Proper motions",
        uri: "http://astrothesaurus.org/uat/1295",
      },
      {
        value: "Proper motions",
        label: "Stellar spatial motions (Proper motions)",
        uri: "http://astrothesaurus.org/uat/1295",
      },
      {
        value: "Equatorial coordinate system",
        label: "Equatorial coordinate system",
        uri: "http://astrothesaurus.org/uat/467",
      },
      {
        value: "Equatorial coordinate system",
        label: "Equatorial system (Equatorial coordinate system)",
        uri: "http://astrothesaurus.org/uat/467",
      },
      {
        value: "Equatorial coordinate system",
        label: "Celestial coordinate (Equatorial coordinate system)",
        uri: "http://astrothesaurus.org/uat/467",
      },
      {
        value: "Pre-main sequence",
        label: "Pre-main sequence",
        uri: "http://astrothesaurus.org/uat/1289",
      },
      {
        value: "Earth trojans",
        label: "Earth trojans",
        uri: "http://astrothesaurus.org/uat/438",
      },
      {
        value: "G stars",
        label: "G stars",
        uri: "http://astrothesaurus.org/uat/558",
      },
      {
        value: "G stars",
        label: "G-type stars (G stars)",
        uri: "http://astrothesaurus.org/uat/558",
      },
      {
        value: "G stars",
        label: "Class G stars (G stars)",
        uri: "http://astrothesaurus.org/uat/558",
      },
      {
        value: "M subdwarf stars",
        label: "M subdwarf stars",
        uri: "http://astrothesaurus.org/uat/986",
      },
      {
        value: "M subdwarf stars",
        label: "M-type subdwarfs (M subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/986",
      },
      {
        value: "M subdwarf stars",
        label: "M subdwarfs (M subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/986",
      },
      {
        value: "M subdwarf stars",
        label: "M-type subdwarf stars (M subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/986",
      },
      {
        value: "Brightness temperature",
        label: "Brightness temperature",
        uri: "http://astrothesaurus.org/uat/182",
      },
      {
        value: "Primordial magnetic fields",
        label: "Primordial magnetic fields",
        uri: "http://astrothesaurus.org/uat/1294",
      },
      {
        value: "Subgiant stars",
        label: "Subgiant stars",
        uri: "http://astrothesaurus.org/uat/1646",
      },
      {
        value: "Subgiant stars",
        label: "Subgiants (Subgiant stars)",
        uri: "http://astrothesaurus.org/uat/1646",
      },
      {
        value: "Luminous infrared galaxies",
        label: "Luminous infrared galaxies",
        uri: "http://astrothesaurus.org/uat/946",
      },
      {
        value: "Luminous infrared galaxies",
        label: "LIRGs (Luminous infrared galaxies)",
        uri: "http://astrothesaurus.org/uat/946",
      },
      {
        value: "Luminous infrared galaxies",
        label: "IRAS galaxies (Luminous infrared galaxies)",
        uri: "http://astrothesaurus.org/uat/946",
      },
      {
        value: "Luminous infrared galaxies",
        label: "LIRG (Luminous infrared galaxies)",
        uri: "http://astrothesaurus.org/uat/946",
      },
      {
        value: "B subdwarf stars",
        label: "B subdwarf stars",
        uri: "http://astrothesaurus.org/uat/129",
      },
      {
        value: "B subdwarf stars",
        label: "B subdwarfs (B subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/129",
      },
      {
        value: "B subdwarf stars",
        label: "B-type subdwarfs (B subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/129",
      },
      {
        value: "B subdwarf stars",
        label: "B-type subdwarf stars (B subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/129",
      },
      {
        value: "Major axis",
        label: "Major axis",
        uri: "http://astrothesaurus.org/uat/1001",
      },
      {
        value: "Exoplanet surface characteristics",
        label: "Exoplanet surface characteristics",
        uri: "http://astrothesaurus.org/uat/496",
      },
      {
        value: "Tidal disruption",
        label: "Tidal disruption",
        uri: "http://astrothesaurus.org/uat/1696",
      },
      {
        value: "Tidal disruption",
        label: "Tidal filament hypothesis (Tidal disruption)",
        uri: "http://astrothesaurus.org/uat/1696",
      },
      {
        value: "CII region",
        label: "CII region",
        uri: "http://astrothesaurus.org/uat/232",
      },
      {
        value: "Poisson distribution",
        label: "Poisson distribution",
        uri: "http://astrothesaurus.org/uat/1898",
      },
      {
        value: "Classification",
        label: "Classification",
        uri: "http://astrothesaurus.org/uat/1907",
      },
      {
        value: "Chemically peculiar giant stars",
        label: "Chemically peculiar giant stars",
        uri: "http://astrothesaurus.org/uat/1201",
      },
      {
        value: "Chemically peculiar giant stars",
        label: "Peculiar giants (Chemically peculiar giant stars)",
        uri: "http://astrothesaurus.org/uat/1201",
      },
      {
        value: "Chemically peculiar giant stars",
        label: "Peculiar giant stars (Chemically peculiar giant stars)",
        uri: "http://astrothesaurus.org/uat/1201",
      },
      {
        value: "Zero-age horizontal branch stars",
        label: "Zero-age horizontal branch stars",
        uri: "http://astrothesaurus.org/uat/1842",
      },
      {
        value: "Zero-age horizontal branch stars",
        label:
          "Zero age horizontal branch stars (Zero-age horizontal branch stars)",
        uri: "http://astrothesaurus.org/uat/1842",
      },
      {
        value: "Zero-age horizontal branch stars",
        label: "ZAHB (Zero-age horizontal branch stars)",
        uri: "http://astrothesaurus.org/uat/1842",
      },
      {
        value: "Zero-age horizontal branch stars",
        label: "ZAHB stars (Zero-age horizontal branch stars)",
        uri: "http://astrothesaurus.org/uat/1842",
      },
      {
        value: "Red giant tip",
        label: "Red giant tip",
        uri: "http://astrothesaurus.org/uat/1371",
      },
      {
        value: "Cosmology",
        label: "Cosmology",
        uri: "http://astrothesaurus.org/uat/343",
      },
      {
        value: "Cosmology",
        label: "Physical cosmology (Cosmology)",
        uri: "http://astrothesaurus.org/uat/343",
      },
      {
        value: "Anomalistic month",
        label: "Anomalistic month",
        uri: "http://astrothesaurus.org/uat/44",
      },
      {
        value: "Black hole physics",
        label: "Black hole physics",
        uri: "http://astrothesaurus.org/uat/159",
      },
      {
        value: "Population I stars",
        label: "Population I stars",
        uri: "http://astrothesaurus.org/uat/1282",
      },
      {
        value: "Population I stars",
        label: "Population one stars (Population I stars)",
        uri: "http://astrothesaurus.org/uat/1282",
      },
      {
        value: "Population I stars",
        label: "Pop I (Population I stars)",
        uri: "http://astrothesaurus.org/uat/1282",
      },
      {
        value: "Population I stars",
        label: "Population 1 stars (Population I stars)",
        uri: "http://astrothesaurus.org/uat/1282",
      },
      {
        value: "Intercloud medium",
        label: "Intercloud medium",
        uri: "http://astrothesaurus.org/uat/803",
      },
      {
        value: "Intercloud medium",
        label: "Intercloud gas (Intercloud medium)",
        uri: "http://astrothesaurus.org/uat/803",
      },
      {
        value: "Planetary migration",
        label: "Planetary migration",
        uri: "http://astrothesaurus.org/uat/2206",
      },
      {
        value: "Plages",
        label: "Plages",
        uri: "http://astrothesaurus.org/uat/1240",
      },
      {
        value: "Reverberation mapping",
        label: "Reverberation mapping",
        uri: "http://astrothesaurus.org/uat/2019",
      },
      {
        value: "Schmidt cameras",
        label: "Schmidt cameras",
        uri: "http://astrothesaurus.org/uat/1432",
      },
      {
        value: "Schmidt cameras",
        label: "Schmidt telescopes (Schmidt cameras)",
        uri: "http://astrothesaurus.org/uat/1432",
      },
      {
        value: "Winter solstice",
        label: "Winter solstice",
        uri: "http://astrothesaurus.org/uat/1804",
      },
      {
        value: "Gravitational waves",
        label: "Gravitational waves",
        uri: "http://astrothesaurus.org/uat/678",
      },
      {
        value: "Stellar accretion disks",
        label: "Stellar accretion disks",
        uri: "http://astrothesaurus.org/uat/1579",
      },
      {
        value: "Stellar accretion disks",
        label: "Stellar accretion discs (Stellar accretion disks)",
        uri: "http://astrothesaurus.org/uat/1579",
      },
      {
        value: "X-ray identification",
        label: "X-ray identification",
        uri: "http://astrothesaurus.org/uat/1817",
      },
      {
        value: "Henry Draper catalog",
        label: "Henry Draper catalog",
        uri: "http://astrothesaurus.org/uat/719",
      },
      {
        value: "Henry Draper catalog",
        label: "Henry Draper Catalogue (Henry Draper catalog)",
        uri: "http://astrothesaurus.org/uat/719",
      },
      {
        value: "Henry Draper catalog",
        label: "Henry Draper catalogue (Henry Draper catalog)",
        uri: "http://astrothesaurus.org/uat/719",
      },
      {
        value: "Henry Draper catalog",
        label: "Henry Draper system (Henry Draper catalog)",
        uri: "http://astrothesaurus.org/uat/719",
      },
      {
        value: "Henry Draper catalog",
        label: "HD catalog (Henry Draper catalog)",
        uri: "http://astrothesaurus.org/uat/719",
      },
      {
        value: "Henry Draper catalog",
        label: "HD system (Henry Draper catalog)",
        uri: "http://astrothesaurus.org/uat/719",
      },
      {
        value: "Henry Draper catalog",
        label: "Harvard classification (Henry Draper catalog)",
        uri: "http://astrothesaurus.org/uat/719",
      },
      {
        value: "Stellar-interstellar interactions",
        label: "Stellar-interstellar interactions",
        uri: "http://astrothesaurus.org/uat/1576",
      },
      {
        value: "Comet origins",
        label: "Comet origins",
        uri: "http://astrothesaurus.org/uat/2203",
      },
      {
        value: "Celestial poles",
        label: "Celestial poles",
        uri: "http://astrothesaurus.org/uat/213",
      },
      {
        value: "Measurement error model",
        label: "Measurement error model",
        uri: "http://astrothesaurus.org/uat/1946",
      },
      {
        value: "CH stars",
        label: "CH stars",
        uri: "http://astrothesaurus.org/uat/220",
      },
      {
        value: "Matter density",
        label: "Matter density",
        uri: "http://astrothesaurus.org/uat/1014",
      },
      {
        value: "Very small grains",
        label: "Very small grains",
        uri: "http://astrothesaurus.org/uat/1770",
      },
      {
        value: "Periodic orbit",
        label: "Periodic orbit",
        uri: "http://astrothesaurus.org/uat/1212",
      },
      {
        value: "Cometary nebulae",
        label: "Cometary nebulae",
        uri: "http://astrothesaurus.org/uat/278",
      },
      {
        value: "Cometary nebulae",
        label: "Cometary nebulas (Cometary nebulae)",
        uri: "http://astrothesaurus.org/uat/278",
      },
      {
        value: "Solar coronal mass ejections",
        label: "Solar coronal mass ejections",
        uri: "http://astrothesaurus.org/uat/310",
      },
      {
        value: "Solar coronal mass ejections",
        label: "CME (Solar coronal mass ejections)",
        uri: "http://astrothesaurus.org/uat/310",
      },
      {
        value: "Importance sampling",
        label: "Importance sampling",
        uri: "http://astrothesaurus.org/uat/1892",
      },
      {
        value: "Interplanetary turbulence",
        label: "Interplanetary turbulence",
        uri: "http://astrothesaurus.org/uat/830",
      },
      {
        value: "Spacetime metric",
        label: "Spacetime metric",
        uri: "http://astrothesaurus.org/uat/1550",
      },
      {
        value: "Quantum cosmology",
        label: "Quantum cosmology",
        uri: "http://astrothesaurus.org/uat/1313",
      },
      {
        value: "Metropolis-Hastings",
        label: "Metropolis-Hastings",
        uri: "http://astrothesaurus.org/uat/1893",
      },
      {
        value: "Planetary system formation",
        label: "Planetary system formation",
        uri: "http://astrothesaurus.org/uat/1257",
      },
      {
        value: "Sculptor dwarf elliptical galaxy",
        label: "Sculptor dwarf elliptical galaxy",
        uri: "http://astrothesaurus.org/uat/1436",
      },
      {
        value: "Type II Cepheid variable stars",
        label: "Type II Cepheid variable stars",
        uri: "http://astrothesaurus.org/uat/2124",
      },
      {
        value: "Charged black holes",
        label: "Charged black holes",
        uri: "http://astrothesaurus.org/uat/223",
      },
      {
        value: "Radio source counts",
        label: "Radio source counts",
        uri: "http://astrothesaurus.org/uat/1357",
      },
      {
        value: "Martian satellites",
        label: "Martian satellites",
        uri: "http://astrothesaurus.org/uat/1009",
      },
      {
        value: "Martian satellites",
        label: "Deimos (Martian satellites)",
        uri: "http://astrothesaurus.org/uat/1009",
      },
      {
        value: "Martian satellites",
        label: "Martian moons (Martian satellites)",
        uri: "http://astrothesaurus.org/uat/1009",
      },
      {
        value: "Martian satellites",
        label: "Phobos (Martian satellites)",
        uri: "http://astrothesaurus.org/uat/1009",
      },
      {
        value: "Martian satellites",
        label: "Moons of Mars (Martian satellites)",
        uri: "http://astrothesaurus.org/uat/1009",
      },
      {
        value: "Coronagraphic imaging",
        label: "Coronagraphic imaging",
        uri: "http://astrothesaurus.org/uat/313",
      },
      {
        value: "Coronagraphic imaging",
        label: "Coronographic imaging (Coronagraphic imaging)",
        uri: "http://astrothesaurus.org/uat/313",
      },
      {
        value: "Coronagraphic imaging",
        label: "Coronographic detection (Coronagraphic imaging)",
        uri: "http://astrothesaurus.org/uat/313",
      },
      {
        value: "Coronagraphic imaging",
        label: "Coronagraphic detection (Coronagraphic imaging)",
        uri: "http://astrothesaurus.org/uat/313",
      },
      {
        value: "Jovian satellites",
        label: "Jovian satellites",
        uri: "http://astrothesaurus.org/uat/872",
      },
      {
        value: "Jovian satellites",
        label: "Jupiter's moons (Jovian satellites)",
        uri: "http://astrothesaurus.org/uat/872",
      },
      {
        value: "Jovian satellites",
        label: "Classical satellites (Jovian satellites)",
        uri: "http://astrothesaurus.org/uat/872",
      },
      {
        value: "Jovian satellites",
        label: "Jupiter's satellites (Jovian satellites)",
        uri: "http://astrothesaurus.org/uat/872",
      },
      {
        value: "Jovian satellites",
        label: "Jovian moons (Jovian satellites)",
        uri: "http://astrothesaurus.org/uat/872",
      },
      {
        value: "Jovian satellites",
        label: "Moons of Jupiter (Jovian satellites)",
        uri: "http://astrothesaurus.org/uat/872",
      },
      {
        value: "Gas-to-dust ratio",
        label: "Gas-to-dust ratio",
        uri: "http://astrothesaurus.org/uat/638",
      },
      {
        value: "Gas-to-dust ratio",
        label: "Dust to gas ratio (Gas-to-dust ratio)",
        uri: "http://astrothesaurus.org/uat/638",
      },
      {
        value: "Gas-to-dust ratio",
        label: "Dust-to-gas ratio (Gas-to-dust ratio)",
        uri: "http://astrothesaurus.org/uat/638",
      },
      {
        value: "Gas-to-dust ratio",
        label: "Gas to dust ratio (Gas-to-dust ratio)",
        uri: "http://astrothesaurus.org/uat/638",
      },
      {
        value: "Photometry",
        label: "Photometry",
        uri: "http://astrothesaurus.org/uat/1234",
      },
      {
        value: "Stellar nucleosynthesis",
        label: "Stellar nucleosynthesis",
        uri: "http://astrothesaurus.org/uat/1616",
      },
      {
        value: "Apollo group",
        label: "Apollo group",
        uri: "http://astrothesaurus.org/uat/58",
      },
      {
        value: "Apollo group",
        label: "Apollo asteroids (Apollo group)",
        uri: "http://astrothesaurus.org/uat/58",
      },
      {
        value: "Scale height",
        label: "Scale height",
        uri: "http://astrothesaurus.org/uat/1429",
      },
      {
        value: "Stellar processes",
        label: "Stellar processes",
        uri: "http://astrothesaurus.org/uat/1623",
      },
      {
        value: "Atomic interferometry",
        label: "Atomic interferometry",
        uri: "http://astrothesaurus.org/uat/119",
      },
      {
        value: "Atomic interferometry",
        label: "Atom interferometry (Atomic interferometry)",
        uri: "http://astrothesaurus.org/uat/119",
      },
      {
        value: "Atomic interferometry",
        label: "Atomic interferometry techniques (Atomic interferometry)",
        uri: "http://astrothesaurus.org/uat/119",
      },
      {
        value: "Heliocentric orbit",
        label: "Heliocentric orbit",
        uri: "http://astrothesaurus.org/uat/706",
      },
      {
        value: "Quasar absorption line spectroscopy",
        label: "Quasar absorption line spectroscopy",
        uri: "http://astrothesaurus.org/uat/1317",
      },
      {
        value: "Carbon stars",
        label: "Carbon stars",
        uri: "http://astrothesaurus.org/uat/199",
      },
      {
        value: "OB associations",
        label: "OB associations",
        uri: "http://astrothesaurus.org/uat/1140",
      },
      {
        value: "Celestial equator",
        label: "Celestial equator",
        uri: "http://astrothesaurus.org/uat/210",
      },
      {
        value: "Exoplanets",
        label: "Exoplanets",
        uri: "http://astrothesaurus.org/uat/498",
      },
      {
        value: "Exoplanets",
        label: "Planets (Extrasolar) (Exoplanets)",
        uri: "http://astrothesaurus.org/uat/498",
      },
      {
        value: "Exoplanets",
        label: "Planets (Exoplanets)",
        uri: "http://astrothesaurus.org/uat/498",
      },
      {
        value: "Exoplanets",
        label: "Extrasolar planets (Exoplanets)",
        uri: "http://astrothesaurus.org/uat/498",
      },
      {
        value: "de Sitter universe",
        label: "de Sitter universe",
        uri: "http://astrothesaurus.org/uat/361",
      },
      {
        value: "Adaptive interferometry",
        label: "Adaptive interferometry",
        uri: "http://astrothesaurus.org/uat/19",
      },
      {
        value: "Medium band photometry",
        label: "Medium band photometry",
        uri: "http://astrothesaurus.org/uat/1021",
      },
      {
        value: "Low surface brightness galaxies",
        label: "Low surface brightness galaxies",
        uri: "http://astrothesaurus.org/uat/940",
      },
      {
        value: "Low surface brightness galaxies",
        label: "Ultra diffuse galaxies (Low surface brightness galaxies)",
        uri: "http://astrothesaurus.org/uat/940",
      },
      {
        value: "Low surface brightness galaxies",
        label: "Ultra diffuse galaxy (Low surface brightness galaxies)",
        uri: "http://astrothesaurus.org/uat/940",
      },
      {
        value: "Low surface brightness galaxies",
        label: "LSBG (Low surface brightness galaxies)",
        uri: "http://astrothesaurus.org/uat/940",
      },
      {
        value: "Low surface brightness galaxies",
        label: "Ultradiffuse galaxies (Low surface brightness galaxies)",
        uri: "http://astrothesaurus.org/uat/940",
      },
      {
        value: "Low surface brightness galaxies",
        label: "Ultradiffuse galaxy (Low surface brightness galaxies)",
        uri: "http://astrothesaurus.org/uat/940",
      },
      {
        value: "Low surface brightness galaxies",
        label: "UDG (Low surface brightness galaxies)",
        uri: "http://astrothesaurus.org/uat/940",
      },
      {
        value: "Low surface brightness galaxies",
        label: "Ultra-diffuse galaxies (Low surface brightness galaxies)",
        uri: "http://astrothesaurus.org/uat/940",
      },
      {
        value: "Low surface brightness galaxies",
        label: "Ultra-diffuse galaxy (Low surface brightness galaxies)",
        uri: "http://astrothesaurus.org/uat/940",
      },
      {
        value: "Exoplanet astronomy",
        label: "Exoplanet astronomy",
        uri: "http://astrothesaurus.org/uat/486",
      },
      {
        value: "Be stars",
        label: "Be stars",
        uri: "http://astrothesaurus.org/uat/142",
      },
      {
        value: "Be stars",
        label: "Be-type stars (Be stars)",
        uri: "http://astrothesaurus.org/uat/142",
      },
      {
        value: "BV photometry",
        label: "BV photometry",
        uri: "http://astrothesaurus.org/uat/188",
      },
      {
        value: "Geocentric orbit",
        label: "Geocentric orbit",
        uri: "http://astrothesaurus.org/uat/643",
      },
      {
        value: "O subdwarf stars",
        label: "O subdwarf stars",
        uri: "http://astrothesaurus.org/uat/1138",
      },
      {
        value: "O subdwarf stars",
        label: "O subdwarfs (O subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/1138",
      },
      {
        value: "O subdwarf stars",
        label: "O-type subdwarfs (O subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/1138",
      },
      {
        value: "O subdwarf stars",
        label: "O-type subdwarf stars (O subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/1138",
      },
      {
        value: "Local Group",
        label: "Local Group",
        uri: "http://astrothesaurus.org/uat/929",
      },
      {
        value: "Stratopause",
        label: "Stratopause",
        uri: "http://astrothesaurus.org/uat/1639",
      },
      {
        value: "Stratopause",
        label: "Mesopeak (Stratopause)",
        uri: "http://astrothesaurus.org/uat/1639",
      },
      {
        value: "Bianchi cosmology",
        label: "Bianchi cosmology",
        uri: "http://astrothesaurus.org/uat/150",
      },
      {
        value: "Giant stars",
        label: "Giant stars",
        uri: "http://astrothesaurus.org/uat/655",
      },
      {
        value: "Giant stars",
        label: "CS stars (Giant stars)",
        uri: "http://astrothesaurus.org/uat/655",
      },
      {
        value: "Hydrosphere",
        label: "Hydrosphere",
        uri: "http://astrothesaurus.org/uat/770",
      },
      {
        value: "Occulting disks",
        label: "Occulting disks",
        uri: "http://astrothesaurus.org/uat/1149",
      },
      {
        value: "Occulting disks",
        label: "Occulting discs (Occulting disks)",
        uri: "http://astrothesaurus.org/uat/1149",
      },
      {
        value: "Optical position",
        label: "Optical position",
        uri: "http://astrothesaurus.org/uat/1172",
      },
      {
        value: "F subdwarf stars",
        label: "F subdwarf stars",
        uri: "http://astrothesaurus.org/uat/520",
      },
      {
        value: "F subdwarf stars",
        label: "F subdwarfs (F subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/520",
      },
      {
        value: "F subdwarf stars",
        label: "F-type subdwarfs (F subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/520",
      },
      {
        value: "F subdwarf stars",
        label: "F-type subdwarf stars (F subdwarf stars)",
        uri: "http://astrothesaurus.org/uat/520",
      },
      {
        value: "Archaeoastronomy",
        label: "Archaeoastronomy",
        uri: "http://astrothesaurus.org/uat/64",
      },
      {
        value: "Archaeoastronomy",
        label: "Astroarcheology (Archaeoastronomy)",
        uri: "http://astrothesaurus.org/uat/64",
      },
      {
        value: "Archaeoastronomy",
        label: "Ancient astronomy (Archaeoastronomy)",
        uri: "http://astrothesaurus.org/uat/64",
      },
      {
        value: "Archaeoastronomy",
        label: "Astroarchaeology (Archaeoastronomy)",
        uri: "http://astrothesaurus.org/uat/64",
      },
      {
        value: "Archaeoastronomy",
        label: "Archeoastronomy (Archaeoastronomy)",
        uri: "http://astrothesaurus.org/uat/64",
      },
      {
        value: "Carbon-nitrogen cycle",
        label: "Carbon-nitrogen cycle",
        uri: "http://astrothesaurus.org/uat/194",
      },
      {
        value: "Carbon-nitrogen cycle",
        label: "Carbon nitrogen cycle (Carbon-nitrogen cycle)",
        uri: "http://astrothesaurus.org/uat/194",
      },
      {
        value: "Carbon-nitrogen cycle",
        label: "Carbon cycling (Carbon-nitrogen cycle)",
        uri: "http://astrothesaurus.org/uat/194",
      },
      {
        value: "Carbon-nitrogen cycle",
        label: "Carbon cycle (Carbon-nitrogen cycle)",
        uri: "http://astrothesaurus.org/uat/194",
      },
      {
        value: "Carbon-nitrogen cycle",
        label: "CNO cycle (Carbon-nitrogen cycle)",
        uri: "http://astrothesaurus.org/uat/194",
      },
      {
        value: "Atira group",
        label: "Atira group",
        uri: "http://astrothesaurus.org/uat/111",
      },
      {
        value: "Atira group",
        label: "Atiras (Atira group)",
        uri: "http://astrothesaurus.org/uat/111",
      },
      {
        value: "Atira group",
        label: "Apohele group (Atira group)",
        uri: "http://astrothesaurus.org/uat/111",
      },
      {
        value: "Atira group",
        label: "Apohele asteroids (Atira group)",
        uri: "http://astrothesaurus.org/uat/111",
      },
      {
        value: "Wide binary stars",
        label: "Wide binary stars",
        uri: "http://astrothesaurus.org/uat/1801",
      },
      {
        value: "Gamma-rays",
        label: "Gamma-rays",
        uri: "http://astrothesaurus.org/uat/637",
      },
      {
        value: "Gamma-rays",
        label: "Gamma rays (Gamma-rays)",
        uri: "http://astrothesaurus.org/uat/637",
      },
      {
        value: "Gamma-rays",
        label: "Gamma radiation (Gamma-rays)",
        uri: "http://astrothesaurus.org/uat/637",
      },
      {
        value: "Kerr metric",
        label: "Kerr metric",
        uri: "http://astrothesaurus.org/uat/887",
      },
      {
        value: "Diffuse molecular clouds",
        label: "Diffuse molecular clouds",
        uri: "http://astrothesaurus.org/uat/381",
      },
      {
        value: "Bayesian information criterion",
        label: "Bayesian information criterion",
        uri: "http://astrothesaurus.org/uat/1920",
      },
      {
        value: "Hydroxyl masers",
        label: "Hydroxyl masers",
        uri: "http://astrothesaurus.org/uat/771",
      },
      {
        value: "Hydroxyl masers",
        label: "OH masers (Hydroxyl masers)",
        uri: "http://astrothesaurus.org/uat/771",
      },
      {
        value: "Effective temperature",
        label: "Effective temperature",
        uri: "http://astrothesaurus.org/uat/449",
      },
      {
        value: "Stellar K corona",
        label: "Stellar K corona",
        uri: "http://astrothesaurus.org/uat/875",
      },
      {
        value: "Stellar K corona",
        label: "Stellar K coronal regions (Stellar K corona)",
        uri: "http://astrothesaurus.org/uat/875",
      },
      {
        value: "Galaxy clusters",
        label: "Galaxy clusters",
        uri: "http://astrothesaurus.org/uat/584",
      },
      {
        value: "Galaxy clusters",
        label: "Cluster of galaxies (Galaxy clusters)",
        uri: "http://astrothesaurus.org/uat/584",
      },
      {
        value: "Galaxy clusters",
        label: "Galaxy clustering (Galaxy clusters)",
        uri: "http://astrothesaurus.org/uat/584",
      },
      {
        value: "Galaxy clusters",
        label: "Groups of galaxies (Galaxy clusters)",
        uri: "http://astrothesaurus.org/uat/584",
      },
      {
        value: "Low mass stars",
        label: "Low mass stars",
        uri: "http://astrothesaurus.org/uat/2050",
      },
      {
        value: "Low mass stars",
        label: "Low-mass star (Low mass stars)",
        uri: "http://astrothesaurus.org/uat/2050",
      },
      {
        value: "X-ray bright point",
        label: "X-ray bright point",
        uri: "http://astrothesaurus.org/uat/1812",
      },
      {
        value: "Shell stars",
        label: "Shell stars",
        uri: "http://astrothesaurus.org/uat/1850",
      },
      {
        value: "Longitude of the ascending node",
        label: "Longitude of the ascending node",
        uri: "http://astrothesaurus.org/uat/936",
      },
      {
        value: "Megamasers",
        label: "Megamasers",
        uri: "http://astrothesaurus.org/uat/1023",
      },
      {
        value: "Peculiar variable stars",
        label: "Peculiar variable stars",
        uri: "http://astrothesaurus.org/uat/1202",
      },
      {
        value: "Galactic longitude",
        label: "Galactic longitude",
        uri: "http://astrothesaurus.org/uat/569",
      },
      {
        value: "Megalithic astronomy",
        label: "Megalithic astronomy",
        uri: "http://astrothesaurus.org/uat/1022",
      },
      {
        value: "Radioheliographs",
        label: "Radioheliographs",
        uri: "http://astrothesaurus.org/uat/1361",
      },
      {
        value: "Mass spectrometry",
        label: "Mass spectrometry",
        uri: "http://astrothesaurus.org/uat/2094",
      },
      {
        value: "Active galactic nuclei",
        label: "Active galactic nuclei",
        uri: "http://astrothesaurus.org/uat/16",
      },
      {
        value: "Active galactic nuclei",
        label: "AGN (Active galactic nuclei)",
        uri: "http://astrothesaurus.org/uat/16",
      },
      {
        value: "Active galactic nuclei",
        label: "AGNs (Active galactic nuclei)",
        uri: "http://astrothesaurus.org/uat/16",
      },
      {
        value: "Solar magnetic bright points",
        label: "Solar magnetic bright points",
        uri: "http://astrothesaurus.org/uat/1984",
      },
      {
        value: "H alpha photometry",
        label: "H alpha photometry",
        uri: "http://astrothesaurus.org/uat/691",
      },
      {
        value: "Neural networks",
        label: "Neural networks",
        uri: "http://astrothesaurus.org/uat/1933",
      },
      {
        value: "Pulsar timing method",
        label: "Pulsar timing method",
        uri: "http://astrothesaurus.org/uat/1305",
      },
      {
        value: "Morgan-Keenan classification",
        label: "Morgan-Keenan classification",
        uri: "http://astrothesaurus.org/uat/2044",
      },
      {
        value: "Morgan-Keenan classification",
        label:
          "Morgan-Keenan-Kellman classification (Morgan-Keenan classification)",
        uri: "http://astrothesaurus.org/uat/2044",
      },
      {
        value: "Morgan-Keenan classification",
        label: "MKK classification (Morgan-Keenan classification)",
        uri: "http://astrothesaurus.org/uat/2044",
      },
      {
        value: "Morgan-Keenan classification",
        label: "MK classification (Morgan-Keenan classification)",
        uri: "http://astrothesaurus.org/uat/2044",
      },
      {
        value: "Morgan-Keenan classification",
        label: "Yerkes spectral classification (Morgan-Keenan classification)",
        uri: "http://astrothesaurus.org/uat/2044",
      },
      {
        value: "Morgan-Keenan classification",
        label: "Yerkes classification (Morgan-Keenan classification)",
        uri: "http://astrothesaurus.org/uat/2044",
      },
      {
        value: "U Geminorum stars",
        label: "U Geminorum stars",
        uri: "http://astrothesaurus.org/uat/1732",
      },
      {
        value: "U Geminorum stars",
        label: "SS cygni stars (U Geminorum stars)",
        uri: "http://astrothesaurus.org/uat/1732",
      },
      {
        value: "B giant stars",
        label: "B giant stars",
        uri: "http://astrothesaurus.org/uat/127",
      },
      {
        value: "B giant stars",
        label: "B-type giants (B giant stars)",
        uri: "http://astrothesaurus.org/uat/127",
      },
      {
        value: "B giant stars",
        label: "B-type giant stars (B giant stars)",
        uri: "http://astrothesaurus.org/uat/127",
      },
      {
        value: "B giant stars",
        label: "B giants (B giant stars)",
        uri: "http://astrothesaurus.org/uat/127",
      },
      {
        value: "Barred spiral galaxies",
        label: "Barred spiral galaxies",
        uri: "http://astrothesaurus.org/uat/136",
      },
      {
        value: "Barred spiral galaxies",
        label: "SB galaxies (Barred spiral galaxies)",
        uri: "http://astrothesaurus.org/uat/136",
      },
      {
        value: "Galaxy spheroids",
        label: "Galaxy spheroids",
        uri: "http://astrothesaurus.org/uat/2032",
      },
      {
        value: "Anomalous Cepheid variable stars",
        label: "Anomalous Cepheid variable stars",
        uri: "http://astrothesaurus.org/uat/2106",
      },
      {
        value: "Anomalous Cepheid variable stars",
        label: "BL BoÃ¶tis stars (Anomalous Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/2106",
      },
      {
        value: "Anomalous Cepheid variable stars",
        label: "BL Boo stars (Anomalous Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/2106",
      },
      {
        value: "Anomalous Cepheid variable stars",
        label: "BL Bootis stars (Anomalous Cepheid variable stars)",
        uri: "http://astrothesaurus.org/uat/2106",
      },
      {
        value: "RRab variable stars",
        label: "RRab variable stars",
        uri: "http://astrothesaurus.org/uat/1413",
      },
      {
        value: "RRab variable stars",
        label: "RRb stars (RRab variable stars)",
        uri: "http://astrothesaurus.org/uat/1413",
      },
      {
        value: "RRab variable stars",
        label: "RRa stars (RRab variable stars)",
        uri: "http://astrothesaurus.org/uat/1413",
      },
      {
        value: "RRab variable stars",
        label: "RRab stars (RRab variable stars)",
        uri: "http://astrothesaurus.org/uat/1413",
      },
      {
        value: "RRab variable stars",
        label: "RRab (RRab variable stars)",
        uri: "http://astrothesaurus.org/uat/1413",
      },
      {
        value: "RRab variable stars",
        label: "Bailey type ab stars (RRab variable stars)",
        uri: "http://astrothesaurus.org/uat/1413",
      },
      {
        value: "Solar photosphere",
        label: "Solar photosphere",
        uri: "http://astrothesaurus.org/uat/1518",
      },
      {
        value: "Galaxy winds",
        label: "Galaxy winds",
        uri: "http://astrothesaurus.org/uat/626",
      },
      {
        value: "Oe stars",
        label: "Oe stars",
        uri: "http://astrothesaurus.org/uat/1153",
      },
      {
        value: "Oe stars",
        label: "Oe-type stars (Oe stars)",
        uri: "http://astrothesaurus.org/uat/1153",
      },
      {
        value: "Tidal tails",
        label: "Tidal tails",
        uri: "http://astrothesaurus.org/uat/1701",
      },
      {
        value: "Solar coronal radio emission",
        label: "Solar coronal radio emission",
        uri: "http://astrothesaurus.org/uat/1993",
      },
      {
        value: "Stellar gas distribution",
        label: "Stellar gas distribution",
        uri: "http://astrothesaurus.org/uat/1604",
      },
      {
        value: "SRc variable stars",
        label: "SRc variable stars",
        uri: "http://astrothesaurus.org/uat/2012",
      },
      {
        value: "Nautical almanacs",
        label: "Nautical almanacs",
        uri: "http://astrothesaurus.org/uat/1090",
      },
      {
        value: "Tertiary stars",
        label: "Tertiary stars",
        uri: "http://astrothesaurus.org/uat/1691",
      },
      {
        value: "Yellow straggler stars",
        label: "Yellow straggler stars",
        uri: "http://astrothesaurus.org/uat/1829",
      },
      {
        value: "Yellow straggler stars",
        label: "Yellow stragglers (Yellow straggler stars)",
        uri: "http://astrothesaurus.org/uat/1829",
      },
      {
        value: "Yellow straggler stars",
        label: "Yellow-straggler stars (Yellow straggler stars)",
        uri: "http://astrothesaurus.org/uat/1829",
      },
      {
        value: "Interstellar magnetic fields",
        label: "Interstellar magnetic fields",
        uri: "http://astrothesaurus.org/uat/845",
      },
      {
        value: "Solar extreme ultraviolet emission",
        label: "Solar extreme ultraviolet emission",
        uri: "http://astrothesaurus.org/uat/1493",
      },
      {
        value: "Solar extreme ultraviolet emission",
        label: "Solar EUV emission (Solar extreme ultraviolet emission)",
        uri: "http://astrothesaurus.org/uat/1493",
      },
      {
        value: "Osculating orbit",
        label: "Osculating orbit",
        uri: "http://astrothesaurus.org/uat/1189",
      },
      {
        value: "Black hole thermodynamics",
        label: "Black hole thermodynamics",
        uri: "http://astrothesaurus.org/uat/161",
      },
      {
        value: "Black hole thermodynamics",
        label: "Thermodynamics of black holes (Black hole thermodynamics)",
        uri: "http://astrothesaurus.org/uat/161",
      },
      {
        value: "Dark matter density",
        label: "Dark matter density",
        uri: "http://astrothesaurus.org/uat/354",
      },
      {
        value: "Relativistic jets",
        label: "Relativistic jets",
        uri: "http://astrothesaurus.org/uat/1390",
      },
      {
        value: "Astronomical research",
        label: "Astronomical research",
        uri: "http://astrothesaurus.org/uat/91",
      },
      {
        value: "Planetary climates",
        label: "Planetary climates",
        uri: "http://astrothesaurus.org/uat/2184",
      },
      {
        value: "Infrared photometry",
        label: "Infrared photometry",
        uri: "http://astrothesaurus.org/uat/792",
      },
      {
        value: "Stellar populations",
        label: "Stellar populations",
        uri: "http://astrothesaurus.org/uat/1622",
      },
      {
        value: "Ionization",
        label: "Ionization",
        uri: "http://astrothesaurus.org/uat/2068",
      },
      {
        value: "Plasma clouds",
        label: "Plasma clouds",
        uri: "http://astrothesaurus.org/uat/1262",
      },
      {
        value: "High time resolution astrophysics",
        label: "High time resolution astrophysics",
        uri: "http://astrothesaurus.org/uat/740",
      },
      {
        value: "High time resolution astrophysics",
        label:
          "High time resolution astronomy (High time resolution astrophysics)",
        uri: "http://astrothesaurus.org/uat/740",
      },
      {
        value: "High time resolution astrophysics",
        label: "HTRA (High time resolution astrophysics)",
        uri: "http://astrothesaurus.org/uat/740",
      },
      {
        value: "Minimum chi-squared",
        label: "Minimum chi-squared",
        uri: "http://astrothesaurus.org/uat/1947",
      },
      {
        value: "Cosmogony",
        label: "Cosmogony",
        uri: "http://astrothesaurus.org/uat/333",
      },
      {
        value: "Cosmogony",
        label: "Cosmogeny (Cosmogony)",
        uri: "http://astrothesaurus.org/uat/333",
      },
      {
        value: "Active solar corona",
        label: "Active solar corona",
        uri: "http://astrothesaurus.org/uat/1988",
      },
      {
        value: "Isotope shifts",
        label: "Isotope shifts",
        uri: "http://astrothesaurus.org/uat/2069",
      },
      {
        value: "T dwarfs",
        label: "T dwarfs",
        uri: "http://astrothesaurus.org/uat/1679",
      },
      {
        value: "T dwarfs",
        label: "T dwarf stars (T dwarfs)",
        uri: "http://astrothesaurus.org/uat/1679",
      },
      {
        value: "T dwarfs",
        label: "T brown dwarfs (T dwarfs)",
        uri: "http://astrothesaurus.org/uat/1679",
      },
      {
        value: "T dwarfs",
        label: "T-type brown dwarfs (T dwarfs)",
        uri: "http://astrothesaurus.org/uat/1679",
      },
      {
        value: "Very long baseline interferometry",
        label: "Very long baseline interferometry",
        uri: "http://astrothesaurus.org/uat/1769",
      },
      {
        value: "Very long baseline interferometry",
        label: "VLB interferometry (Very long baseline interferometry)",
        uri: "http://astrothesaurus.org/uat/1769",
      },
      {
        value: "Very long baseline interferometry",
        label: "VLBI (Very long baseline interferometry)",
        uri: "http://astrothesaurus.org/uat/1769",
      },
      {
        value: "A giant stars",
        label: "A giant stars",
        uri: "http://astrothesaurus.org/uat/4",
      },
      {
        value: "A giant stars",
        label: "A giants (A giant stars)",
        uri: "http://astrothesaurus.org/uat/4",
      },
      {
        value: "A giant stars",
        label: "A-type giant stars (A giant stars)",
        uri: "http://astrothesaurus.org/uat/4",
      },
      {
        value: "A giant stars",
        label: "A-type giants (A giant stars)",
        uri: "http://astrothesaurus.org/uat/4",
      },
      {
        value: "Debris disks",
        label: "Debris disks",
        uri: "http://astrothesaurus.org/uat/363",
      },
      {
        value: "Debris disks",
        label: "Debris discs (Debris disks)",
        uri: "http://astrothesaurus.org/uat/363",
      },
      {
        value: "Solar white-light flares",
        label: "Solar white-light flares",
        uri: "http://astrothesaurus.org/uat/1983",
      },
      {
        value: "Hubble time",
        label: "Hubble time",
        uri: "http://astrothesaurus.org/uat/762",
      },
      {
        value: "Hubble time",
        label: "Expansion timescale (Hubble time)",
        uri: "http://astrothesaurus.org/uat/762",
      },
      {
        value: "Close encounters",
        label: "Close encounters",
        uri: "http://astrothesaurus.org/uat/255",
      },
      {
        value: "Radial pulsations",
        label: "Radial pulsations",
        uri: "http://astrothesaurus.org/uat/1331",
      },
      {
        value: "Geomagnetic fields",
        label: "Geomagnetic fields",
        uri: "http://astrothesaurus.org/uat/646",
      },
      {
        value: "Solar coronal plumes",
        label: "Solar coronal plumes",
        uri: "http://astrothesaurus.org/uat/2039",
      },
      {
        value: "Solar coronal plumes",
        label: "Polar plume (Solar coronal plumes)",
        uri: "http://astrothesaurus.org/uat/2039",
      },
      {
        value: "Solar coronal plumes",
        label: "Solar polar plume (Solar coronal plumes)",
        uri: "http://astrothesaurus.org/uat/2039",
      },
      {
        value: "Hot Neptunes",
        label: "Hot Neptunes",
        uri: "http://astrothesaurus.org/uat/754",
      },
      {
        value: "Hypergiant stars",
        label: "Hypergiant stars",
        uri: "http://astrothesaurus.org/uat/774",
      },
      {
        value: "Beta Cephei variable stars",
        label: "Beta Cephei variable stars",
        uri: "http://astrothesaurus.org/uat/148",
      },
      {
        value: "Beta Cephei variable stars",
        label: "Beta Cephei stars (Beta Cephei variable stars)",
        uri: "http://astrothesaurus.org/uat/148",
      },
      {
        value: "Beta Cephei variable stars",
        label: "Beta Cepheid variable stars (Beta Cephei variable stars)",
        uri: "http://astrothesaurus.org/uat/148",
      },
      {
        value: "Beta Cephei variable stars",
        label: "Beta canis majoris stars (Beta Cephei variable stars)",
        uri: "http://astrothesaurus.org/uat/148",
      },
      {
        value: "Spectrophotometry",
        label: "Spectrophotometry",
        uri: "http://astrothesaurus.org/uat/1556",
      },
      {
        value: "Galaxy radii",
        label: "Galaxy radii",
        uri: "http://astrothesaurus.org/uat/617",
      },
      {
        value: "Galaxy radii",
        label: "Galactic radius (Galaxy radii)",
        uri: "http://astrothesaurus.org/uat/617",
      },
      {
        value: "Space astrometry",
        label: "Space astrometry",
        uri: "http://astrothesaurus.org/uat/1541",
      },
      {
        value: "Solar flare spectra",
        label: "Solar flare spectra",
        uri: "http://astrothesaurus.org/uat/1982",
      },
      {
        value: "Near-sun comets",
        label: "Near-sun comets",
        uri: "http://astrothesaurus.org/uat/2195",
      },
      {
        value: "W Ursae Majoris variable stars",
        label: "W Ursae Majoris variable stars",
        uri: "http://astrothesaurus.org/uat/1783",
      },
      {
        value: "W Ursae Majoris variable stars",
        label: "W Ursae Majoris variables (W Ursae Majoris variable stars)",
        uri: "http://astrothesaurus.org/uat/1783",
      },
      {
        value: "Smoothing",
        label: "Smoothing",
        uri: "http://astrothesaurus.org/uat/1929",
      },
      {
        value: "Star-planet interactions",
        label: "Star-planet interactions",
        uri: "http://astrothesaurus.org/uat/2177",
      },
      {
        value: "Star-planet interactions",
        label: "Star-exoplanet interactions (Star-planet interactions)",
        uri: "http://astrothesaurus.org/uat/2177",
      },
      {
        value: "Star-planet interactions",
        label: "Stellar-planetary interactions (Star-planet interactions)",
        uri: "http://astrothesaurus.org/uat/2177",
      },
      {
        value: "Isotopic abundances",
        label: "Isotopic abundances",
        uri: "http://astrothesaurus.org/uat/867",
      },
      {
        value: "Astronomy education",
        label: "Astronomy education",
        uri: "http://astrothesaurus.org/uat/2165",
      },
      {
        value: "Solar motion",
        label: "Solar motion",
        uri: "http://astrothesaurus.org/uat/1507",
      },
      {
        value: "Sky noise",
        label: "Sky noise",
        uri: "http://astrothesaurus.org/uat/1463",
      },
      {
        value: "Galaxy quenching",
        label: "Galaxy quenching",
        uri: "http://astrothesaurus.org/uat/2040",
      },
      {
        value: "Dielectronic recombination",
        label: "Dielectronic recombination",
        uri: "http://astrothesaurus.org/uat/2061",
      },
      {
        value: "Kapteyn Selected Areas",
        label: "Kapteyn Selected Areas",
        uri: "http://astrothesaurus.org/uat/883",
      },
      {
        value: "Kapteyn Selected Areas",
        label: "Kapteyn's Selected Areas (Kapteyn Selected Areas)",
        uri: "http://astrothesaurus.org/uat/883",
      },
      {
        value: "Binary source microlensing",
        label: "Binary source microlensing",
        uri: "http://astrothesaurus.org/uat/2141",
      },
      {
        value: "Astrosphere interstellar medium interactions",
        label: "Astrosphere interstellar medium interactions",
        uri: "http://astrothesaurus.org/uat/106",
      },
      {
        value: "Astrosphere interstellar medium interactions",
        label:
          "Astrosphere/interstellar medium interactions (Astrosphere interstellar medium interactions)",
        uri: "http://astrothesaurus.org/uat/106",
      },
      {
        value: "Astrosphere interstellar medium interactions",
        label:
          "Astrosphere-interstellar medium interactions (Astrosphere interstellar medium interactions)",
        uri: "http://astrothesaurus.org/uat/106",
      },
      {
        value: "Kracht group",
        label: "Kracht group",
        uri: "http://astrothesaurus.org/uat/2199",
      },
      {
        value: "Kracht group",
        label: "Kracht sunskirters (Kracht group)",
        uri: "http://astrothesaurus.org/uat/2199",
      },
      {
        value: "Stellar bridges",
        label: "Stellar bridges",
        uri: "http://astrothesaurus.org/uat/1587",
      },
      {
        value: "Milky Way stellar halo",
        label: "Milky Way stellar halo",
        uri: "http://astrothesaurus.org/uat/1060",
      },
      {
        value: "Milky Way stellar halo",
        label: "Milky Way galactic halo (Milky Way stellar halo)",
        uri: "http://astrothesaurus.org/uat/1060",
      },
      {
        value: "Milky Way stellar halo",
        label: "Milky Way Galaxy halo (Milky Way stellar halo)",
        uri: "http://astrothesaurus.org/uat/1060",
      },
      {
        value: "Milky Way stellar halo",
        label: "Galactic halo of the Milky Way (Milky Way stellar halo)",
        uri: "http://astrothesaurus.org/uat/1060",
      },
      {
        value: "Milky Way stellar halo",
        label: "Milky Way halo (Milky Way stellar halo)",
        uri: "http://astrothesaurus.org/uat/1060",
      },
      {
        value: "Milky Way stellar halo",
        label: "Halo of the Milky Way (Milky Way stellar halo)",
        uri: "http://astrothesaurus.org/uat/1060",
      },
      {
        value: "Grazing incidence telescopes",
        label: "Grazing incidence telescopes",
        uri: "http://astrothesaurus.org/uat/681",
      },
      {
        value: "Grazing incidence telescopes",
        label: "Grazing-incidence telescopes (Grazing incidence telescopes)",
        uri: "http://astrothesaurus.org/uat/681",
      },
      {
        value: "S stars",
        label: "S stars",
        uri: "http://astrothesaurus.org/uat/1421",
      },
      {
        value: "S stars",
        label: "Se stars (S stars)",
        uri: "http://astrothesaurus.org/uat/1421",
      },
      {
        value: "S stars",
        label: "Type-S stars (S stars)",
        uri: "http://astrothesaurus.org/uat/1421",
      },
      {
        value: "S stars",
        label: "S type stars (S stars)",
        uri: "http://astrothesaurus.org/uat/1421",
      },
      {
        value: "S stars",
        label: "S-type stars (S stars)",
        uri: "http://astrothesaurus.org/uat/1421",
      },
      {
        value: "Near ultraviolet astronomy",
        label: "Near ultraviolet astronomy",
        uri: "http://astrothesaurus.org/uat/1094",
      },
      {
        value: "Near ultraviolet astronomy",
        label: "Near uv astronomical observations (Near ultraviolet astronomy)",
        uri: "http://astrothesaurus.org/uat/1094",
      },
      {
        value: "Near ultraviolet astronomy",
        label: "Near ultraviolet telescopes (Near ultraviolet astronomy)",
        uri: "http://astrothesaurus.org/uat/1094",
      },
      {
        value: "Near ultraviolet astronomy",
        label: "Near-uv astronomical observations (Near ultraviolet astronomy)",
        uri: "http://astrothesaurus.org/uat/1094",
      },
      {
        value: "Near ultraviolet astronomy",
        label:
          "Near ultraviolet astronomical observations (Near ultraviolet astronomy)",
        uri: "http://astrothesaurus.org/uat/1094",
      },
      {
        value: "Near ultraviolet astronomy",
        label: "Near-uv astronomy (Near ultraviolet astronomy)",
        uri: "http://astrothesaurus.org/uat/1094",
      },
      {
        value: "Near ultraviolet astronomy",
        label: "Near-ultraviolet astronomy (Near ultraviolet astronomy)",
        uri: "http://astrothesaurus.org/uat/1094",
      },
      {
        value: "Near ultraviolet astronomy",
        label: "Near-ultraviolet telescopes (Near ultraviolet astronomy)",
        uri: "http://astrothesaurus.org/uat/1094",
      },
      {
        value: "Near ultraviolet astronomy",
        label: "Near uv astronomy (Near ultraviolet astronomy)",
        uri: "http://astrothesaurus.org/uat/1094",
      },
      {
        value: "Near ultraviolet astronomy",
        label:
          "Near-ultraviolet astronomical observations (Near ultraviolet astronomy)",
        uri: "http://astrothesaurus.org/uat/1094",
      },
      {
        value: "Oblique rotators",
        label: "Oblique rotators",
        uri: "http://astrothesaurus.org/uat/1144",
      },
      {
        value: "Exoplanet atmospheric variability",
        label: "Exoplanet atmospheric variability",
        uri: "http://astrothesaurus.org/uat/2020",
      },
      {
        value: "Stellar diffusion",
        label: "Stellar diffusion",
        uri: "http://astrothesaurus.org/uat/1593",
      },
      {
        value: "Burkert profile",
        label: "Burkert profile",
        uri: "http://astrothesaurus.org/uat/186",
      },
      {
        value: "Ultraviolet telescopes",
        label: "Ultraviolet telescopes",
        uri: "http://astrothesaurus.org/uat/1743",
      },
      {
        value: "Ultraviolet telescopes",
        label: "UV telescopes (Ultraviolet telescopes)",
        uri: "http://astrothesaurus.org/uat/1743",
      },
      {
        value: "Gamma-ray detectors",
        label: "Gamma-ray detectors",
        uri: "http://astrothesaurus.org/uat/630",
      },
      {
        value: "Astronomy databases",
        label: "Astronomy databases",
        uri: "http://astrothesaurus.org/uat/83",
      },
      {
        value: "Astronomy databases",
        label: "Astronomical databases (Astronomy databases)",
        uri: "http://astrothesaurus.org/uat/83",
      },
      {
        value: "Algorithms",
        label: "Algorithms",
        uri: "http://astrothesaurus.org/uat/1883",
      },
      {
        value: "High altitude balloons",
        label: "High altitude balloons",
        uri: "http://astrothesaurus.org/uat/738",
      },
      {
        value: "High altitude balloons",
        label: "High-altitude balloons (High altitude balloons)",
        uri: "http://astrothesaurus.org/uat/738",
      },
      {
        value: "Classical black holes",
        label: "Classical black holes",
        uri: "http://astrothesaurus.org/uat/249",
      },
      {
        value: "Redshift surveys",
        label: "Redshift surveys",
        uri: "http://astrothesaurus.org/uat/1378",
      },
      {
        value: "Redshift surveys",
        label: "Galaxy redshifts (Redshift surveys)",
        uri: "http://astrothesaurus.org/uat/1378",
      },
      {
        value: "Redshift surveys",
        label: "Galaxy surveys (Redshift surveys)",
        uri: "http://astrothesaurus.org/uat/1378",
      },
      {
        value: "Mini Neptunes",
        label: "Mini Neptunes",
        uri: "http://astrothesaurus.org/uat/1063",
      },
      {
        value: "Relativity",
        label: "Relativity",
        uri: "http://astrothesaurus.org/uat/1393",
      },
      {
        value: "Relativity",
        label: "Relativistic astrophysics (Relativity)",
        uri: "http://astrothesaurus.org/uat/1393",
      },
      {
        value: "Relativity",
        label: "Relativistic models (Relativity)",
        uri: "http://astrothesaurus.org/uat/1393",
      },
      {
        value: "Stone circles",
        label: "Stone circles",
        uri: "http://astrothesaurus.org/uat/1638",
      },
      {
        value: "Stellar granules",
        label: "Stellar granules",
        uri: "http://astrothesaurus.org/uat/659",
      },
      {
        value: "Stellar granules",
        label: "Stellar granule (Stellar granules)",
        uri: "http://astrothesaurus.org/uat/659",
      },
      {
        value: "Collapsing clouds",
        label: "Collapsing clouds",
        uri: "http://astrothesaurus.org/uat/267",
      },
      {
        value: "Collapsing clouds",
        label: "Cloud collapse (Collapsing clouds)",
        uri: "http://astrothesaurus.org/uat/267",
      },
      {
        value: "Milky Way disk",
        label: "Milky Way disk",
        uri: "http://astrothesaurus.org/uat/1050",
      },
      {
        value: "Milky Way disk",
        label: "Milky Way Galaxy disk (Milky Way disk)",
        uri: "http://astrothesaurus.org/uat/1050",
      },
      {
        value: "Milky Way disk",
        label: "Milky Way galactic disc (Milky Way disk)",
        uri: "http://astrothesaurus.org/uat/1050",
      },
      {
        value: "Milky Way disk",
        label: "Disc of the Milky Way (Milky Way disk)",
        uri: "http://astrothesaurus.org/uat/1050",
      },
      {
        value: "Milky Way disk",
        label: "Milky Way Galaxy disc (Milky Way disk)",
        uri: "http://astrothesaurus.org/uat/1050",
      },
      {
        value: "Milky Way disk",
        label: "Milky Way galactic disk (Milky Way disk)",
        uri: "http://astrothesaurus.org/uat/1050",
      },
      {
        value: "Milky Way disk",
        label: "Disk of the Milky Way (Milky Way disk)",
        uri: "http://astrothesaurus.org/uat/1050",
      },
      {
        value: "Milky Way disk",
        label: "Milky Way disc (Milky Way disk)",
        uri: "http://astrothesaurus.org/uat/1050",
      },
      {
        value: "Young stellar objects",
        label: "Young stellar objects",
        uri: "http://astrothesaurus.org/uat/1834",
      },
      {
        value: "Young stellar objects",
        label: "YSO (Young stellar objects)",
        uri: "http://astrothesaurus.org/uat/1834",
      },
      {
        value: "Young stellar objects",
        label: "YSOs (Young stellar objects)",
        uri: "http://astrothesaurus.org/uat/1834",
      },
      {
        value: "High-redshift galaxy clusters",
        label: "High-redshift galaxy clusters",
        uri: "http://astrothesaurus.org/uat/2007",
      },
      {
        value: "High-redshift galaxy clusters",
        label: "High redshift clusters (High-redshift galaxy clusters)",
        uri: "http://astrothesaurus.org/uat/2007",
      },
      {
        value: "High-redshift galaxy clusters",
        label: "High-redshift clusters (High-redshift galaxy clusters)",
        uri: "http://astrothesaurus.org/uat/2007",
      },
      {
        value: "Solar E corona",
        label: "Solar E corona",
        uri: "http://astrothesaurus.org/uat/1990",
      },
      {
        value: "Solar E corona",
        label: "E region (Solar E corona)",
        uri: "http://astrothesaurus.org/uat/1990",
      },
      {
        value: "Solar E corona",
        label: "E corona (Solar E corona)",
        uri: "http://astrothesaurus.org/uat/1990",
      },
      {
        value: "Solar E corona",
        label: "Solar E coronal region (Solar E corona)",
        uri: "http://astrothesaurus.org/uat/1990",
      },
      {
        value: "Bok globules",
        label: "Bok globules",
        uri: "http://astrothesaurus.org/uat/171",
      },
      {
        value: "Hydroxyl sources",
        label: "Hydroxyl sources",
        uri: "http://astrothesaurus.org/uat/772",
      },
      {
        value: "Hydroxyl sources",
        label: "OH sources (Hydroxyl sources)",
        uri: "http://astrothesaurus.org/uat/772",
      },
      {
        value: "Cosmological parameters",
        label: "Cosmological parameters",
        uri: "http://astrothesaurus.org/uat/339",
      },
      {
        value: "Radio active galactic nuclei",
        label: "Radio active galactic nuclei",
        uri: "http://astrothesaurus.org/uat/2134",
      },
      {
        value: "Radio active galactic nuclei",
        label: "Radio AGNs (Radio active galactic nuclei)",
        uri: "http://astrothesaurus.org/uat/2134",
      },
      {
        value: "Radio active galactic nuclei",
        label: "Radio AGN (Radio active galactic nuclei)",
        uri: "http://astrothesaurus.org/uat/2134",
      },
      {
        value: "Overabundances",
        label: "Overabundances",
        uri: "http://astrothesaurus.org/uat/1192",
      },
      {
        value: "Solar active region filaments",
        label: "Solar active region filaments",
        uri: "http://astrothesaurus.org/uat/1977",
      },
      {
        value: "Random Forests",
        label: "Random Forests",
        uri: "http://astrothesaurus.org/uat/1935",
      },
      {
        value: "Variable star period change",
        label: "Variable star period change",
        uri: "http://astrothesaurus.org/uat/1760",
      },
      {
        value: "Variable star period change",
        label: "Periodically-variable (Variable star period change)",
        uri: "http://astrothesaurus.org/uat/1760",
      },
      {
        value: "Variable star period change",
        label: "Periodically variable (Variable star period change)",
        uri: "http://astrothesaurus.org/uat/1760",
      },
      {
        value: "Variable star period change",
        label: "Period variation (Variable star period change)",
        uri: "http://astrothesaurus.org/uat/1760",
      },
      {
        value: "Variable star period change",
        label: "Period-change (Variable star period change)",
        uri: "http://astrothesaurus.org/uat/1760",
      },
      {
        value: "Stellar coronal lines",
        label: "Stellar coronal lines",
        uri: "http://astrothesaurus.org/uat/308",
      },
      {
        value: "X-ray bursters",
        label: "X-ray bursters",
        uri: "http://astrothesaurus.org/uat/1813",
      },
      {
        value: "Topocentric microlensing parallax",
        label: "Topocentric microlensing parallax",
        uri: "http://astrothesaurus.org/uat/2150",
      },
      {
        value: "Topocentric microlensing parallax",
        label:
          "Geocentric microlensing parallax (Topocentric microlensing parallax)",
        uri: "http://astrothesaurus.org/uat/2150",
      },
      {
        value: "Topocentric microlensing parallax",
        label:
          "Terrestrial microlensing parallax (Topocentric microlensing parallax)",
        uri: "http://astrothesaurus.org/uat/2150",
      },
      {
        value: "Two-body problem",
        label: "Two-body problem",
        uri: "http://astrothesaurus.org/uat/1723",
      },
      {
        value: "Two-body problem",
        label: "Two body problem (Two-body problem)",
        uri: "http://astrothesaurus.org/uat/1723",
      },
      {
        value: "Spectroscopic binary stars",
        label: "Spectroscopic binary stars",
        uri: "http://astrothesaurus.org/uat/1557",
      },
      {
        value: "Spectroscopic binary stars",
        label: "Spectroscopic binaries (Spectroscopic binary stars)",
        uri: "http://astrothesaurus.org/uat/1557",
      },
      {
        value: "Spectroscopic binary stars",
        label: "Spectrum binary stars (Spectroscopic binary stars)",
        uri: "http://astrothesaurus.org/uat/1557",
      },
      {
        value: "SX Arietis variable stars",
        label: "SX Arietis variable stars",
        uri: "http://astrothesaurus.org/uat/1672",
      },
      {
        value: "SX Arietis variable stars",
        label: "Helium variable stars (SX Arietis variable stars)",
        uri: "http://astrothesaurus.org/uat/1672",
      },
      {
        value: "SX Arietis variable stars",
        label: "SX Arietis stars (SX Arietis variable stars)",
        uri: "http://astrothesaurus.org/uat/1672",
      },
      {
        value: "SX Arietis variable stars",
        label: "SX Arietis variables (SX Arietis variable stars)",
        uri: "http://astrothesaurus.org/uat/1672",
      },
      {
        value: "Multi-color photometry",
        label: "Multi-color photometry",
        uri: "http://astrothesaurus.org/uat/1077",
      },
      {
        value: "Multi-color photometry",
        label: "Multicolor photometry (Multi-color photometry)",
        uri: "http://astrothesaurus.org/uat/1077",
      },
      {
        value: "G subgiant stars",
        label: "G subgiant stars",
        uri: "http://astrothesaurus.org/uat/560",
      },
      {
        value: "G subgiant stars",
        label: "G subgiants (G subgiant stars)",
        uri: "http://astrothesaurus.org/uat/560",
      },
      {
        value: "G subgiant stars",
        label: "G-type subgiants (G subgiant stars)",
        uri: "http://astrothesaurus.org/uat/560",
      },
      {
        value: "G subgiant stars",
        label: "G-type subgiant stars (G subgiant stars)",
        uri: "http://astrothesaurus.org/uat/560",
      },
      {
        value: "Equator position",
        label: "Equator position",
        uri: "http://astrothesaurus.org/uat/466",
      },
      {
        value: "Solar magnetic flux emergence",
        label: "Solar magnetic flux emergence",
        uri: "http://astrothesaurus.org/uat/2000",
      },
      {
        value: "Zodiacal cloud",
        label: "Zodiacal cloud",
        uri: "http://astrothesaurus.org/uat/1845",
      },
      {
        value: "Zodiacal cloud",
        label: "Zodiacal light (Zodiacal cloud)",
        uri: "http://astrothesaurus.org/uat/1845",
      },
      {
        value: "Zodiacal cloud",
        label: "Zodiacal dust (Zodiacal cloud)",
        uri: "http://astrothesaurus.org/uat/1845",
      },
      {
        value: "Zodiacal cloud",
        label: "Zodiacal dust cloud (Zodiacal cloud)",
        uri: "http://astrothesaurus.org/uat/1845",
      },
      {
        value: "Surface gravity",
        label: "Surface gravity",
        uri: "http://astrothesaurus.org/uat/1669",
      },
      {
        value: "Surface gravity",
        label: "Acceleration of gravity (Surface gravity)",
        uri: "http://astrothesaurus.org/uat/1669",
      },
      {
        value: "Astrochemistry",
        label: "Astrochemistry",
        uri: "http://astrothesaurus.org/uat/75",
      },
      {
        value: "Galaxy photometry",
        label: "Galaxy photometry",
        uri: "http://astrothesaurus.org/uat/611",
      },
      {
        value: "Gravitational interaction",
        label: "Gravitational interaction",
        uri: "http://astrothesaurus.org/uat/669",
      },
      {
        value: "Wilson effect",
        label: "Wilson effect",
        uri: "http://astrothesaurus.org/uat/1803",
      },
      {
        value: "Flash stars",
        label: "Flash stars",
        uri: "http://astrothesaurus.org/uat/542",
      },
      {
        value: "Proplyds",
        label: "Proplyds",
        uri: "http://astrothesaurus.org/uat/1296",
      },
      {
        value: "Proplyds",
        label: "Photo-evaporating protoplanetary disks (Proplyds)",
        uri: "http://astrothesaurus.org/uat/1296",
      },
      {
        value: "Radio plumes",
        label: "Radio plumes",
        uri: "http://astrothesaurus.org/uat/1352",
      },
      {
        value: "Stellar physics",
        label: "Stellar physics",
        uri: "http://astrothesaurus.org/uat/1621",
      },
      {
        value: "Stellar physics",
        label: "Physics of stars (Stellar physics)",
        uri: "http://astrothesaurus.org/uat/1621",
      },
      {
        value: "Contact binary stars",
        label: "Contact binary stars",
        uri: "http://astrothesaurus.org/uat/297",
      },
      {
        value: "Discrete radio sources",
        label: "Discrete radio sources",
        uri: "http://astrothesaurus.org/uat/389",
      },
      {
        value: "Cosmic ray showers",
        label: "Cosmic ray showers",
        uri: "http://astrothesaurus.org/uat/327",
      },
      {
        value: "Cosmic ray showers",
        label: "Auger shower (Cosmic ray showers)",
        uri: "http://astrothesaurus.org/uat/327",
      },
      {
        value: "Cosmic ray showers",
        label: "Air shower (Cosmic ray showers)",
        uri: "http://astrothesaurus.org/uat/327",
      },
      {
        value: "Interplanetary magnetic fields",
        label: "Interplanetary magnetic fields",
        uri: "http://astrothesaurus.org/uat/824",
      },
      {
        value: "Equatorial mounts",
        label: "Equatorial mounts",
        uri: "http://astrothesaurus.org/uat/468",
      },
      {
        value: "Equatorial mounts",
        label: "Equatorial mountings (Equatorial mounts)",
        uri: "http://astrothesaurus.org/uat/468",
      },
      {
        value: "Hyperbolic orbit",
        label: "Hyperbolic orbit",
        uri: "http://astrothesaurus.org/uat/773",
      },
      {
        value: "Astrospheres",
        label: "Astrospheres",
        uri: "http://astrothesaurus.org/uat/107",
      },
      {
        value: "Milky Way Galaxy",
        label: "Milky Way Galaxy",
        uri: "http://astrothesaurus.org/uat/1054",
      },
      {
        value: "Milky Way Galaxy",
        label: "Milky Way (Milky Way Galaxy)",
        uri: "http://astrothesaurus.org/uat/1054",
      },
      {
        value: "Milky Way Galaxy",
        label: "Our galaxy (Milky Way Galaxy)",
        uri: "http://astrothesaurus.org/uat/1054",
      },
      {
        value: "Milky Way Galaxy",
        label: "The Galaxy (Milky Way Galaxy)",
        uri: "http://astrothesaurus.org/uat/1054",
      },
      {
        value: "HI shells",
        label: "HI shells",
        uri: "http://astrothesaurus.org/uat/728",
      },
      {
        value: "HI shells",
        label: "H I shells (HI shells)",
        uri: "http://astrothesaurus.org/uat/728",
      },
      {
        value: "High-velocity stars",
        label: "High-velocity stars",
        uri: "http://astrothesaurus.org/uat/736",
      },
      {
        value: "High-velocity stars",
        label: "High velocity stars (High-velocity stars)",
        uri: "http://astrothesaurus.org/uat/736",
      },
      {
        value: "Solar system terrestrial planets",
        label: "Solar system terrestrial planets",
        uri: "http://astrothesaurus.org/uat/797",
      },
      {
        value: "Solar system terrestrial planets",
        label: "Terrestrial planets (Solar system terrestrial planets)",
        uri: "http://astrothesaurus.org/uat/797",
      },
      {
        value: "Solar system terrestrial planets",
        label: "Terrestrial planet (Solar system terrestrial planets)",
        uri: "http://astrothesaurus.org/uat/797",
      },
      {
        value: "Solar system terrestrial planets",
        label: "Inner planets (Solar system terrestrial planets)",
        uri: "http://astrothesaurus.org/uat/797",
      },
      {
        value: "Milky Way Galaxy fountains",
        label: "Milky Way Galaxy fountains",
        uri: "http://astrothesaurus.org/uat/1055",
      },
      {
        value: "Reissner-NordstrÃ¶m black holes",
        label: "Reissner-NordstrÃ¶m black holes",
        uri: "http://astrothesaurus.org/uat/1384",
      },
      {
        value: "Reissner-NordstrÃ¶m black holes",
        label:
          "Reissner NordstrÃ¶m black holes (Reissner-NordstrÃ¶m black holes)",
        uri: "http://astrothesaurus.org/uat/1384",
      },
      {
        value: "Reissner-NordstrÃ¶m black holes",
        label: "Reissner Nordstrom black holes (Reissner-NordstrÃ¶m black holes)",
        uri: "http://astrothesaurus.org/uat/1384",
      },
      {
        value: "Reissner-NordstrÃ¶m black holes",
        label: "Reissner-Nordstrom black holes (Reissner-NordstrÃ¶m black holes)",
        uri: "http://astrothesaurus.org/uat/1384",
      },
      {
        value: "Missing mass",
        label: "Missing mass",
        uri: "http://astrothesaurus.org/uat/1068",
      },
      {
        value: "AM Herculis stars",
        label: "AM Herculis stars",
        uri: "http://astrothesaurus.org/uat/32",
      },
      {
        value: "AM Herculis stars",
        label: "Polars (AM Herculis stars)",
        uri: "http://astrothesaurus.org/uat/32",
      },
      {
        value: "Antumbra",
        label: "Antumbra",
        uri: "http://astrothesaurus.org/uat/49",
      },
      {
        value: "Finding lists",
        label: "Finding lists",
        uri: "http://astrothesaurus.org/uat/537",
      },
      {
        value: "Selenology",
        label: "Selenology",
        uri: "http://astrothesaurus.org/uat/1441",
      },
      {
        value: "Selenology",
        label: "Lunar geology (Selenology)",
        uri: "http://astrothesaurus.org/uat/1441",
      },
      {
        value: "Selenology",
        label: "Geology of the Moon (Selenology)",
        uri: "http://astrothesaurus.org/uat/1441",
      },
      {
        value: "Selenology",
        label: "Selenodesy (Selenology)",
        uri: "http://astrothesaurus.org/uat/1441",
      },
      {
        value: "Type Ic supernovae",
        label: "Type Ic supernovae",
        uri: "http://astrothesaurus.org/uat/1730",
      },
      {
        value: "Stellar coronae",
        label: "Stellar coronae",
        uri: "http://astrothesaurus.org/uat/305",
      },
      {
        value: "Stellar coronae",
        label: "Coronas (Stellar coronae)",
        uri: "http://astrothesaurus.org/uat/305",
      },
      {
        value: "Stellar coronae",
        label: "Coronae (Stellar coronae)",
        uri: "http://astrothesaurus.org/uat/305",
      },
      {
        value: "Astronomical coordinate systems",
        label: "Astronomical coordinate systems",
        uri: "http://astrothesaurus.org/uat/82",
      },
      {
        value: "Astronomical coordinate systems",
        label: "Celestial coordinate systems (Astronomical coordinate systems)",
        uri: "http://astrothesaurus.org/uat/82",
      },
      {
        value: "Astronomical coordinate systems",
        label: "Celestial reference system (Astronomical coordinate systems)",
        uri: "http://astrothesaurus.org/uat/82",
      },
      {
        value: "Celestial objects catalogs",
        label: "Celestial objects catalogs",
        uri: "http://astrothesaurus.org/uat/212",
      },
      {
        value: "Dark matter detectors",
        label: "Dark matter detectors",
        uri: "http://astrothesaurus.org/uat/355",
      },
      {
        value: "Exoplanet surfaces",
        label: "Exoplanet surfaces",
        uri: "http://astrothesaurus.org/uat/2118",
      },
      {
        value: "Solar coronal transients",
        label: "Solar coronal transients",
        uri: "http://astrothesaurus.org/uat/312",
      },
      {
        value: "Quintessence",
        label: "Quintessence",
        uri: "http://astrothesaurus.org/uat/1323",
      },
      {
        value: "Late-type giant stars",
        label: "Late-type giant stars",
        uri: "http://astrothesaurus.org/uat/908",
      },
      {
        value: "Late-type giant stars",
        label: "Late type giant stars (Late-type giant stars)",
        uri: "http://astrothesaurus.org/uat/908",
      },
      {
        value: "Late-type giant stars",
        label: "Late-type giants (Late-type giant stars)",
        uri: "http://astrothesaurus.org/uat/908",
      },
      {
        value: "Late-type giant stars",
        label: "Cool giant stars (Late-type giant stars)",
        uri: "http://astrothesaurus.org/uat/908",
      },
      {
        value: "Ocean tides",
        label: "Ocean tides",
        uri: "http://astrothesaurus.org/uat/1152",
      },
      {
        value: "Ocean tides",
        label: "Diurnal (Ocean tides)",
        uri: "http://astrothesaurus.org/uat/1152",
      },
      {
        value: "Ocean tides",
        label: "Semi-diurnal (Ocean tides)",
        uri: "http://astrothesaurus.org/uat/1152",
      },
      {
        value: "Equatorial zone",
        label: "Equatorial zone",
        uri: "http://astrothesaurus.org/uat/469",
      },
      {
        value: "Astrometric exoplanet detection",
        label: "Astrometric exoplanet detection",
        uri: "http://astrothesaurus.org/uat/2130",
      },
      {
        value: "Astrometric exoplanet detection",
        label: "Astrometric planet detection (Astrometric exoplanet detection)",
        uri: "http://astrothesaurus.org/uat/2130",
      },
      {
        value: "Astrometric exoplanet detection",
        label:
          "Astrometric planet detection (extrasolar) (Astrometric exoplanet detection)",
        uri: "http://astrothesaurus.org/uat/2130",
      },
      {
        value: "Intergalactic dust clouds",
        label: "Intergalactic dust clouds",
        uri: "http://astrothesaurus.org/uat/810",
      },
      {
        value: "Early stellar evolution",
        label: "Early stellar evolution",
        uri: "http://astrothesaurus.org/uat/434",
      },
      {
        value: "Surface composition",
        label: "Surface composition",
        uri: "http://astrothesaurus.org/uat/2115",
      },
      {
        value: "Surface composition",
        label: "Planetary surface composition (Surface composition)",
        uri: "http://astrothesaurus.org/uat/2115",
      },
      {
        value: "Spectral line identification",
        label: "Spectral line identification",
        uri: "http://astrothesaurus.org/uat/2073",
      },
      {
        value: "Spectral line identification",
        label: "Wavelength identification (Spectral line identification)",
        uri: "http://astrothesaurus.org/uat/2073",
      },
      {
        value: "Gravitational microlensing exoplanet detection",
        label: "Gravitational microlensing exoplanet detection",
        uri: "http://astrothesaurus.org/uat/2147",
      },
      {
        value: "Gravitational microlensing exoplanet detection",
        label:
          "Gravitational microlensing planet detection (Gravitational microlensing exoplanet detection)",
        uri: "http://astrothesaurus.org/uat/2147",
      },
      {
        value: "Cloud monitors",
        label: "Cloud monitors",
        uri: "http://astrothesaurus.org/uat/257",
      },
      {
        value: "Dark adaption",
        label: "Dark adaption",
        uri: "http://astrothesaurus.org/uat/350",
      },
      {
        value: "Dark adaption",
        label: "Retinal adaption (Dark adaption)",
        uri: "http://astrothesaurus.org/uat/350",
      },
      {
        value: "Dark adaption",
        label: "Dark adaptation (Dark adaption)",
        uri: "http://astrothesaurus.org/uat/350",
      },
      {
        value: "Confidence interval",
        label: "Confidence interval",
        uri: "http://astrothesaurus.org/uat/1961",
      },
      {
        value: "Optical interferometry",
        label: "Optical interferometry",
        uri: "http://astrothesaurus.org/uat/1168",
      },
      {
        value: "Optical interferometry",
        label: "Stellar interferometry (Optical interferometry)",
        uri: "http://astrothesaurus.org/uat/1168",
      },
      {
        value: "Optical interferometry",
        label: "Light interferometry (Optical interferometry)",
        uri: "http://astrothesaurus.org/uat/1168",
      },
      {
        value: "Interstellar phases",
        label: "Interstellar phases",
        uri: "http://astrothesaurus.org/uat/850",
      },
      {
        value: "Jeans mass",
        label: "Jeans mass",
        uri: "http://astrothesaurus.org/uat/869",
      },
      {
        value: "Z Camelopardalis stars",
        label: "Z Camelopardalis stars",
        uri: "http://astrothesaurus.org/uat/1836",
      },
      {
        value: "Interacting binary stars",
        label: "Interacting binary stars",
        uri: "http://astrothesaurus.org/uat/801",
      },
      {
        value: "Core-collapse supernovae",
        label: "Core-collapse supernovae",
        uri: "http://astrothesaurus.org/uat/304",
      },
      {
        value: "Core-collapse supernovae",
        label: "Core collapse supernova (Core-collapse supernovae)",
        uri: "http://astrothesaurus.org/uat/304",
      },
      {
        value: "Core-collapse supernovae",
        label: "Core collapse supernovae (Core-collapse supernovae)",
        uri: "http://astrothesaurus.org/uat/304",
      },
      {
        value: "Core-collapse supernovae",
        label: "Core-collapse supernova (Core-collapse supernovae)",
        uri: "http://astrothesaurus.org/uat/304",
      },
      {
        value: "Stellar effective temperatures",
        label: "Stellar effective temperatures",
        uri: "http://astrothesaurus.org/uat/1597",
      },
      {
        value: "Companion galaxies",
        label: "Companion galaxies",
        uri: "http://astrothesaurus.org/uat/290",
      },
      {
        value: "Eruptive phenomena",
        label: "Eruptive phenomena",
        uri: "http://astrothesaurus.org/uat/475",
      },
      {
        value: "Theoretical techniques",
        label: "Theoretical techniques",
        uri: "http://astrothesaurus.org/uat/2093",
      },
      {
        value: "Tidal radius",
        label: "Tidal radius",
        uri: "http://astrothesaurus.org/uat/1700",
      },
      {
        value: "Interstellar plasma",
        label: "Interstellar plasma",
        uri: "http://astrothesaurus.org/uat/851",
      },
      {
        value: "Interstellar plasma",
        label: "Highly ionized interstellar gas (Interstellar plasma)",
        uri: "http://astrothesaurus.org/uat/851",
      },
      {
        value: "Interstellar plasma",
        label: "Ionized interstellar gases (Interstellar plasma)",
        uri: "http://astrothesaurus.org/uat/851",
      },
      {
        value: "Interstellar plasma",
        label: "Ionized interstellar gas (Interstellar plasma)",
        uri: "http://astrothesaurus.org/uat/851",
      },
      {
        value: "Interstellar plasma",
        label: "Highly ionised interstellar gas (Interstellar plasma)",
        uri: "http://astrothesaurus.org/uat/851",
      },
      {
        value: "Interstellar plasma",
        label: "Ionised interstellar gas (Interstellar plasma)",
        uri: "http://astrothesaurus.org/uat/851",
      },
      {
        value: "Interstellar plasma",
        label: "Ionised interstellar gases (Interstellar plasma)",
        uri: "http://astrothesaurus.org/uat/851",
      },
      {
        value: "Interstellar plasma",
        label: "Interstellar ionized gas (Interstellar plasma)",
        uri: "http://astrothesaurus.org/uat/851",
      },
      {
        value: "Sampling distribution",
        label: "Sampling distribution",
        uri: "http://astrothesaurus.org/uat/1899",
      },
      {
        value: "Shepherd satellites",
        label: "Shepherd satellites",
        uri: "http://astrothesaurus.org/uat/1451",
      },
      {
        value: "Shepherd satellites",
        label: "Shepherd moons (Shepherd satellites)",
        uri: "http://astrothesaurus.org/uat/1451",
      },
      {
        value: "Space research",
        label: "Space research",
        uri: "http://astrothesaurus.org/uat/1546",
      },
      {
        value: "Space research",
        label: "Space science (Space research)",
        uri: "http://astrothesaurus.org/uat/1546",
      },
      {
        value: "Planetary magnetospheres",
        label: "Planetary magnetospheres",
        uri: "http://astrothesaurus.org/uat/997",
      },
      {
        value: "Planetary magnetospheres",
        label: "Planetary magnetosphere (Planetary magnetospheres)",
        uri: "http://astrothesaurus.org/uat/997",
      },
      {
        value: "M subgiant stars",
        label: "M subgiant stars",
        uri: "http://astrothesaurus.org/uat/987",
      },
      {
        value: "M subgiant stars",
        label: "M-type subgiant stars (M subgiant stars)",
        uri: "http://astrothesaurus.org/uat/987",
      },
      {
        value: "M subgiant stars",
        label: "M-type subgiants (M subgiant stars)",
        uri: "http://astrothesaurus.org/uat/987",
      },
      {
        value: "M subgiant stars",
        label: "M subgiants (M subgiant stars)",
        uri: "http://astrothesaurus.org/uat/987",
      },
      {
        value: "Galaxy triplets",
        label: "Galaxy triplets",
        uri: "http://astrothesaurus.org/uat/624",
      },
      {
        value: "Galaxy triplets",
        label: "Galactic triplets (Galaxy triplets)",
        uri: "http://astrothesaurus.org/uat/624",
      },
      {
        value: "Galaxy triplets",
        label: "Galaxy triples (Galaxy triplets)",
        uri: "http://astrothesaurus.org/uat/624",
      },
      {
        value: "Solar constant",
        label: "Solar constant",
        uri: "http://astrothesaurus.org/uat/1481",
      },
      {
        value: "Circumstellar envelopes",
        label: "Circumstellar envelopes",
        uri: "http://astrothesaurus.org/uat/237",
      },
      {
        value: "Circumstellar envelopes",
        label: "Expanding circumstellar envelope (Circumstellar envelopes)",
        uri: "http://astrothesaurus.org/uat/237",
      },
      {
        value: "Circumstellar envelopes",
        label: "Stellar envelope (Circumstellar envelopes)",
        uri: "http://astrothesaurus.org/uat/237",
      },
      {
        value: "Common envelope evolution",
        label: "Common envelope evolution",
        uri: "http://astrothesaurus.org/uat/2154",
      },
      {
        value: "Common envelope evolution",
        label: "Common envelope episodes (Common envelope evolution)",
        uri: "http://astrothesaurus.org/uat/2154",
      },
      {
        value: "Statistical parallax",
        label: "Statistical parallax",
        uri: "http://astrothesaurus.org/uat/1573",
      },
      {
        value: "Protoplanetary disks",
        label: "Protoplanetary disks",
        uri: "http://astrothesaurus.org/uat/1300",
      },
      {
        value: "Protoplanetary disks",
        label: "Protoplanetary disks (Extrasolar) (Protoplanetary disks)",
        uri: "http://astrothesaurus.org/uat/1300",
      },
      {
        value: "Comparison stars",
        label: "Comparison stars",
        uri: "http://astrothesaurus.org/uat/292",
      },
      {
        value: "Penrose limit",
        label: "Penrose limit",
        uri: "http://astrothesaurus.org/uat/1203",
      },
      {
        value: "Explosive nucleosynthesis",
        label: "Explosive nucleosynthesis",
        uri: "http://astrothesaurus.org/uat/503",
      },
      {
        value: "Comet dynamics",
        label: "Comet dynamics",
        uri: "http://astrothesaurus.org/uat/2213",
      },
      {
        value: "Flat space",
        label: "Flat space",
        uri: "http://astrothesaurus.org/uat/543",
      },
      {
        value: "Stellar rotation",
        label: "Stellar rotation",
        uri: "http://astrothesaurus.org/uat/1629",
      },
      {
        value: "Exoplanet tides",
        label: "Exoplanet tides",
        uri: "http://astrothesaurus.org/uat/497",
      },
      {
        value: "Surface photometry",
        label: "Surface photometry",
        uri: "http://astrothesaurus.org/uat/1670",
      },
      {
        value: "Surface photometry",
        label: "Area photometry (Surface photometry)",
        uri: "http://astrothesaurus.org/uat/1670",
      },
      {
        value: "Radio continuum emission",
        label: "Radio continuum emission",
        uri: "http://astrothesaurus.org/uat/1340",
      },
      {
        value: "Radio continuum emission",
        label: "Radio continuum (Radio continuum emission)",
        uri: "http://astrothesaurus.org/uat/1340",
      },
      {
        value: "Dark matter",
        label: "Dark matter",
        uri: "http://astrothesaurus.org/uat/353",
      },
      {
        value: "Interplanetary dust",
        label: "Interplanetary dust",
        uri: "http://astrothesaurus.org/uat/821",
      },
      {
        value: "Interplanetary dust",
        label: "Interplanetary dust clouds (Interplanetary dust)",
        uri: "http://astrothesaurus.org/uat/821",
      },
      {
        value: "Supergranulation",
        label: "Supergranulation",
        uri: "http://astrothesaurus.org/uat/1662",
      },
      {
        value: "X-ray bursts",
        label: "X-ray bursts",
        uri: "http://astrothesaurus.org/uat/1814",
      },
      {
        value: "Einstein universe",
        label: "Einstein universe",
        uri: "http://astrothesaurus.org/uat/452",
      },
      {
        value: "Einstein universe",
        label: "Einstein static Universe (Einstein universe)",
        uri: "http://astrothesaurus.org/uat/452",
      },
      {
        value: "Radio receivers",
        label: "Radio receivers",
        uri: "http://astrothesaurus.org/uat/1355",
      },
      {
        value: "Equinox",
        label: "Equinox",
        uri: "http://astrothesaurus.org/uat/470",
      },
      {
        value: "Transient sources",
        label: "Transient sources",
        uri: "http://astrothesaurus.org/uat/1851",
      },
      {
        value: "StrÃ¶mgren photometry",
        label: "StrÃ¶mgren photometry",
        uri: "http://astrothesaurus.org/uat/1641",
      },
      {
        value: "StrÃ¶mgren photometry",
        label: "Four-color photometry (StrÃ¶mgren photometry)",
        uri: "http://astrothesaurus.org/uat/1641",
      },
      {
        value: "StrÃ¶mgren photometry",
        label: "StrÃ¶mgren photometric system (StrÃ¶mgren photometry)",
        uri: "http://astrothesaurus.org/uat/1641",
      },
      {
        value: "StrÃ¶mgren photometry",
        label: "Stromgren uvby system (StrÃ¶mgren photometry)",
        uri: "http://astrothesaurus.org/uat/1641",
      },
      {
        value: "StrÃ¶mgren photometry",
        label: "Stromgren photometry (StrÃ¶mgren photometry)",
        uri: "http://astrothesaurus.org/uat/1641",
      },
      {
        value: "StrÃ¶mgren photometry",
        label: "Uvby system (StrÃ¶mgren photometry)",
        uri: "http://astrothesaurus.org/uat/1641",
      },
      {
        value: "StrÃ¶mgren photometry",
        label: "uvbyÎ² photometric system (StrÃ¶mgren photometry)",
        uri: "http://astrothesaurus.org/uat/1641",
      },
      {
        value: "Hot Jupiters",
        label: "Hot Jupiters",
        uri: "http://astrothesaurus.org/uat/753",
      },
      {
        value: "Hot Jupiters",
        label: "Roaster planets (Hot Jupiters)",
        uri: "http://astrothesaurus.org/uat/753",
      },
      {
        value: "Hot Jupiters",
        label: "Pegasids (Hot Jupiters)",
        uri: "http://astrothesaurus.org/uat/753",
      },
      {
        value: "Hot Jupiters",
        label: "Pegasean planets (Hot Jupiters)",
        uri: "http://astrothesaurus.org/uat/753",
      },
      {
        value: "Hot Jupiters",
        label: "Epistellar jovians (Hot Jupiters)",
        uri: "http://astrothesaurus.org/uat/753",
      },
      {
        value: "Multiple stars",
        label: "Multiple stars",
        uri: "http://astrothesaurus.org/uat/1081",
      },
      {
        value: "O clusters",
        label: "O clusters",
        uri: "http://astrothesaurus.org/uat/1134",
      },
      {
        value: "O clusters",
        label: "O-clusters (O clusters)",
        uri: "http://astrothesaurus.org/uat/1134",
      },
      {
        value: "Steady-state theory",
        label: "Steady-state theory",
        uri: "http://astrothesaurus.org/uat/1574",
      },
      {
        value: "Steady-state theory",
        label: "Steady state theory (Steady-state theory)",
        uri: "http://astrothesaurus.org/uat/1574",
      },
      {
        value: "Radio quiet quasars",
        label: "Radio quiet quasars",
        uri: "http://astrothesaurus.org/uat/1354",
      },
      {
        value: "Radio quiet quasars",
        label: "Radio-quiet quasars (Radio quiet quasars)",
        uri: "http://astrothesaurus.org/uat/1354",
      },
      {
        value: "Blank fields",
        label: "Blank fields",
        uri: "http://astrothesaurus.org/uat/163",
      },
      {
        value: "Blank fields",
        label: "Blank field (Blank fields)",
        uri: "http://astrothesaurus.org/uat/163",
      },
      {
        value: "Friedmann-Robertson-Walker metric",
        label: "Friedmann-Robertson-Walker metric",
        uri: "http://astrothesaurus.org/uat/550",
      },
      {
        value: "Astronomy web services",
        label: "Astronomy web services",
        uri: "http://astrothesaurus.org/uat/1856",
      },
      {
        value: "Superbubbles",
        label: "Superbubbles",
        uri: "http://astrothesaurus.org/uat/1656",
      },
      {
        value: "Poor galaxy clusters",
        label: "Poor galaxy clusters",
        uri: "http://astrothesaurus.org/uat/2006",
      },
      {
        value: "Poor galaxy clusters",
        label: "Poor clusters (Poor galaxy clusters)",
        uri: "http://astrothesaurus.org/uat/2006",
      },
      {
        value: "Z Andromedae stars",
        label: "Z Andromedae stars",
        uri: "http://astrothesaurus.org/uat/1835",
      },
      {
        value: "Stellar types",
        label: "Stellar types",
        uri: "http://astrothesaurus.org/uat/1634",
      },
      {
        value: "Stellar types",
        label: "Stars (Stellar types)",
        uri: "http://astrothesaurus.org/uat/1634",
      },
      {
        value: "Celestial mechanics",
        label: "Celestial mechanics",
        uri: "http://astrothesaurus.org/uat/211",
      },
      {
        value: "Galaxy nuclei",
        label: "Galaxy nuclei",
        uri: "http://astrothesaurus.org/uat/609",
      },
      {
        value: "Collision processes",
        label: "Collision processes",
        uri: "http://astrothesaurus.org/uat/2065",
      },
      {
        value: "Low-mass x-ray binary stars",
        label: "Low-mass x-ray binary stars",
        uri: "http://astrothesaurus.org/uat/939",
      },
      {
        value: "Low-mass x-ray binary stars",
        label: "Low-mass X-ray binaries (Low-mass x-ray binary stars)",
        uri: "http://astrothesaurus.org/uat/939",
      },
      {
        value: "Low-mass x-ray binary stars",
        label: "LMXBs (Low-mass x-ray binary stars)",
        uri: "http://astrothesaurus.org/uat/939",
      },
      {
        value: "Low-mass x-ray binary stars",
        label: "LMXB (Low-mass x-ray binary stars)",
        uri: "http://astrothesaurus.org/uat/939",
      },
      {
        value: "Solar active region magnetic fields",
        label: "Solar active region magnetic fields",
        uri: "http://astrothesaurus.org/uat/1975",
      },
      {
        value: "Photoionization",
        label: "Photoionization",
        uri: "http://astrothesaurus.org/uat/2060",
      },
      {
        value: "Stellar evolutionary types",
        label: "Stellar evolutionary types",
        uri: "http://astrothesaurus.org/uat/2052",
      },
      {
        value: "Solar system planets",
        label: "Solar system planets",
        uri: "http://astrothesaurus.org/uat/1260",
      },
      {
        value: "Solar system planets",
        label: "Planets (Solar system planets)",
        uri: "http://astrothesaurus.org/uat/1260",
      },
      {
        value: "Solar system planets",
        label: "Planets (Solar system) (Solar system planets)",
        uri: "http://astrothesaurus.org/uat/1260",
      },
      {
        value: "CEMP stars",
        label: "CEMP stars",
        uri: "http://astrothesaurus.org/uat/2105",
      },
      {
        value: "CEMP stars",
        label: "Carbon enhanced metal poor stars (CEMP stars)",
        uri: "http://astrothesaurus.org/uat/2105",
      },
      {
        value: "Phase error",
        label: "Phase error",
        uri: "http://astrothesaurus.org/uat/1220",
      },
      {
        value: "Markarian galaxies",
        label: "Markarian galaxies",
        uri: "http://astrothesaurus.org/uat/1006",
      },
      {
        value: "Astronomical location",
        label: "Astronomical location",
        uri: "http://astrothesaurus.org/uat/85",
      },
      {
        value: "Recurrent novae",
        label: "Recurrent novae",
        uri: "http://astrothesaurus.org/uat/1366",
      },
      {
        value: "Optical bursts",
        label: "Optical bursts",
        uri: "http://astrothesaurus.org/uat/1164",
      },
      {
        value: "Optical bursts",
        label: "Outbursts (Optical bursts)",
        uri: "http://astrothesaurus.org/uat/1164",
      },
      {
        value: "Optical bursts",
        label: "Optical outbursts (Optical bursts)",
        uri: "http://astrothesaurus.org/uat/1164",
      },
      {
        value: "Astronomical seeing",
        label: "Astronomical seeing",
        uri: "http://astrothesaurus.org/uat/92",
      },
      {
        value: "Astronomical seeing",
        label: "Dome seeing (Astronomical seeing)",
        uri: "http://astrothesaurus.org/uat/92",
      },
      {
        value: "Umbra",
        label: "Umbra",
        uri: "http://astrothesaurus.org/uat/1744",
      },
      {
        value: "Ataxites",
        label: "Ataxites",
        uri: "http://astrothesaurus.org/uat/109",
      },
      {
        value: "Oef stars",
        label: "Oef stars",
        uri: "http://astrothesaurus.org/uat/1154",
      },
      {
        value: "Oef stars",
        label: "Oef-type stars (Oef stars)",
        uri: "http://astrothesaurus.org/uat/1154",
      },
      {
        value: "Ring nebulae",
        label: "Ring nebulae",
        uri: "http://astrothesaurus.org/uat/1401",
      },
      {
        value: "Ring nebulae",
        label: "Ring nebula (Ring nebulae)",
        uri: "http://astrothesaurus.org/uat/1401",
      },
      {
        value: "Interplanetary gas",
        label: "Interplanetary gas",
        uri: "http://astrothesaurus.org/uat/822",
      },
      {
        value: "Support vector machine",
        label: "Support vector machine",
        uri: "http://astrothesaurus.org/uat/1936",
      },
      {
        value: "Stellar distance",
        label: "Stellar distance",
        uri: "http://astrothesaurus.org/uat/1595",
      },
      {
        value: "Stellar distance",
        label: "Cosmic distance ladder (Stellar distance)",
        uri: "http://astrothesaurus.org/uat/1595",
      },
      {
        value: "Stellar distance",
        label: "Cosmic distance scale (Stellar distance)",
        uri: "http://astrothesaurus.org/uat/1595",
      },
      {
        value: "Stellar distance",
        label: "Extragalactic Distance Scale (Stellar distance)",
        uri: "http://astrothesaurus.org/uat/1595",
      },
      {
        value: "Solar coronal lines",
        label: "Solar coronal lines",
        uri: "http://astrothesaurus.org/uat/2038",
      },
      {
        value: "Gamma-ray transient sources",
        label: "Gamma-ray transient sources",
        uri: "http://astrothesaurus.org/uat/1853",
      },
      {
        value: "Gamma-ray transient sources",
        label: "Î³-ray transient sources (Gamma-ray transient sources)",
        uri: "http://astrothesaurus.org/uat/1853",
      },
      {
        value: "Gamma-ray transient sources",
        label: "Gamma ray transient sources (Gamma-ray transient sources)",
        uri: "http://astrothesaurus.org/uat/1853",
      },
      {
        value: "Gamma-ray transient sources",
        label: "Î³-ray transient source (Gamma-ray transient sources)",
        uri: "http://astrothesaurus.org/uat/1853",
      },
      {
        value: "Gamma-ray transient sources",
        label: "Gamma ray transient source (Gamma-ray transient sources)",
        uri: "http://astrothesaurus.org/uat/1853",
      },
      {
        value: "Gamma-ray transient sources",
        label: "Gamma-ray transient source (Gamma-ray transient sources)",
        uri: "http://astrothesaurus.org/uat/1853",
      },
      {
        value: "Exoplanet atmospheres",
        label: "Exoplanet atmospheres",
        uri: "http://astrothesaurus.org/uat/487",
      },
      {
        value: "O associations",
        label: "O associations",
        uri: "http://astrothesaurus.org/uat/1133",
      },
      {
        value: "O associations",
        label: "O-association (O associations)",
        uri: "http://astrothesaurus.org/uat/1133",
      },
      {
        value: "Ultraviolet photometry",
        label: "Ultraviolet photometry",
        uri: "http://astrothesaurus.org/uat/1740",
      },
      { value: "Jets", label: "Jets", uri: "http://astrothesaurus.org/uat/870" },
      {
        value: "Kerr black holes",
        label: "Kerr black holes",
        uri: "http://astrothesaurus.org/uat/886",
      },
      {
        value: "Algol variable stars",
        label: "Algol variable stars",
        uri: "http://astrothesaurus.org/uat/24",
      },
      {
        value: "Algol variable stars",
        label: "Beta persei stars (Algol variable stars)",
        uri: "http://astrothesaurus.org/uat/24",
      },
      {
        value: "Algol variable stars",
        label: "Algol-type variables (Algol variable stars)",
        uri: "http://astrothesaurus.org/uat/24",
      },
      {
        value: "Tropopause",
        label: "Tropopause",
        uri: "http://astrothesaurus.org/uat/1717",
      }
];
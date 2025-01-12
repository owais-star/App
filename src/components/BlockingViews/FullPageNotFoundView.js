
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import BlockingView from './BlockingView';
import * as Expensicons from '../Icon/Expensicons';
import withLocalize, {withLocalizePropTypes} from '../withLocalize';
import HeaderWithCloseButton from '../HeaderWithCloseButton';
import Navigation from '../../libs/Navigation/Navigation';
import styles from '../../styles/styles';

const propTypes = {
    /** Props to fetch translation features */
    ...withLocalizePropTypes,

    /** Child elements */
    children: PropTypes.node.isRequired,

    /** If true, child components are replaced with a blocking "not found" view */
    shouldShow: PropTypes.bool,
};

const defaultProps = {
    shouldShow: false,
};

// eslint-disable-next-line rulesdir/no-negated-variables
const FullPageNotFoundView = (props) => {
    if (props.shouldShow) {
        return (
            <>
                <HeaderWithCloseButton
                    shouldShowBackButton
                    onBackButtonPress={() => Navigation.dismissModal()}
                    onCloseButtonPress={() => Navigation.dismissModal()}
                />
                <View style={styles.flex1}>
                    <BlockingView
                        icon={Expensicons.QuestionMark}
                        title={props.translate('notFound.notHere')}
                        subtitle={props.translate('notFound.pageNotFound')}
                    />
                </View>
            </>

        );
    }

    return props.children;
};

FullPageNotFoundView.propTypes = propTypes;
FullPageNotFoundView.defaultProps = defaultProps;
FullPageNotFoundView.displayName = 'FullPageNotFoundView';

export default withLocalize(FullPageNotFoundView);

/* @flow */
import React from 'react';

import {Radio} from '@react-mdc/radio';
import {FormField} from '@react-mdc/form-field';
import {Caption, Typography} from '@react-mdc/typography';

import PageTitle from 'app/js/components/page-title';
import {Section, SectionTitle} from 'app/js/components/section';

export default class RadioExample extends React.Component {
  state: {
    group3Selected: string
  }

  state = {
    group3Selected: 'radio-1'
  }

  handleGroup3ItemChange = (evt: SyntheticInputEvent) => {
    this.setState({
      group3Selected: evt.target.value
    });
  }

  render (): React.Element<*> {
    return (
      <div>
        <PageTitle>
          Radio Examples
        </PageTitle>
        <Section>
          <SectionTitle>Radio</SectionTitle>
          <FormField>
            <Radio inputId="group-1-radio-1" name="group-1" defaultChecked />
            <label htmlFor="group-1-radio-1">
              Radio 1
            </label>
          </FormField>
          <FormField>
            <Radio inputId="group-1-radio-2" name="group-1" />
            <label htmlFor="group-1-radio-2">
              Radio 2
            </label>
          </FormField>
        </Section>
        <Section>
          <SectionTitle>Disabled Radio</SectionTitle>
          <FormField>
            <Radio inputId="group-2-radio-1" name="group-2" disabled />
            <label htmlFor="group-2-radio-1">
              Radio 1
            </label>
          </FormField>
          <FormField>
            <Radio inputId="group-2-radio-2" name="group-2" checked disabled />
            <label htmlFor="group-2-radio-2">
              Radio 2
            </label>
          </FormField>
        </Section>
        <Section>
          <SectionTitle>Radio Controlled by React State</SectionTitle>
          <Typography>
            <Caption>
              Selected: {this.state.group3Selected}
            </Caption>
          </Typography>
          <FormField>
            <Radio
              inputId="group-3-radio-1"
              name="group-3"
              value="radio-1"
              onChange={this.handleGroup3ItemChange}
              checked={this.state.group3Selected === 'radio-1'} />
            <label htmlFor="group-3-radio-1">
              Radio 1
            </label>
          </FormField>
          <FormField>
            <Radio
              inputId="group-3-radio-2"
              name="group-3"
              value="radio-2"
              onChange={this.handleGroup3ItemChange}
              checked={this.state.group3Selected === 'radio-2'} />
            <label htmlFor="group-3-radio-2">
              Radio 2
            </label>
          </FormField>
        </Section>
      </div>
    );
  }
}

import {
	INodeProperties,
} from 'n8n-workflow';

export const meetingOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'meeting',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a meeting',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a meeting',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a meeting',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Retrieve all meetings',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a meeting',
			}
		],
		default: 'create',
		description: 'The operation to perform.',
	}
] as INodeProperties[];

export const meetingFields = [
	/* -------------------------------------------------------------------------- */
	/*                                 meeting:create                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'User Id',
		name: 'userId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource: [
					'meeting',
				],
			},
		},
		description: 'User ID or email address of user.',
	},
	{
		displayName: 'Additional settings',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: [
					'create',

				],
				resource: [
					'meeting',
				],
			}
		},
		options: [
			{
				displayName: 'Meeting topic',
				name: 'topic',
				type: 'string',
				default: '',
				description: `Meeting topic.`,
			},
			{
				displayName: 'Meeting type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Instant Meeting',
						value: 1,
					},
					{
						name: 'Scheduled Meeting',
						value: 2,
					},
					{
						name: 'Recurring meeting with no fixed time',
						value: 3,
					},
					{
						name: 'Recurring meeting with no fixed time',
						value: 8,
					},

				],
				default: 2,
				description: 'Meeting type.'
			},
			{
				displayName: 'Start time',
				name: 'startTime',
				type: 'dateTime',
				default: '',
				description: 'Start time should be used only for scheduled or recurring meetings with fixed time',
			},
			{
				displayName: 'Duration',
				name: 'duration',
				type: 'number',
				default: '',
				description: 'Duration.',
			},
			{
				displayName: 'Timezone',
				name: 'timeZone',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getTimezones',
				},
				default: '',
				description: `Time zone used in the response. The default is the time zone of the calendar.`,
			},
			{
				displayName: 'Schedule for',
				name: 'scheduleFor',
				type: 'string',
				default: '',
				description: 'Schedule meeting for someone else from your account, provide their email id.',
			},
			{
				displayName: 'Password',
				name: 'password',
				type: 'string',
				default: '',
				description: 'Password to join the meeting with maximum 10 characters.',
			},
			{
				displayName: 'Agenda',
				name: 'agenda',
				type: 'string',
				default: '',
				description: 'Meeting agenda.',
			},
			{
				displayName: 'Host Meeting in China',
				name: 'cn_meeting',
				type: 'boolean',
				default: false,
				description: 'Host Meeting in China.',
			},
			{
				displayName: 'Host Meeting in India',
				name: 'in_meeting',
				type: 'boolean',
				default: false,
				description: 'Host Meeting in India.',
			},
			{
				displayName: 'Host Video',
				name: 'host_video',
				type: 'boolean',
				default: false,
				description: 'Start video when host joins the meeting.',
			},
			{
				displayName: 'Participant Video',
				name: 'participant_video',
				type: 'boolean',
				default: false,
				description: 'Start video when participant joins the meeting.',
			},
			{
				displayName: 'Join before Host',
				name: 'join_before_host',
				type: 'boolean',
				default: false,
				description: 'Allow participants to join the meeting before host starts it.',
			},
			{
				displayName: 'Muting before entry',
				name: 'mute_upon_entry',
				type: 'boolean',
				default: false,
				description: 'Mute participants upon entry.',
			},
			{
				displayName: 'Watermark',
				name: 'watermark',
				type: 'boolean',
				default: false,
				description: 'Adds watermark when viewing a shared screen.',
			},
			{
				displayName: 'Alternative Hosts',
				name: 'alternative_hosts',
				type: 'string',
				default: '',
				description: 'Alternative hosts email ids.',
			},
			{
				displayName: 'Auto recording',
				name: 'auto_recording',
				type: 'options',
				options: [
					{
						name: 'Record on local',
						value: 'local',
					},
					{
						name: 'Record on cloud',
						value: 'cloud',
					},
					{
						name: 'Disabled',
						value: 'none',
					},
				],
				default: 'none',
				description: 'Auto recording.',
			},
			{
				displayName: 'Audio',
				name: 'audio',
				type: 'options',
				options: [
					{
						name: 'Both Telephony and VoiP',
						value: 'both',
					},
					{
						name: 'Telephony',
						value: 'telephony',
					},
					{
						name: 'VOIP',
						value: 'voip',
					},

				],
				default: 'both',
				description: 'Determine how participants can join audio portion of the meeting.',
			},
			{
				displayName: 'Registration type',
				name: 'registration_type',
				type: 'options',
				options: [
					{
						name: 'Attendees register once and can attend any of the occurences',
						value: 1,
					},
					{
						name: 'Attendees need to register for every occurence',
						value: 2,
					},
					{
						name: 'Attendees register once and can choose one or more occurences to attend',
						value: 3,
					},
				],
				default: 1,
				description: 'Registration type. Used for recurring meetings with fixed time only',
			},

		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                 meeting:get                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Meeting Id',
		name: 'meetingId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'get',
				],
				resource: [
					'meeting',
				],
			},
		},
		description: 'Meeting ID.',
	},
	{
		displayName: 'Additional settings',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: [
					'get',

				],
				resource: [
					'meeting',
				],
			},
		},
		options: [
			{
				displayName: 'Occurence Id',
				name: 'occurenceId',
				type: 'string',
				default: '',
				description: 'To view meeting details of a particular occurence of the recurring meeting.',
			},
			{
				displayName: 'Show Previous Occurences',
				name: 'showPreviousOccurences',
				type: 'boolean',
				default: '',
				description: 'To view meeting details of all previous occurences of the recurring meeting.',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                 meeting:getAll                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'User Id',
		name: 'userId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'meeting',
				],
			},
		},
		description: 'User ID or email-id.',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'meeting',
				],
			},
		},
		default: false,
		description: 'If all results should be returned or only up to a given limit.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'meeting',
				],
				returnAll: [
					false,
				],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 300
		},
		default: 30,
		description: 'How many results to return.',
	},
	{
		displayName: 'Additional settings',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: [
					'getAll',

				],
				resource: [
					'meeting',
				],
			},
		},
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Scheduled',
						value: 'scheduled',
					},
					{
						name: 'Live',
						value: 'live',
					},
					{
						name: 'Upcoming',
						value: 'upcoming',
					},
				],
				default: 'live',
				description: `Meeting type.`,
			},
		]
	},
	/* -------------------------------------------------------------------------- */
	/*                                 meeting:delete                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Meeting Id',
		name: 'meetingId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'delete'
				],
				resource: [
					'meeting',
				],
			},
		},
		description: 'Meeting ID.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: [
					'delete',
				],
				resource: [
					'meeting',
				],
			},
		},
		options: [
			{
				displayName: 'Occurence Id',
				name: 'occurenceId',
				type: 'string',
				default: '',
				description: 'Meeting occurence Id.',
			},
			{
				displayName: 'Schedule a reminder',
				name: 'scheduleForReminder',
				type: 'boolean',
				default: false,
				description: 'Notify hosts and alternative hosts about meeting cancellation via email',
			},
		],

	},
	/* -------------------------------------------------------------------------- */
	/*                                 meeting:update                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Meeting Id',
		name: 'meetingId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'update',
				],
				resource: [
					'meeting',
				],
			},
		},
		description: 'Meeting ID.',
	},
	{
		displayName: 'Additional settings',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: [
					'update',
				],
				resource: [
					'meeting',
				],
			},
		},
		options: [
			{
				displayName: 'Occurence Id',
				name: 'occurenceId',
				type: 'string',
				default: '',
				description: 'Occurence ID.',
			},
			{
				displayName: 'Meeting topic',
				name: 'topic',
				type: 'string',
				default: '',
				description: `Meeting topic.`,
			},
			{
				displayName: 'Meeting type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Instant Meeting',
						value: 1,
					},
					{
						name: 'Scheduled Meeting',
						value: 2,
					},
					{
						name: 'Recurring meeting with no fixed time',
						value: 3,
					},
					{
						name: 'Recurring meeting with no fixed time',
						value: 8,
					},

				],
				default: 2,
				description: 'Meeting type.'
			},
			{
				displayName: 'Start time',
				name: 'startTime',
				type: 'dateTime',
				default: '',
				description: 'Start time should be used only for scheduled or recurring meetings with fixed time',
			},
			{
				displayName: 'Duration',
				name: 'duration',
				type: 'number',
				default: '',
				description: 'Duration.',
			},
			{
				displayName: 'Timezone',
				name: 'timeZone',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getTimezones',
				},
				default: '',
				description: `Time zone used in the response. The default is the time zone of the calendar.`,
			},
			{
				displayName: 'Schedule for',
				name: 'scheduleFor',
				type: 'string',
				default: '',
				description: 'Schedule meeting for someone else from your account, provide their email id.',
			},
			{
				displayName: 'Password',
				name: 'password',
				type: 'string',
				default: '',
				description: 'Password to join the meeting with maximum 10 characters.',
			},
			{
				displayName: 'Agenda',
				name: 'agenda',
				type: 'string',
				default: '',
				description: 'Meeting agenda.',
			},
			{
				displayName: 'Host Meeting in China',
				name: 'cn_meeting',
				type: 'boolean',
				default: false,
				description: 'Host Meeting in China.',
			},
			{
				displayName: 'Host Meeting in India',
				name: 'in_meeting',
				type: 'boolean',
				default: false,
				description: 'Host Meeting in India.',
			},
			{
				displayName: 'Host Video',
				name: 'host_video',
				type: 'boolean',
				default: false,
				description: 'Start video when host joins the meeting.',
			},
			{
				displayName: 'Participant Video',
				name: 'participant_video',
				type: 'boolean',
				default: false,
				description: 'Start video when participant joins the meeting.',
			},
			{
				displayName: 'Join before Host',
				name: 'join_before_host',
				type: 'boolean',
				default: false,
				description: 'Allow participants to join the meeting before host starts it.',
			},
			{
				displayName: 'Muting before entry',
				name: 'mute_upon_entry',
				type: 'boolean',
				default: false,
				description: 'Mute participants upon entry.',
			},
			{
				displayName: 'Watermark',
				name: 'watermark',
				type: 'boolean',
				default: false,
				description: 'Adds watermark when viewing a shared screen.',
			},
			{
				displayName: 'Alternative Hosts',
				name: 'alternative_hosts',
				type: 'string',
				default: '',
				description: 'Alternative hosts email ids.',
			},
			{
				displayName: 'Auto recording',
				name: 'auto_recording',
				type: 'options',
				options: [
					{
						name: 'Record on local',
						value: 'local',
					},
					{
						name: 'Record on cloud',
						value: 'cloud',
					},
					{
						name: 'Disabled',
						value: 'none',
					},
				],
				default: 'none',
				description: 'Auto recording.',
			},
			{
				displayName: 'Audio',
				name: 'auto_recording',
				type: 'options',
				options: [
					{
						name: 'Both Telephony and VoiP',
						value: 'both',
					},
					{
						name: 'Telephony',
						value: 'telephony',
					},
					{
						name: 'VOIP',
						value: 'voip',
					},
				],
				default: 'both',
				description: 'Determine how participants can join audio portion of the meeting.',
			},
			{
				displayName: 'Registration type',
				name: 'registration_type',
				type: 'options',
				options: [
					{
						name: 'Attendees register once and can attend any of the occurences',
						value: 1,
					},
					{
						name: 'Attendees need to register for every occurence',
						value: 2,
					},
					{
						name: 'Attendees register once and can choose one or more occurences to attend',
						value: 3,
					},
				],
				default: 1,
				description: 'Registration type. Used for recurring meetings with fixed time only',
			},
		],
	},

] as INodeProperties[];
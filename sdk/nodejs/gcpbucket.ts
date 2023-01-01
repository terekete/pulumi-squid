// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GCPBucket extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'squid:index:GCPBucket';

    /**
     * Returns true if the given object is an instance of GCPBucket.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GCPBucket {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GCPBucket.__pulumiType;
    }

    /**
     * The [GCS location](https://cloud.google.com/storage/docs/bucket-locations)
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the bucket
     */
    public readonly name!: pulumi.Output<string | undefined>;

    /**
     * Create a GCPBucket resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GCPBucketArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GCPBucket.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a GCPBucket resource.
 */
export interface GCPBucketArgs {
    /**
     * The [GCS location](https://cloud.google.com/storage/docs/bucket-locations)
     */
    location: pulumi.Input<string>;
    /**
     * The name of the bucket
     */
    name: pulumi.Input<string>;
}

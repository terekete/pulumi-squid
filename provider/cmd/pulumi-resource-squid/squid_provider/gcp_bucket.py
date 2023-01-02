import json
from typing import Optional

from pulumi import Inputs, ResourceOptions
from pulumi_gcp import storage
import pulumi


class GCPBucketArgs:

    name: pulumi.Input[str]

    @staticmethod
    def from_inputs(inputs: Inputs) -> 'GCPBucketArgs':
        return GCPBucketArgs(name=inputs['name'])

    def __init__(
        self,
        name: pulumi.Input[str]
    ) -> None:
        self.name = name


class GCPBucket(pulumi.ComponentResource):
    bucket: storage.Bucket
    name: pulumi.Output[str]

    def __init__(
        self,
        name: str,
        args: GCPBucketArgs,
        props: Optional[dict] = None,
        opts: Optional[ResourceOptions] = None,
    ) -> None:

        super().__init__("squid:index:GCPBucket", name, props, opts)

        bucket = storage.Bucket(
            resource_name=f"{name}-rn",
            name=args.name,
            opts=ResourceOptions(parent=self)
        )

        self.bucket = bucket
        self.register_outputs(
            {
                "bucket": bucket,
                "name": bucket.name
            }
        )
